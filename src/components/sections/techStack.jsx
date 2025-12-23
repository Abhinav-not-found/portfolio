"use client"
import React from "react"
import { BigHeading, Heading, SmallHeading } from "../general/heading"
import Image from "next/image"
import { techStack } from "@/lib/misc"

// add tooltip

const TechStack = () => {
  return (
    <section className='mt-18'>
      <Heading>
        <SmallHeading>Tech</SmallHeading>
        <BigHeading>Stack</BigHeading>
      </Heading>

      <div className='grid grid-cols-7 gap-6 mt-6'>
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
      <Image src={src} alt={name} width={40} height={40} priority={false} />
    </div>
  )
}

export default TechStack
