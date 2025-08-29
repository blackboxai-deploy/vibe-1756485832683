"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/33b23060-7089-4c95-b67e-93a8461893c6.png"
          alt="Tesla Cybertruck futuristic stainless steel pickup truck in dramatic desert landscape at sunset"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)';
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Cybertruck
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Beast Mode: Unleashed
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Built for any planet, the Cybertruck features ultra-hard stainless steel exoskeleton 
          and unbreakable glass for maximum durability and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium">
            Order Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium"
          >
            Learn More
          </Button>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light mb-2">340 mi</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">Range (EPA est.)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light mb-2">2.6 s</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">0-60 mph</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light mb-2">11,000 lbs</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">Towing Capacity</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;