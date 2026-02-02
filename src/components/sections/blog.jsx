import { getAllBlogs } from "@/helper/server/blog/get-all-blogs"
import React from "react"
import { BigHeading, Heading, SmallHeading } from "../general/heading"
import BlogCard from "../card/blog-card"

const Blog = async () => {
  const data = await getAllBlogs()
  const featuredBlogs = data?.filter((blog) => blog.featured === true)

  if (featuredBlogs.length === 0) return null

  return (
    <section className='mt-20 px-1'>
      <Heading>
        <SmallHeading>Latest</SmallHeading>
        <BigHeading>Blogs</BigHeading>
      </Heading>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-2 mt-6 '>
        {featuredBlogs.map((item, index) => {
          return <BlogCard key={index} data={item} />
        })}
      </div>
    </section>
  )
}

export default Blog
