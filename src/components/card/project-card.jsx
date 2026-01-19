import Link from "next/link"
import { Badge } from "../ui/badge"

const ProjectCard = ({ latest = false }) => {
  return (
    <div className='w-82 h-90 bg-neutral-50 dark:bg-neutral-900 rounded-md p-3'>
      <div className='bg-neutral-100 dark:bg-neutral-800 w-full h-36 rounded-md relative'>
        {latest && (
          <Badge
            variant={"outline"}
            className={
              "absolute top-2 right-2 font-normal text-green-500 dark:text-green-700 border-green-500 dark:border-green-700"
            }
          >
            Latest
          </Badge>
        )}
      </div>
      <div className='p-1 mt-2'>
        <Link
          href={"/projects/name"}
          className='text-xl font-medium tracking-tight mt-2 hover:underline underline-offset-2'
        >
          Thought Space
        </Link>
        <p className='text-sm text-muted-foreground mt-2 leading-5'>
          Thought Space is a modern blogging platform for writing, publishing,
          and sharing ideas with a clean UI, developer-focused experience.
        </p>
        <div className='mt-2'>
          <p>techstack</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
