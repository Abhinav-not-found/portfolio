import React from "react"
import { BigHeading, Heading, SmallHeading } from "../general/heading"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ReactSVG from "@/../public/svgs/react.svg"
import Image from "next/image"

const certifications = [
  {
    icon: (
      <Image
        src={ReactSVG}
        alt='React'
        width={28}
        height={28}
        className='invert-50'
      />
    ),
    title: "84 Hours of React.js Training",
    from: "@hitbullseye",
    date: "July 2023",
    href: "https://drive.google.com/file/d/1yT5cQT3kAMxr-uqAu0nMRsbcq-MxFGo3/view",
  },
]

const Certifications = () => {
  return (
    <section className='mt-20 px-4 md:px-0'>
      <Heading>
        <SmallHeading>My</SmallHeading>
        <BigHeading>Certifications</BigHeading>
      </Heading>
      <div className='mt-5'>
        {certifications.map((i) => {
          return (
            <li key={i.title} style={{ listStyle: "none" }}>
              <Element {...i} />
            </li>
          )
        })}
      </div>
    </section>
  )
}
const Element = ({ icon, title, from, date, href }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className='dark:bg-neutral-900 ring-2 ring-neutral-200 dark:ring-neutral-700/70 w-full h-16 rounded-lg p-2 flex justify-between group hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 cursor-pointer'
    >
      <div className='flex gap-4'>
        <div className='w-11 h-full bg-neutral-100 dark:bg-neutral-800 ring-1 ring-neutral-300 dark:ring-neutral-700 rounded-md flex justify-center items-center'>
          {icon}
        </div>
        <div className='leading-5'>
          <h3 className='group-hover:underline underline-offset-3 text-lg'>
            {title}
          </h3>
          <div className='flex gap-2'>
            <p className='text-muted-foreground'>{from}</p>
            <p className='text-muted-foreground'>{date}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <ArrowRight className='size-4 mr-4 -rotate-45 text-muted-foreground group-hover:rotate-0 transition-all' />
      </div>
    </Link>
  )
}

export default Certifications
