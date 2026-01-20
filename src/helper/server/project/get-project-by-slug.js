import { connectDB } from "@/lib/db"
import Project from "@/model/project.model"

export const getProjectBySlug = async (slug) => {
  await connectDB()
  return Project.findOne({ slug: slug }).lean()
}
