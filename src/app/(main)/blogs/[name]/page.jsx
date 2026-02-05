import MarkdownRenderer from "@/app/test/_components/markdown-renderer"
import { Button } from "@/components/ui/button"
import { getBlogBySlug } from "@/helper/server/blog/get-blog-by-slug"
import { cookies } from "next/headers"
import Link from "next/link"
import { notFound } from "next/navigation"

const page = async ({ params }) => {
  const param = await params

  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  const data = await getBlogBySlug(param?.name)
  if (!data) notFound()

  return (
    <main className='mt-18 px-2 md:px-0'>
      <div
        className='w-full h-40 md:h-80 bg-neutral-100 dark:bg-neutral-900 rounded-lg dark:brightness-90'
        style={{
          backgroundImage: `url('${data?.banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className='mt-5 md:mt-10 flex flex-col'>
        <h1 className='text-2xl md:text-5xl font-bold first-letter:uppercase'>
          {data?.title}
        </h1>
        <div className='flex gap-2 justify-end'>
          {token && (
            <>
              <Button>Delete Blog</Button>
              <Link href={`/blogs/${data?.slug}/edit`}>
                <Button>Edit Blog</Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className='mt-5 md:mt-10'>
        <MarkdownRenderer
          content={data.content || "_Nothing to preview yet_"}
        />
      </div>
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

  const siteUrl = "https://www.abhinav-kumar.in/"
  const plainTextContent = blog.content.replace(/<[^>]+>/g, "").slice(0, 160)
  return {
    title: `${blog.title}`,
    description: plainTextContent,
    alternates: {
      canonical: `${siteUrl}/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: plainTextContent,
      url: `${siteUrl}/blogs/${blog.slug}`,
      images: [
        {
          url: blog.banner.startsWith("http")
            ? blog.banner
            : `${siteUrl}${blog.banner}`,
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
