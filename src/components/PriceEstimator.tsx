import React, { useState } from 'react';
import { Bed, Bath, Home, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";

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
    
    // Add extras
    extras.forEach(extra => {
      basePrice += 30; // $30 per extra
    });

    return basePrice.toFixed(2);
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Home className="text-berry-purple" />
              <h3 className="text-xl font-semibold">House Size</h3>
            </div>
            <div className="px-4">
              <Slider
                value={size}
                onValueChange={setSize}
                max={300}
                step={10}
                className="w-full"
              />
              <p className="text-center mt-2">{size[0]} sq ft</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Bed className="text-berry-purple" />
                <h3 className="text-xl font-semibold">How many bedrooms?</h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl w-8 text-center">{bedrooms}</span>
                <button
                  onClick={() => setBedrooms(bedrooms + 1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Bath className="text-berry-purple" />
                <h3 className="text-xl font-semibold">How many bathrooms?</h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl w-8 text-center">{bathrooms}</span>
                <button
                  onClick={() => setBathrooms(bathrooms + 1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How dirty is it?</h3>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => setCleanLevel(level)}
                  className={`flex-1 py-3 px-4 rounded-lg border transition-all ${
                    cleanLevel === level
                      ? 'border-berry-purple bg-berry-purple text-white'
                      : 'border-gray-200 hover:border-berry-purple'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              {cleanLevel === 1 && "Slightly dirty"}
              {cleanLevel === 2 && "Moderately dirty"}
              {cleanLevel === 3 && "Average dirty"}
              {cleanLevel === 4 && "Very dirty"}
              {cleanLevel === 5 && "Extremely dirty"}
            </p>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Additional Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Windows', 'Fridge', 'Oven', 'Cabinets'].map((extra) => (
                <Toggle
                  key={extra}
                  pressed={extras.includes(extra)}
                  onPressedChange={(pressed) =>
                    setExtras(
                      pressed
                        ? [...extras, extra]
                        : extras.filter((e) => e !== extra)
                    )
                  }
                  className="w-full"
                >
                  {extra}
                </Toggle>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="bg-berry-purple text-white p-6 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold">${calculatePrice()}</span>
            </div>
            <p className="text-center mt-2 text-sm opacity-90">
              Estimated price for one-time cleaning
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Calculate Your Price
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="gap-2"
            >
              <ChevronLeft /> Previous
            </Button>
            <Button
              onClick={nextStep}
              disabled={step === 5}
              className="gap-2"
            >
              Next <ChevronRight />
            </Button>
          </div>

          <div className="mt-4 flex justify-center">
            <span className="text-sm text-gray-500">
              Step {step} of 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
