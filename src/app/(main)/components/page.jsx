import React from 'react'
import Header from '@/components/general/header'
import PublicRoute from '@/components/routes/public-route'

const page = () => {
  return (
    <PublicRoute>
      <Header>Components</Header>
    </PublicRoute>
  )
}

export default page
