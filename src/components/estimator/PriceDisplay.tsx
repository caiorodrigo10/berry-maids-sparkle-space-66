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
}: PriceDisplayProps) => {
  // Remove .00 from price if it exists
  const formattedPrice = price.replace('.00', '');

  return (
    <div className="space-y-8">
      <div className="bg-[#F2FCE2] text-berry-purple p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl font-semibold">Estimated Price</h3>
          <span className="text-6xl font-bold">${formattedPrice}</span>
          <p className="text-center mt-2 text-sm opacity-90">
            Estimated price for one-time cleaning
          </p>
        </div>
      </div>

      {/* Schedule Button */}
      <div className="flex justify-center mt-8">
        <a 
          href="https://www.sricleaningservice.com/widget/booking/q0XvGdLacsrIge6pkIY2" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-berry-purple text-white px-12 py-4 rounded-lg font-semibold uppercase
                   transform transition-all duration-300 hover:scale-105
                   hover:shadow-lg hover:bg-berry-purple/90
                   active:scale-95 active:shadow-md
                   animate-float"
        >
          Schedule Now
        </a>
      </div>
    </div>
  );
};

export default PriceDisplay;