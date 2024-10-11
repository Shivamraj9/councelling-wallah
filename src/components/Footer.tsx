import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Counselling Wallah</h3>
            <p>Empowering JEE Mains aspirants to achieve their dreams.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-orange-300">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-300">Services</a></li>
              <li><a href="#testimonials" className="hover:text-orange-300">Testimonials</a></li>
              <li><a href="#resources" className="hover:text-orange-300">Resources</a></li>
              <li><a href="#contact" className="hover:text-orange-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-300"><Facebook /></a>
              <a href="#" className="hover:text-orange-300"><Twitter /></a>
              <a href="#" className="hover:text-orange-300"><Instagram /></a>
              <a href="#" className="hover:text-orange-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Counselling Wallah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;