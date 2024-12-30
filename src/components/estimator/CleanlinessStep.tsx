interface CleanlinessStepProps {
  cleanLevel: number;
  setCleanLevel: (level: number) => void;
}

const CleanlinessStep = ({ cleanLevel, setCleanLevel }: CleanlinessStepProps) => {
  const getLevelDescription = (level: number) => {
    switch (level) {
      case 1:
        return "Light";
      case 5:
        return "Heavy";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-berry-purple uppercase font-bauhaus">How dirty is it?</h3>
        <p className="text-center text-gray-600 text-lg">Select the level that best describes your space</p>
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
                {getLevelDescription(level)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleanlinessStep;