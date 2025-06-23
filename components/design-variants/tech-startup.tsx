import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Cpu } from "lucide-react"

interface HeroSectionProps {
  data: {
    headline: string
    subtext: string
  }
}

export function TechStartupHero({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm font-mono rounded-md mb-8 border border-cyan-500/30">
          <Code className="w-4 h-4 mr-2" />
          {data.headline}
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold mb-8 leading-tight">
          <span className="text-white">{"<"}</span>
          <span className="text-cyan-400">FundRaise</span>
          <span className="text-white">{" />"}</span>
          <br />
          <span className="text-2xl text-gray-400">// Next-gen fundraising</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-mono">{data.subtext}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 font-mono font-bold">
            Initialize()
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 font-mono"
          >
            View Docs
          </Button>
        </div>

        {/* Tech stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="border border-cyan-500/30 rounded-lg p-6 bg-cyan-500/5">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-2xl font-mono font-bold text-white mb-1">500+</div>
            <div className="text-gray-400 text-sm font-mono">Deployments</div>
          </div>
          <div className="border border-purple-500/30 rounded-lg p-6 bg-purple-500/5">
            <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-mono font-bold text-white mb-1">$50M+</div>
            <div className="text-gray-400 text-sm font-mono">Processed</div>
          </div>
          <div className="border border-green-500/30 rounded-lg p-6 bg-green-500/5">
            <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-mono font-bold text-white mb-1">98%</div>
            <div className="text-gray-400 text-sm font-mono">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
