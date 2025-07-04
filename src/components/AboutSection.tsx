"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const images = [
    "/a1.jpg",
    "/a2.jpg",
    "/a3.jpg",
    "/a4.jpg",
    "/a5.jpg",
    "/a6.jpg",
  ];

  return (
    <section className="w-full bg-[#F2EFED]">
      {/* Top section: content layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-[35%_65%] gap-y-12 gap-x-12 items-start mb-[-40px]">
        {/* Left column */}
        <motion.div
          className="relative lg:ml-[-120px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-1 rounded-full inline-block font-sans mb-3 border border-black/30 shadow-md">
            ABOUT US
          </span>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
            className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]"
          >
            Payapa
            <br />
            Wellness
            <br />
            and Spa
          </h1>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="relative lg:ml-[-40px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 200,
            }}
            className="text-black/70 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Rooted in Filipino wellness traditions and mindful living, Payapa
            Wellness & Spa is your quiet escape in the heart of Quezon City.
            Located at the Cocoon Boutique Hotel, our space blends modern care
            with ancestral healing, offering treatments like hilot, ventosa,
            aromatherapy, and prenatal massage. From guided breathing to
            post-massage snacks, we care for you holistically. Every visit is a
            gentle return to calm. It is our way of reminding you that healing
            does not have to be rushed, it can be slow, soothing, and beautifully
            intentional.
          </p>
        </motion.div>
      </div>

      {/* Image Carousel */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden relative">
        <motion.div
          className="absolute inset-0 flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "110%" }}
        >
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="flex-none w-1/2 sm:w-1/3 md:w-1/4 h-full relative"
            >
              <img
                src={src}
                alt={`Project ${(idx % images.length) + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
