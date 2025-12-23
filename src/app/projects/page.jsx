import React from "react"
import Header from "@/components/general/header"

const page = () => {
  return (
    <div>
      <Header>Project</Header>
      <div className='w-full h-full grid grid-cols-2 gap-x-4 gap-y-2 mt-4'>
        <Card />
      </div>
    </div>
  )
}

const Card = () => {
  return <div className='w-84 h-96 bg-neutral-200 dark:bg-neutral-700 rounded-md' />
}
export default page
