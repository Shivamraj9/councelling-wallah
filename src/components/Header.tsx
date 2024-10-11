import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 mr-2" />
          <span className="text-2xl font-bold">Counselling Wallah</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-orange-300">About</a></li>
            <li><a href="#services" className="hover:text-orange-300">Services</a></li>
            <li><a href="#testimonials" className="hover:text-orange-300">Testimonials</a></li>
            <li><a href="#resources" className="hover:text-orange-300">Resources</a></li>
            <li><a href="#contact" className="hover:text-orange-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;