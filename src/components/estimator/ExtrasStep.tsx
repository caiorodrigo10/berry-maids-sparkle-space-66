import { Toggle } from "@/components/ui/toggle";
import { Home } from "lucide-react";

interface ExtrasStepProps {
  extras: string[];
  setExtras: (extras: string[]) => void;
}

const ExtrasStep = ({ extras, setExtras }: ExtrasStepProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2">
        <Home className="text-berry-purple" />
        <h3 className="text-xl font-semibold">Additional Services</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {['Windows', 'Fridge', 'Oven', 'Cabinets'].map((extra) => (
          <Toggle
            key={extra}
            pressed={extras.includes(extra)}
            onPressedChange={(pressed) =>
              setExtras(
                pressed
                  ? [...extras, extra]
                  : extras.filter((e) => e !== extra)
              )
            }
            className="w-full h-[48px] text-base font-semibold uppercase"
          >
            {extra}
          </Toggle>
        ))}
      </div>
    </div>
  );
};

export default ExtrasStep;