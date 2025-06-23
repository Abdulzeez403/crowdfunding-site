"use client"

import { Building2 } from "lucide-react"

interface ToolsSectionProps {
  data: string[]
}

export function ToolsSection({ data }: ToolsSectionProps) {
  // Duplicate the platforms array to create seamless loop
  const duplicatedPlatforms = [...data, ...data]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-md mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Platform Integrations
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Platforms We Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work with all major fundraising and marketing platforms to ensure your campaigns reach their full
            potential.
          </p>
        </div>

        {/* Animated platforms container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right space-x-8">
            {duplicatedPlatforms.map((platform, index) => (
              <div
                key={`${platform}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] group border hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-50 transition-colors duration-300">
                    <span className="text-gray-700 font-bold text-sm group-hover:text-blue-600">
                      {platform.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
