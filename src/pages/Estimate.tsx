import React from 'react';
import Navigation from '@/components/Navigation';
import PriceEstimator from '@/components/PriceEstimator';

const Estimate = () => {
  return (
    <div className="min-h-screen bg-berry-white">
      <Navigation />
      <div className="pt-24">
        <PriceEstimator />
      </div>
    </div>
  );
};

export default Estimate;