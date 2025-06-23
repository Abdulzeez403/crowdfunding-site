import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroSectionProps {
  data: {
    headline: string
    subtext: string
  }
}

export function VibrantModernHero({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-300/20 rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/15 rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          {data.headline}
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
          FUND
          <br />
          YOUR
          <br />
          <span className="text-yellow-300">DREAMS</span>
        </h1>

        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">{data.subtext}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full"
          >
            START NOW
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-6 text-xl font-bold rounded-full"
          >
            WATCH DEMO
          </Button>
        </div>
      </div>
    </section>
  )
}
