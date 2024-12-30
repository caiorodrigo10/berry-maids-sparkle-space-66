import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface StepNavigationProps {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}

const StepNavigation = ({ step, prevStep, nextStep }: StepNavigationProps) => {
  return (
    <>
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
          disabled={step === 7}
          className="gap-2 bg-berry-purple hover:bg-berry-purple/90 text-white"
        >
          Next <ChevronRight />
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="text-sm text-gray-500">
          Step {step} of 7
        </span>
      </div>
    </>
  );
};

export default StepNavigation;