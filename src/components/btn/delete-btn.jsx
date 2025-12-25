"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"

const DeleteBtn = ({ id }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!id) return
    setLoading(true)
    try {
      const res = await fetch("/api/navlink", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })

      if (!res.ok) {
        throw new Error("Failed to delete")
      }
      router.refresh()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleDelete} variant='ghost' disabled={loading}>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <Trash size={16} />
      )}
    </Button>
  )
}

export default DeleteBtn
