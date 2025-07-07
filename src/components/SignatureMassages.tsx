"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const massages = [
  {
    title: "Payapa",
    description:
      "A calming blend of techniques that ease stress and restore balance. Ideal for deep relaxation body.",
    inclusions: [
      "Aromatherapy oils",
      "Full-body massage",
      "Breathing techniques",
    ],
    duration: "90 mins",
    price: "₱1,800",
    image: "/sm1.jpg",
  },
  {
    title: "Daloy",
    description:
      "A smooth, flowing massage with essential oils that enhances circulation and soothes senses.",
    inclusions: [
      "Warm oil therapy",
      "Light pressure strokes",
      "Calming ambient music",
    ],
    duration: "75 mins",
    price: "₱1,600",
    image: "/sm2.jpg",
  },
  {
    title: "Hiraya",
    description:
      "Combines suction therapy with massage to detoxify, release tension, and renew body harmony.",
    inclusions: ["Cupping therapy", "Detox scrub", "Hydration wrap"],
    duration: "90 mins",
    price: "₱2,100",
    image: "/a5.jpg",
  },
  {
    title: "Siklab",
    description:
      "Hot stones deliver deep relief for muscle tightness and pain, grounding you in warmth and calm.",
    inclusions: ["Hot stone placement", "Deep tissue massage", "Reflexology"],
    duration: "75 mins",
    price: "₱1,900",
    image: "/sm3.jpg",
  },
  {
    title: "Laya",
    description:
      "A precise, oil-free massage that improves circulation and leaves you feeling light and free.",
    inclusions: [
      "Dry brushing",
      "Pressure point release",
      "Posture realignment",
    ],
    duration: "60 mins",
    price: "₱1,500",
    image: "/a3.jpg",
  },
];

export default function SignatureMassages() {
  const [activeMassage, setActiveMassage] = useState("");
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    massages.forEach((massage, index) => {
      const el = sectionRefs.current[index];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveMassage(massage.title);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section className="w-full bg-[#F2EFED] text-black py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-20 font-sans border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-y-16 md:gap-x-20 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="md:col-span-1 max-w-md">
          <div className="md:sticky md:top-28">
            <span className="bg-black/70 text-white text-xs px-4 py-1 rounded-full inline-block mb-4 border border-white/30 shadow-md tracking-normal">
              SIGNATURE MASSAGES
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight mb-6">
              Healing Hands,
              <br />
              Lasting Benefits
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black/70 leading-normal mb-[-20px] sm:mb-3 md:mb-4 max-w-md">
              Feel the difference with expert care that restores and revitalizes
              mind, spirit, emotion, soul, and body.
            </p>

            
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-1 space-y-12">
          {massages.map((massage, index) => (
            <div
              key={massage.title}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
              >
                {/* Image */}
                <div className="relative w-full md:w-[60%] aspect-[3.5/3] overflow-hidden shadow-md group">
                  <Image
                    src={massage.image}
                    alt={`${massage.title} massage`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>

                {/* Text */}
                <div className="w-full md:w-[45%]">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-3 leading-[1.2] tracking-tight">
                    {massage.title}
                  </h3>
                  <p className="text-black/70 text-base sm:text-md md:text-lg leading-relaxed mb-4">
                    {massage.description}
                  </p>


                  <ul className="list-disc pl-5 text-base text-black/60 space-y-1 mb-4">
                    {massage.inclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="text-sm sm:text-base text-black/80 font-normal mb-8">
                    <span className="inline-block mr-4">
                      {massage.duration}
                    </span>
                    <span className="inline-block">{massage.price}</span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center text-black border-b border-black hover:opacity-70 transition text-sm sm:text-base font-medium"
                  >
                    Book a Reservation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 7l-10 10m0-10h10v10"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
