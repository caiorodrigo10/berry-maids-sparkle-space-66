import React, { useState } from 'react';
import LocationStep from './estimator/LocationStep';
import HouseSizeStep from './estimator/HouseSizeStep';
import RoomsStep from './estimator/RoomsStep';
import CleanlinessStep from './estimator/CleanlinessStep';
import ExtrasStep from './estimator/ExtrasStep';
import PriceDisplay from './estimator/PriceDisplay';
import StepNavigation from './estimator/StepNavigation';

const PriceEstimator = () => {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState([100]);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [cleanLevel, setCleanLevel] = useState(3);
  const [extras, setExtras] = useState<string[]>([]);

  const calculatePrice = () => {
    let basePrice = size[0] * 0.5; // $0.50 per sq ft
    basePrice += bedrooms * 50; // $50 per bedroom
    basePrice += bathrooms * 70; // $70 per bathroom
    basePrice *= cleanLevel * 0.2 + 1; // Multiplier based on cleanliness level
    
    extras.forEach(extra => {
      basePrice += 30; // $30 per extra
    });

    return basePrice.toFixed(2);
  };

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <LocationStep />;
      case 2:
        return <HouseSizeStep size={size} setSize={setSize} />;
      case 3:
        return (
          <RoomsStep
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
          />
        );
      case 4:
        return <CleanlinessStep cleanLevel={cleanLevel} setCleanLevel={setCleanLevel} />;
      case 5:
        return <ExtrasStep extras={extras} setExtras={setExtras} />;
      case 6:
        return <PriceDisplay price={calculatePrice()} />;
      default:
        return null;
    }
  };

  return (
    <section id="price-estimator" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Calculate Your Price
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {renderStep()}
          <StepNavigation
            step={step}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;