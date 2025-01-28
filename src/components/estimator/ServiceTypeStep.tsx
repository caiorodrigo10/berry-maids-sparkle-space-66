import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ServiceTypeStepProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
  nextStep: () => void;
}

const ServiceTypeStep = ({ selectedService, setSelectedService, nextStep }: ServiceTypeStepProps) => {
  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    nextStep();
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center">Select Service Type</h3>
        <RadioGroup
          value={selectedService}
          onValueChange={handleServiceChange}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2 p-4 rounded-lg border hover:border-berry-purple transition-colors">
            <RadioGroupItem value="standard" id="standard" />
            <Label htmlFor="standard" className="flex-1 cursor-pointer">
              <div className="font-semibold">Standard House Cleaning</div>
              <p className="text-sm text-gray-600">Regular maintenance cleaning including dusting, vacuuming, mopping, and basic bathroom/kitchen cleaning.</p>
            </Label>
          </div>

          <div className="flex items-center space-x-2 p-4 rounded-lg border hover:border-berry-purple transition-colors">
            <RadioGroupItem value="deep" id="deep" />
            <Label htmlFor="deep" className="flex-1 cursor-pointer">
              <div className="font-semibold">Deep House Cleaning</div>
              <p className="text-sm text-gray-600">Thorough cleaning of all areas including behind furniture, inside cabinets, and detailed attention to buildup and grime.</p>
            </Label>
          </div>

          <div className="flex items-center space-x-2 p-4 rounded-lg border hover:border-berry-purple transition-colors">
            <RadioGroupItem value="movein" id="movein" />
            <Label htmlFor="movein" className="flex-1 cursor-pointer">
              <div className="font-semibold">Move In/Out Cleaning</div>
              <p className="text-sm text-gray-600">Complete cleaning service to prepare a property for new occupants or before moving out, including deep cleaning of all surfaces.</p>
            </Label>
          </div>

          <div className="flex items-center space-x-2 p-4 rounded-lg border hover:border-berry-purple transition-colors">
            <RadioGroupItem value="office" id="office" />
            <Label htmlFor="office" className="flex-1 cursor-pointer">
              <div className="font-semibold">Office Cleaning</div>
              <p className="text-sm text-gray-600">Professional cleaning for commercial spaces including desks, common areas, and restrooms to maintain a healthy work environment.</p>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
};

export default ServiceTypeStep;