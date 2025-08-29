"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const Sustainability = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Accelerating the World's
              <span className="block text-green-400">Transition to Sustainable Energy</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Tesla's mission is to accelerate the world's transition to sustainable energy. 
                We design and manufacture electric vehicles, energy storage systems, and solar panels.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Every Tesla vehicle produces zero direct emissions, helping to reduce air pollution 
                and combat climate change. Our Gigafactories are powered by renewable energy, 
                making our manufacturing process as sustainable as our products.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">13.4M+</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">
                  Tons of CO₂ Avoided
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">5M+</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">
                  Vehicles Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">100%</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">
                  Renewable Manufacturing
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-green-400 mb-2">40+</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">
                  Countries Served
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-medium">
                Learn About Impact
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Sustainability Report
              </Button>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7440cfb7-db98-4dfe-af68-8d0869b6ff5e.png"
                alt="Earth from space with green energy grid overlay sustainable technology visualization"
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)';
                  target.alt = 'Sustainable energy visualization';
                }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Environmental Benefits */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Environmental Benefits
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tesla vehicles and energy products work together to create a sustainable ecosystem 
              that benefits both drivers and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold mb-3">Zero Emissions</h4>
              <p className="text-gray-400">
                Electric vehicles produce no tailpipe emissions, contributing to cleaner air 
                and reduced greenhouse gas emissions.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-3">Renewable Energy</h4>
              <p className="text-gray-400">
                Our Supercharger network increasingly uses renewable energy sources, 
                making every charge cleaner.
              </p>
            </div>
            
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <div className="text-4xl mb-4">♻️</div>
              <h4 className="text-xl font-semibold mb-3">Sustainable Materials</h4>
              <p className="text-gray-400">
                We're committed to using sustainable materials and processes throughout 
                our supply chain and manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;