import React, { useState } from 'react';

const Contacat = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="relative bg-slate-50 min-h-[calc(100vh-4rem)] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background blobs for premium glassmorphism vibe */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
            Get In <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-base text-gray-600">
            Have an idea or a question? Send us a message and we'll reply as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm placeholder-gray-400 bg-gray-50/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm placeholder-gray-400 bg-gray-50/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm placeholder-gray-400 bg-gray-50/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacat;