'use client';
import React from 'react';
import { Heart, Users, Brain } from 'lucide-react';

const services = [
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: 'Anxiety & Stress',
    description: 'Personalized therapy for managing anxiety, panic, and everyday stressors with compassion.',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: 'Relationships & Couples',
    description: 'Helping individuals and couples navigate challenges in communication, intimacy, and trust.',
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: 'Trauma & Healing',
    description: 'Evidence-based therapy for trauma recovery, PTSD, and emotional wounds.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Areas of Focus</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
