import { getBlogBySlug } from "@/helper/server/blog/get-blog-by-slug"
import React from "react"

const page = async ({ params }) => {
  const param = await params

  const data = await getBlogBySlug(param.name)
  return (
    <main className='mt-18'>
      <div
        className='w-full bg-neutral-100 dark:bg-neutral-900 h-80 rounded-lg'
        style={{
          backgroundImage: `url('${data.banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className='mt-10'>
        <h1 className='text-4xl font-semibold first-letter:uppercase'>
          {data.title}
        </h1>
      </div>
      <div
        className='prose prose-neutral dark:prose-invert max-w-none mt-8 blog-content'
        dangerouslySetInnerHTML={{ __html: data?.content }}
      />
    </main>
  )
}

export default page
