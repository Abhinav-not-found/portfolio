

export const loginFormCode = `
"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { handleSubmit } from "@/helper/client/auth.helper"

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <form
      className='mt-10'
      onSubmit={(e) => handleSubmit(e, { setLoading, router }, email, password)}
    >
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

export default LoginForm

`

export const registerFormCode = `
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

`

export const buttonCode = `import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const variants = {
  default: "bg-neutral-900 text-white hover:bg-neutral-700",
  ghost: "text-black hover:bg-neutral-100",
  outline: "text-black border border-neutral-400 hover:bg-neutral-100",
  disabled: "bg-neutral-400 text-white cursor-no-drop",
}
const sizes = {
  default: "py-2 px-3 text-sm",
  sm: "py-2 px-3 text-xs",
  icon: "size-10 flex items-center justify-center",
}

const Button = ({
  children,
  disabled,
  className,
  onClick,
  type = "button",
  variant = "default",
  size = "default",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        clsx(
          "rounded-lg cursor-pointer active:scale-97 font-normal tracking-normal",
          variants[variant],
          sizes[size],
          className,
        ),
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
`
