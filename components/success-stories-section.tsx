"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
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
  image: string;
  link: string;
  description: string;
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
  const featuredStories = data.filter((story) => story.featured as any);

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
      GoFundMe: "bg-blue-100 text-blue-800",
      kickstarter: "bg-green-100 text-green-800",
      Indiegogo: "bg-purple-100 text-purple-800",
      Healthcare: "bg-red-100 text-red-800",
      "Creative Arts": "bg-yellow-100 text-yellow-800",
      "Food Tech": "bg-orange-100 text-orange-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <section className="py-20 bg-gray-50" id="project">
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
                {/* <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {story.title}
                </CardTitle> */}
              </CardHeader>

              <CardContent className="pt-0">
                <img
                  src={story?.ProjectImage as any}
                  alt={story.title}
                  className="rounded w-full h-50"
                />
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {story.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="text-sm font-bold text-gray-900">
                      {story.amount}
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

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-200"
                >
                  <Link href={`${story.link}`}>View Details</Link>
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
                <Link href="#contact">Start Your Campaign</Link>
              </Button>
              <Button variant="outline">
                <Link href="#contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
