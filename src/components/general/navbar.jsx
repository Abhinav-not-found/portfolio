import React from "react"
import Logo from "../navbar/logo"
import NavLinks from "../navbar/nav-links"

const Navbar = () => {
  return (
    <header className='h-18 flex items-center justify-between'>
      <Logo/>
      <div>
        <NavLinks/>
      </div>
    </header>
  )
}

export default Navbar
