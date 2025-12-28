"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Spinner } from "../ui/spinner"
import { handleContactSubmit } from "@/helper/contact.helper"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <form
      className='mt-10'
      onSubmit={(e) =>
        handleContactSubmit(e, name, email, message, { setLoading })
      }
    >
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='John Doe'
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              placeholder='johnDoe@gmail.com'
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='message'>Message</FieldLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='say hello'
              id='message'
              className={"h-32"}
            />
          </Field>
          <Field orientation='horizontal'>
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
  )
}

export default ContactForm
