"use client"

import { profilePictures } from "@/lib/misc"
import Image from "next/image"
import React, { useEffect, useState } from "react"

// make the picture background change in dark mode
// add sound of camera when clicked

const ProfilePic = () => {
  

  const [index, setIndex] = useState(0)

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % profilePictures.length)
  }

  // pre-load the pictures
  useEffect(() => {
    profilePictures.forEach((pic) => {
      const img = new window.Image()
      img.src = pic
    })
  }, [])

  return (
    <div
      className='mt-10 cursor-pointer inline-block z-50'
      onClick={handleClick}
    >
      <Image
        src={profilePictures[index]}
        alt='profile_pic'
        width={130}
        height={130}
        className='rounded-full dark:brightness-90 select-none'
        priority
      />
    </div>
  )
}

export default ProfilePic
