"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samantha Lopez",
    handle: "@samanthawellness",
    text: "The experience at Payapa was nothing short of magical. I left feeling lighter, calmer, and completely recharged. The serene ambiance and gentle energy truly elevated the entire experience.",
    avatar: "/melo.jpg",
    pullQuote: "Magical and recharging.",
  },
  {
    name: "Marcus Thompson",
    handle: "@marcus_tranquil",
    text: "Exceptional service and attention to detail. Every visit feels like a retreat from the chaos of daily life, where I can unwind and completely let go of stress.",
    avatar: "/melo.jpg",
    pullQuote: "A retreat from the chaos.",
  },
  {
    name: "Nina Rodriguez",
    handle: "@glowbynina",
    text: "Hands down the best facial I've ever had. My skin has never looked better! The personalized care and high-quality products made all the difference.",
    avatar: "/melo.jpg",
    pullQuote: "The best facial ever.",
  },
  {
    name: "Liam Patel",
    handle: "@zenliam",
    text: "I’ve never felt more welcomed and cared for. The ambiance, the staff, and the treatments all combined into a wonderfully relaxing and healing journey.",
    avatar: "/melo.jpg",
    pullQuote: "Total perfection.",
  },
  {
    name: "Chloe Davis",
    handle: "@chloebliss",
    text: "It’s my little escape. Every session is soothing and rejuvenating. I walk out feeling renewed, centered, and deeply relaxed.",
    avatar: "/melo.jpg",
    pullQuote: "My soothing escape.",
  },
  {
    name: "Ethan Morgan",
    handle: "@mindfulethan",
    text: "A sanctuary in the city. Walked in with stress, walked out with peace. The environment and care provided are simply unmatched.",
    avatar: "/melo.jpg",
    pullQuote: "Peaceful and transformative.",
  },
  {
    name: "Isla Vasquez",
    handle: "@islawellness",
    text: "Beyond expectations! The care and expertise of the team are unmatched. From the welcome to the farewell, it was all thoughtfully executed.",
    avatar: "/melo.jpg",
    pullQuote: "Truly remarkable care.",
  },
  {
    name: "Noah Brown",
    handle: "@breathewithnoah",
    text: "Every visit brings me back to balance. I can’t imagine my routine without Payapa now—it has become my sacred space for clarity and rest.",
    avatar: "/melo.jpg",
    pullQuote: "Restored and rebalanced.",
  },
  {
    name: "Amelia Kim",
    handle: "@calmamelia",
    text: "From the aroma to the afterglow, it’s always a dreamy experience. The space radiates calm and the treatments are consistently exceptional.",
    avatar: "/melo.jpg",
    pullQuote: "Dreamy and blissful.",
  },
  {
    name: "Jack Ramirez",
    handle: "@serenejack",
    text: "Consistently exceptional. I always look forward to my sessions. They just get it right every time with professionalism, warmth, and care.",
    avatar: "/melo.jpg",
    pullQuote: "Consistently perfect.",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
      ))}
  </div>
);

const CarouselRow = ({ reverse }: { reverse?: boolean }) => {
  const x = useMotionValue(0);
  const velocity = useRef(30);
  const spring = useSpring(x, { damping: 25, stiffness: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const isMobile = window.innerWidth < 640;
    velocity.current = isMobile ? 15 : 30;

    const loop = () => {
      x.set(x.get() + (reverse ? -1 : 1) * (velocity.current / 60));
      const limit = -containerRef.current!.scrollWidth / 2;

      if (x.get() <= limit) {
        x.set(0);
      } else if (x.get() >= 0) {
        x.set(limit);
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [reverse, x]);

  const handleHoverStart = () => {
    if (window.innerWidth >= 640) {
      velocity.current = 5;
    }
  };

  const handleHoverEnd = () => {
    if (window.innerWidth >= 640) {
      velocity.current = 30;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex gap-4 sm:gap-6 w-max px-4 sm:px-6"
      style={{ x: spring }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {[...testimonials, ...testimonials].map((t, index) => (
        <div
          key={index}
          className={`w-[80vw] xs:w-[75vw] sm:w-[370px] h-auto sm:h-[290px] p-4 sm:p-[25px] rounded-xl border border-gray-200 flex-shrink-0 flex flex-col justify-between ${
            index % 2 === 0 ? "bg-[#F5F3F0]" : "bg-[#F5f5f5]"
          }`}
        >
          <div>
            <Stars />
            <p className="text-xs sm:text-[20px] text-black/80 leading-snug sm:leading-tight">
              {t.text}
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-300"
            />
            <p className="text-sm sm:text-base font-medium text-gray-900">
              {t.name}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F2EFED] text-black px-0 py-16 border-t border-[#e0dcd9] overflow-x-hidden">
      <motion.div
        className="text-center mb-12 px-4 sm:px-8 md:px-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.span
          className="bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-1 rounded-full inline-block font-sans mb-3 border border-white/30 shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          TESTIMONIALS
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hear from our clients
        </motion.h2>

        <motion.p
          className="text-black/80 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hear from our happy clients about their experience at Payapa.
          <br className="hidden sm:block" />
          Where every visit is more than just a treatment, it’s a thoughtfully
          crafted journey.
        </motion.p>
      </motion.div>

      <div className="space-y-6 w-screen overflow-hidden">
        <CarouselRow />
        <CarouselRow reverse />
      </div>
    </section>
  );
}
