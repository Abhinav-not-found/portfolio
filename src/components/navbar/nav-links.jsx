"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  return (
    <nav className='text-sm flex gap-4'>
      <Links>projects</Links>
      <Links>components</Links>
      <Links>blogs</Links>
    </nav>
  )
}

const Links = ({ children }) => {
  const path = usePathname()
  const href = `/${children}`
  const isActive = path === href

  return (
    <Link
      href={href}
      className={`cursor-pointer underline-offset-2 transition-colors first-letter:uppercase ${
        isActive
          ? "text-black dark:text-white underline"
          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:underline"
      }`}
    >
      {children}
    </Link>
  )
}

export default NavLinks
