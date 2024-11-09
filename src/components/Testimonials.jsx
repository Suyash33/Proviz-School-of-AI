import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'AI Research Engineer at Google',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: "The practical approach to AI education at Proviz helped me transition from theory to real-world applications. Now I'm working on cutting-edge AI projects.",
  },
  {
    name: 'Michael Rodriguez',
    role: 'ML Team Lead at Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: "Proviz's curriculum is perfectly balanced between theory and practice. The mentorship I received was invaluable for my career growth.",
  },
  {
    name: 'Aisha Patel',
    role: 'AI Startup Founder',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'The network I built at Proviz was instrumental in launching my AI startup. The community here is incredibly supportive and knowledgeable.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni who are now leading AI initiatives across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
