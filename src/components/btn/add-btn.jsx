import React from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const AddBtn = () => {
  return (
    <Button size='sm' variant='ghost'>
      <Plus />
      Add
    </Button>
  )
}

export default AddBtn
