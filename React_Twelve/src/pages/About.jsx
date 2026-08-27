import React from "react";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="mb-20 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
            Our Story
          </p>

          <h1
            className="max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            We believe in things
            <br />
            <span className="text-violet-600">made with purpose.</span>
          </h1>
        </div>

        <div className="lg:pb-2">
          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Founded in 2026, NOVA is a sanctuary for functional elegance. We curate everyday items that bring simplicity, craft, and joy back into your home.
          </p>
        </div>
      </section>

      {/* Brand Values / Philosophy */}
      <section className="mb-24 grid gap-12 border-t border-zinc-200 pt-16 md:grid-cols-3">
        <div>
          <span className="text-3xl text-violet-600 font-serif">01</span>
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">Curated Quality</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Every item in our collection is rigorously evaluated for durability, design intent, and functional simplicity. We select only the best.
          </p>
        </div>

        <div>
          <span className="text-3xl text-rose-500 font-serif">02</span>
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">Sustainable Craft</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            We partner with independent makers and ethical designers who prioritize eco-friendly production methods and premium, long-lasting materials.
          </p>
        </div>

        <div>
          <span className="text-3xl text-emerald-600 font-serif">03</span>
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">Designed Intention</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            We reject the disposable culture. Our focus is on timeless aesthetics and ergonomic value that stay relevant as trends come and go.
          </p>
        </div>
      </section>

      {/* Decorative Brand Showcase */}
      <section className="relative overflow-hidden rounded-[28px] bg-zinc-900 px-8 py-20 text-white sm:px-16 sm:py-28">
        {/* Abstract background light circles */}
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-pink-600/10 blur-3xl"></div>

        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            The Nova Philosophy
          </p>
          <h2
            className="mt-6 text-4xl sm:text-5xl leading-tight tracking-tight font-medium text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            "Simplicity is the ultimate sophistication."
          </h2>
          <p className="mt-6 text-sm leading-7 text-zinc-400 max-w-lg">
            We strive to cut through the noise of modern consumerism. By offering only products that serve a clear aesthetic and practical purpose, we help you compose a living space that feels calm and inspired.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-xs font-semibold tracking-wider uppercase text-zinc-300">
            <div>
              <span className="block text-2xl font-bold text-violet-400">100%</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Ethical Sourcing</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-pink-400">20+</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Global Artisans</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald-400">24/7</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Intended Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
