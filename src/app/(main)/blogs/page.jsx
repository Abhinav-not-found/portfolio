import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"
import React from "react"

const page = () => {
  return (
    <PublicRoute>
      <Header>Blogs</Header>
    </PublicRoute>
  )
}

export default page
