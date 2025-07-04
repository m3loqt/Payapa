"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const faqs = [
  {
    question: "Where is Payapa Wellness & Spa located?",
    answer:
      "Payapa Wellness & Spa is conveniently located at the Cocoon Boutique Hotel in Quezon City, Metro Manila. Nestled in a peaceful and eco-conscious setting, our space offers a calming escape right in the heart of the city—perfect for those seeking convenience without compromising serenity.",
  },
  {
    question: "What types of massage do you offer?",
    answer:
      "We offer a variety of signature massages, each rooted in Filipino wellness traditions. These include Payapa (deep relaxation), Daloy (flow-enhancing), Hiraya (detox therapy), Siklab (hot stone relief), and Laya (oil-free realignment). Each treatment includes mindful elements like aromatherapy or breathing techniques for a holistic experience.",
  },
  {
    question: "Can I book a session in advance?",
    answer:
      "Yes, we highly encourage guests to book their appointments in advance to secure their preferred time slot. You can easily reserve via our website’s booking section or contact us directly by phone or message. Walk-ins are welcome but subject to availability.",
  },
  {
    question: "Do you offer prenatal or pregnancy-safe massages?",
    answer:
      "Absolutely. Our therapists are trained in prenatal massage techniques designed to ease tension, reduce swelling, and improve circulation for expecting mothers. Please inform us of your pregnancy when booking so we can tailor the experience for your comfort and safety.",
  },
  {
    question: "Are your therapists licensed or trained?",
    answer:
      "Yes. All our massage therapists are professionally trained and experienced in both traditional Filipino and modern therapeutic techniques. We uphold high standards of care, ensuring each guest receives safe, effective, and deeply relaxing treatments.",
  },
  {
    question: "What should I expect during my visit?",
    answer:
      "Expect a calm, welcoming environment from the moment you arrive. We'll begin with a brief intake to understand your needs, followed by a guided breathing practice. Post-treatment, we offer warm towels, light refreshments, and herbal tea. Your comfort is our priority every step of the way.",
  },
  {
    question: "Do you accept gift bookings or offer gift cards?",
    answer:
      "Yes, we offer beautifully packaged digital and physical gift cards perfect for birthdays, anniversaries, or simple acts of care. You can purchase these online or in person. If you're gifting a specific treatment, we recommend checking availability beforehand.",
  },
  {
    question: "Can I request a specific therapist?",
    answer:
      "Yes, you may request a specific therapist when booking your appointment. While we do our best to honor all requests, availability may vary. All our therapists are equally skilled and trained to deliver a consistently exceptional experience.",
  },
  {
    question: "How early should I arrive before my session?",
    answer:
      "We recommend arriving 10–15 minutes before your appointment to allow time for check-in, a short consultation, and to settle into the space. This ensures your treatment starts smoothly and on time.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F2EFED] px-4 sm:px-8 md:px-20 py-24 border-t border-gray-200 font-sans">
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Left Sticky Content */}
        <div className="md:col-span-1">
          <div className="sticky top-32">
            <span className="bg-black/70 text-white text-xs px-4 py-1 rounded-full inline-block mb-4 font-sans border border-white/30 shadow-md tracking-normal">
              FAQs
            </span>

            <h2
              className="text-black"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "3.5rem",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Answering your
              <br />
              questions
            </h2>

            <p
              className="text-black/80 mt-6 mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "1.34rem",
                lineHeight: 1.55,
              }}
            >
              Got more questions?
              <br />
              Send us your enquiry below.
            </p>

            <button className="group relative inline-flex h-12 sm:h-[56px] items-center justify-center rounded-full bg-neutral-950 py-1 pl-5 sm:pl-6 pr-12 sm:pr-14 font-medium text-neutral-50 text-sm sm:text-base">
              <span className="z-10 pr-2">Send a message</span>
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
          </div>
        </div>

        {/* Right Accordion */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 cursor-pointer bg-[#F5F3F0]"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="text-black"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "1.15rem",
                    }}
                  >
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <X className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                {isOpen && (
                  <p
                    className="text-black/70 mt-3"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}