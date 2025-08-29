"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const innovations = [
  {
    title: 'Full Self-Driving',
    description: 'Advanced AI and neural networks enable your Tesla to navigate complex urban environments with confidence.',
    features: ['Navigate on Autopilot', 'Auto Lane Change', 'Autopark', 'Summon', 'Smart Summon'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1839370-890e-42e5-b4a0-cb5121e28888.png'
  },
  {
    title: 'Supercharger Network',
    description: 'The world\'s fastest charging network with over 50,000 Superchargers globally for convenient long-distance travel.',
    features: ['250kW Peak Charging', '15-min Charge Stop', 'Global Coverage', 'Seamless Payment', 'Route Planning'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76798d8b-7334-4fb6-aac6-4c22ce3e6ad0.png'
  },
  {
    title: 'Over-the-Air Updates',
    description: 'Your Tesla gets better over time with regular software updates that add new features and improvements.',
    features: ['New Features', 'Performance Improvements', 'Security Updates', 'Entertainment', 'Range Optimization'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a97f891b-3b74-48fb-b5ce-1c1ff6ad3732.png'
  }
];

const Innovation = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Innovation at Every Mile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tesla vehicles are equipped with cutting-edge technology that continuously evolves 
            to provide the safest, most efficient, and most enjoyable driving experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)';
                    target.alt = 'Innovation feature placeholder';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {innovation.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {innovation.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {innovation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Innovation Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-light text-black mb-2">50,000+</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm">Superchargers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-black mb-2">7B+</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm">Miles on Autopilot</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-black mb-2">99.9%</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-black mb-2">40+</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm">OTA Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;