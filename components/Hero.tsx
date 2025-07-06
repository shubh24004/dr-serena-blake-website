'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#f7f7f7] py-24 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Compassionate, Evidence-Based Therapy
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Helping individuals navigate anxiety, relationships, and trauma with care and understanding.
        </p>
        <a
          href="#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  );
}
