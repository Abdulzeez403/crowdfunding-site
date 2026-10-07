import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stratosedge.org"),
  title: "Stratosedge | Crowdfunding & Fundraising Marketing Agency",
  description:
    "Grow your fundraising campaign with Stratosedge. We help startups, creators, and nonprofits raise funds through crowdfunding strategy, digital marketing, and donor engagement.",
  applicationName: "Stratosedge",
  keywords: [
    "crowdfunding agency",
    "fundraising marketing",
    "crowdfunding campaign strategy",
    "fundraising for startups",
    "digital fundraising",
    "Nigeria fundraising agency",
    "Lagos crowdfunding marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Stratosedge",
    title: "Stratosedge | Crowdfunding & Fundraising Marketing Agency",
    description:
      "Crowdfunding strategy, digital marketing, and donor engagement to help startups, creators, and nonprofits grow their fundraising campaigns.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary",
    title: "Stratosedge | Crowdfunding & Fundraising Marketing Agency",
    description:
      "Crowdfunding strategy, digital marketing, and donor engagement for fundraising campaigns.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stratosedge",
    url: "https://stratosedge.org",
    logo: "https://stratosedge.org/logo.png",
    description:
      "Crowdfunding strategy, digital marketing, and donor engagement for startups, creators, and nonprofits.",
    email: "ishowosolihu@gmail.com",
    telephone: "+2348108261689",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    knowsAbout: [
      "Crowdfunding",
      "Fundraising marketing",
      "Email marketing",
      "Social media marketing",
      "Campaign strategy",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
