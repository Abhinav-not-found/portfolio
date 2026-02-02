import { getBlogBySlug } from "@/helper/server/blog/get-blog-by-slug"
import { notFound } from "next/navigation"

const page = async ({ params }) => {
  const param = await params

  const data = await getBlogBySlug(param?.name)
  if (!data) notFound()

  console.log(data)
  return (
    <main className='mt-18'>
      <div
        className='w-full bg-neutral-100 dark:bg-neutral-900 h-80 rounded-lg dark:brightness-90'
        style={{
          backgroundImage: `url('${data?.banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className='mt-10'>
        <h1 className='text-5xl font-bold first-letter:uppercase'>
          {data?.title}
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

export async function generateMetadata({ params }) {
  const param = await params
  const blog = await getBlogBySlug(param.name)

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog does not exist.",
    }
  }

  const plainTextContent = blog.content.replace(/<[^>]+>/g, "").slice(0, 160)

  return {
    title: `${blog.title}`,
    description: plainTextContent,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: plainTextContent,
      images: [
        {
          url: blog.banner,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: plainTextContent,
      images: [blog.banner],
    },
  }
}
