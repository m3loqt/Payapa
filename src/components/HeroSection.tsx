"use client";
import Header from "./Header";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex">
      <Header />
      {/* Left side */}
      <div className="w-1/2 bg-[#F2EFED] flex flex-col justify-center px-25">
        <h1 className="text-2xl md:text-4xl font-light text-black leading-tighter mt-15 tracking-tight w-full max-w-4xl">
          We help you find peace within,
          <br />
          and{" "}
          <span className="italic underline decoration-[1.5px] decoration-black">
            renew
          </span>{" "}
          your body and mind
        </h1>
        <p className="mt-7 text-base md:text-lg text-gray-800 max-w-md tracking-tight">
          At Payapa Wellness and Spa, we offer holistic treatments and serene
          experiences designed to restore balance, release stress, and
          rejuvenate your body and mind.
        </p>

        {/* Rating Section
        <div className="flex items-center gap-2 mt-7">
          <span className="text-black text-large font-medium">Rated 5</span>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div> */}

        <div className="mt-10 flex gap-4">
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800">
            About us
          </button>
          <button className="text-sm text-black font-medium flex items-center gap-2">
            Book a Reservation <span>→</span>
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 relative h-full">
        <Image
          src="/herobg.jpg"
          alt="Office with people"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Social media icons */}
        <div className="absolute bottom-15 right-23 flex gap-4 z-20">
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}
