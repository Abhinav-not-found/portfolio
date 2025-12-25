import React from "react"
import { Links } from "./nav-links"

const AdminNavLinks = () => {
  return (
    <nav className='text-sm flex gap-4'>
      <Links href='/admin/projects' label='projects' />
      <Links href='/admin/components' label='components' />
      <Links href='/admin/blogs' label='blogs' />
      <Links href='/admin/navLinks' label='Navlinks' />
    </nav>
  )
}

export default AdminNavLinks
