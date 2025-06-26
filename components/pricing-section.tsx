import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Award, Link } from "lucide-react";

interface PricingPlan {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface PricingSectionProps {
  data: PricingPlan[];
}

export function PricingSection({ data }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-md mb-6">
            <Award className="w-4 h-4 mr-2" />
            Flexible Pricing Plans
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the perfect plan for your fundraising goals. All plans
            include our core features with varying levels of support and
            customization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in-up ${
                plan.popular
                  ? "ring-2 ring-blue-500 scale-105 shadow-2xl"
                  : "hover:scale-105"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.plan}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-lg">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/2348108261689?text=${encodeURIComponent(
                    `Hello! I'm interested in the "${plan.plan}" plan.\n\n` +
                      `Price: ${plan.price} ${plan.period}\n` +
                      `Description: ${plan.description}\n` +
                      `Features:\n- ${plan.features.join("\n- ")}\n\n` +
                      `Please tell me more about it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Get Started
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
