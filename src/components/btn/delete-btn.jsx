import React from 'react'
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'

const DeleteBtn = () => {
  return (
    <Button variant='ghost'>
      <Trash/>
    </Button>
  )
}

export default DeleteBtn
