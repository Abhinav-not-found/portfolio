

export const loginFormCode = `
"use client"
import React, { useState } from "react"
import { Input } from "../ui/input"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"
import { handleSubmit } from "@/helper/client/auth.helper"

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <form
      className="mt-10"
      onSubmit={(e) => handleSubmit(e, { setLoading, router }, email, password)}
    >
      {/* form content */}
    </form>
  )
}

export default LoginForm
`
