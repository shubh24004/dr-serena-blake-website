'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'Dr. Blake is an out-of-network provider. A superbill can be provided for potential reimbursement.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes, Dr. Blake offers secure teletherapy sessions for clients located in California.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations require 24-hour notice to avoid a full session fee charge.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 px-6 border-t">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
