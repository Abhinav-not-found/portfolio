"use client"
import { formatDate } from "@/lib/formate-date"
import { useRouter } from "next/navigation"
import React from "react"

const BlogCard = ({ data }) => {
  // console.log(data)
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/blogs/${data.slug}`)}
      className='w-82 h-66 border rounded-md p-3 cursor-pointer'
    >
      <div
        className='w-full h-40 bg-neutral-100 dark:bg-neutral-800 rounded-md opacity-90'
        style={{
          backgroundImage: `url('${data.banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className='mt-4 text-lg font-medium first-letter:uppercase'>
        {data.title}
      </h1>
      <p className='text-muted-foreground mt-2 tracking-tight'>{formatDate(data.createdAt)}</p>
    </div>
  )
}

export default BlogCard
