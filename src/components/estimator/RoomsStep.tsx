import { Home, Plus, Minus } from 'lucide-react';

interface RoomsStepProps {
  bedrooms: number;
  setBedrooms: (value: number) => void;
  bathrooms: number;
  setBathrooms: (value: number) => void;
}

const RoomsStep = ({ bedrooms, setBedrooms, bathrooms, setBathrooms }: RoomsStepProps) => {
  const rooms = [
    { label: "How many bedrooms?", value: bedrooms, setValue: setBedrooms },
    { label: "How many bathrooms?", value: bathrooms, setValue: setBathrooms },
    { label: "How many kitchens?", value: bedrooms, setValue: setBedrooms },
    { label: "How many living rooms?", value: bathrooms, setValue: setBathrooms },
    { label: "How many entertainment rooms?", value: bedrooms, setValue: setBedrooms },
    { label: "How many home offices?", value: bathrooms, setValue: setBathrooms },
    { label: "How many dining rooms?", value: bedrooms, setValue: setBedrooms },
    { label: "How many laundry rooms?", value: bathrooms, setValue: setBathrooms },
  ];

  return (
    <div className="space-y-6">
      {rooms.map((room, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Home className="text-berry-purple" />
            <h3 className="text-xl font-semibold">{room.label}</h3>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => room.setValue(Math.max(0, room.value - 1))}
              className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <Minus size={20} />
            </button>
            <span className="text-2xl w-8 text-center">{room.value}</span>
            <button
              onClick={() => room.setValue(room.value + 1)}
              className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomsStep;