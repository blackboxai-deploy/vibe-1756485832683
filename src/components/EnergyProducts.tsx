"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const energyProducts = [
  {
    name: 'Solar Roof',
    description: 'Beautiful solar glass tiles that replace your existing roof while generating clean energy.',
    features: ['25-Year Warranty', 'Weather Resistant', 'Sleek Design', 'Energy Production'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/341e7e42-cde4-4bd9-a486-6567c6e8e0b8.png',
    price: 'Starting at $15.00/sq ft'
  },
  {
    name: 'Solar Panels',
    description: 'High-efficiency solar panels designed to maximize energy production and minimize costs.',
    features: ['25-Year Warranty', 'High Efficiency', 'Easy Installation', 'Mobile Monitoring'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/241c76c6-259a-442a-9003-f99695424311.png',
    price: 'Starting at $2.85/W'
  },
  {
    name: 'Powerwall',
    description: 'Home battery that stores solar energy for use anytime, providing backup power and energy independence.',
    features: ['13.5 kWh Capacity', 'Backup Power', 'Storm Watch', 'Mobile App Control'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a56df0d-16d9-4fff-ab80-c4defe95c8fa.png',
    price: '$11,500'
  },
  {
    name: 'Megapack',
    description: 'Utility-scale energy storage designed to support grid stability and renewable energy integration.',
    features: ['3 MWh Capacity', 'Grid Integration', 'Scalable Design', 'Remote Monitoring'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57a235b8-a6d5-4aa8-a83f-a9299c2b86f8.png',
    price: 'Contact for Pricing'
  }
];

const EnergyProducts = () => {
  return (
    <section id="energy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Clean Energy for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tesla's energy products work together to power your home and business with clean, 
            renewable energy while providing backup power and energy independence.
          </p>
        </div>

        {/* Energy Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {energyProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)';
                    target.alt = 'Energy product placeholder';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-black">
                    {product.name}
                  </h3>
                  <div className="text-lg font-medium text-gray-900">
                    {product.price}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Order Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Energy Ecosystem */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-black mb-6">
              Complete Energy Ecosystem
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tesla's energy products work seamlessly together to create a comprehensive 
              clean energy solution for your home or business.
            </p>
          </div>

          {/* Energy Flow Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">☀️</div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Generate</h4>
              <p className="text-gray-600">
                Solar Roof and Solar Panels capture sunlight and convert it to clean electricity
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">🔋</div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Store</h4>
              <p className="text-gray-600">
                Powerwall stores excess energy for use when the sun isn't shining
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">⚡</div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Use</h4>
              <p className="text-gray-600">
                Power your home, charge your Tesla, and sell excess back to the grid
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              Design Your System
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyProducts;