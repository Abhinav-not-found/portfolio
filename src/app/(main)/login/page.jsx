import LoginForm from "@/components/general/login-form"
import PublicRoute from "@/components/routes/public-route"
import React from "react"

export const metadata = {
  title: "Login | Full-Stack Developer Portfolio",
  description: "Secure login page for accessing admin or private features.",
  robots: "noindex",
}

const Login = () => {
  return (
    <PublicRoute className='mt-8 h-[60vh] '>
      <p className='text-center text-muted-foreground text-2xl pt-20'>
        Oh no 😨, You are not suppose to see this page 😆
      </p>
      <div className='max-w-lg mx-auto mt-20'>
        <LoginForm />
      </div>
    </PublicRoute>
  )
}

export default Login
