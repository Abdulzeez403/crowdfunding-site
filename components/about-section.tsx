import { Card, CardContent } from "@/components/ui/card"
import { Target, TrendingUp, Users, Zap, CheckCircle } from "lucide-react"

interface AboutSectionProps {
  data: {
    title: string
    description: string
  }
}

export function AboutSection({ data }: AboutSectionProps) {
  const features = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We develop targeted strategies that align with your fundraising goals and audience needs.",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Results",
      description: "Our campaigns are powered by analytics and insights to maximize your ROI and success rates.",
      color: "green",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals bring years of fundraising and marketing expertise to your project.",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Innovative Technology",
      description: "We leverage cutting-edge tools and platforms to give your campaigns a competitive edge.",
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            About Our Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{data.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
