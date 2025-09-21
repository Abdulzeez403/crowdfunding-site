import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Share2, Target, ArrowRight, CheckCircle } from "lucide-react";

interface Service {
  id: string;
  title: string;
  priceRange: string;
  description: string;
  features: string[];
}

interface ServicesSectionProps {
  data: Service[];
}

export function ServicesSection({ data }: ServicesSectionProps) {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "email_marketing":
        return Mail;
      case "social_media":
        return Share2;
      case "crowdfunding_funnel":
        return Target;
      default:
        return Target;
    }
  };

  const getServiceColor = (id: string) => {
    switch (id) {
      case "email_marketing":
        return "blue";
      case "social_media":
        return "purple";
      case "crowdfunding_funnel":
        return "green";
      default:
        return "blue";
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-md mb-6">
            <Target className="w-4 h-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive marketing and fundraising solutions tailored
            to your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((service, index) => {
            const IconComponent = getServiceIcon(service.id);
            const color = getServiceColor(service.id);
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 ${getColorClasses(
                      color
                    )} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-blue-600">
                    {service.priceRange}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <a
                    href={`https://wa.me/2349060988455?text=${encodeURIComponent(
                      `Hello! I'm interested in your "${service.title}" service.\n\n` +
                        `Price Range: ${service.priceRange}\n` +
                        `Description: ${service.description}\n` +
                        `Features:\n- ${service.features.join("\n- ")}\n\n` +
                        `Please share more details with me.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer" */}
                  {/* > */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {/* </a> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
