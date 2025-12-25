import AddBtn from "@/components/btn/add-btn"
import Header from "@/components/general/header"

import React from "react"

const NavLinks = () => {
  return (
    <main>
      <div className='flex justify-between items-center mt-2'>
        <Header>Navlinks</Header>
        <AddBtn/>
      </div>
      <div></div>
    </main>
  )
}

export default NavLinks
