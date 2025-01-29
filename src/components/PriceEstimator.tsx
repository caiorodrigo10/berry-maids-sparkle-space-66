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
    // Base price calculation based on square footage
    let basePrice = 0;
    
    // Special calculation for office cleaning
    if (selectedService === 'office') {
      basePrice = Math.max(120, size[0] * 0.10); // Minimum $120 or $0.10 per sq ft
    } else {
      basePrice = size[0] * 0.15; // Standard rate $0.15 per sq ft
    }
    
    // Apply service type multipliers
    switch (selectedService) {
      case 'deep':
        basePrice *= 2.0; // 2x multiplier for deep cleaning
        break;
      case 'movein':
        basePrice *= 1.5; // 1.5x multiplier for move in/out
        break;
      default:
        break;
    }
    
    // Add fixed prices for each room type
    let roomsPrice = 0;
    roomsPrice += bedrooms * 15;           // $15 per bedroom
    roomsPrice += bathrooms * 20;          // $20 per bathroom
    roomsPrice += kitchens * 60;           // $60 per kitchen
    roomsPrice += livingRooms * 15;        // $15 per living room
    roomsPrice += entertainmentRooms * 15; // $15 per entertainment room
    roomsPrice += offices * 15;            // $15 per office
    roomsPrice += diningRooms * 15;        // $15 per dining room
    roomsPrice += laundryRooms * 15;       // $15 per laundry room
    
    // Add prices for additional services
    let extrasPrice = 0;
    const extrasCounts = extras.reduce((acc: { [key: string]: number }, extra) => {
      acc[extra] = (acc[extra] || 0) + 1;
      return acc;
    }, {});

    // Calculate prices for each extra service
    Object.entries(extrasCounts).forEach(([service, quantity]) => {
      switch (service) {
        case 'extra_room':
          extrasPrice += 15 * quantity; // $15 per extra room
          break;
        case 'internal_windows':
          extrasPrice += 5 * quantity;  // $5 per internal window
          break;
        case 'oven_inside':
          extrasPrice += 30 * quantity; // $30 per oven
          break;
        case 'fridge_inside':
          extrasPrice += 35 * quantity; // $35 per fridge
          break;
        case 'pantry_inside':
          extrasPrice += 35 * quantity; // $35 per pantry
          break;
        case 'cabinets_inside':
          extrasPrice += 90 * quantity; // $90 for cabinets
          break;
        case 'has_pets':
          extrasPrice += 10;            // Fixed $10 for pets
          break;
        default:
          break;
      }
    });

    // Sum all components of the final price
    const totalPrice = basePrice + roomsPrice + extrasPrice;
    
    return totalPrice.toFixed(2);
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
        return <ServiceTypeStep 
          selectedService={selectedService} 
          setSelectedService={setSelectedService}
          nextStep={nextStep}
        />;
      case 2:
        return <LocationStep />;
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
            selectedService={selectedService}
            size={size}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            kitchens={kitchens}
            livingRooms={livingRooms}
            entertainmentRooms={entertainmentRooms}
            offices={offices}
            diningRooms={diningRooms}
            laundryRooms={laundryRooms}
            extras={extras}
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