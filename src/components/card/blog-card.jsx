"use client"
import { formatDate } from "@/lib/formate-date"
import { useRouter } from "next/navigation"
import React from "react"

const BlogCard = ({ data }) => {
  // console.log(data)
  const router = useRouter()

  return (
    <div className='w-82 h-64 border rounded-md p-3 hover:bg-neutral-50 hover:shadow-md'>
      <div
        className='w-full h-40 bg-neutral-100 dark:bg-neutral-800 rounded-md opacity-90'
        style={{
          backgroundImage: `url('${data.banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1
        onClick={() => router.push(`/blogs/${data.slug}`)}
        className='mt-4 text-xl font-medium first-letter:uppercase hover:underline underline-offset-2 cursor-pointer tracking-tight'
      >
        {data.title}
      </h1>
      <p className='text-muted-foreground text-xs mt-2 tracking-tight'>
        {formatDate(data.createdAt)}
      </p>
    </div>
  )
}

export default BlogCard
