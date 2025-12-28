import Header from "@/components/general/header"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

const Contact = () => {
  return (
    <main className=''>
      <Header>Contact</Header>
      <form className='mt-10'>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='name'>Name</FieldLabel>
              <Input id='name' placeholder='John Doe' />
            </Field>
            <Field>
              <FieldLabel htmlFor='email'>Email</FieldLabel>
              <Input id='email' placeholder='johnDoe@gmail.com' />
            </Field>
            <Field>
              <FieldLabel htmlFor='message'>Message</FieldLabel>
              <Textarea
                placeholder='say hello'
                id='message'
                className={"h-32"}
              />
            </Field>
            <Field orientation='horizontal'>
              <Button>Submit</Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </main>
  )
}

export default Contact
