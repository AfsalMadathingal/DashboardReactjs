import React, { useState } from 'react';
import { LayoutDashboard, ClipboardList, Users, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, text: 'Dashboard' },
        { icon: <ClipboardList size={20} />, text: 'Task Management' },
        { icon: <Users size={20} />, text: 'User Management' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between fixed w-full top-0 z-50">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 className="text-xl font-semibold">Admin Portal</h1>
                </div>
                <div className="text-lg font-medium">{currentPage}</div>
            </nav>
            <aside className={`
        fixed left-0 top-0 pt-16 h-full bg-white shadow-lg transition-transform duration-300 z-40
        lg:translate-x-0 lg:w-64 
        ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}`}>
                <div className="p-4">
                    {menuItems.map(({ icon, text }) => (
                        <button
                            key={text}
                            onClick={() => {
                                setCurrentPage(text);
                                setSidebarOpen(false);
                            }}
                            className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2
                hover:bg-blue-50 transition-colors duration-200
                ${currentPage === text ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}
              `}
                        >
                            {icon}
                            <span>{text}</span>
                        </button>
                    ))}
                </div>
            </aside>
            <main className="lg:ml-64 pt-16 p-4">
                {children}
            </main>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default Layout;