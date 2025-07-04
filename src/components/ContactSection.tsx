"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-[#F2EFED] text-[#101010] py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* Left Column - Contact Tag, Header, Subheader */}
        <div className="space-y-6">
          <span className="bg-black/70 text-white text-xs px-4 py-1 rounded-full inline-block mb-4 font-sans border border-white/30 tracking-normal mt-30">
            CONTACT
          </span>

          <h2
            className="text-[#101010]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "4rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Let's connect
            <br />
            with you
          </h2>

          <p
            className="text-[#101010]/80 mt-6 mb-8"
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
        </div>

        {/* Right Column - Info Blocks, Message Box, Email Input */}
        <div className="space-y-6">
          {/* Three Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-[#101010] mb-8">
            <div>
              <h4 className="font-medium mb-2">Location</h4>
              <p className="text-[#101010]/70">
                2nd Floor, Cocoon Boutique
                <br />
                Hotel Tobias St, Diliman,
                <br />
                Quezon City, Metro Manila
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Contact Information</h4>
              <p className="text-[#101010]/70">payapaspa@gmail.com</p>
              <p className="text-[#101010]/70">0917-875-1813</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Open Hours</h4>
              <p className="text-[#101010]/70">Weekdays 2PM–2AM</p>
              <p className="text-[#101010]/70">Weekends 11AM–2AM</p>
            </div>
          </div>

          {/* Message Box */}
          <div className="w-full">
            <textarea
              placeholder="Write a message"
              rows={8}
              className="w-full min-h-[180px] bg-[#F5F3F0] resize-none text-[#101010] placeholder:text-[#101010]/60 text-base px-5 py-4 rounded-xl border border-[#D8D5D2] focus:outline-none"
            />
          </div>

          {/* Email Input + Circular Send Button */}
          <div className="flex items-center gap-3 w-full">
            <input
              type="email"
              placeholder="Work email"
              className="w-full bg-[#F5F3F0] text-[#101010] placeholder:text-[#101010]/60 text-base px-5 py-3 rounded-xl border border-[#D8D5D2] focus:outline-none"
            />
            <button className="w-12 h-12 aspect-square flex items-center justify-center bg-black hover:bg-[#333] text-white rounded-full transition">
              <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
