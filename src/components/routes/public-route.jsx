import React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function PublicRoute({ children, className }) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")
  if (token) {
    redirect("/admin/dashboard")
  }
  return <main className={className}>{children}</main>
}
