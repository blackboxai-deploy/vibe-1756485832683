"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const vehicles = [
  {
    id: 'model-s',
    name: 'Model S',
    subtitle: 'Plaid',
    description: 'The highest performing sedan ever built, with ludicrous acceleration and cutting-edge technology.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/274037ba-6ef0-4a07-becf-0cd590e6afed.png',
    price: '$89,990',
    specs: {
      range: '405 mi',
      acceleration: '1.99 s',
      topSpeed: '200 mph'
    }
  },
  {
    id: 'model-3',
    name: 'Model 3',
    subtitle: 'Performance',
    description: 'The most affordable Tesla with incredible performance, safety, and efficiency.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cd38a147-1a86-4812-9586-58b11ab268cd.png',
    price: '$42,990',
    specs: {
      range: '358 mi',
      acceleration: '3.1 s',
      topSpeed: '162 mph'
    }
  },
  {
    id: 'model-x',
    name: 'Model X',
    subtitle: 'Plaid',
    description: 'The most spacious and capable Tesla SUV with falcon wing doors and ultimate versatility.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92c01260-6dd1-4750-ab43-eba722fe5e94.png',
    price: '$109,990',
    specs: {
      range: '348 mi',
      acceleration: '2.5 s',
      topSpeed: '163 mph'
    }
  },
  {
    id: 'model-y',
    name: 'Model Y',
    subtitle: 'Performance',
    description: 'The compact SUV that combines performance, efficiency, and versatility for every lifestyle.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2777d691-0720-4e15-8973-6191a360e70e.png',
    price: '$54,990',
    specs: {
      range: '330 mi',
      acceleration: '3.5 s',
      topSpeed: '155 mph'
    }
  },
  {
    id: 'cybertruck',
    name: 'Cybertruck',
    subtitle: 'Beast Mode',
    description: 'The most powerful truck ever built, with unmatched capability and futuristic design.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27587941-e523-4f4d-8b03-a30dc17c7baf.png',
    price: '$96,390',
    specs: {
      range: '340 mi',
      acceleration: '2.6 s',
      topSpeed: '130 mph'
    }
  }
];

const VehicleShowcase = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Our Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for efficiency, safety, and performance. Every Tesla is built to be the safest, 
            most efficient electric vehicle on the road.
          </p>
        </div>

        {/* Vehicle Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {vehicles.map((vehicle, index) => (
            <Button
              key={vehicle.id}
              variant={activeVehicle === index ? "default" : "outline"}
              onClick={() => setActiveVehicle(index)}
              className="px-6 py-2"
            >
              {vehicle.name}
            </Button>
          ))}
        </div>

        {/* Active Vehicle Display */}
        <Card className="overflow-hidden border-0 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full">
              <img
                src={vehicles[activeVehicle].image}
                alt={`${vehicles[activeVehicle].name} ${vehicles[activeVehicle].subtitle}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)';
                  target.alt = 'Vehicle image placeholder';
                }}
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-light text-black mb-2">
                  {vehicles[activeVehicle].name}
                </h3>
                <p className="text-xl text-gray-500 mb-4">
                  {vehicles[activeVehicle].subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {vehicles[activeVehicle].description}
                </p>
                <div className="text-2xl font-semibold text-black mb-8">
                  Starting at {vehicles[activeVehicle].price}
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-1">
                    {vehicles[activeVehicle].specs.range}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Range
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-1">
                    {vehicles[activeVehicle].specs.acceleration}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    0-60 mph
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-1">
                    {vehicles[activeVehicle].specs.topSpeed}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Top Speed
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VehicleShowcase;