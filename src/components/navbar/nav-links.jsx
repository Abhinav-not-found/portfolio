import Link from "next/link"
import React from "react"

const NavLinks = () => {
  return (
    <nav className='text-sm flex gap-4'>
      <Links>Projects</Links>
      <Links>Components</Links>
      <Links>Blog</Links>
    </nav>
  )
}

const Links = ({ children }) => {
  return (
    <Link
      href={children}
      className='cursor-pointer text-black hover:underline underline-offset-2'
    >
      {children}
    </Link>
  )
}

export default NavLinks
