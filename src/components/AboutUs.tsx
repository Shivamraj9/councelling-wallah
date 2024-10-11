import React from 'react';
import { Target, Users, BookOpen } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Target className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p>To empower JEE Mains aspirants with personalized guidance and expert mentorship.</p>
          </div>
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">Expert Mentors</h3>
            <p>Our team consists of experienced educators and JEE toppers dedicated to your success.</p>
          </div>
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-semibold mb-2">Supportive Community</h3>
            <p>Join a network of motivated students and mentors to boost your preparation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;