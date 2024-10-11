import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Your Pathway to Success in JEE Mains!</h1>
        <p className="text-xl mb-8">Expert guidance and personalized counseling to help you excel in your JEE Mains journey.</p>
        <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;