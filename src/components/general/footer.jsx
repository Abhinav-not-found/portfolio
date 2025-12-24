import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className='mt-18 h-32 flex items-center justify-center'>
      <div className='text-muted-foreground text-center text-sm'>
        <p>
          Inspired by ramx.in & Developed by{" "}
          <Link
            href={"/login"}
            className='underline hover:text-black underline-offset-2'
          >
            Abhinav Kumar
          </Link>
        </p>
        <p>@2025. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
