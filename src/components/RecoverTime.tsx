import React from 'react';
import { Button } from './ui/button';

const RecoverTime = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bauhaus text-berry-purple">
            Recover Your Time With Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Busy, rushed, and overwhelmed? Free time is a luxury, and your endless to-do list leaves little room for what truly matters. Let us handle your household tasks so you can reclaim your time – whether it's spending more time with family, pursuing a hobby, focusing on your career... or simply slowing down your hectic pace.
          </p>
          <div className="bg-white p-6 rounded-lg italic text-berry-purple">
            <p className="font-bauhaus text-xl">Relax. It's done.</p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">
              With <span className="text-berry-purple">450+ locations</span>, <span className="text-berry-purple">5,000 professionally trained team members</span> and over <span className="text-berry-purple">six million hours</span> spent cleaning annually, we are specialists in exceptional residential cleaning.
            </p>
            <Button className="bg-berry-purple hover:bg-berry-purple/90 text-white">
              Book Now
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
            alt="Woman relaxing while working from home" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RecoverTime;