"use client"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"
import { Spinner } from "../ui/spinner"
import { useRouter } from "next/navigation"
import { handleLogout } from "@/helper/auth.helper"

const LogoutBtn = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  return (
    <Button
      onClick={() => handleLogout({ setLoading, router })}
      size='sm'
      variant='ghost'
    >
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
