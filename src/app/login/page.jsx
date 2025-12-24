import LoginForm from "@/components/general/login-form"
import React from "react"

const Login = () => {
  return (
    <main className='mt-8 h-[60vh]'>
      <p className='text-center text-muted-foreground text-2xl'>
        Oh no 😨, You are not suppose to see this page 😆
      </p>
      <div className='max-w-lg mx-auto mt-20'>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
