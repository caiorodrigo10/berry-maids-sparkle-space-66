import React from 'react';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-black text-berry-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070')] bg-cover bg-center opacity-50" 
      />
      <Navigation />
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl mb-4 font-bauhaus">
          You Relax, We'll Take Care of the Rest
        </h1>
        <div className="mb-12">
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the ultimate in home cleaning services. Our professional team brings sparkle and shine to every corner of your home, letting you focus on what matters most.
          </p>
        </div>
        <Button className="bg-[#864AAA] hover:bg-[#864AAA]/90 text-white text-lg px-8 py-3">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;