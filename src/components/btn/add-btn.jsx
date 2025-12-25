"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { Spinner } from "../ui/spinner"

const AddBtn = () => {
  const [sameAsName, setSameAsName] = useState(true)
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' variant='ghost'>
          <Plus />
          Add
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add item</DialogTitle>

          <form onSubmit={(e) => handleSubmit(e)}>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor='name'>Name</FieldLabel>
                  <Input
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div className='flex gap-2 items-center mt-2'>
                    <Checkbox
                      checked={sameAsName}
                      onCheckedChange={(v) => setSameAsName(Boolean(v))}
                    />
                    <Label>Link same as name</Label>
                  </div>

                  {!sameAsName && (
                    <>
                      <FieldLabel htmlFor='href'>Link</FieldLabel>
                      <Input
                        id='link'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                      />
                    </>
                  )}
                </Field>

                <Field orientation='horizontal' className={"flex justify-end"}>
                  <Button type='submit'>
                    {loading ? (
                      <>
                        <Spinner />
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AddBtn
