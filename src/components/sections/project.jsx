import { getAllProjects } from "@/helper/server/project/get-all-projects"
import ProjectCard from "../card/project-card"
import { BigHeading, Heading, SmallHeading } from "../general/heading"

const Project = async () => {
  const data = await getAllProjects()
  const featuredProjects = data?.filter((project) => project.featured === true)
  return (
    <section className='mt-20 px-1'>
      <Heading>
        <SmallHeading>Latest</SmallHeading>
        <BigHeading>Projects</BigHeading>
      </Heading>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-2 mt-6 '>
        {featuredProjects.map((item, index) => {
          return <ProjectCard key={index} data={item} />
        })}
      </div>
    </section>
  )
}

export default Project
