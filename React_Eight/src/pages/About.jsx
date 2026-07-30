import React from 'react';

const About = () => {
  return (
    <div className="relative bg-slate-50 min-h-[calc(100vh-4rem)] py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
            Who We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Are</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a team of visionary designers, code artisans, and strategic thinkers working together to shape the future of modern web experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">Our Story</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Pioneering clean design standards since day one.</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a simple mission: to eliminate visual noise from the digital landscape. We build tools, frameworks, and visual languages that are beautiful, intuitive, and extremely fast.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By fusing state-of-the-art engineering with classical typographic principles, we produce experiences that don't just work well, but leave a lasting impression.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center text-white p-8">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
              <div className="relative text-center">
                <span className="text-5xl font-extrabold tracking-tight">10x</span>
                <p className="text-sm font-medium mt-2 text-indigo-100">Performance Improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Absolute Simplicity",
              desc: "Complexity is easy; simplicity is hard. We boil down ideas to their pure, most effective forms."
            },
            {
              title: "Quality Obsession",
              desc: "Every pixel, every line of code, and every interactive animation is polished to absolute perfection."
            },
            {
              title: "User Sovereignty",
              desc: "The end-user experience is the ultimate metric of success. We build interfaces that feel natural and respect the user."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs">
              <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;