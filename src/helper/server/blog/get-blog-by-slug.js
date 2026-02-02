import { connectDB } from "@/lib/db"
import Blog from "@/model/blog.model"

export const getBlogBySlug = async(slug)=>{
  await connectDB()
  return Blog.findOne({ slug: slug }).lean()
}
