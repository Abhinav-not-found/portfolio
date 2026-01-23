"use client"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Eye, SquareTerminal } from "lucide-react"
import { useState } from "react"

const BtnGrp = () => {
  const [active, setActive] = useState("preview")

  return (
    <>
      <ButtonGroup className='mt-4'>
        <Btn code='preview' active={active} setActive={setActive}>
          <Eye />
          Preview
        </Btn>
        <Btn code='code' active={active} setActive={setActive}>
          <SquareTerminal />
          Code
        </Btn>
      </ButtonGroup>

      <div className='mt-4 border rounded-lg w-full h-72'>
        {active === "preview" ? "preview" : "code"}
      </div>
    </>
  )
}

const Btn = ({ code, active, setActive, children }) => {
  const isActive = active === code

  return (
    <Button
      onClick={() => setActive(code)}
      variant={isActive ? "default" : "outline"}
      className={
        isActive
          ? "text-black dark:text-white bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-200"
          : "text-muted-foreground"
      }
    >
      {children}
    </Button>
  )
}

export default BtnGrp
