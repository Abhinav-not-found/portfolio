"use client"

import Image from "next/image"
import React, { useState } from "react"

// make the picture background change in dark mode

const ProfilePic = () => {
  const profilePictures = [
    "profile",
    "profile2",
    "profile3",
    "profile4",
    "profile5",
    "profile6",
    "profile7",
    "profile8",
    "profile9",
    "profile10",
    "profile11",
  ]

  const [index, setIndex] = useState(0)

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % profilePictures.length)
  }

  return (
    <div className='mt-10 cursor-pointer' onClick={handleClick}>
      <Image
        src={`/images/profile/${profilePictures[index]}.jpg`}
        alt='profile_pic'
        width={120}
        height={120}
        className='rounded-full dark:brightness-90'
        priority
      />
    </div>
  )
}

export default ProfilePic
