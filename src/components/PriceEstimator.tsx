import React, { useState } from 'react';
import LocationStep from './estimator/LocationStep';
import ServiceTypeStep from './estimator/ServiceTypeStep';
import HouseSizeStep from './estimator/HouseSizeStep';
import RoomsStep from './estimator/RoomsStep';
import CleanlinessStep from './estimator/CleanlinessStep';
import ExtrasStep from './estimator/ExtrasStep';
import ContactInfoStep from './estimator/ContactInfoStep';
import PriceDisplay from './estimator/PriceDisplay';
import StepNavigation from './estimator/StepNavigation';

const PriceEstimator = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('standard');
  const [size, setSize] = useState([1500]);
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
    let basePrice = size[0] * 0.15;
    
    // Apply service type multiplier
    switch (selectedService) {
      case 'deep':
        basePrice *= 1.5;
        break;
      case 'movein':
        basePrice *= 1.75;
        break;
      case 'office':
        basePrice *= 1.25;
        break;
      default: // standard
        break;
    }
    
    basePrice += bedrooms * 50;
    basePrice += bathrooms * 70;
    basePrice *= cleanLevel * 0.2 + 1;
    
    extras.forEach(extra => {
      basePrice += 30;
    });

    return basePrice.toFixed(2);
  };

  const nextStep = () => {
    if (step < 8) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <LocationStep />;
      case 2:
        return <ServiceTypeStep 
          selectedService={selectedService} 
          setSelectedService={setSelectedService}
          nextStep={nextStep}
        />;
      case 3:
        return <HouseSizeStep size={size} setSize={setSize} />;
      case 4:
        return (
          <RoomsStep
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
          />
        );
      case 5:
        return <CleanlinessStep cleanLevel={cleanLevel} setCleanLevel={setCleanLevel} />;
      case 6:
        return <ExtrasStep extras={extras} setExtras={setExtras} />;
      case 7:
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
      case 8:
        return (
          <PriceDisplay
            price={calculatePrice()}
            size={size}
            setSize={setSize}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            cleanLevel={cleanLevel}
            setCleanLevel={setCleanLevel}
            extras={extras}
            setExtras={setExtras}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="price-estimator" className={`py-32 px-0.25 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple font-bauhaus">
          Calculate Your Price
        </h2>
        
        <div className="max-w-3xl mx-auto px-0.25">
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