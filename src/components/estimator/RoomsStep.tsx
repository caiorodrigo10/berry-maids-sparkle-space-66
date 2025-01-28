import { Home, Plus, Minus } from 'lucide-react';

interface RoomsStepProps {
  bedrooms: number;
  setBedrooms: (value: number) => void;
  bathrooms: number;
  setBathrooms: (value: number) => void;
  kitchens: number;
  setKitchens: (value: number) => void;
  livingRooms: number;
  setLivingRooms: (value: number) => void;
  entertainmentRooms: number;
  setEntertainmentRooms: (value: number) => void;
  offices: number;
  setOffices: (value: number) => void;
  diningRooms: number;
  setDiningRooms: (value: number) => void;
  laundryRooms: number;
  setLaundryRooms: (value: number) => void;
}

const RoomsStep = ({ 
  bedrooms, 
  setBedrooms, 
  bathrooms, 
  setBathrooms,
  kitchens,
  setKitchens,
  livingRooms,
  setLivingRooms,
  entertainmentRooms,
  setEntertainmentRooms,
  offices,
  setOffices,
  diningRooms,
  setDiningRooms,
  laundryRooms,
  setLaundryRooms
}: RoomsStepProps) => {
  const rooms = [
    { label: "How many bedrooms?", value: bedrooms, setValue: setBedrooms },
    { label: "How many bathrooms?", value: bathrooms, setValue: setBathrooms },
    { label: "How many kitchens?", value: kitchens, setValue: setKitchens },
    { label: "How many living rooms?", value: livingRooms, setValue: setLivingRooms },
    { label: "How many entertainment rooms?", value: entertainmentRooms, setValue: setEntertainmentRooms },
    { label: "How many home offices?", value: offices, setValue: setOffices },
    { label: "How many dining rooms?", value: diningRooms, setValue: setDiningRooms },
    { label: "How many laundry rooms?", value: laundryRooms, setValue: setLaundryRooms },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {rooms.map((room, index) => (
        <div key={index} className="space-y-2 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center gap-2">
            <Home className="text-berry-purple" />
            <h3 className="text-lg font-semibold">{room.label}</h3>
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