import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  data: {
    headline: string
    subtext: string
  }
}

export function MinimalCleanHero({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg mb-8">
            {data.headline}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Simple.
            <br />
            <span className="font-bold text-blue-600">Effective.</span>
            <br />
            Fundraising.
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{data.subtext}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Learn More
            </Button>
          </div>

          {/* Clean Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$50M+</div>
              <div className="text-gray-600">Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
