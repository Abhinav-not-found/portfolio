import Project from "@/model/project.model"
import { connectDB } from "@/lib/db"

export const getAllProjects = async () => {
  await connectDB()

  return Project.find().lean()
}
