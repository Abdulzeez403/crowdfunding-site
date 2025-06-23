import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crowdfunding Agency",
  description: "Professional fundraising and marketing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
