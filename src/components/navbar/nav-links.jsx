"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  const [links, setLinks] = useState([])
  const getLinks = async () => {
    try {
      const res = await fetch("/api/navlink", {
        method: "GET",
      })
      const data = await res.json()
      if (res.ok) {
        setLinks(data.links)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLinks()
  }, [])
  return (
    <nav className='text-sm flex gap-4'>
      {links.map((i) => {
        return <Links key={i.name} href={i.link} label={i.name} />
      })}
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
