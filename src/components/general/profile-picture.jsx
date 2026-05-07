"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

// make the picture background change in dark mode
// add sound of camera when clicked

const ProfilePic = () => {
  const profilePictures = [
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile2.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile3.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile4.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile5.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile6.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile7.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile8.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile9.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile10.jpg",
    "https://ik.imagekit.io/nya4chyes/Portfolio/Profile%20Picture/profile11.jpg",
  ]

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
