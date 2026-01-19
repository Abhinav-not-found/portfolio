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

const CreateProjectForm = () => {
  const [form, setForm] = useState({ title: "", desc: "" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        switch (data.code) {
          case "FIELDS_REQUIRED":
          case "PASSWORD_TOO_SHORT":
          case "EMAIL_ALREADY_REGISTERED":
          case "VALIDATION_ERROR":
          case "ACCOUNT_BANNED":
          case "REGISTER_DISABLED":
            toast.error(data.message)
            break
          default:
            toast.error(data.message || "Something went wrong")
        }
        return
      }
      toast.success(data.message)
      router.push("/admin/projects")
      router.refresh()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <FieldSet>
        <Field>
          <FieldLabel htmlFor='title'>Title</FieldLabel>
          <Input
            value={form.title}
            onChange={handleChange}
            id='title'
            type={"text"}
            placeholder=''
          />
        </Field>
        <Field>
          <FieldLabel htmlFor='desc'>Description</FieldLabel>
          <Textarea value={form.desc} onChange={handleChange} id='desc' />
        </Field>
        {/* <div className='grid grid-cols-2 gap-4'>
          <Field>
            <FieldLabel htmlFor='techstack'>TechStack</FieldLabel>
          </Field>
          <Field>
            <FieldLabel htmlFor='thumbnail'>Thumbnail</FieldLabel>
            <Input
              id='thumbnail'
              type={"file"}
              placeholder='JohnDoe@gmail.com'
            />
          </Field>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Field>
            <FieldLabel htmlFor='live'>Live</FieldLabel>
            <Input id='live' type={"text"} placeholder='' />
          </Field>
          <Field>
            <FieldLabel htmlFor='github'>Github</FieldLabel>
            <Input id='github' type={"text"} placeholder='' />
          </Field>
        </div>
        <div className='grid grid-cols-5'>
          <Field>
            <div className='flex items-center space-x-2'>
              <FieldLabel htmlFor='featured'>Featured</FieldLabel>
              <Switch />
            </div>
          </Field>
          <Field>
            <div className='flex items-center space-x-2'>
              <FieldLabel htmlFor='latest'>Latest</FieldLabel>
              <Switch />
            </div>
          </Field>
        </div> */}

        {/* <Field>
          <FieldLabel htmlFor='content'>Content</FieldLabel>
        </Field> */}

        <Field>
          <Button
            type='submit'
            className={"py-5 font-semibold "}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner />
              </>
            ) : (
              "Create Project"
            )}
          </Button>
        </Field>
      </FieldSet>
    </form>
  )
}

export default CreateProjectForm
