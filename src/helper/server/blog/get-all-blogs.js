import { connectDB } from "@/lib/db"
import Blog from "@/model/blog.model"

export const getAllBlogs = async()=>{
  await connectDB()
  const blogs = await Blog.find().lean()
  
    return  JSON.parse(JSON.stringify(blogs))
}
