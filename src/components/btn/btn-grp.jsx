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
        <Button
          onClick={() => setActive("preview")}
          variant={active === "preview" ? "default" : "outline"}
          className={
            active === "preview"
              ? "text-white dark:text-white "
              : "text-muted-foreground"
          }
        >
          <Eye />
          Preview
        </Button>

        <Button
          onClick={() => setActive("code")}
          variant={active === "code" ? "default" : "outline"}
          className={
            active === "code"
              ? "text-white dark:text-black"
              : "text-muted-foreground"
          }
        >
          <SquareTerminal />
          Code
        </Button>
      </ButtonGroup>
      {active == "preview" ? (
        <div className='mt-4 border rounded-lg w-full h-72'>
          preview
        </div>
      ) : (
        <div className='mt-4 border rounded-lg w-full h-72'>
          code
        </div>
      )}
    </>
  )
}

export default BtnGrp
