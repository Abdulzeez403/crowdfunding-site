import { getSiteData } from "@/lib/data";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { ToolsSection } from "@/components/tools-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SuccessStoriesSection } from "@/components/success-stories-section";

export default function Home() {
  const data = getSiteData();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-red-600 text-white px-3 py-6 rounded-l-2xl shadow-lg cursor-pointer">
          <p className="text-sm font-semibold [writing-mode:vertical-rl] rotate-180 tracking-widest">
            Donation is not guarantee!
          </p>
        </div>

        <HeroSection data={data.hero} />
        <AboutSection data={data.about} />
        <ServicesSection data={data.services} />
        <SuccessStoriesSection data={data.successStories} />
        <PricingSection data={data.pricing} />
        <ToolsSection data={data.platforms} />
        <TestimonialsSection data={data.testimonials} />
        <TeamSection data={data.team} />
        <ContactSection data={data.contact} />
      </main>
      <Footer data={data.contact} />
    </div>
  );
}
