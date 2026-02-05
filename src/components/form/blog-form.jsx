"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useEffect, useRef, useState } from "react"
import { Spinner } from "../ui/spinner"
import { useRouter } from "next/navigation"
import { handleCreateBlog, handleUpdateBlog } from "@/helper/client/blog.helper"
import { toast } from "sonner"
import { Switch } from "../ui/switch"
import MarkdownEditor from "@/app/test/_components/markdown-editor"

const STORAGE_KEY = "blog_draft"

const BlogForm = ({ mode = "create", initialData }) => {
  const router = useRouter()
  const fileRef = useRef(null)

  const [form, setForm] = useState(
    initialData
      ? {
          title: initialData.title ?? "",
          content: initialData.content ?? "",
          featured: initialData.featured ?? false,
        }
      : { title: "", content: "", featured: false },
  )
  const [loading, setLoading] = useState(false)
  const [banner, setBanner] = useState(null)

  useEffect(() => {
    if (mode !== "edit" || !initialData) return

    setForm({
      title: initialData.title ?? "",
      content: initialData.content ?? "",
      featured: initialData.featured ?? false,
    })
  }, [mode, initialData])

  useEffect(() => {
    if (mode === "edit") return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
  }, [form, mode])

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }
  const handleContentChange = (html) => {
    setForm((prev) => ({ ...prev, content: html }))
  }

  return (
    <form
      className='mt-5'
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("content", form.content)
        formData.append("featured", form.featured)
        if (banner) {
          formData.append("banner", banner)
        }
        if (mode === "edit") {
          formData.append("id", initialData.id)
          handleUpdateBlog(formData, router, { setLoading, toast })
        } else {
          handleCreateBlog(formData, router, { setLoading, toast })
        }
      }}
    >
      <FieldSet>
        <FieldGroup>
          <Field>
            <Input
              value={form.title}
              onChange={handleChange}
              id='title'
              placeholder='Title'
            />
          </Field>
          <Field>
            <MarkdownEditor
              value={form.content}
              onChange={handleContentChange}
            />
          </Field>
          <div className='flex items-center gap-20'>
            <Field>
              <Input
                ref={fileRef}
                id='banner'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={(e) => setBanner(e.target.files?.[0] || null)}
              />
              <Button
                type='button'
                variant='outline'
                onClick={() => fileRef.current?.click()}
              >
                Upload Banner
              </Button>
              {banner && (
                <span className='text-sm text-neutral-500 truncate max-w-50'>
                  {banner.name}
                </span>
              )}
            </Field>
            <Field>
              <div className='flex items-center space-x-2'>
                <FieldLabel htmlFor='featured'>Featured</FieldLabel>
                <Switch
                  checked={form.featured}
                  onCheckedChange={(val) =>
                    setForm((prev) => ({ ...prev, featured: val }))
                  }
                />
              </div>
            </Field>
          </div>
          <Field orientation='horizontal'>
            <Button disabled={loading}>{loading ? <Spinner /> : "Post"}</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default BlogForm
