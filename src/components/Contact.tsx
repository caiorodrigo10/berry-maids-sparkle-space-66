import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section className="section-padding bg-berry-purple text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-center mb-12">Get Your Free Quote</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          <Input
            placeholder="Phone"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Textarea
            placeholder="Tell us about your cleaning needs"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            rows={4}
          />
          <div className="text-center">
            <Button className="w-[140px] h-[48px] text-base font-semibold uppercase bg-berry-lime hover:bg-berry-lime/90 text-black">
              Get Quote
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;