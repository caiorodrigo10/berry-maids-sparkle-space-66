import { Toggle } from "@/components/ui/toggle";
import { Home, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface ExtrasStepProps {
  extras: string[];
  setExtras: (extras: string[]) => void;
}

interface ExtraService {
  id: string;
  label: string;
  quantity: number;
}

const ExtrasStep = ({ extras, setExtras }: ExtrasStepProps) => {
  const [services, setServices] = useState<ExtraService[]>([
    { id: "extra_room", label: "Extra Room Cleaning (Not Listed)", quantity: 0 },
    { id: "internal_windows", label: "Internal Window Cleaning", quantity: 0 },
    { id: "oven_inside", label: "Inside Oven Cleaning", quantity: 0 },
    { id: "fridge_inside", label: "Inside Refrigerator Cleaning", quantity: 0 },
    { id: "pantry_inside", label: "Inside Pantry Cleaning", quantity: 0 },
    { id: "cabinets_inside", label: "Inside Cabinets Cleaning", quantity: 0 },
    { id: "has_pets", label: "Has Pets in the House?", quantity: 0 },
  ]);

  const handleQuantityChange = (serviceId: string, increment: boolean) => {
    setServices(prevServices =>
      prevServices.map(service => {
        if (service.id === serviceId) {
          const newQuantity = increment 
            ? service.quantity + 1 
            : Math.max(0, service.quantity - 1);
          
          // Update extras array based on quantity
          if (newQuantity > 0 && !extras.includes(service.id)) {
            setExtras([...extras, service.id]);
          } else if (newQuantity === 0 && extras.includes(service.id)) {
            setExtras(extras.filter(id => id !== service.id));
          }
          
          return { ...service, quantity: newQuantity };
        }
        return service;
      })
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2">
        <Home className="text-berry-purple" />
        <h3 className="text-xl font-semibold">Additional Services</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {services.map((service) => (
          <div key={service.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <span className="font-medium">{service.label}</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange(service.id, false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Minus size={20} />
              </button>
              <span className="w-6 text-center">{service.quantity}</span>
              <button
                onClick={() => handleQuantityChange(service.id, true)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtrasStep;