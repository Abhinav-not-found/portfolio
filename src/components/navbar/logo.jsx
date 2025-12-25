import { cookies } from "next/headers"
import Link from "next/link"
import React from "react"

export default async function Logo() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return (
    <Link
      href={token ? "/admin/dashboard" : "/"}
      className='font-bold font-inter text-xl select-none tracking-tighter'
    >
      AK
    </Link>
  )
}
