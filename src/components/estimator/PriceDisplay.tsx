import EstimateSummary from './EstimateSummary';

interface PriceDisplayProps {
  price: string;
  size: number[];
  setSize: (size: number[]) => void;
  bedrooms: number;
  setBedrooms: (value: number) => void;
  bathrooms: number;
  setBathrooms: (value: number) => void;
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
  extras,
  setExtras,
}: PriceDisplayProps) => {
  // Remove .00 from price if it exists
  const formattedPrice = price.replace('.00', '');

  return (
    <div className="space-y-8">
      <div className="bg-[#F2FCE2] text-berry-purple p-6 rounded-lg">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold">${formattedPrice}</span>
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
        extras={extras}
        setExtras={setExtras}
      />
    </div>
  );
};

export default PriceDisplay;