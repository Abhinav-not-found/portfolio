import Link from "next/link"
import React from "react"

// change this to /dashboard when cookies are detected

const Logo = () => {
  return (
    <Link href={"/"} className='font-bold font-inter text-xl select-none tracking-tighter'>
      AK
    </Link>
  )
}

export default Logo
