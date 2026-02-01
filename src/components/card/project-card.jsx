import Link from "next/link"
import { Badge } from "../ui/badge"
import Image from "next/image"
import { Eye, Github } from "lucide-react"

const techIcons = {
  "next.js": "/svgs/nextjs.svg",
  react: "/svgs/react.svg",
  node: "/svgs/node.svg",
  tailwind: "/svgs/tailwind.svg",
  mongodb: "/svgs/mongodb.svg",
}

const ProjectCard = ({ data }) => {
  const latest = data?.latest || false
  return (
    <div className='size-78 md:size-82 bg-neutral-100/60 dark:bg-neutral-900 rounded-md p-2  border-neutral-200/50 dark:border-neutral-700 hover:shadow-md group'>
      <div className='bg-neutral-200/50 dark:bg-neutral-700 w-full h-36 rounded-md relative border border-neutral-200'>
        <LinkElement href={`${data?.github}`} right='right-2'>
          <Github className='size-4' />
        </LinkElement>
        <LinkElement href={`${data?.live}`} right='right-12'>
          <Eye className='size-4' />
        </LinkElement>
        {data?.thumbnail && (
          <Image
            src={data?.thumbnail}
            alt={data?.title || "Blog banner"}
            fill
            priority
            className='object-cover rounded-md dark:brightness-90'
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

const LinkElement = ({ children, href, right }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className={`w-8 h-12 border bg-white dark:bg-neutral-200 absolute ${right} bottom-0 group-hover:-bottom-7 transition-all rounded-b-xl cursor-pointer hover:-bottom-10 flex justify-center items-end pb-1 text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-black`}
    >
      {children}
    </Link>
  )
}

export default ProjectCard
