'use client';
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_109710-1404.jpg"
            alt="Dr. Serena Blake"
            width={500}
            height={600}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Dr. Serena Blake</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Dr. Serena Blake is a licensed clinical psychologist based in Los Angeles, specializing in anxiety, trauma, and relationship concerns. With a warm, supportive approach grounded in evidence-based practices, she helps individuals feel heard, understood, and empowered to heal.
          </p>
        </div>
      </div>
    </section>
  );
}
