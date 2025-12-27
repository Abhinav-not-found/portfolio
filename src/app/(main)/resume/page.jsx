import Header from "@/components/general/header"
import React from "react"

const Resume = () => {
  return (
    <main className='h-screen'>
      <Header>
        Resume
      </Header>
      <iframe
        src='/pdf/resume.pdf'
        title='Resume'
        className='w-full h-full border-none mt-10'
      />
    </main>
  )
}

export default Resume
