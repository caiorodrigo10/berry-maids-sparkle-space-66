import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const EstimateDisclaimer = () => {
  const scrollToEstimator = () => {
    const element = document.getElementById('price-estimator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-berry-purple text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bauhaus mb-6">
            Instant Price Estimate
          </h1>
          <p className="text-lg opacity-90 mb-4">
            Get an immediate estimate for your cleaning service in just a few steps. Please note that this is an automated calculation and the final price may vary based on specific conditions of your home.
          </p>
          <p className="text-sm opacity-80 mb-8">
            Factors that might affect the final price include: accessibility, parking situation, specific cleaning requirements, and seasonal variations.
          </p>
          <Button 
            onClick={scrollToEstimator}
            className="bg-berry-lime text-black hover:bg-berry-lime/90 font-semibold text-lg px-8 py-6"
          >
            Calculate Your Estimate <ChevronDown className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EstimateDisclaimer;