"use client";

export default function CTASection() {
  return (
    <section className="bg-black text-center py-24 px-6  relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-white mb-6">
          Ready to Relax?
        </h2>
        <p className="text-white text-base md:text-lg mb-8">
          Whether you're looking for stress relief, muscle recovery, or pure tranquility, we're here to help. Treat yourself to the experience you deserve.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center text-white border-b border-white hover:opacity-70 transition"
        >
          Book a Session&nbsp;↗
        </a>
      </div>

      {/* Soft grid background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none rounded-3xl" />
    </section>
  );
}
