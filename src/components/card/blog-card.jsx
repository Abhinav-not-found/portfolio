"use client"
import { useRouter } from "next/navigation"
import React from "react"

const BlogCard = ({ title }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push("/blog/title")}
      className='w-82 h-80 border rounded-md p-3 cursor-pointer'
    >
      <div className='w-full h-40 bg-neutral-100 dark:bg-neutral-800 rounded-md'></div>
      <h1 className='mt-4 text-lg font-medium'>{title}</h1>
      <p className='text-muted-foreground mt-2'>Date</p>
    </div>
  )
}

export default BlogCard
