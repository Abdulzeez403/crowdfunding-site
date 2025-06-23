import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

interface HeroSectionProps {
  data: {
    headline: string
    subtext: string
  }
}

export function HeroOption2({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e0e7ff' fillOpacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-8 border border-green-200">
          <Star className="w-4 h-4 mr-2 fill-current" />
          Trusted by 500+ successful campaigns
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight">
          <span className="block">Turn Your</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Vision Into
          </span>
          <span className="block">Reality</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">{data.subtext}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Get Started Free
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-6 text-xl rounded-full"
          >
            See Success Stories
          </Button>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
            <div className="text-gray-600 font-medium">Total Funds Raised</div>
            <div className="flex items-center mt-3">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-500">Verified by third-party</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Successful Campaigns</div>
            <div className="flex items-center mt-3">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-500">Across all platforms</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Success Rate</div>
            <div className="flex items-center mt-3">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-500">Industry leading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
