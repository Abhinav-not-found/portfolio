import React from "react"

export const Heading = ({ children }) => {
  return <div className='select-none'>{children}</div>
}

export const SmallHeading = ({ children }) => {
  return (
    <p className='text-muted-foreground font-inter text-base'>{children}</p>
  )
}
export const BigHeading = ({ children }) => {
  return (
    <h2 className='font-inter text-3xl tracking-tight font-medium'>
      {children}
    </h2>
  )
}

