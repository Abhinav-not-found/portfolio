"use client"

import dynamic from "next/dynamic"
import MarkdownIt from "markdown-it"
import "react-markdown-editor-lite/lib/index.css"

// Prevent SSR (required)
const MdEditor = dynamic(
  () => import("react-markdown-editor-lite"),
  { ssr: false }
)

const mdParser = new MarkdownIt()

export default function MarkdownEditor({ value, onChange }) {
  return (
    <MdEditor
      value={value}
      style={{ height: "60vh"}}
      renderHTML={(text) => mdParser.render(text)}
      onChange={({ text }) => onChange(text)}
      placeholder="Write your blog content here..."
    />
  )
}
