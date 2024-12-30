import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface StepNavigationProps {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}

const StepNavigation = ({ step, prevStep, nextStep }: StepNavigationProps) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (step === 1) {
      navigate('/');
    } else {
      prevStep();
    }
  };

  return (
    <>
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrevClick}
          className="gap-2"
        >
          <ChevronLeft /> Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={step === 6}
          className="gap-2 bg-berry-purple hover:bg-berry-purple/90 text-white"
        >
          Next <ChevronRight />
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="text-sm text-gray-500">
          Step {step} of 6
        </span>
      </div>
    </>
  );
};

export default StepNavigation;