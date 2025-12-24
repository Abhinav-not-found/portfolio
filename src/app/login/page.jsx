import LoginForm from "@/components/general/login-form"
import React from "react"

const Login = () => {
  return (
    <main className='mt-8'>
      <p className='text-center text-muted-foreground text-2xl'>
        Oh no, You are not suppose to see this page 😆
      </p>
      <div className='max-w-lg mx-auto'>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
