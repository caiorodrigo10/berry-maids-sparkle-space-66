import { Toggle } from "@/components/ui/toggle";

interface ExtrasStepProps {
  extras: string[];
  setExtras: (extras: string[]) => void;
}

const ExtrasStep = ({ extras, setExtras }: ExtrasStepProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-center">Additional Services</h3>
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
            className="w-full h-[48px] text-base"
          >
            {extra}
          </Toggle>
        ))}
      </div>
    </div>
  );
};

export default ExtrasStep;