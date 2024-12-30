import React from 'react';
import PriceEstimator from '@/components/PriceEstimator';
import EstimateDisclaimer from '@/components/estimator/EstimateDisclaimer';

const Estimate = () => {
  return (
    <div className="min-h-screen bg-berry-white">
      <div className="pt-24">
        <EstimateDisclaimer />
        <PriceEstimator />
      </div>
    </div>
  );
};

export default Estimate;