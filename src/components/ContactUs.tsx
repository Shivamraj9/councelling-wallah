import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6">Have questions or need more information? Reach out to us!</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <span>info@counsellingwallah.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <span>123 Education Street, Knowledge City, India</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
              <textarea placeholder="Your Message" rows={4} className="w-full p-2 border rounded"></textarea>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;