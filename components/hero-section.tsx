import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  data: {
    headline: string;
    subtext: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-md mb-6 animate-fade-in">
              <Shield className="w-4 h-4 mr-2" />
              {data.headline}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
              Professional
              <br />
              <span className="text-blue-600">Fundraising</span>
              <br />
              Solutions
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed animate-fade-in-up delay-300">
              {data.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 transition-all duration-300 hover:scale-105"
              >
                <Link href="https://www.fiverr.com/sholly_be">
                  Schedule Consultation
                </Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 px-8 py-4 hover:bg-gray-50 transition-all duration-300"
              >
                <Link href="#project">View Case Studies</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 animate-fade-in-up delay-500">
              <div className="flex items-center group">
                <Award className="w-5 h-5 text-yellow-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-600">Award Winning</span>
              </div>
              <div className="flex items-center group">
                <Shield className="w-5 h-5 text-green-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-600">Trusted by 500+</span>
              </div>
              <div className="flex items-center group">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-600">98% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Stats */}
          <div className="space-y-6 animate-fade-in-right">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Campaign Performance
                  </h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  $2.4M
                </div>
                <div className="text-gray-600 mb-4">
                  Average funds raised per campaign
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full animate-progress-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-600">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    500+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Successful Campaigns
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-700">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    $50M+
                  </div>
                  <div className="text-gray-600 text-sm">Total Raised</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
