import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react"

interface HeroSectionProps {
  data: {
    headline: string
    subtext: string
  }
}

export function ProfessionalCorporateHero({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-md mb-6">
              <Shield className="w-4 h-4 mr-2" />
              {data.headline}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional
              <br />
              <span className="text-blue-600">Fundraising</span>
              <br />
              Solutions
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{data.subtext}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4">
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm text-gray-600">Award Winning</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Trusted by 500+</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">98% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Stats */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.4M</div>
                <div className="text-gray-600 mb-4">Average funds raised per campaign</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Successful Campaigns</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">$50M+</div>
                  <div className="text-gray-600 text-sm">Total Raised</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
