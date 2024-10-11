import React from 'react';
import { FileText, BookOpen, Calendar, Link } from 'lucide-react';

const Resources = () => {
  const resources = [
    { icon: <FileText className="w-6 h-6" />, title: "Study Plans", description: "Customized study schedules for effective preparation" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Articles", description: "In-depth articles on JEE Mains topics and strategies" },
    { icon: <Calendar className="w-6 h-6" />, title: "Exam Tips", description: "Last-minute tips and tricks for the JEE Mains exam" },
    { icon: <Link className="w-6 h-6" />, title: "Useful Links", description: "Curated list of helpful JEE Mains preparation resources" },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ icon, title, description }) => (
  <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Resources;