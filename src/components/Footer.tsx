"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#F2EFED] text-[#101010] px-6 md:px-20 pt-16 pb-20 border-t border-black/10 overflow-hidden">
      {/* Mobile Footer Layout */}
      <div className="flex flex-col items-center md:hidden text-center gap-8 mb-1">        {/* CONTACT US for Mobile */}
        <div className="w-full">
          <h3 className="font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-2 text-[#101010]/70">
            <li><p className="mt-4">0917-875-1813</p></li>
            <li><p>payapaspa@gmail.com</p></li>
          </ul>
        </div>

        {/* QUICK LINKS for Mobile */}
        <div className="w-full">
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-[#101010]/70">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* FOLLOW US for Mobile */}
        <div className="w-full">
          <h3 className="font-semibold mb-4">FOLLOW US</h3>
          <ul className="text-[#101010]/70 flex justify-center gap-4">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Tiktok</a></li>
          </ul>
        </div>
      </div>

      {/* Desktop Footer Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-20 text-sm">
        {/* Description + CTA */}
        <div>
          <p className="mb-6 font-medium leading-relaxed text-[#101010]/80">
            Your wellness journey deserves the right support—find us easily,
            <br />
            reach out anytime, and book your next moment of peace.
          </p>
          <button className="group relative inline-flex h-12 sm:h-[56px] items-center justify-center rounded-full bg-[#101010] py-1 pl-5 sm:pl-6 pr-12 sm:pr-14 font-medium text-white text-sm sm:text-base">
            <span className="z-10 pr-2">Book a reservation</span>
            <div className="absolute right-1 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-[#333] transition-[width] group-hover:w-[calc(100%-8px)]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 w-4 sm:w-5 text-white"
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

        {/* Navigation + Socials + Legal */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-[#101010]/70">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <ul className="space-y-2 text-[#101010]/70">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Tiktok</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-[#101010]/70">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
