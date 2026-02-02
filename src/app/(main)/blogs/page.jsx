import BlogCard from "@/components/card/blog-card"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"
import { getAllBlogs } from "@/helper/server/blog/get-all-blogs"
import React from "react"

const page = async () => {
  const data = await getAllBlogs()

  return (
    <PublicRoute className={"mt-18 h-screen"}>
      <Header>Blogs</Header>
      <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-4'>
        {data && data.length > 0 ? (
          data.map((blog) => <BlogCard key={blog._id} data={blog} />)
        ) : (
          <div className='col-span-2 text-center'>No blogs found.</div>
        )}
      </div>
    </PublicRoute>
  )
}

export default page
