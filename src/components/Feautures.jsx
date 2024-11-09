import React from 'react';
import { Code2, Brain, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Cutting-edge Curriculum',
    description: 'Learn the latest in AI, from neural networks to reinforcement learning.',
  },
  {
    icon: Code2,
    title: 'Hands-on Projects',
    description: 'Build real-world AI applications with guidance from industry experts.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from leading AI researchers and practitioners in the field.',
  },
  {
    icon: Trophy,
    title: 'Career Support',
    description: 'Get placement assistance and connect with top AI companies.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Proviz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with expert instruction to provide
            the best AI education experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {React.createElement(feature.icon, { className: 'w-6 h-6 text-purple-600' })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
