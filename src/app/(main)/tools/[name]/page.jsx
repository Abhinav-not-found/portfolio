"use client"
import Header from "@/components/general/header"
import crypto from "crypto"

const page = () => {
  const handleCopy = async () => {
    try {
      let msg = "ThisIsJsonwebtokenSecret"
      const hash = crypto.createHash("sha256").update(msg).digest("hex")
      await navigator.clipboard.writeText(hash)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  return (
    <div className='mt-18 min-h-screen px-4 md:px-0'>
      <Header>JWT Secret Key Generator</Header>
      <div className='mt-10'>
        <button
          onClick={handleCopy}
          className='bg-black text-white p-2 px-4 rounded-md font-semibold cursor-pointer active:scale-95'
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default page
