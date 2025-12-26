import React from "react"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"

const page = () => {
  return (
    <PublicRoute>
      <Header>Projects</Header>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-4 mt-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </PublicRoute>
  )
}

export const ProjectCard = () => {
  return (
    <div className='w-82 h-80 bg-neutral-100 dark:bg-neutral-800 rounded-md' />
  )
}
export default page
