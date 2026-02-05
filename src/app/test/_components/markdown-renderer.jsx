"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function MarkdownRenderer({ content }) {
  return (
    <div
      className={`
        prose prose-neutral dark:prose-invert max-w-none
        prose-p:text-lg prose-h1:font-medium prose-h2:font-medium prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-xl prose-p:text-neutral-500
        prose-li:ml-4
        prose-img:rounded-lg prose-img:mx-auto prose-img:max-w-full
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-code:text-sm prose-code:font-mono prose-code:font-semibold
        underline-offset-2 
        ${roboto.className}
      `}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src = "", alt = "" }) => (
            <Image
              src={src}
              alt={alt}
              width={400}
              height={400}
              className='rounded-lg mx-auto my-6'
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
