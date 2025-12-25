import PrivateRoute from "@/components/routes/private-route"
import React from "react"
// add new navbar to this page
// logout feature/button
// all the links of navbar should be GET from backend

// links to page where we manage content, components, blogs, projects
// dashboard home page = statistics like how many users visited etc....

export default async function Dashboard() {
  return <PrivateRoute>
    Dashboard page
  </PrivateRoute>
}
