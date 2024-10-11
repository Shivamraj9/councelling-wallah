import React from 'react';
import { UserPlus, Users, BookOpen, PenTool, BarChart } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<UserPlus className="w-12 h-12 text-blue-600" />}
            title="One-on-One Sessions"
            description="Personalized counseling tailored to your specific needs and goals."
          />
          <ServiceCard
            icon={<Users className="w-12 h-12 text-blue-600" />}
            title="Group Workshops"
            description="Collaborative learning sessions to enhance your problem-solving skills."
          />
          <ServiceCard
            icon={<BookOpen className="w-12 h-12 text-blue-600" />}
            title="Study Material"
            description="Comprehensive resources and practice materials for effective preparation."
          />
          <ServiceCard
            icon={<PenTool className="w-12 h-12 text-blue-600" />}
            title="Mock Tests"
            description="Simulated JEE Mains exams to assess and improve your performance."
          />
          <ServiceCard
            icon={<BarChart className="w-12 h-12 text-blue-600" />}
            title="Exam Strategies"
            description="Expert tips and techniques to maximize your score in JEE Mains."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Services;