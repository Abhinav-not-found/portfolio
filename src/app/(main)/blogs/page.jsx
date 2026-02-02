import BlogCard from "@/components/card/blog-card"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"
import { getAllBlogs } from "@/helper/server/blog/get-all-blogs"

const page = async () => {
  const data = await getAllBlogs()

  return (
    <PublicRoute className={"mt-18 min-h-screen"}>
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

export const metadata = {
  title: "Blogs - Abhinav Kumar",
  description:
    "Read the latest blogs on web development, Node.js, Next.js, and building real-world projects.",
  keywords: [
    "blogs",
    "web development",
    "javascript",
    "next.js",
    "node.js",
    "programming",
  ],
  openGraph: {
    title: "Blogs - Abhinav Kumar ",
    description:
      "Latest blogs on web development, JavaScript, and modern frameworks.",
    url: "/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - Abhinav Kumar",
    description:
      "Latest blogs on web development, JavaScript, and modern frameworks.",
  },
}
