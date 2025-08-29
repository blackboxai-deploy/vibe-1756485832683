"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Tesla Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-wider">TESLA</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vehicles" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Vehicles
            </a>
            <a href="#energy" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Energy
            </a>
            <a href="#charging" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Charging
            </a>
            <a href="#discover" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Discover
            </a>
            <a href="#shop" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Shop
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Support
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Account
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a href="#vehicles" className="text-sm font-medium text-gray-800 py-2">
                Vehicles
              </a>
              <a href="#energy" className="text-sm font-medium text-gray-800 py-2">
                Energy
              </a>
              <a href="#charging" className="text-sm font-medium text-gray-800 py-2">
                Charging
              </a>
              <a href="#discover" className="text-sm font-medium text-gray-800 py-2">
                Discover
              </a>
              <a href="#shop" className="text-sm font-medium text-gray-800 py-2">
                Shop
              </a>
              <div className="pt-4 border-t border-gray-100">
                <Button variant="ghost" className="w-full justify-start text-sm font-medium mb-2">
                  Support
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm font-medium mb-2">
                  Account
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;