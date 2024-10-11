import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Resources />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;