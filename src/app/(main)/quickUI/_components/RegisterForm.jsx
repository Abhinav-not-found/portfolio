"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { handleSubmit } from "@/helper/client/auth.helper"

const RegisterForm = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <form
      className='mt-10'
      onSubmit={(e) =>
        handleSubmit(e, { setLoading, router }, name, email, password)
      }
    >
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              type={"text"}
              placeholder='JohnDoe'
            />
          </Field>
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
              {loading ? (
                <>
                  <Spinner />
                </>
              ) : (
                "Login"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default RegisterForm
