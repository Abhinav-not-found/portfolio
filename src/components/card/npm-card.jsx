"use client"

import { useRouter } from "next/navigation"

const NpmCard = ({ data }) => {
  const router = useRouter()
  return (
    <div className='h-30 lg:h-22 w-full py-2 select-none'>
      <h2
        onClick={() => router.push(`/npm/${encodeURIComponent(data?.slug)}`)}
        className='font-semibold text-lg md:text-2xl hover:underline underline-offset-2 cursor-pointer'
      >
        {data?.title || "title"}
      </h2>
      <p className='text-muted-foreground text-sm md:text-base lg:text-base first-letter:uppercase mt-1'>
        {data?.desc || "desc"}
      </p>
      <div className='flex gap-2 mt-1 md:mt-2'>
        {data?.badge.map((b) => {
          return <Badge key={b}>{b}</Badge>
        })}
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
