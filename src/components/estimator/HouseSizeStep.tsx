import { Home } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

interface HouseSizeStepProps {
  size: number[];
  setSize: (size: number[]) => void;
}

const HouseSizeStep = ({ size, setSize }: HouseSizeStepProps) => {
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
};

export default HouseSizeStep;