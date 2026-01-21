"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import All from "./all"
import Template from "./template"
import Section from "./section"
import Component from "./component"

const BlocksContent = () => {
  const [active, setActive] = useState("All")

  const TABS = ["All",
     "Template", "Section", "Component"
    ]

  const CONTENT_MAP = {
    All: <All />,
    Template: <Template />,
    Section: <Section />,
    Component: <Component />,
  }

  return (
    <div>
      <div className='mt-4 flex gap-2'>
        {TABS.map((i) => {
          return <Btn name={i} active={active} setActive={setActive} key={i} />
        })}
      </div>

      <div className='mt-4'>{CONTENT_MAP[active]}</div>
    </div>
  )
}

const Btn = ({ name, active, setActive }) => {
  return (
    <Button
      variant={active === name ? "default" : "ghost"}
      onClick={() => setActive(name)}
      size='sm'
    >
      {name}
    </Button>
  )
}

export default BlocksContent
