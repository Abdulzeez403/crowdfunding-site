import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Star, Heart } from "lucide-react"

interface HeroSectionProps {
  data: {
    headline: string
    subtext: string
  }
}

export function CreativePlayfulHero({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 animate-bounce">
          <Star className="w-8 h-8 text-yellow-500 fill-current" />
        </div>
        <div className="absolute top-40 right-32 animate-pulse">
          <Heart className="w-6 h-6 text-pink-500 fill-current" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-1000">
          <Rocket className="w-10 h-10 text-purple-500" />
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse delay-500">
          <Star className="w-6 h-6 text-blue-500 fill-current" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-purple-600 text-sm font-bold rounded-full mb-8 shadow-lg">
          <Rocket className="w-4 h-4 mr-2" />
          {data.headline}
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
          <span className="text-purple-600">Make</span>
          <br />
          <span className="text-pink-500">Magic</span>
          <br />
          <span className="text-yellow-500">Happen!</span>
        </h1>

        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">{data.subtext}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Let's Go! 🚀
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-12 py-6 text-xl font-bold rounded-full"
          >
            See Examples ✨
          </Button>
        </div>

        {/* Fun stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
            <div className="text-gray-600 text-sm">Happy Campaigns</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-pink-500 mb-1">$50M+</div>
            <div className="text-gray-600 text-sm">Dreams Funded</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-yellow-500 mb-1">98%</div>
            <div className="text-gray-600 text-sm">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  )
}
