"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  return (
    <nav className='flex flex-col md:flex-row gap-4 mt-8 md:mt-0'>
      <Links href='/projects' label='projects' />
      {/* <Links href="/blocks" label="blocks" /> */}
      <Links href='/blogs' label='blogs' />
      <Links href='/npm' label='npm' />
      <Links href='/tools' label='tools' />
      <Links href='/quickUI' label='quickUI' />
    </nav>
  )
}

export const Links = ({ href, label }) => {
  const path = usePathname()
  const isActive = path === href

  return (
    <Link
      href={href}
      className={`cursor-pointer text-2xl md:text-sm underline-offset-2 transition-colors first-letter:uppercase ${
        isActive
          ? "text-black dark:text-white underline"
          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:underline"
      }`}
    >
      {label}
    </Link>
  )
}

export default NavLinks
