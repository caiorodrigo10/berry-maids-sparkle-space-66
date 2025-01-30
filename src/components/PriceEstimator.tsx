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
  const [selectedService, setSelectedService] = useState('standard_house_cleaning');
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
  const [zipCode, setZipCode] = useState('');
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
    let basePrice = 0;
    
    // Calculate rooms price first
    let roomsPrice = 0;
    roomsPrice += bedrooms * 15;           // $15 per bedroom
    roomsPrice += bathrooms * 20;          // $20 per bathroom
    roomsPrice += kitchens * 60;           // $60 per kitchen
    roomsPrice += livingRooms * 15;        // $15 per living room
    roomsPrice += entertainmentRooms * 15; // $15 per entertainment room
    roomsPrice += offices * 15;            // $15 per office
    roomsPrice += diningRooms * 15;        // $15 per dining room
    roomsPrice += laundryRooms * 15;       // $15 per laundry room
    
    // Only use square footage for office cleaning
    if (selectedService === 'office_cleaning_service') {
      basePrice = Math.max(120, size[0] * 0.10);
    } else {
      basePrice = roomsPrice;
      
      // Apply service multiplier for non-office services
      switch (selectedService) {
        case 'deep_house_cleaning':
          basePrice *= 2.0;
          break;
        case 'move_in_out_cleaning':
          basePrice *= 1.5;
          break;
        default:
          // standard_house_cleaning uses 1.0x multiplier (no change)
          break;
      }
    }
    
    // Calculate extras price
    let extrasPrice = 0;
    const extrasCounts = extras.reduce((acc: { [key: string]: number }, extra) => {
      acc[extra] = (acc[extra] || 0) + 1;
      return acc;
    }, {});

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

    const totalPrice = basePrice + extrasPrice;
    return totalPrice.toFixed(2);
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return selectedService !== '';
      case 2:
        return zipCode.length === 5;
      case 6:
        return (
          name.trim() !== '' &&
          email.trim() !== '' &&
          phone.trim() !== '' &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
          phone.replace(/\D/g, '').length >= 10
        );
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step < 7) setStep(step + 1);
    } else {
      console.log('Please fill in all required fields correctly before proceeding.');
    }
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
        return <LocationStep 
          nextStep={nextStep} 
          prevStep={prevStep} 
          zipCode={zipCode}
          setZipCode={setZipCode}
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
            zipCode={zipCode}
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
            calculatePrice={calculatePrice}
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