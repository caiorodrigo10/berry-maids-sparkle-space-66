import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

interface ContactInfoStepProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  zipCode: string;
  setZipCode: (zipCode: string) => void;
  selectedService: string;
  size: number[];
  bedrooms: number;
  bathrooms: number;
  kitchens: number;
  livingRooms: number;
  entertainmentRooms: number;
  offices: number;
  diningRooms: number;
  laundryRooms: number;
  extras: string[];
  calculatePrice?: () => string;
}

const ContactInfoStep = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  zipCode,
  setZipCode,
  selectedService,
  size,
  bedrooms,
  bathrooms,
  kitchens,
  livingRooms,
  entertainmentRooms,
  offices,
  diningRooms,
  laundryRooms,
  extras,
  calculatePrice,
}: ContactInfoStepProps) => {
  const { toast } = useToast();
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: ''
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  const isValidZipCode = (zipCode: string) => {
    return zipCode.length === 5;
  };

  const validateFields = () => {
    const newErrors = {
      name: !name.trim() ? 'Name is required' : '',
      email: !email.trim() ? 'Email is required' : !isValidEmail(email) ? 'Invalid email format' : '',
      phone: !phone.trim() ? 'Phone is required' : !isValidPhone(phone) ? 'Phone must have at least 10 digits' : '',
      zipCode: !zipCode.trim() ? 'ZIP Code is required' : !isValidZipCode(zipCode) ? 'ZIP Code must be 5 digits' : ''
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const sendToWebhook = async () => {
    if (!validateFields() || hasSubmitted) {
      return;
    }

    const estimatedPrice = calculatePrice ? calculatePrice() : '0';

    const webhookData = {
      contact: {
        name,
        email,
        phone,
        zipCode
      },
      service: {
        type: selectedService,
        details: {
          rooms: {
            bedrooms,
            bathrooms,
            kitchens,
            livingRooms,
            entertainmentRooms,
            offices,
            diningRooms,
            laundryRooms,
          },
          squareFootage: size[0],
        },
        estimatedPrice: parseFloat(estimatedPrice),
      },
      additionalServices: {
        extra_room: extras.filter(e => e === 'extra_room').length,
        internal_windows: extras.filter(e => e === 'internal_windows').length,
        oven_inside: extras.filter(e => e === 'oven_inside').length,
        fridge_inside: extras.filter(e => e === 'fridge_inside').length,
        pantry_inside: extras.filter(e => e === 'pantry_inside').length,
        cabinets_inside: extras.filter(e => e === 'cabinets_inside').length,
        has_pets: extras.includes('has_pets') ? 1 : 0
      },
    };

    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/M7oB7f6sfTVCZ1ItHTHG/webhook-trigger/a0e6d77d-7c04-4cc0-8829-2cceb87c85cc';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setHasSubmitted(true);
      
      toast({
        title: "Success!",
        description: "Your information has been submitted successfully.",
      });
      
    } catch (error) {
      console.error('Error sending webhook:', error);
      
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your information. Please try again later.",
      });
    }
  };

  useEffect(() => {
    if (name && isValidEmail(email) && isValidPhone(phone) && isValidZipCode(zipCode) && !hasSubmitted) {
      sendToWebhook();
    }
  }, [name, email, phone, zipCode]);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Contact Information</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && (
            <Alert variant="destructive">
              <AlertDescription>{errors.name}</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <Alert variant="destructive">
              <AlertDescription>{errors.email}</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && (
            <Alert variant="destructive">
              <AlertDescription>{errors.phone}</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code *</Label>
          <Input
            id="zipCode"
            type="text"
            placeholder="Enter your ZIP code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            maxLength={5}
            required
          />
          {errors.zipCode && (
            <Alert variant="destructive">
              <AlertDescription>{errors.zipCode}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;