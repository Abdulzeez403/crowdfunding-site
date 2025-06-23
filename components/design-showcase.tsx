"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MinimalCleanHero } from "./design-variants/minimal-clean"
import { VibrantModernHero } from "./design-variants/vibrant-modern"
import { ProfessionalCorporateHero } from "./design-variants/professional-corporate"
import { CreativePlayfulHero } from "./design-variants/creative-playful"
import { TechStartupHero } from "./design-variants/tech-startup"

interface DesignShowcaseProps {
  data: {
    headline: string
    subtext: string
  }
}

export function DesignShowcase({ data }: DesignShowcaseProps) {
  const [activeDesign, setActiveDesign] = useState(1)

  const designOptions = [
    { id: 1, name: "Minimal Clean", component: MinimalCleanHero, description: "Clean, simple, professional" },
    { id: 2, name: "Vibrant Modern", component: VibrantModernHero, description: "Bold, energetic, eye-catching" },
    {
      id: 3,
      name: "Professional Corporate",
      component: ProfessionalCorporateHero,
      description: "Trustworthy, data-focused",
    },
    { id: 4, name: "Creative Playful", component: CreativePlayfulHero, description: "Fun, engaging, friendly" },
    { id: 5, name: "Tech Startup", component: TechStartupHero, description: "Modern, tech-savvy, innovative" },
  ]

  const ActiveDesignComponent =
    designOptions.find((option) => option.id === activeDesign)?.component || MinimalCleanHero

  return (
    <div className="relative">
      {/* Design Switcher */}
      <div className="fixed top-20 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border max-w-xs">
        <div className="text-sm font-semibold text-gray-800 mb-3">Choose Your Style:</div>
        <div className="space-y-2">
          {designOptions.map((option) => (
            <div key={option.id}>
              <Button
                variant={activeDesign === option.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveDesign(option.id)}
                className="w-full justify-start text-xs"
              >
                {option.name}
              </Button>
              {activeDesign === option.id && <p className="text-xs text-gray-600 mt-1 px-2">{option.description}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Active Design */}
      <ActiveDesignComponent data={data} />
    </div>
  )
}
