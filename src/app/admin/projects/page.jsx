'use client'
import ProjectCard from "@/components/card/project-card"
import { BigHeading, Heading } from "@/components/general/heading"
import PrivateRoute from "@/components/routes/private-route"
import { Button } from "@/components/ui/button"
import { getAllProjects } from "@/helper/server/project/get-all-projects"
import { Plus } from "lucide-react"
import Link from "next/link"

const AdminProject = async () => {
  const data = await getAllProjects()

  return (
    <PrivateRoute>
      <div className='flex justify-between items-center'>
        <Heading>
          <BigHeading>Project</BigHeading>Management
        </Heading>
        <Link href={"/admin/projects/create"}>
          <Button>
            <Plus />
            Create
          </Button>
        </Link>
      </div>

      <div className='mt-5'>
        {data.map((item, index) => {
          return <ProjectCard key={index} data={item} />
        })}
      </div>
    </PrivateRoute>
  )
}

export default AdminProject
