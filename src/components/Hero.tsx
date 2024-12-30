import React from 'react';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-black text-berry-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070')] bg-cover bg-center opacity-50" 
      />
      <Navigation />
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl mb-4 font-bauhaus">
          You Relax, We'll Take Care of the Rest
        </h1>
        <div className="mb-12">
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the ultimate in home cleaning services. Our professional team brings sparkle and shine to every corner of your home, letting you focus on what matters most.
          </p>
        </div>
        <Button 
          onClick={() => navigate('/estimate')}
          className="bg-berry-purple hover:bg-berry-purple/90 text-white h-[48px] px-8 text-base font-semibold uppercase"
        >
          <Calculator className="mr-2 h-5 w-5" />
          Get Your Estimate
        </Button>
      </div>
    </div>
  );
};

export default Hero;