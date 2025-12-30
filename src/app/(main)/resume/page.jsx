import Header from "@/components/general/header"
import Link from "next/link"
import React from "react"

export const metadata = {
  title: "Resume | Full-Stack Developer",
  description:
    "View and download the resume of Abhinav Kumar, full-stack web developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Resume | Full-Stack Developer",
    description: "Download the full-stack developer resume of Abhinav Kumar.",
    url: "https://yourdomain.com/resume",
    siteName: "Abhinav Kumar",
    type: "website",
  },
}

const Resume = () => {
  return (
    <main className='mx-auto max-w-7xl px-4 pt-20 pb-8'>
      <Header>Resume</Header>

      {/* Mobile-friendly fallback */}
      <div className='mt-6 flex flex-col gap-4 md:hidden '>
        <p className='text-sm text-muted-foreground'>
          If the resume does not load properly on your device, you can download
          it below.
        </p>

        <Link
          href='/pdf/resume.pdf'
          target='_blank'
          rel='noopener'
          className='w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted'
        >
          Download Resume (PDF)
        </Link>
      </div>

      {/* Desktop iframe */}
      <div className='mt-6 '>
        <iframe
          src='/pdf/resume.pdf'
          title='Resume PDF'
          loading='lazy'
          className='h-[80vh] w-full rounded-md border'
        />
      </div>
    </main>
  )
}

export default Resume
