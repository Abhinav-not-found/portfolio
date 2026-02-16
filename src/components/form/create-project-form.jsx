"use client"
import { Field, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Spinner } from "../ui/spinner"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import {
  handleCreateProject,
  handleUpdateProject,
} from "@/helper/client/project.helper"
import MarkdownEditor from "@/app/test/_components/markdown-editor"

const TECH_OPTIONS = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "TypeScript",
]

const CreateProjectForm = ({ mode, initialData }) => {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    desc: initialData?.desc || "",
    content: initialData?.content || "",
    techstack: initialData?.techstack || [],
    github: initialData?.github || "",
    live: initialData?.live || "",
    featured: initialData?.featured || false,
    latest: initialData?.latest || false,
  })

  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleContentChange = (html) => {
    setForm((prev) => ({ ...prev, content: html }))
  }

  const toggleTech = (tech) => {
    setForm((prev) => ({
      ...prev,
      techstack: prev.techstack.includes(tech)
        ? prev.techstack.filter((t) => t !== tech)
        : [...prev.techstack, tech],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (mode === "create") {
      await handleCreateProject(e, form, thumbnail, toast, router, {
        setLoading,
      })
    }

    if (mode === "edit" && initialData?.id) {
      await handleUpdateProject(
        initialData.id,
        form,
        thumbnail,
        toast,
        router,
        { setLoading },
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldSet>
        <Field>
          <FieldLabel htmlFor='title'>Title</FieldLabel>
          <Input
            value={form.title}
            onChange={handleInputChange}
            id='title'
            type={"text"}
            placeholder=''
          />
        </Field>
        <Field>
          <FieldLabel htmlFor='desc'>Description</FieldLabel>
          <Textarea value={form.desc} onChange={handleInputChange} id='desc' />
        </Field>

        <div className='grid grid-cols-2 gap-4'>
          <Field>
            <FieldLabel>Tech Stack</FieldLabel>
            <div className='grid grid-cols-2 gap-2 mt-2'>
              {TECH_OPTIONS.map((tech) => (
                <label
                  key={tech}
                  className='flex items-center gap-2 cursor-pointer text-sm'
                >
                  <input
                    type='checkbox'
                    checked={form.techstack.includes(tech)}
                    onChange={() => toggleTech(tech)}
                    className='accent-black'
                  />
                  {tech}
                </label>
              ))}
            </div>
          </Field>

          <div>
            <Field>
              <FieldLabel htmlFor='thumbnail'>Thumbnail</FieldLabel>
              <Input
                id='thumbnail'
                type={"file"}
                accept='image/*'
                onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
              />
            </Field>
            <div className='grid grid-cols-3 mt-6'>
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
              <Field>
                <div className='flex items-center space-x-2'>
                  <FieldLabel htmlFor='latest'>Latest</FieldLabel>
                  <Switch
                    checked={form.latest}
                    onCheckedChange={(val) =>
                      setForm((prev) => ({ ...prev, latest: val }))
                    }
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <Field>
            <FieldLabel htmlFor='live'>Live</FieldLabel>
            <Input
              value={form.live}
              onChange={handleInputChange}
              id='live'
              type={"text"}
              placeholder=''
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='github'>Github</FieldLabel>
            <Input
              value={form.github}
              onChange={handleInputChange}
              id='github'
              type={"text"}
              placeholder=''
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor='content'>Content</FieldLabel>
          <MarkdownEditor value={form.content} onChange={handleContentChange} />
        </Field>

        <Field>
          <Button
            type='submit'
            className={"py-5 font-semibold "}
            disabled={loading}
          >
            {loading ? (
              <Spinner />
            ) : mode === "create" ? (
              "Create Project"
            ) : (
              "Update Project"
            )}
          </Button>
        </Field>
      </FieldSet>
    </form>
  )
}

export default CreateProjectForm
