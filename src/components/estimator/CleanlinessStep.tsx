interface CleanlinessStepProps {
  cleanLevel: number;
  setCleanLevel: (level: number) => void;
}

const CleanlinessStep = ({ cleanLevel, setCleanLevel }: CleanlinessStepProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-center">How dirty is it?</h3>
      <div className="flex justify-between gap-2">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => setCleanLevel(level)}
            className={`flex-1 py-3 px-4 rounded-lg border transition-all ${
              cleanLevel === level
                ? 'border-berry-purple bg-berry-purple text-white'
                : 'border-gray-200 hover:border-berry-purple'
            }`}
          >
            {level}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500 text-center">
        {cleanLevel === 1 && "Slightly dirty"}
        {cleanLevel === 2 && "Moderately dirty"}
        {cleanLevel === 3 && "Average dirty"}
        {cleanLevel === 4 && "Very dirty"}
        {cleanLevel === 5 && "Extremely dirty"}
      </p>
    </div>
  );
};

export default CleanlinessStep;