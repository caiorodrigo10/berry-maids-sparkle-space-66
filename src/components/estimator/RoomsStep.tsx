import { Bed, Bath, Plus, Minus } from 'lucide-react';

interface RoomsStepProps {
  bedrooms: number;
  setBedrooms: (value: number) => void;
  bathrooms: number;
  setBathrooms: (value: number) => void;
}

const RoomsStep = ({ bedrooms, setBedrooms, bathrooms, setBathrooms }: RoomsStepProps) => {
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
            className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <Minus size={20} />
          </button>
          <span className="text-2xl w-8 text-center">{bedrooms}</span>
          <button
            onClick={() => setBedrooms(bedrooms + 1)}
            className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
            className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <Minus size={20} />
          </button>
          <span className="text-2xl w-8 text-center">{bathrooms}</span>
          <button
            onClick={() => setBathrooms(bathrooms + 1)}
            className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomsStep;