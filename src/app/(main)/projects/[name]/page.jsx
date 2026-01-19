import { Button } from "@/components/ui/button"
import { Eye, Github } from "lucide-react"

const page = async ({ params }) => {
  // const name = await params
  // console.log(name.name)
  return (
    <main className='pt-20'>
      <div className='w-full h-80 bg-neutral-100 dark:bg-neutral-900 rounded-md'></div>
      <div className='mt-5'>
        <h1 className='text-5xl font-semibold'>Title</h1>
        <p className='text-lg mt-2 text-muted-foreground'>description</p>
      </div>
      <div className='mt-5 flex gap-2'>
        <Button>
          <Eye />
          Live
        </Button>
        <Button variant='outline'>
          <Github />
          Github
        </Button>
      </div>
    </main>
  )
}

export default page
