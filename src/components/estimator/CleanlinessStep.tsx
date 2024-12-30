import { Home } from 'lucide-react';

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
      <div className="flex items-center justify-center gap-2">
        <Home className="text-berry-purple" />
        <h3 className="text-xl font-semibold">How dirty is it?</h3>
      </div>
      
      <div className="flex justify-center gap-4 px-2">
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