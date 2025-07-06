'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.message) newErrors.message = 'Please tell us what brings you here';
    if (!form.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!form.agree) newErrors.agree = 'Consent is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Integration with backend/email can go here
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Dr. Blake</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Phone', name: 'phone', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Preferred time to reach you', name: 'preferredTime', type: 'text' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={(form as any)[field.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors[field.name] && (
                <p className="text-sm text-red-500 mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
          <div>
            <label className="block font-medium">What brings you here?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded h-28"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to be contacted</label>
          </div>
          {errors.agree && (
            <p className="text-sm text-red-500 mt-1">{errors.agree}</p>
          )}
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
