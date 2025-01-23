import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, Users, DockIcon, Download } from 'lucide-react';
import ApiService from '../Services/Api';
import { usePDF } from 'react-to-pdf'


const UserManagementTable = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [usersList, setUsersList] = useState(null);
  const {toPDF , targetRef} = usePDF();



  const filteredUsers = useMemo(() => {

    return usersList ? usersList?.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];
  }, [usersList, searchTerm]);

  const fetchUsers = async () => {
    try {
      const response = await ApiService.fetchUsers();
      setUsersList(response);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);






  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 sm:px-8">

      <div className="flex justify-between items-center py-4">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search by name or company"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <Filter size={20} />
        </button>
        <button onClick={() => toPDF(targetRef)}  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <Download size={20} />
        </button>
      </div>

      <div ref={targetRef} className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left">ID</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left">City</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Email</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers?.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.id}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.address.city}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.company.name}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUsers.length)} of {filteredUsers.length} entries
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredUsers.length}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementTable;