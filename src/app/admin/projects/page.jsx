import { BigHeading, Heading } from "@/components/general/heading"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

const AdminProject = () => {
  return (
    <main>
      <div className='flex justify-between items-center'>
        <Heading>
          <BigHeading>Project</BigHeading>Management
        </Heading>
        <Link href={"/admin/projects/create"}>
          <Button>
            <Plus />
            Create
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default AdminProject
