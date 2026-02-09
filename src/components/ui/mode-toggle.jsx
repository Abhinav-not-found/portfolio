"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const playSound = (type) => {
    const audio = new Audio(
      type === "on" ? "/sounds/switch-on.mp3" : "/sounds/switch-off.mp3"
    )
    audio.volume = 0.4
    audio.play()
  }

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)

    playSound(nextTheme === "light" ? "on" : "off")
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      aria-label='Toggle theme'
    >
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  )
}
