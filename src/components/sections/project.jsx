import { ProjectCard } from "@/app/(main)/projects/page"
import React from "react"
import { BigHeading, Heading, SmallHeading } from "../general/heading"

const Project = () => {
  return (
    <section className='mt-20'>
      <Heading>
        <SmallHeading>Latest</SmallHeading>
        <BigHeading>Projects</BigHeading>
      </Heading>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-2 mt-6'>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default Project
