"use client"

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductLogo from "./product-logo";
import Link from "next/link";

const HeaderComponent: React.FC = () => {
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <ProductLogo />

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              About
            </Link>

            {/* Divisions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDivisionsOpen(!divisionsOpen)}
                className="flex items-center gap-1 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
              >
                Divisons
                <ChevronDown className="w-4 h-4" />
              </button>
              {divisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Division 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Division 2
                  </Link>
                </div>
              )}
            </div>

            {/* Programs & Events Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center gap-1 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
              >
                Programs & Events
                <ChevronDown className="w-4 h-4" />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Program 1
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Event 1
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#investors"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Investors
            </Link>

            <Link
              href="#contact"
              className="text-gray-900 px-6 py-2.5 rounded-md border border-black hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>

            {/* Join the Network Button */}
            <Link
              href="#join"
              className="bg-black text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
