import React from 'react'

const About = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
          About NOVA
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mt-2">
          Minimalist E-Commerce Experience
        </h1>
        <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
          Crafted with React, Tailwind CSS, and Context API for fast state management and streamlined product routing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
          <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 font-bold mb-4">
            ⚡
          </div>
          <h3 className="text-base font-semibold text-zinc-900 mb-2">Fast Context API</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Centralized data management for products and single item views without unnecessary prop drilling.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
          <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 font-bold mb-4">
            🛡️
          </div>
          <h3 className="text-base font-semibold text-zinc-900 mb-2">Protected Routes</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Secure client-side route protection ensuring authentication checks before accessing exclusive catalog features.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs">
          <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 font-bold mb-4">
            🎨
          </div>
          <h3 className="text-base font-semibold text-zinc-900 mb-2">Modern Aesthetic</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Clean typography, refined zinc color palette, and micro-interactions for a premium shopping UI.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About