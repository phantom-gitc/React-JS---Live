import React from 'react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Creating stunning, responsive interfaces and seamless navigation paths that drive high engagement and retention.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      title: "Frontend Engineering",
      desc: "Pixel-perfect implementation of layouts in modern React, Vite, and tailwind technologies, built to be clean and fast.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "Application Architecture",
      desc: "Designing scalable codebases, handling routing layouts, state management, and structuring folders for scale.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "bg-pink-50 text-pink-600 border-pink-100"
    },
    {
      title: "Optimized Performance",
      desc: "Speed audits, bundle sizing optimization, code splitting, and lazy loading strategies to reach 100 lighthouse scores.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      title: "Creative Copywriting",
      desc: "Crafting highly effective headlines, taglines, and marketing microcopy that resonates deeply with your target audience.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Brand Strategy",
      desc: "Defining visual identities, primary tone, and style systems that help startups stand out in competitive spaces.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "bg-yellow-50 text-yellow-600 border-yellow-100"
    }
  ];

  return (
    <div className="relative bg-slate-50 min-h-[calc(100vh-4rem)] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We deliver state-of-the-art engineering and premium designs. Discover how we can elevate your product experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-gray-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
