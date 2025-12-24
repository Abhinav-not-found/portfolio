import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const LoginForm = () => {
  return (
    <form className='mt-10'>
      <Label>Email</Label>
      <Input type={'text'}/>
      <Label>password</Label>
      <Input type={'text'}/>
    </form>
  )
}

export default LoginForm
