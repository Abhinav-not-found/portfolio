"use client"
import React, { useState } from "react"
import { Input } from "../ui/input"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        // handle invalid credentials here
        return
      }

      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className='mt-10' onSubmit={(e) => handleSubmit(e)}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              type={"text"}
              placeholder='JohnDoe@gmail.com'
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='password'>Password</FieldLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type={"password"}
              placeholder='••••••'
            />
          </Field>
          <Field>
            <Button type='submit' className={"py-5 font-semibold "}>
              Login
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default LoginForm
