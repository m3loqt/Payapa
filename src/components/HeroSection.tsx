"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-[#F2EFED] relative overflow-hidden border-b border-black/10">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-20 py-6 md:py-12 flex justify-between items-center">
        <div className="text-black text-xl font-light flex gap-1">
          <span>P A Y A P A</span>
        </div>
        <motion.div
          className="hidden sm:flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 ml-auto text-sm md:text-base"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.5, // after image is in
              },
            },
            hidden: {},
          }}
        >
          {[
            { href: "#about", label: "About" },
            { href: "#massages", label: "Massages" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#faqs", label: "FAQs" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-white hover:underline"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 ml-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            Book now
          </motion.a>
        </motion.div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/2 bg-[#F2EFED] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 pt-[96px] md:pt-[104px] pb-2 md:pb-0 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-black leading-[1.15] tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your trusted partner
            <br />
            for quality{" "}
            <span className="text-black">
              wellness
              <br />
              experiences
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-black/70 max-w-md leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Payapa delivers expert wellness treatments, creating beautiful and
            peaceful experiences with quality craftsmanship and design.
          </motion.p>

          <motion.div
            className="flex items-center gap-1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex -space-x-4 sm:-space-x-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`/melo.jpg`}
                  alt={`Client ${i}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-black text-sm font-medium ml-3">
              Rated by 300+ clients
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button className="group relative inline-flex h-12 sm:h-[56px] items-center justify-center rounded-full bg-neutral-950 py-1 pl-5 sm:pl-6 pr-12 sm:pr-14 font-medium text-neutral-50 text-sm sm:text-base">
              <span className="z-10 pr-2">Book a reservation</span>
              <div className="absolute right-1 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 sm:h-5 w-4 sm:w-5 text-neutral-50"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-1/2 relative h-[50vh] md:h-screen p-4 sm:p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/herobg.jpg"
                alt="Wellness and spa interior"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-15" />

            {/* Social Icons */}
            <motion.div
              className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex flex-col md:flex-row gap-3 md:gap-4 z-20 text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <a
                href="#"
                className="text-white/100 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white/100 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white/100 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>

            {/* Testimonial Box */}
            <motion.div
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/25 backdrop-blur-sm border border-white/10 rounded-2xl p-3 md:p-6 max-w-[80%] sm:max-w-xs z-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex gap-1 mb-2 md:mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-white text-xs md:text-sm" />
                ))}
              </div>
              <p className="text-white text-xs md:text-sm leading-relaxed">
                "Payapa has been a game changer for my wellness. Their attention
                to detail and functionality with exquisite design is
                unparalleled and best"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
