"use client"

import { useState } from "react"
import MarkdownEditor from "./_components/markdown-editor"
import MarkdownRenderer from "./_components/markdown-renderer"

export default function Page() {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Later → send to backend
    console.log("Markdown to save:", content)

    await new Promise((r) => setTimeout(r, 500))
    setIsSubmitting(false)
  }

  return (
    <main className='p-6 space-y-6'>
      <MarkdownEditor value={content} onChange={setContent} />

      {/* <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className='px-4 py-2 rounded-lg bg-neutral-900 text-white disabled:opacity-50'
      >
        {isSubmitting ? "Saving..." : "Save blog"}
      </button> */}

      <div className='border rounded-lg p-4'>
        <MarkdownRenderer content={content || "_Nothing to preview yet_"} />
      </div>
    </main>
  )
}
