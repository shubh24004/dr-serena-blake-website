'use client';

import React, { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agree: boolean;
};

type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agree?: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (
      !form.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = 'Valid email is required';
    }
    if (!form.message) newErrors.message = 'Please enter your message';
    if (!form.preferredTime) newErrors.preferredTime = 'Please select a time';
    if (!form.agree) newErrors.agree = 'You must agree before submitting';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted!');
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Dr. Blake</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold">Phone</label>
            <input
              type="tel"
              className="w-full border p-2 rounded"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold">What brings you here?</label>
            <textarea
              className="w-full border p-2 rounded"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Preferred Time</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="e.g. Weekday afternoons"
              value={form.preferredTime}
              onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            />
            {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            <label>I agree to the terms and privacy policy.</label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
