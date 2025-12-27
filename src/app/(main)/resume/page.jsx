import React from "react"

const Resume = () => {
  return (
    <main className='h-screen'>
      <iframe
        src='/pdf/resume.pdf'
        title='Resume'
        className='w-full h-full border-none'
      />
    </main>
  )
}

export default Resume
