import React from 'react';
import Navigation from '@/components/Navigation';
import PriceEstimator from '@/components/PriceEstimator';
import EstimateCTA from '@/components/EstimateCTA';

const Estimate = () => {
  return (
    <div className="min-h-screen bg-berry-white">
      <Navigation />
      <div className="pt-24">
        <EstimateCTA />
        <PriceEstimator />
      </div>
    </div>
  );
};

export default Estimate;