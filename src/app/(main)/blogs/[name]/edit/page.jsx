import BlogForm from "@/components/form/blog-form"
import { getBlogBySlug } from "@/helper/server/blog/get-blog-by-slug"
import { notFound } from "next/navigation"

const page = async ({ params }) => {
  const param = await params
  const data = await getBlogBySlug(param?.name)
  if (!data) notFound()

  return (
    <main className='mt-18'>
      <h1 className='text-4xl font-bold mb-6'>Edit Blog</h1>
      <BlogForm
        mode='edit'
        initialData={{
          id: data._id.toString(),
          title: data.title,
          content: data.content,
          featured: data.featured,
          banner: data.banner,
        }}
      />
    </main>
  )
}

export default page
