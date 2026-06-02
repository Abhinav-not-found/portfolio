"use client"
import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

function ComponentShowcase({ title, code, children }) {
  const [activeTab, setActiveTab] = useState("preview")
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className='rounded-xl overflow-hidden'>
      <div className='flex items-center justify-between p-4'>
        <h2 className='font-semibold text-xl'>{title}</h2>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <div className='flex gap-2 px-1 py-1 border border-dashed rounded-md bg-neutral-50'>
          <Button
            size='sm'
            variant={activeTab === "preview" ? "default" : "outline"}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </Button>

          <Button
            size='sm'
            variant={activeTab === "code" ? "default" : "outline"}
            onClick={() => setActiveTab("code")}
          >
            Code
          </Button>
        </div>
        <Button size='sm' variant='outline' onClick={copyCode}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </div>

      {activeTab === "preview" ? (
        <div className='p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl'>
          <div className='bg-white dark:bg-black p-4 rounded-xl'>
            {children}
          </div>
        </div>
      ) : (
        <pre className='overflow-x-auto p-6 text-sm'>
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}

export default ComponentShowcase
