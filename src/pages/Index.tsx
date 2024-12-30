import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import ServiceAreas from '@/components/ServiceAreas';
import BeforeAfter from '@/components/BeforeAfter';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RecoverTime from '@/components/RecoverTime';
import LiveMore from '@/components/LiveMore';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecoverTime />
      <LiveMore />
      <div id="services">
        <Services />
      </div>
      <div id="areas">
        <ServiceAreas />
      </div>
      <Features />
      <BeforeAfter />
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;