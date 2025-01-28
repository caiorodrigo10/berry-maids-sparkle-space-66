import React, { useState } from 'react';
import LocationStep from './estimator/LocationStep';
import ServiceTypeStep from './estimator/ServiceTypeStep';
import HouseSizeStep from './estimator/HouseSizeStep';
import RoomsStep from './estimator/RoomsStep';
import ExtrasStep from './estimator/ExtrasStep';
import ContactInfoStep from './estimator/ContactInfoStep';
import PriceDisplay from './estimator/PriceDisplay';
import StepNavigation from './estimator/StepNavigation';

const PriceEstimator = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('standard');
  const [size, setSize] = useState([1500]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [kitchens, setKitchens] = useState(0);
  const [livingRooms, setLivingRooms] = useState(0);
  const [entertainmentRooms, setEntertainmentRooms] = useState(0);
  const [offices, setOffices] = useState(0);
  const [diningRooms, setDiningRooms] = useState(0);
  const [laundryRooms, setLaundryRooms] = useState(0);
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
      default:
        break;
    }
    
    // Add price for each room type
    basePrice += bedrooms * 50;
    basePrice += bathrooms * 70;
    basePrice += kitchens * 80;
    basePrice += livingRooms * 60;
    basePrice += entertainmentRooms * 60;
    basePrice += offices * 50;
    basePrice += diningRooms * 50;
    basePrice += laundryRooms * 40;
    
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
            kitchens={kitchens}
            setKitchens={setKitchens}
            livingRooms={livingRooms}
            setLivingRooms={setLivingRooms}
            entertainmentRooms={entertainmentRooms}
            setEntertainmentRooms={setEntertainmentRooms}
            offices={offices}
            setOffices={setOffices}
            diningRooms={diningRooms}
            setDiningRooms={setDiningRooms}
            laundryRooms={laundryRooms}
            setLaundryRooms={setLaundryRooms}
          />
        );
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
        return (
          <PriceDisplay
            price={calculatePrice()}
            size={size}
            setSize={setSize}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
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