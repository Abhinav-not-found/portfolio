import React from "react"
import AdminNavbar from "../navbar/admin-navbar"

const AdminContainer = ({ children }) => {
  return (
    <div className='max-w-2xl mx-auto h-screen'>
      <AdminNavbar />
      {children}
    </div>
  )
}

export default AdminContainer
