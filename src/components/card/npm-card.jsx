"use client"

import { useRouter } from "next/navigation"

const NpmCard = ({ data }) => {
  const router = useRouter()
  return (
    <div className='h-30 lg:h-22 w-full py-2 select-none'>
      <h2
        onClick={() => router.push(`/npm/${data?.slug}`)}
        className='font-semibold text-lg md:text-2xl hover:underline underline-offset-2 cursor-pointer'
      >
        @ak-mern/backend
      </h2>
      <p className='text-muted-foreground text-sm md:text-base lg:text-base first-letter:uppercase mt-1'>
        a cli to generate node express backend boilerplate with completed jwt
        auth
      </p>
      <div className='flex gap-2 mt-1 md:mt-2'>
        <Badge>node</Badge>
        <Badge>express</Badge>
        <Badge>backend</Badge>
      </div>
    </div>
  )
}

export default NpmCard

const Badge = ({ children }) => {
  return (
    <p className='text-xs p-1 bg-neutral-50 dark:bg-neutral-900 text-muted-foreground rounded-sm first-letter:uppercase'>
      {children}
    </p>
  )
}
