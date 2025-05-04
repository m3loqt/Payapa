"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 md:px-24 pt-16 pb-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Left: Logo and Description */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-wide mb-4">P A Y A P A</h1>
          <p className="text-sm text-gray-400 max-w-xs">
            Where tranquility meets tradition. Experience personalized wellness in the heart of the city.
          </p>
        </div>

        {/* Right: Quick Links and Socials beside each other */}
        <div className="flex flex-col md:flex-row gap-30">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#booking" className="hover:text-white transition">Book Now</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>All rights reserved 2025</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 md:mt-0 hover:text-white transition"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
