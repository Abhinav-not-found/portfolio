import { Button } from "@/components/ui/button"
import { getProjectBySlug } from "@/helper/server/project/get-project-by-slug"
import { Eye, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = async ({ params }) => {
  const name = await params

  const data = await getProjectBySlug(name.name)

  console.log(data)
  return (
    <main className='pt-20'>
      <div className='w-full h-80 bg-neutral-100 dark:bg-neutral-900 rounded-md relative border border-neutral-300'>
        {data?.thumbnail && (
          <Image
            src={data?.thumbnail}
            alt={data?.title || "Blog banner"}
            fill
            priority
            className='object-cover dark:brightness-90 rounded-md'
          />
        )}
      </div>
      <div className='mt-5'>
        <h1 className='text-5xl font-semibold tracking-tight'>{data?.title}</h1>
        <p className='text-lg mt-4 text-muted-foreground'>{data?.desc}</p>
      </div>
      <div className='mt-5 flex gap-2'>
        <Link href={`${data?.live}`} target='_blank'>
          <Button>
            <Eye />
            Live
          </Button>
        </Link>
        <Link href={`${data?.github}`} target='_blank'>
          <Button variant='outline'>
            <Github />
            Github
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default page
