import Link from "next/link"
import { Badge } from "../ui/badge"
import Image from "next/image"

const techIcons = {
  "next.js": "/svgs/nextjs.svg",
  react: "/svgs/react.svg",
  node: "/svgs/node.svg",
  tailwind: "/svgs/tailwind.svg",
  mongodb: "/svgs/mongodb.svg",
}

const ProjectCard = ({ data }) => {
  const latest = data?.latest || false
  console.log(data)
  return (
    <div className='w-82 h-90 bg-neutral-50 dark:bg-neutral-900 rounded-md p-3'>
      <div className='bg-neutral-100 dark:bg-neutral-800 w-full h-36 rounded-md relative'>
        {data?.thumbnail && (
          <Image
            src={data?.thumbnail}
            alt={data?.title || "Blog banner"}
            fill
            priority
            className='object-cover rounded-t-md dark:brightness-90'
          />
        )}

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
          href={`/projects/${data?.slug}`}
          className='text-xl font-medium tracking-tight mt-2 hover:underline underline-offset-2 first-letter:uppercase'
        >
          {data?.title || "Title"}
        </Link>
        <p className='text-sm text-muted-foreground mt-2 leading-6'>
          {data?.desc ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quis eum inventore voluptas harum perspiciatis ipsum"}
        </p>
        <div className='mt-4 flex gap-2'>
          {data?.techStack.map((item, index) => {
            const icon = techIcons[item.toLowerCase()]
            return icon ? (
              <Image key={index} src={icon} alt={item} width={25} height={25} />
            ) : (
              <p key={index}>{item}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
