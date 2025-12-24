import React from 'react'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function PrivateRoute ({children}){
  const cookieStore = await cookies()
  const token = cookieStore.get("token")
  if (!token) {
    redirect("/")
  }
  return (
    <main>
      {children}
    </main>
  )
}

