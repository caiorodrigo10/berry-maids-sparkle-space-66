import React from 'react';
import PriceEstimator from '@/components/PriceEstimator';
import EstimateDisclaimer from '@/components/estimator/EstimateDisclaimer';

const Estimate = () => {
  return (
    <div className="min-h-screen bg-berry-white">
      <EstimateDisclaimer />
      <PriceEstimator />
    </div>
  );
};

export default Estimate;