"use client";
import Image from "next/image";

const massages = [
  {
    title: "Payapa",
    description:
      "A calming blend of multiple massage techniques designed to melt away stress and restore inner balance. This fusion approach promotes deep relaxation while easing tension in both body and mind. Ideal for those seeking a harmonious and personalized healing experience.",
    image: "/download.png",
  },
  {
    title: "Daloy",
    description:
      "A rhythmic massage using smooth, flowing strokes and aromatic essential oils to enhance circulation and soothe the senses. Inspired by the natural movement of water, Daloy brings your body into a state of gentle, uninterrupted flow. Let go and drift into tranquility.",
    image: "/download.png",
  },
  {
    title: "Hiraya",
    description:
      "Rooted in traditional suction therapy, Hiraya combines gentle massage strokes with ventosa to stimulate detoxification and release deep muscle tension. It invites clarity and renewal, restoring your body's natural harmony. Perfect for those who seek mindful healing.",
    image: "/download.png",
  },
  {
    title: "Siklab",
    description:
      "Harnessing the warmth of hot stones, Siklab penetrates deeply to relieve chronic pain and muscular tightness. The comforting heat melts away built-up tension, grounding your spirit in warmth and serenity. A therapeutic ritual for deep relaxation.",
    image: "/download.png",
  },
  {
    title: "Laya",
    description:
      "A dry massage focusing on acupressure and precise techniques—no oils, just intentional touch. It promotes circulation, muscle elasticity, and energy flow, leaving you feeling unburdened and free. Laya is freedom for both body and breath.",
    image: "/download.png",
  },
];

export default function SignatureMassages() {
  return (
    <div className="w-full">
      {massages.map((massage, index) => (
        <section
          key={index}
          className="flex flex-col md:flex-row h-screen text-white border-b border-gray-700"
        >
          {/* Left Content */}
          <div className="bg-black flex flex-col justify-center px-8 md:px-24 w-full md:w-1/2">
            <p className="text-sm tracking-wide text-gray-400 mb-4">
              SIGNATURE MASSAGE
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              {massage.title}
            </h2>
            <p className="text-[#e1e1e1] max-w-md mb-10 opacity-80">
              {massage.description}
            </p>

            
            <button className="text-white text-sm group inline-flex items-center gap-2 hover:underline">
              See the details
              <span className="transform group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={massage.image}
              alt={massage.title}
              fill
              className="object-cover"
            />
          </div>
        </section>
      ))}
    </div>
  );
}
