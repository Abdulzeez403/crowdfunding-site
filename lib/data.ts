import siteData from "@/data/site-data.json";

export interface SiteData {
  hero: {
    headline: string;
    subtext: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: Array<{
    id: string;
    title: string;
    priceRange: string;
    description: string;
    features: string[];
  }>;
  successStories: Array<{
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
  }>;
  pricing: Array<{
    plan: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
  }>;
  platforms: string[];
  testimonials: Array<{
    name: string;
    role: string;
    feedback: string;
    image: string;
    rating: number;
  }>;
  team: Array<{
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
    twitter: string;
  }>;
  contact: {
    email: string;
    phone: string;
    address: string;
    ctaText: string;
    note: string;
  };
}

export function getSiteData(): SiteData {
  return siteData as unknown as SiteData;
}
