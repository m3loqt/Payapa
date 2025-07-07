"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const otherServices = [
  {
    title: "Kalinaw",
    description:
      "Restore inner peace with our deeply grounding experience combining traditional massage with silence.",
    inclusions: ["Guided meditation", "Light touch therapy", "Herbal compress"],
    duration: "60 mins",
    price: "₱1,700",
    image: "/sm1.jpg",
  },
  {
    title: "Ginhawa",
    description:
      "Eases tension with an invigorating blend of pressure and movement that awakens body and mind.",
    inclusions: ["Deep tissue", "Stretching", "Cooling gel finish"],
    duration: "90 mins",
    price: "₱2,000",
    image: "/sm2.jpg",
  },
  {
    title: "Alon",
    description:
      "Wave-inspired massage that melts away stress and encourages flow and energy circulation.",
    inclusions: ["Wave technique", "Essential oil blend", "Soothing music"],
    duration: "75 mins",
    price: "₱1,850",
    image: "/a5.jpg",
  },
];

export default function OtherServices() {
  const [activeService, setActiveService] = useState("");
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    otherServices.forEach((service, index) => {
      const el = sectionRefs.current[index];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveService(service.title);
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
      {/* Heading on mobile */}
      <div className="max-w-7xl mx-auto mb-16 md:hidden">
        <span className="bg-black/70 text-white text-xs px-4 py-1 rounded-full inline-block mb-4 border border-white/30 shadow-md tracking-normal">
          OTHER SERVICES
        </span>

        <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-tight mb-6">
          Discover More,
          <br />
          Feel Renewed
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-black/70 leading-normal mb-[-20px] sm:mb-3 md:mb-4 max-w-md">
          Our offerings go beyond the usual and personalized experiences to
          align with your unique wellness needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-16 md:gap-x-20 max-w-7xl mx-auto">
        {/* Services List */}
        <div className="md:col-span-1 space-y-16">
          {otherServices.map((service, index) => (
            <div
              key={service.title}
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
                    src={service.image}
                    alt={`${service.title} service`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>

                {/* Text */}
                <div className="w-full md:w-[45%]">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-3 leading-[1.2] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-black/70 text-base sm:text-md md:text-lg leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="list-disc pl-5 text-base text-black/60 space-y-1 mb-4">
                    {service.inclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="text-sm sm:text-base text-black/80 font-normal mb-8">
                    <span className="inline-block mr-4">
                      {service.duration}
                    </span>
                    <span className="inline-block">{service.price}</span>
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

        {/* Sticky Heading (only on md and up) */}
        <div className="md:col-span-1 max-w-md md:max-w-full md:ml-auto hidden md:block">
          <div className="sticky top-28">
            <span className="bg-black/70 text-white text-xs px-4 py-1 rounded-full inline-block mb-4 border border-white/30 shadow-md tracking-tight">
              OTHER SERVICES
            </span>

            <h1 className="text-6xl font-normal tracking-tight leading-tight mb-6">
              Discover More,
              <br />
              Feel Renewed
            </h1>

            <p className="text-lg text-black/70 leading-normal tracking-normal mb-8 max-w-md">
              Our offerings go beyond the usual and personalized experiences to
              align with your unique wellness needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
