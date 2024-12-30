import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const EstimateCTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/estimate');
  };

  return (
    <section className="section-padding bg-berry-purple">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl text-center mb-6 text-berry-white">
          Get Your Instant Price Estimate
        </h2>
        <p className="text-lg mb-8 text-berry-white/90 max-w-2xl mx-auto">
          Find out how much it would cost to clean your space. Our easy-to-use calculator helps you get an accurate estimate in minutes.
        </p>
        <Button 
          onClick={handleClick}
          className="bg-berry-lime hover:bg-berry-lime/90 text-black text-lg px-8 py-6 h-auto"
        >
          <Calculator className="mr-2 h-5 w-5" />
          Calculate Your Price
        </Button>
      </div>
    </section>
  );
};

export default EstimateCTA;