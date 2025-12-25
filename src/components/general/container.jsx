import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "./footer"

const Container = ({ children }) => {
  return (
    <div className='max-w-2xl h-full mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Container
