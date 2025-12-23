import React from "react"
import Navbar from "./navbar"

const Container = ({ children }) => {
  return (
    <div className='max-w-2xl h-full mx-auto'>
      <Navbar />
      {children}
    </div>
  )
}

export default Container
