'use client';

import Image from 'next/image';
import HeaderW from './HeaderW';

export default function About() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <HeaderW />

      {/* Background Image wrapper - must be absolute and full-sized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/new.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60 z-10" />


      {/* Content */}
      <div className="relative z-20 mt-25 h-full flex flex-col justify-center px-6 md:px-24">
        <h3 className="text-white text-xs font-semibold tracking-wide mb-4 uppercase">
          About Us
        </h3>
        <h1 className="text-white mt-5 text-2xl md:text-4xl font-light max-w-4xl leading-snug tracking-tight">
          We work with charities to increase impact, tell inspiring stories and
          remove stigma. Their causes{' '}
          <span className="italic font-medium">helped us</span> and will help
          others to make our world a better place.
        </h1>
      </div>
    </div>
  );
}
