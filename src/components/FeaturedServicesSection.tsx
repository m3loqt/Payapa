"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    title: "Payapa",
    type: "Combination Massage",
    description: "A relaxing fusion of different massage techniques.",
    images: ["/serviceone.jpg", "/servicetwo.jpg", "/servicethree.jpg"],
  },
  {
    title: "Daloy",
    type: "Oil Massage",
    description: "Smooth, flowing strokes using essential oils.",
    images: ["/serviceone.jpg", "/servicetwo.jpg", "/servicethree.jpg"],
  },
  {
    title: "Hiraya",
    type: "Ventosa Massage",
    description: "Combines suction therapy with gentle massage strokes.",
    images: ["/serviceone.jpg", "/servicetwo.jpg", "/servicethree.jpg"],
  },
  {
    title: "Siklab",
    type: "Hot Stone Massage",
    description: "Warm stones melt away deep tension.",
    images: ["/serviceone.jpg", "/servicetwo.jpg", "/servicethree.jpg"],
  },
  {
    title: "Laya",
    type: "Dry Massage",
    description: "Pressure-based massage with no oil application.",
    images: ["/serviceone.jpg", "/servicetwo.jpg", "/servicethree.jpg"],
  },
];

export default function FeaturedServices() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-[#F2EFED] text-black py-20 px-6 md:px-24">
      <h2 className="text-5xl md:text-6xl font-light italic mb-16 text-center leading-tight text-black">
        Signature <span className="not-italic font-normal">Massages</span>
      </h2>

      <div className="flex flex-col divide-y md:px-20 divide-gray-200">
        {services.map((service, index) => {
          const isOpen = expanded === index;

          return (
            <div key={index}>
              {/* Row Header */}
              <button
                onClick={() => setExpanded(isOpen ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group hover:bg-[#F2EFED] transition px-2"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full">
                  <h3 className="text-2xl md:text-3xl mr-10 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center ml-4 transition-transform duration-300 ease-in-out">
                  <FiChevronDown
                    className={`text-white text-lg transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 pl-2 pr-4 md:pl-2 md:pr-12 flex flex-col md:flex-row gap-6">
                      {/* Images */}
                      <div className="flex gap-3 md:w-2/3">
                        {service.images.map((src, i) => (
                          <div
                            key={i}
                            className="relative w-1/3 aspect-[3/4] rounded-xl overflow-hidden"
                          >
                            <Image
                              src={src}
                              alt={`${service.title} ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="md:w-1/3 flex flex-col justify-center space-y-4 text-gray-800">
                        {/* 75 Minutes */}
                        <div className="flex items-baseline gap-2">
                          <span className="text-base line-through text-gray-500">
                            ₱940
                          </span>
                          <span className="text-2xl font-semibold text-black">
                            ₱840
                          </span>
                          <span className="text-sm text-gray-600">
                            – 75 Minutes
                          </span>
                        </div>

                        {/* 105 Minutes */}
                        <div className="flex items-baseline gap-2">
                          <span className="text-base line-through text-gray-500">
                            ₱1240
                          </span>
                          <span className="text-2xl font-semibold text-black">
                            ₱1080
                          </span>
                          <span className="text-sm text-gray-600">
                            – 105 Minutes
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
