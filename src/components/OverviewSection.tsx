"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Overview() {
  const stats = [
    {
      value: "98%",
      title: "Client Satisfaction",
      description:
        "Our treatments are designed to deeply relax, heal, and uplift. Clients leave feeling renewed.",
    },
    {
      value: "300+",
      title: "Guests Welcomed Monthly",
      description:
        "From first-timers to long-time regulars, we create personalized wellness experiences.",
    },
    {
      value: "40+",
      title: "Holistic Therapies Offered",
      description:
        "From massage, facials to sound healing and detox programs, our services nurture aspects of life.",
    },
    {
      value: "100%",
      title: "Mindful Touch",
      description:
        "Every experience begins with grounding rituals and ends with warmth, and space to breathe.",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#F2EFED] text-black py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-20 border-b border-[#e0dcd9]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 md:gap-x-20 lg:gap-x-28">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="w-full max-w-sm"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black mb-4">
                {stat.value}
              </h3>
              <p className="text-lg font-light text-black mb-3">
                {stat.title}
              </p>
              <p className="text-black/70 text-base leading-relaxed tracking-tight">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
