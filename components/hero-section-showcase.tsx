"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HeroOption1 } from "./hero-variants/hero-option-1"
import { HeroOption2 } from "./hero-variants/hero-option-2"
import { HeroOption3 } from "./hero-variants/hero-option-3"

interface HeroSectionShowcaseProps {
  data: {
    headline: string
    subtext: string
  }
}

export function HeroSectionShowcase({ data }: HeroSectionShowcaseProps) {
  const [activeHero, setActiveHero] = useState(1)

  const heroOptions = [
    { id: 1, name: "Modern Dashboard", component: HeroOption1 },
    { id: 2, name: "Clean Minimal", component: HeroOption2 },
    { id: 3, name: "Dark Futuristic", component: HeroOption3 },
  ]

  const ActiveHeroComponent = heroOptions.find((option) => option.id === activeHero)?.component || HeroOption1

  return (
    <div className="relative">
      {/* Hero Section Switcher */}
      <div className="fixed top-20 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
        <div className="text-xs font-medium text-gray-600 mb-2 px-2">Hero Styles:</div>
        <div className="space-y-1">
          {heroOptions.map((option) => (
            <Button
              key={option.id}
              variant={activeHero === option.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveHero(option.id)}
              className="w-full justify-start text-xs"
            >
              {option.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Hero Section */}
      <ActiveHeroComponent data={data} />
    </div>
  )
}
