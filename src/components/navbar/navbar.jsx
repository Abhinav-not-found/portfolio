import React from "react"
import Logo from "../navbar/logo"
import NavLinks from "../navbar/nav-links"
import { ModeToggle } from "../ui/mode-toggle"

const Navbar = () => {
  return (
    <header className='h-18 flex items-center justify-between'>
      <Logo />
      <div className='flex items-center gap-2'>
        {/* <NavLinks /> */}
        <ModeToggle />
      </div>
    </header>
  )
}

export default Navbar
