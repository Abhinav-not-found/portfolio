import React from "react"
import { Button } from "../ui/button"
import { Copy } from "lucide-react"
import { Geist_Mono } from "next/font/google"

const geist_Mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const CommandBlock = () => {
  return (
    <div className='px-5 py-3 bg-neutral-800 dark:bg-neutral-800/50 text-white rounded-lg mt-4 dark:border border-neutral-700/50 flex justify-between items-center'>
      <p className={`text-green-400 text-sm ${geist_Mono.className}`}>
        <span className='text-blue-300'>npx</span> shadcn@latest add button
      </p>
      <Button
        variant='ghost'
        className={
          "hover:bg-neutral-700  dark:hover:bg-neutral-800 hover:text-white"
        }
      >
        <Copy className='size-3.5' />
      </Button>
    </div>
  )
}

export default CommandBlock
