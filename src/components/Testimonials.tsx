import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      score: "AIR 156",
      content: "Counselling Wallah's personalized guidance was instrumental in my JEE Mains success. The mentors truly understand each student's needs.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80"
    },
    {
      name: "Rahul Verma",
      score: "AIR 342",
      content: "The mock tests and exam strategies provided by Counselling Wallah gave me the confidence to excel in JEE Mains. Highly recommended!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80"
    },
    {
      name: "Ananya Patel",
      score: "AIR 589",
      content: "Thanks to Counselling Wallah's support, I improved my weak areas and achieved a score I never thought possible. They truly care about student success.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, score, content, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-blue-600 font-medium">{score}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{content}</p>
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  </div>
);

export default Testimonials;