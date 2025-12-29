"use client"
import { socials } from "@/lib/misc"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import ProfilePic from "../general/profile-picture"
import { motion, useAnimation } from "motion/react"
import Image from "next/image"

const Hero = () => {
  const controls = useAnimation()
  return (
    <section className='w-full h-full space-y-12 relative'>
      <ProfilePic />
      <div className='text-4xl font-inter font-semibold space-y-2 tracking-tighter relative selection:bg-neutral-800 dark:selection:bg-neutral-200 selection:text-white dark:selection:text-black'>
        <h1 className=''>Hi, I'm Abhinav Kumar</h1>
        <h1 className='text-5xl bg-neutral-400/70 dark:bg-neutral-300/70 bg-clip-text text-transparent'>
          A fullstack web developer.
        </h1>
        {/* <h1 className='bg-linear-to-b from-orange-500 via-neutral-200/80 via-60% to-green-600 bg-clip-text text-transparent'>
          India
        </h1> */}
        <h1 className='text-neutral-200 text-3xl dark:text-neutral-700'>
          // Based in India
        </h1>
      </div>

      <motion.div
        animate={controls}
        className='size-20 absolute top-15 -z-10 left-6 origin-bottom-left rounded-full'
      >
        <Image
          src={"/images/tech/nextjs.png"}
          fill
          alt='nextjs'
          className='object-contain rotate-45'
        />
      </motion.div>

      <div className='selection:bg-neutral-800 dark:selection:bg-neutral-200 selection:text-white dark:selection:text-black'>
        <p className='text-muted-foreground text-xl font-poppins'>
          I build interactive web apps using MERN stack. With focus on attention
          to detail. Enthusiastic about{" "}
          <motion.span
            onHoverStart={() => controls.start({ rotate: -90 })}
            onHoverEnd={() => controls.start({ rotate: 0 })}
            className='inline-block'
          >
            Next.js
          </motion.span>
          , driven by solving problems that improves user experience .{" "}
        </p>
      </div>
      <div className=' flex justify-between items-center'>
        <SocialLinks />
        <div className='flex gap-4 select-none'>
          <Link href={"/resume"}>
            <Button
              size='sm'
              variant='outline'
              className={
                "hover:shadow-xs  hover:shadow-neutral-600 dark:hover:shadow-white inset-shadow-2xs transition-all"
              }
            >
              Resume
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button size='sm' className={"hover:shadow-brand hover:scale-101"}>
              Get in touch
            </Button>
          </Link>
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
          className='hover:text-black dark:hover:text-white hover:scale-110 transition-all'
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}

export default Hero
