"use client";

import Link from "next/link";
import { About } from "../utils/interface";
// import LoaderWrapper from "./LoaderWrapper";

interface HeroProps {
  about: About;
}

const Hero = ({ about }: HeroProps) => {
  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden font-sans mt-4">
      {/* Subtle Grid and Blue Radial Glow Overlays */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Square Gray Grid with radial fade out */}
        <svg
          width="100%"
          height="100%"
          className="w-full h-full absolute inset-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 45% at 50% 48%, #fff 0%, #fff 65%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 55% 45% at 50% 48%, #fff 0%, #fff 65%, transparent 90%)",
          }}
        >
          <defs>
            <pattern id="hero-gray-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <rect
                x="0"
                y="0"
                width="36"
                height="36"
                fill="none"
                stroke="#22272b"
                strokeWidth="1.1"
                opacity="0.14"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-gray-grid)" />
        </svg>
        {/* Wide, soft center blue radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(59,185,255,0.09) 0%, rgba(59,185,255,0.06) 45%, rgba(10,13,21,0.80) 85%, transparent 100%)",
            zIndex: 1,
          }}
        />
      </div>

      {/* <LoaderWrapper> */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-6 lg:px-8 xl:px-0 max-w-7xl">
          {/* Headline */}
          <h1
            className="
              text-center font-extrabold
              text-[2rem] xs:text-[2.3rem] sm:text-[2.6rem]
              md:text-[3.1rem] lg:text-[3.7rem] xl:text-[4rem]
              leading-tight tracking-tight font-['Inter',sans-serif]
              w-full max-w-5xl mx-auto
            "
          >
            <span className="block bg-gradient-to-b from-[#f3f7fa] via-[#dbeafe] to-[#7caaff] bg-clip-text text-transparent drop-shadow-md [text-shadow:0_2px_8px_rgba(0,0,0,0.18)]">
              DIGITAL SOLUTIONS
            </span>
            <span className="block bg-gradient-to-b from-[#3bb9ff] via-[#2563eb] to-[#0e224c] bg-clip-text text-transparent drop-shadow-lg mt-2 tracking-tight">
              FOR MODERN BUSINESSES
            </span>
          </h1>

          {/* Subtitle */}
          <p className="
            mt-6 sm:mt-8
            text-center
            text-base xs:text-lg md:text-xl lg:text-2xl
            text-[#b4c5db] font-medium
            max-w-xl sm:max-w-2xl
            drop-shadow-sm font-['Inter',sans-serif]
            mx-auto
          ">
            {about.subTitle ||
              "Top-tier ReactJs, NextJs web apps, engineered with dedication and expertise."}
          </p>

          {/* Fiverr rating & CTA */}
          <div className="
            flex flex-col sm:flex-row items-center justify-center 
            gap-6 sm:gap-8 mt-10 sm:mt-14 w-full
          ">
            <div className="
              flex items-center gap-2 sm:gap-3
              bg-[#18213c] rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3
              shadow border border-[#2563eb40]
              w-[90vw] max-w-xs sm:w-auto
              justify-center
            ">
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">fiverr.</span>
              <span className="flex items-center ml-1">
                {/* 5 blue stars */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="17"
                    height="17"
                    className="inline drop-shadow-[0_1px_2px_#2563eb44]"
                    viewBox="0 0 20 20"
                    fill="#3bb9ff"
                  >
                    <polygon points="10,1 12.5,7 19,7 13.5,11 15.5,17 10,13.5 4.5,17 6.5,11 1,7 7.5,7" />
                  </svg>
                ))}
              </span>
              <span className="text-white font-bold ml-2 text-base sm:text-lg font-sans">5.0</span>
              <span className="text-[#60a5fa] font-semibold text-sm sm:text-md ml-1">(243)</span>
            </div>
            <Link
              href="#contact"
              className="
                rounded-2xl px-7 py-3 sm:px-9 sm:py-4 font-bold
                text-base sm:text-lg bg-gradient-to-r from-[#3bb9ff] to-[#2563eb]
                text-[#10171f] shadow-[0_4px_32px_#2563eb22] border border-[#2563eb44]
                hover:scale-105 hover:shadow-[0_8px_48px_#3bb9ff33]
                transition-all duration-200 focus:outline-none
                flex items-center gap-2 font-['Inter',sans-serif]
                w-[90vw] max-w-xs sm:w-auto justify-center
              "
            >
              Book a call
              <span className="ml-1 text-xl">→</span>
            </Link>
          </div>
        </div>
      {/* </LoaderWrapper> */}
    </section>
  );
};

export default Hero;