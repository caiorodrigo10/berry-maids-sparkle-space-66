import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const RecoverTime = () => {
  const navigate = useNavigate();

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
          <div className="bg-berry-lime/20 p-6 rounded-lg italic text-berry-purple">
            <p className="font-bauhaus text-xl">Relax. It's done.</p>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">
              With our dedicated team of cleaning professionals and commitment to excellence, we deliver exceptional residential cleaning services tailored to your needs. Trust us to maintain your home while you focus on what matters most to you.
            </p>
            <Button 
              onClick={() => navigate('/estimate')}
              className="bg-berry-purple hover:bg-berry-purple/90 text-white h-[48px] px-8 text-base font-semibold uppercase"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Get Your Estimate
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2092" 
            alt="Beautiful and clean modern living room" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RecoverTime;