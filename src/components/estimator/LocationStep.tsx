import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const LocationStep = () => {
  const [zipCode, setZipCode] = useState('');

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-berry-purple">
          <MapPin className="w-6 h-6" />
          <h3 className="text-2xl font-bauhaus">Your Location</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mt-1"
              maxLength={5}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80" 
                alt="Street view map illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LocationStep;