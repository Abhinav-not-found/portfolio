"use client"
import React from "react"
import { BigHeading, Heading, SmallHeading } from "../general/heading"
import Image from "next/image"
import { techStack } from "@/lib/misc"

// add tooltip
// change nextjs icon to white, when in dark mode

const TechStack = () => {
  return (
    <section className='mt-20'>
      <Heading>
        <SmallHeading>Tech</SmallHeading>
        <BigHeading>Stack</BigHeading>
      </Heading>

      <div className='grid grid-cols-7 gap-6 mt-6 select-none'>
        {techStack.map((tech) => (
          <Item key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  )
}

const Item = ({ name, src }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image src={src} alt={name} width={40} height={40} priority={true} />
    </div>
  )
}

export default TechStack
