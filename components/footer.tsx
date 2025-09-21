"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  data: {
    email: string;
    phone: string;
    address: string;
  };
}

export function Footer({ data }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">
              FundRaise Pro
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We are architects of brand success, combining creativity, data
              insights, and innovative technology to elevate your fundraising
              campaigns.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Pricing", "Team", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 text-sm">{data.email}</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-green-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 text-sm">{data.phone}</span>
              </div>
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 text-sm">{data.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Stratosedge. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="mt-4 md:mt-0 border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
