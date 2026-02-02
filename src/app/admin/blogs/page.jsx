import BlogCard from "@/components/card/blog-card"
import { BigHeading, Heading } from "@/components/general/heading"
import PrivateRoute from "@/components/routes/private-route"
import { Button } from "@/components/ui/button"
import { getAllBlogs } from "@/helper/server/blog/get-all-blogs"
import { Plus } from "lucide-react"
import Link from "next/link"

// maybe add draft feature, when pressed back button, it will save as a draft somewhere(in database maybe)

const AdminBlog = async () => {
  const data = await getAllBlogs()
  // console.log(data)

  return (
    <PrivateRoute>
      <div className='flex justify-between items-center'>
        <Heading>
          <BigHeading>Blog</BigHeading>Management
        </Heading>
        <Link href={"/admin/blogs/new"}>
          <Button>
            <Plus />
            Write
          </Button>
        </Link>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-4'>
        {data && data.length > 0 ? (
          data.map((blog) => <BlogCard key={blog._id} data={blog} />)
        ) : (
          <div className='col-span-2 text-center'>No blogs found.</div>
        )}
      </div>
    </PrivateRoute>
  )
}

export default AdminBlog
