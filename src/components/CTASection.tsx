"use client";

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 border-t border-[#e0dcd9] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/herobg.jpg"
          alt="Relaxing background"
          className="w-full h-full object-cover"
        />
        {/* Dark + Blur Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
          Ready to Relax?
        </h2>
        <p className="text-white/80 text-base md:text-lg tracking-tight mb-8">
          Whether you're looking for stress relief, muscle recovery, or pure tranquility, we're here to help.
          <br />
          Treat yourself to the experience you deserve.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center text-white border-b border-white hover:opacity-70 transition"
        >
          Book a Reservation&nbsp;↗
        </a>
      </div>

      {/* Optional Soft Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0" />
    </section>
  );
}
