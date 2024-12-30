interface CleanlinessStepProps {
  cleanLevel: number;
  setCleanLevel: (level: number) => void;
}

const CleanlinessStep = ({ cleanLevel, setCleanLevel }: CleanlinessStepProps) => {
  const getLevelDescription = (level: number) => {
    switch (level) {
      case 1:
        return "Light cleaning needed - Just needs a refresh";
      case 2:
        return "Regular cleaning - Some visible dirt";
      case 3:
        return "Moderate cleaning - Noticeable dirt";
      case 4:
        return "Deep cleaning - Heavy dirt buildup";
      case 5:
        return "Extreme cleaning - Extensive dirt/mess";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-center text-berry-purple">How dirty is it?</h3>
        <p className="text-center text-gray-600">Select the level that best describes your space</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((level) => (
          <div key={level} className="flex flex-col items-center space-y-2">
            <button
              onClick={() => setCleanLevel(level)}
              className={`w-full py-6 rounded-lg border-2 transition-all text-xl font-semibold
                ${cleanLevel === level 
                  ? 'border-berry-purple bg-berry-purple text-white' 
                  : 'border-gray-200 hover:border-berry-purple text-gray-700'
                }`}
            >
              {level}
            </button>
            <p className="text-xs text-center text-gray-600 px-2">
              {getLevelDescription(level)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleanlinessStep;