import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="mb-20 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-pink-600">
            Contact
          </p>

          <h1
            className="max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            We'd love to
            <br />
            <span className="text-pink-600">hear from you.</span>
          </h1>
        </div>

        <div className="lg:pb-2">
          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Have questions about our collection, need styling advice, or just want to say hello? Drop us a line below.
          </p>
        </div>
      </section>

      {/* Main Grid: Form and Info */}
      <div className="grid gap-16 border-t border-zinc-200 pt-16 lg:grid-cols-[2fr_1fr]">
        {/* Form Container */}
        <div>
          {isSubmitted ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-[28px] bg-emerald-50 text-emerald-800 p-8 border border-emerald-200">
              <span className="text-4xl mb-4">✓</span>
              <h3 className="text-xl font-semibold">Message Sent Successfully</h3>
              <p className="mt-2 text-sm text-emerald-600 text-center">
                Thank you for reaching out. We will get back to you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium outline-none transition focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium outline-none transition focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-3xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium outline-none transition focus:border-pink-500 focus:ring-1 focus:ring-pink-500 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-zinc-900 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-8">
          <div className="rounded-[28px] bg-white p-8 border border-zinc-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">Contact Info</h4>
            <div className="space-y-6">
              <div>
                <span className="block text-[10px] uppercase font-semibold text-zinc-400">General Inquiries</span>
                <a href="mailto:hello@novadesign.com" className="text-sm font-medium text-zinc-900 transition hover:text-pink-600">
                  hello@novadesign.com
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-semibold text-zinc-400">Phone Support</span>
                <a href="tel:+15550199" className="text-sm font-medium text-zinc-900 transition hover:text-pink-600">
                  +1 (555) 0199
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-8 border border-zinc-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">Our Studio</h4>
            <div>
              <p className="text-sm font-medium text-zinc-900 leading-6">
                120 Design Quarter,
                <br />
                Suite 400
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
