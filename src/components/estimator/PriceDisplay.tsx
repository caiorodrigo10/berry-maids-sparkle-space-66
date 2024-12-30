interface PriceDisplayProps {
  price: string;
}

const PriceDisplay = ({ price }: PriceDisplayProps) => {
  return (
    <div className="bg-berry-purple text-white p-6 rounded-lg">
      <div className="flex items-center justify-center gap-2">
        <span className="text-4xl font-bold">${price}</span>
      </div>
      <p className="text-center mt-2 text-sm opacity-90">
        Estimated price for one-time cleaning
      </p>
    </div>
  );
};

export default PriceDisplay;