import React from "react"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"
import ProjectCard from "@/components/card/project-card"

const page = () => {
  return (
    <PublicRoute className={'mt-18 h-screen'}>
      <Header>Projects</Header>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-4 mt-4'>
        <ProjectCard latest />
      </div>
    </PublicRoute>
  )
}


export default page
