import React from "react"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"
import ProjectCard from "@/components/card/project-card"
import { getAllProjects } from "@/helper/server/project/get-all-projects"

const page = async () => {
  const data = await getAllProjects()

  return (
    <PublicRoute className={"mt-18 min-h-screen"}>
      <Header>Projects</Header>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-4 mt-4'>
        {data.map((item, index) => {
          return <ProjectCard key={index} data={item} />
        })}
      </div>
    </PublicRoute>
  )
}

export default page

export const metadata = {
  title: "Projects - Abhinav Kumar",
  description:
    "A curated list of projects built with Next.js, React, Node.js, and MongoDB.",
  keywords: [
    "projects",
    "web development",
    "javascript",
    "next.js",
    "node.js",
    "programming",
  ],
  openGraph: {
    title: "Projects - Abhinav Kumar",
    description:
      "A curated list of projects built with Next.js, React, Node.js, and MongoDB.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Abhinav Kumar",
    description:
      "A curated list of projects built with Next.js, React, Node.js, and MongoDB.",
  },
}
