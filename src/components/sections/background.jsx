"use client"
import React, { useMemo } from "react"

const COLORS = [
  "bg-red-50 dark:bg-red-900",
  "bg-blue-50 dark:bg-blue-900",
  "bg-green-50 dark:bg-green-900",
  "bg-purple-50 dark:bg-purple-900",
  "bg-pink-50 dark:bg-pink-900",
]

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Background = () => {
  const circles = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        size: random(160, 420), // px
        top: random(0, 80), // vh
        left: random(0, 80), // vw
        color: COLORS[random(0, COLORS.length - 1)],
      })),
    [],
  )

  return (
    <>
      {circles.map((c) => (
        <div
          key={c.id}
          className={`pointer-events-none fixed rounded-full blur-3xl  ${c.color}`}
          style={{
            width: c.size,
            height: c.size,
            top: `${c.top}vh`,
            left: `${c.left}vw`,
          }}
        />
      ))}
    </>
  )
}

export default Background
