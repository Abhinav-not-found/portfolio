"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./menu-bar"

const Tiptap = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    id: "content",
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <>
      <MenuBar editor={editor} />

      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
