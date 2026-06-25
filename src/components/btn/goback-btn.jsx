"use client"
import { ArrowLeft } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const GoBackBtn = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.back()}>
      <Button variant='ghost'>
        <ArrowLeft className='size-4' />
        <p>Go back</p>
      </Button>
    </div>
  )
}

export default GoBackBtn
