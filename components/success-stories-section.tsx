"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface SuccessStory {
  id: string;
  title: string;
  category: string;
  amount: string;
  duration: string;
  platform: string;
  description: string;
  results: {
    fundsRaised: string;
    [key: string]: string | number;
  };
  services: string[];
  testimonial: string;
  clientName: string;
  clientRole: string;
  image: string;
  featured: boolean;
}

interface SuccessStoriesSectionProps {
  data: SuccessStory[];
}

export function SuccessStoriesSection({ data }: SuccessStoriesSectionProps) {
  const [activeStory, setActiveStory] = useState(0);
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(data.map((story) => story.category))),
  ];
  const filteredStories =
    filter === "all" ? data : data.filter((story) => story.category === filter);
  const featuredStories = data.filter((story) => story.featured);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % featuredStories.length);
  };

  const prevStory = () => {
    setActiveStory(
      (prev) => (prev - 1 + featuredStories.length) % featuredStories.length
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Tech Startup": "bg-blue-100 text-blue-800",
      Nonprofit: "bg-green-100 text-green-800",
      "Product Launch": "bg-purple-100 text-purple-800",
      Healthcare: "bg-red-100 text-red-800",
      "Creative Arts": "bg-yellow-100 text-yellow-800",
      "Food Tech": "bg-orange-100 text-orange-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-md mb-6">
            <Award className="w-4 h-4 mr-2" />
            Our Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses and organizations achieve their
            fundraising goals with strategic campaigns and expert execution.
          </p>
        </div>

        {/* Featured Success Story Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Campaigns
          </h3>
          <div className="relative">
            <Card className="border-0 shadow-xl overflow-hidden animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Story Content */}
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <Badge
                      className={getCategoryColor(
                        featuredStories[activeStory]?.category
                      )}
                    >
                      {featuredStories[activeStory]?.category}
                    </Badge>
                    <div className="text-3xl font-bold text-green-600">
                      {featuredStories[activeStory]?.amount}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredStories[activeStory]?.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredStories[activeStory]?.description}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(featuredStories[activeStory]?.results || {})
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="text-lg font-bold text-gray-900">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Services Used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Services Provided:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredStories[activeStory]?.services.map(
                        (service, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
                    "{featuredStories[activeStory]?.testimonial}"
                  </blockquote>
                  <div className="text-sm text-gray-600">
                    <strong>{featuredStories[activeStory]?.clientName}</strong>{" "}
                    - {featuredStories[activeStory]?.clientRole}
                  </div>
                </CardContent>

                {/* Story Image/Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <TrendingUp className="w-16 h-16 text-blue-600" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-4">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">
                          {featuredStories[activeStory]?.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-4">
                        <Target className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">
                          {featuredStories[activeStory]?.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevStory}
                className="hover:bg-blue-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {featuredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeStory ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextStory}
                className="hover:bg-blue-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category === "all" ? "All Stories" : category}
            </Button>
          ))}
        </div>

        {/* All Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <Card
              key={story.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(story.category)}>
                    {story.category}
                  </Badge>
                  <div className="text-2xl font-bold text-green-600">
                    {story.amount}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {story.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {story.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-sm font-bold text-gray-900">
                      {Object.values(story.results)[0]}
                    </div>
                    <div className="text-xs text-gray-600">Raised</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-sm font-bold text-gray-900">
                      {story.duration}
                    </div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {story.services.slice(0, 3).map((service, serviceIndex) => (
                      <Badge
                        key={serviceIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {service}
                      </Badge>
                    ))}
                    {story.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{story.services.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Client */}
                <div className="text-xs text-gray-600 mb-4">
                  <strong>{story.clientName}</strong> - {story.clientRole}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-200"
                >
                  View Details
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you achieve similar results for your
              fundraising campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Campaign
              </Button>
              <Button variant="outline">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
