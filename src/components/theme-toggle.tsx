
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  const handleThemeChange = (event: React.MouseEvent<HTMLDivElement>, theme: string) => {
    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      setTheme(theme)
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    // Set CSS variables for the animation
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
    document.documentElement.style.setProperty('--r', endRadius + 'px');


    // Start the View Transition
    document.startViewTransition(() => {
       // Ensure the theme change happens *inside* the transition callback
       // Need to flush CSS variables updates before DOM change might be needed,
       // but next-themes handles the DOM update (adding/removing .dark class)
       setTheme(theme);
    });
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Pass event to handler */}
        <DropdownMenuItem onClick={(e) => handleThemeChange(e, "light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => handleThemeChange(e, "dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => handleThemeChange(e, "system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
