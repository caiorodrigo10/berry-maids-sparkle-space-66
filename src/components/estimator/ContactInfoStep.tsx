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
    phone: ''
  });

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  const validateFields = () => {
    console.log('Validating fields:', { name, email, phone });
    
    const newErrors = {
      name: !name.trim() ? 'Name is required' : '',
      email: !email.trim() ? 'Email is required' : !isValidEmail(email) ? 'Invalid email format' : '',
      phone: !phone.trim() ? 'Phone is required' : !isValidPhone(phone) ? 'Phone must have at least 10 digits' : ''
    };
    
    console.log('Validation errors:', newErrors);
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const sendToWebhook = async () => {
    console.log('Starting webhook submission...');
    
    if (!validateFields()) {
      console.log('Validation failed, not sending webhook');
      return;
    }

    const estimatedPrice = calculatePrice ? calculatePrice() : '0';

    // Get ZIP code from input
    const zipCodeInput = document.getElementById('zipCode') as HTMLInputElement;
    const zipCode = zipCodeInput ? zipCodeInput.value : '';

    // Initialize additionalServices with all possible services set to 0
    const defaultAdditionalServices = {
      extra_room: 0,
      internal_windows: 0,
      oven_inside: 0,
      fridge_inside: 0,
      pantry_inside: 0,
      cabinets_inside: 0,
      has_pets: 0
    };

    // Count occurrences of each service in extras array
    const additionalServices = extras.reduce((acc, extra) => ({
      ...acc,
      [extra]: (acc[extra as keyof typeof acc] || 0) + 1
    }), defaultAdditionalServices);

    const webhookData = {
      contact: {
        name,
        email,
        phone,
        zipCode // Adding ZIP code to the contact information
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
      additionalServices, // Now includes all services with 0 for unused ones
    };

    console.log('Webhook payload:', JSON.stringify(webhookData, null, 2));

    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/M7oB7f6sfTVCZ1ItHTHG/webhook-trigger/a0e6d77d-7c04-4cc0-8829-2cceb87c85cc';

    try {
      console.log('Sending request to webhook URL:', webhookUrl);
      
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

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Webhook response:', responseData);

      toast({
        title: "Success!",
        description: "Your information has been submitted successfully.",
      });
      
    } catch (error) {
      console.error('Error sending webhook:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your information. Please try again later.",
      });
    }
  };

  useEffect(() => {
    console.log('Fields changed:', { name, email, phone });
    if (name && isValidEmail(email) && isValidPhone(phone)) {
      console.log('All fields valid, sending webhook...');
      sendToWebhook();
    }
  }, [name, email, phone]);

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
      </div>
    </div>
  );
};

export default ContactInfoStep;