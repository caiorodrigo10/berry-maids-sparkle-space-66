import React from 'react';
import { Calculator } from 'lucide-react';

const DisclaimerStep = () => {
  return (
    <div className="bg-berry-purple text-white p-8 rounded-lg">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-bauhaus mb-4">
          Get Your Instant Price Estimate
        </h3>
        <p className="text-lg opacity-90 mb-4">
          Find out how much it would cost to clean your space. Our easy-to-use calculator helps you get an accurate estimate in minutes.
        </p>
        <p className="text-sm opacity-80">
          Please note that this is an automated calculation and the final price may vary based on specific conditions of your home.
        </p>
        <div className="flex items-center justify-center gap-2 text-black">
          <Calculator className="w-5 h-5" />
          <span className="font-semibold">
            Let's calculate your estimate
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerStep;