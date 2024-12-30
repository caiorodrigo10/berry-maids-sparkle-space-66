import EstimateSummary from './EstimateSummary';

interface PriceDisplayProps {
  price: string;
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

const PriceDisplay = ({
  price,
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
}: PriceDisplayProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-berry-purple text-white p-6 rounded-lg">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold">${price}</span>
        </div>
        <p className="text-center mt-2 text-sm opacity-90">
          Estimated price for one-time cleaning
        </p>
      </div>

      <EstimateSummary
        size={size}
        setSize={setSize}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
        cleanLevel={cleanLevel}
        setCleanLevel={setCleanLevel}
        extras={extras}
        setExtras={setExtras}
      />
    </div>
  );
};

export default PriceDisplay;