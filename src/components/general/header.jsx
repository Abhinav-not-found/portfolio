import React from "react"

const Header = ({ variant = "v1", title, description, children }) => {
  if (variant === "v2") {
    return (
      <div>
        <h1 className='first-letter:uppercase text-3xl font-semibold'>
          {title}
        </h1>
        {description && (
          <p className='mt-4 text-muted-foreground first-letter:uppercase'>
            {description}
          </p>
        )}
      </div>
    )
  }

  // Variant 1 (default)
  return (
    <h1 className='text-4xl font-bold font-inter tracking-tight'>
      {children || title}
    </h1>
  )
}

export default Header
