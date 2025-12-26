import BlogCard from "@/components/card/blog-card"
import Header from "@/components/general/header"
import PrivateRoute from "@/components/routes/private-route"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

// maybe add draft feature, when pressed back button, it will save as a draft somewhere(in database maybe)

const AdminBlog = () => {
  return (
    <PrivateRoute>
      <div className='flex justify-between items-center'>
        <Header>Manage blogs</Header>
        <Link href={"/admin/blogs/new"}>
          <Button>
            <Plus />
            Write
          </Button>
        </Link>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-4'>
        <BlogCard title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium' />
        <BlogCard title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium' />
        <BlogCard title='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium' />
      </div>
    </PrivateRoute>
  )
}

export default AdminBlog
