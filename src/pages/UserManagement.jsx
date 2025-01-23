import React, { useContext } from 'react'
import Layout from '../components/Navbar'
import UserManagementTable from '../components/UsersTable'



const UserManagement = () => {




  return (
    <>
      <Layout>
        <UserManagementTable  />
      </Layout>

    </>
  )
}

export default UserManagement
