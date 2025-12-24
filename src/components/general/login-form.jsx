"use client"
import React, { useState } from "react"
import { Input } from "../ui/input"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Button } from "../ui/button"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      
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
