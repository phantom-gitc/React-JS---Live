import React from 'react';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-[calc(100vh-4rem)]">
      {/* Background blobs for premium glassmorphism vibe */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 mb-6 border border-gray-200/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Version 2.0 Live
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Build Something <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Incredible</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to the future of minimalist web aesthetics. Experience lightning fast navigation, gorgeous transitions, and developer-centric layouts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 text-base font-semibold text-white bg-black hover:bg-gray-800 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="px-8 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-full transition-all duration-300 shadow-sm cursor-pointer transform hover:-translate-y-0.5">
              Read Docs
            </button>
          </div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Lightning Performance",
              desc: "Engineered for speed. Built with modern React Router navigation ensuring instantaneous transition between pages.",
              color: "border-t-4 border-t-indigo-500",
              icon: (
                <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Beautiful Architecture",
              desc: "Modular components, consistent spacing patterns, and a beautiful sleek layout designed to make building a breeze.",
              color: "border-t-4 border-t-purple-500",
              icon: (
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              )
            },
            {
              title: "Responsive by Design",
              desc: "Optimized for everything from mobile phones to high-resolution ultrawide screens. Beautifully responsive out of the box.",
              color: "border-t-4 border-t-pink-500",
              icon: (
                <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 text-left shadow-sm hover:shadow-md hover:-translate-y-1 group ${feature.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;