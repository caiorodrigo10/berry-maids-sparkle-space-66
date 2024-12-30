import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Berry Maids</h3>
            <p className="text-gray-400">Professional cleaning services for your home and office.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-berry-lime">
                <Phone size={18} />
                (123) 456-7890
              </a>
              <a href="mailto:info@berrymaids.com" className="flex items-center gap-2 text-gray-400 hover:text-berry-lime">
                <Mail size={18} />
                info@berrymaids.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-berry-lime">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-berry-lime">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Berry Maids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;