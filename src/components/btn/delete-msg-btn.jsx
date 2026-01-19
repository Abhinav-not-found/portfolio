"use client"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { Trash } from "lucide-react"
import { handleDelete } from "@/helper/client/contact.helper"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"

const DeleteMsgBtn = ({ data }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <Button
      onClick={() => handleDelete({ router, data, setLoading })}
      variant='ghost'
    >
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <Trash />
      )}
    </Button>
  )
}

export default DeleteMsgBtn
