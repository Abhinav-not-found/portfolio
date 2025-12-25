import React from "react"
import Logo from "./logo"
import { ModeToggle } from "../ui/mode-toggle"
import AdminNavLinks from "./admin-nav-links"
import LogoutBtn from "../btn/logout-btn"


const AdminNavbar = () => {
  return (
    <header className='h-18 flex items-center justify-between'>
      <Logo />
      <div className='flex items-center gap-2'>
        <AdminNavLinks />
        <ModeToggle />
        <LogoutBtn/>
      </div>
    </header>
  )
}

export default AdminNavbar
