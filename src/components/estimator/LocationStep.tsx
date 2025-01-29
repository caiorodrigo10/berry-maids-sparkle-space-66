import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LocationStep = () => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setZipCode(value);
    
    if (value.length === 5) {
      setError('');
    } else {
      setError('ZIP Code is required and must be 5 digits');
    }
  };

  return (
    <Card className="py-6 px-2">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="text-berry-purple" />
          <h3 className="text-xl font-semibold">Your Location</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="zipCode" className="text-lg uppercase">ZIP Code *</Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={handleZipCodeChange}
              className="mt-1 h-[48px] text-lg"
              maxLength={5}
              required
            />
            {error && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LocationStep;