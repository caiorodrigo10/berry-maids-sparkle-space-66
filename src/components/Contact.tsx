import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GOHIGHLEVEL_API_KEY}`
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' '),
          email: formData.email,
          phone: formData.phone,
          customField: {
            message: formData.message
          }
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="section-padding bg-berry-purple text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Get Your Free Quote</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
          </div>
          <Input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            required
          />
          <Textarea
            name="message"
            placeholder="Tell us about your cleaning needs"
            value={formData.message}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            rows={4}
          />
          <div className="text-center">
            <Button 
              type="submit"
              className="bg-[#C1FF52] hover:bg-[#C1FF52]/90 text-black px-8 py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Quote'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;