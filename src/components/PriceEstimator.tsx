import React, { useState } from 'react';
import LocationStep from './estimator/LocationStep';
import HouseSizeStep from './estimator/HouseSizeStep';
import RoomsStep from './estimator/RoomsStep';
import CleanlinessStep from './estimator/CleanlinessStep';
import ExtrasStep from './estimator/ExtrasStep';
import ContactInfoStep from './estimator/ContactInfoStep';
import PriceDisplay from './estimator/PriceDisplay';
import StepNavigation from './estimator/StepNavigation';

const PriceEstimator = () => {
  const [step, setStep] = useState(1);
  const [size, setSize] = useState([100]);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [cleanLevel, setCleanLevel] = useState(3);
  const [extras, setExtras] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('price-estimator');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const calculatePrice = () => {
    let basePrice = size[0] * 0.5;
    basePrice += bedrooms * 50;
    basePrice += bathrooms * 70;
    basePrice *= cleanLevel * 0.2 + 1;
    
    extras.forEach(extra => {
      basePrice += 30;
    });

    return basePrice.toFixed(2);
  };

  const nextStep = () => {
    if (step < 7) setStep(step + 1);
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
        return (
          <ContactInfoStep
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        );
      case 7:
        return <PriceDisplay price={calculatePrice()} />;
      default:
        return null;
    }
  };

  return (
    <section id="price-estimator" className={`py-32 px-1.5 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple font-bauhaus">
          Calculate Your Price
        </h2>
        
        <div className="max-w-3xl mx-auto px-1.5">
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