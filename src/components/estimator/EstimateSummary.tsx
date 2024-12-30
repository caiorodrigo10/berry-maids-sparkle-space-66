import { Home, MapPin, Bed, Bath, Plus, Minus } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";

interface EstimateSummaryProps {
  size: number[];
  setSize: (size: number[]) => void;
  bedrooms: number;
  setBedrooms: (value: number) => void;
  bathrooms: number;
  setBathrooms: (value: number) => void;
  cleanLevel: number;
  setCleanLevel: (value: number) => void;
  extras: string[];
  setExtras: (extras: string[]) => void;
}

const EstimateSummary = ({
  size,
  setSize,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  cleanLevel,
  setCleanLevel,
  extras,
  setExtras,
}: EstimateSummaryProps) => {
  return (
    <div className="space-y-6 bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-center mb-4">Service Summary</h3>
      
      {/* House Size Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Home className="text-berry-purple" />
          <span className="font-medium">House Size</span>
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

      {/* Rooms Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Bed className="text-berry-purple" />
          <span className="font-medium">Bedrooms</span>
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

        <div className="flex items-center gap-2">
          <Bath className="text-berry-purple" />
          <span className="font-medium">Bathrooms</span>
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

      {/* Cleanliness Level */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Home className="text-berry-purple" />
          <span className="font-medium">Cleanliness Level</span>
        </div>
        <div className="flex justify-between gap-2 px-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={level} className="flex flex-col items-center space-y-2">
              <button
                onClick={() => setCleanLevel(level)}
                className={`w-[48px] h-[48px] rounded-lg border-2 transition-all text-xl font-semibold uppercase
                  ${cleanLevel === level 
                    ? 'border-berry-purple bg-berry-purple text-white' 
                    : 'border-gray-200 hover:border-berry-purple text-gray-700'
                  }`}
              >
                {level}
              </button>
              {(level === 1 || level === 5) && (
                <p className="text-xs text-center text-gray-600">
                  {level === 1 ? 'Light' : 'Heavy'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Extra Services */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Home className="text-berry-purple" />
          <span className="font-medium">Additional Services</span>
        </div>
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
              className="w-full h-[48px] text-base font-semibold uppercase"
            >
              {extra}
            </Toggle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstimateSummary;