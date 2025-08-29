"use client";

import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Vehicles',
      links: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster']
    },
    {
      title: 'Energy',
      links: ['Solar Roof', 'Solar Panels', 'Powerwall', 'Megapack', 'Commercial', 'Utilities']
    },
    {
      title: 'Charging',
      links: ['Supercharger', 'Destination Charging', 'Wall Connector', 'Mobile Connector', 'Adapters', 'Charging Calculator']
    },
    {
      title: 'Discover',
      links: ['Demo Drive', 'Insurance', 'Used Vehicles', 'Trade-In', 'Cybertruck', 'Roadster']
    },
    {
      title: 'Shop',
      links: ['Apparel', 'Lifestyle', 'Vehicle Accessories', 'Gift Cards', 'Collection']
    }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tesla Logo and Mission */}
        <div className="text-center mb-12 py-12 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-4 tracking-wider">TESLA</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Accelerating the world's transition to sustainable energy
          </p>
        </div>

        {/* Additional Links and Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-8 border-t border-gray-800">
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Service Centers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Parts & Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-8 py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white mb-1">Sales</p>
              <p>1-888-518-3752</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Service</p>
              <p>1-877-798-3752</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Roadside Assistance</p>
              <p>1-877-798-3752</p>
            </div>
          </div>
        </div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Tesla, Inc. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                <span className="text-xs">T</span>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                <span className="text-xs">I</span>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                <span className="text-xs">Y</span>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                <span className="text-xs">L</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;