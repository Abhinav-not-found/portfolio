"use client"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"
import { Spinner } from "../ui/spinner"
import { useRouter } from "next/navigation"

// put handleLogout in another file and import from there

const LogoutBtn = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleLogout = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
      if (res.ok) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button onClick={handleLogout} size='sm' variant='ghost'>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <LogOut />
          Logout
        </>
      )}
    </Button>
  )
}

export default LogoutBtn
