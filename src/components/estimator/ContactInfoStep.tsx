import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

interface ContactInfoStepProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  // Adicionando props necessárias para o webhook
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
  // Função para validar email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Função para validar telefone (formato básico)
  const isValidPhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };

  // Função para enviar dados para o webhook
  const sendToWebhook = async () => {
    if (!name || !isValidEmail(email) || !isValidPhone(phone)) {
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

  // Efeito para monitorar mudanças nos campos e enviar webhook quando todos estiverem preenchidos
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
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;