import PrivateRoute from "@/components/routes/private-route"
import React from "react"

// dashboard home page = statistics like how many users visited etc....

export default async function Dashboard() {
  return <PrivateRoute>Dashboard page</PrivateRoute>
}
