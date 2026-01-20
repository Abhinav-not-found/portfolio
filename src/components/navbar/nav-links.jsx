"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  return (
    <nav className="text-sm flex gap-4">
      <Links href="/projects" label="projects" />
      <Links href="/blocks" label="blocks" />
      {/* <Links href="/blogs" label="blogs" /> */}
    </nav>
  )
}

export const Links = ({ href, label }) => {
  const path = usePathname()
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
      {label}
    </Link>
  )
}

export default NavLinks
