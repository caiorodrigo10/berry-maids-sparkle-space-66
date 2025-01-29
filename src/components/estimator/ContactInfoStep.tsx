import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
}: ContactInfoStepProps) => {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Função para validar email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Função para validar telefone (formato básico)
  const isValidPhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  const validateFields = () => {
    const newErrors = {
      name: !name.trim() ? 'Name is required' : '',
      email: !email.trim() ? 'Email is required' : !isValidEmail(email) ? 'Invalid email format' : '',
      phone: !phone.trim() ? 'Phone is required' : !isValidPhone(phone) ? 'Phone must have at least 10 digits' : ''
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  // Função para enviar dados para o webhook
  const sendToWebhook = async () => {
    if (!validateFields()) {
      return;
    }

    const webhookData = {
      contact: {
        name,
        email,
        phone,
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
      },
      additionalServices: extras.reduce((acc, extra) => ({
        ...acc,
        [extra]: 1,
      }), {}),
    };

    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/M7oB7f6sfTVCZ1ItHTHG/webhook-trigger/a0e6d77d-7c04-4cc0-8829-2cceb87c85cc',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
          mode: 'no-cors'
        }
      );
      console.log('Webhook sent successfully');
    } catch (error) {
      console.error('Error sending webhook:', error);
    }
  };

  useEffect(() => {
    if (name && isValidEmail(email) && isValidPhone(phone)) {
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