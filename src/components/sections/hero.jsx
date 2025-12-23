"use client"
import { socials } from "@/lib/misc"
import React from "react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <section className='w-full h-full space-y-12'>
      <div className='text-4xl font-inter font-semibold space-y-2 mt-4 tracking-tighter relative'>
        <h1 className=' '>Hi, I'm Abhinav Kumar</h1>
        <h1 className='text-muted-foreground text-5xl '>
          A fullstack web developer.
        </h1>
      </div>
      <div className=''>
        <p className='text-muted-foreground text-2xl font-poppins'>
          I build interactive web apps using MERN stack. With focus on attention
          to detail . Enthusiastic about Next.js, driven by solving problems
          that improves user experience .{" "}
        </p>
      </div>
      <div className=' flex justify-between items-center'>
        <SocialLinks />
        <div className='flex gap-4'>
          <Button size='sm' variant='outline'>
            Resume
          </Button>
          <Button size='sm'>Get in touch</Button>
        </div>
      </div>
    </section>
  )
}

const SocialLinks = () => {
  return (
    <div className='flex gap-4 text-muted-foreground'>
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={label}
          className='hover:text-black dark:hover:text-white transition'
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}

export default Hero
