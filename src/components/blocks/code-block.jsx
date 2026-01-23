import React from "react"
import { Geist_Mono } from "next/font/google"

const geist_Mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})
const CodeBlock = ({ text }) => {
  return (
    <div className='px-5 py-4 bg-neutral-100 dark:bg-neutral-800/50 text-white rounded-lg mt-4 dark:border border-neutral-700/50 flex justify-between items-center'>
      <p
        className={`text-sm text-black dark:text-white ${geist_Mono.className}`}
      >
        {text.split(" ").map((i, index) => {
          return (
            <span key={index} className='mr-1.5'>
              {i}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default CodeBlock
