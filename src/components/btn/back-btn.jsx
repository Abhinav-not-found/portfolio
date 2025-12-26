"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackBtn = () => {
  const router = useRouter()
  return (
    <Button onClick={() => router.back()} variant='ghost'>
      <ArrowLeft />
    </Button>
  )
}

export default BackBtn
