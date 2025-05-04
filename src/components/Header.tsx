"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function HeaderW(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Header */}
      <header className="absolute top-5 left-0 w-full z-50 px-6 md:px-24 py-6 flex justify-between items-center">
        <div className="text-black text-xl font-light flex gap-1 z-50">
          <span>P A Y A P A</span>
        </div>

        <button
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-50 mr-"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <RxHamburgerMenu className="text-xl text-black" />
        </button>
      </header>

      {/* Backdrop Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-md bg-black/40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Container */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 z-50 bg-[#F2EFED] text-white transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* X Button */}
        <button
          className="absolute top-11.5 right-24 w-10 h-10 rounded-full bg-black shadow-md flex items-center justify-center text-white"
          onClick={toggleMenu}
          aria-label="Close"
        >
          <RxCross2 className="text-xl" />
        </button>

        <div className="h-full flex justify-between p-12">
          {/* Left: Nav Links */}
          <div className="flex flex-col justify-center text-[8rem] text-black tracking-tight space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="transition-all duration-300 hover:italic mb-[-60px]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="transition-all duration-300 hover:italic mb-[-60px]"
            >
              About
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="transition-all duration-300 hover:italic mb-[-60px]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="transition-all duration-300 hover:italic mb-[-60px]"
            >
              Contact
            </Link>
          </div>

          {/* Right: Supplementary Info */}
          <div className="space-y-6 text-sm mt-68 mr-10 text-black">
            <div>
              <h4 className="uppercase font-bold mb-2">OUR SOCIALS</h4>
              <ul className="space-y-1">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Tiktok</li>
              </ul>
            </div>
            
            <div>
              <h4 className="uppercase font-bold mb-2">Contact info</h4>
              <p>09178751813</p>
              <p>payapaspa@gmail.com</p>
            </div>
            
            <div>
              <h4 className="uppercase font-bold mb-2">Our location</h4>
              <p>2F Cocoon Boutique Hotel</p>
              <p>61 Scout Rallos Street, Diliman, Quezon City</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=2nd+Floor,+Cocoon+Boutique+Hotel,+61+Scout+Rallos+St,+cor+Sct.+Tobias+St,+Diliman,+Quezon+City,+1103+Metro+Manila,+Philippines"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="underline mt-1">Get directions</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
