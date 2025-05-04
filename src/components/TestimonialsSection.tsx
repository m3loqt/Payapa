"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Samantha L.",
    handle: "@samanthawellness",
    text: "The experience at Payapa was nothing short of magical. I left feeling lighter, calmer, and completely recharged.",
  },
  {
    name: "Marcus T.",
    handle: "@marcus_tranquil",
    text: "Exceptional service and attention to detail. Every visit feels like a retreat from the chaos of daily life.",
  },
  {
    name: "Nina R.",
    handle: "@glowbynina",
    text: "Hands down the best facial I’ve ever had. My skin has never looked better!",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-screen bg-black text-white px-8 md:px-40 flex flex-col md:flex-row items-center justify-center gap-16 py-24">
      {/* Left Text */}
      <div className="flex-1">
        <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
          Testimonials
        </h2>
        <div className="flex items-center gap-4 mt-8 text-base font-light">
          <span className="text-lg">
            {String(index + 1).padStart(2, "0")} — {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 text-lg rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            ←
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 text-lg rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Testimonial Content with slide animation */}
      <div className="flex-1 relative overflow-hidden min-h-[200px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full"
          >
            <div className="mb-6">
              <p className="uppercase mb-2 text-base font-semibold text-white">
                {testimonials[index].name}
              </p>
              <p className="text-sm text-[#e1e1e1] opacity-70">{testimonials[index].handle}</p>
            </div>
            <div className="border-t border-gray-600 pt-6">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed tracking-tight">
                {testimonials[index].text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
