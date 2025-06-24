"use client";

import Link from "next/link";
import { About } from "../utils/interface";
import { TextReveal } from "./ui/Typography";

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
            <pattern
              id="hero-gray-grid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
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
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="block bg-gradient-to-b from-[#f3f7fa] via-[#dbeafe] to-[#7caaff] bg-clip-text text-transparent drop-shadow-md [text-shadow:0_2px_8px_rgba(0,0,0,0.18)]">
            DIGITAL SOLUTIONS
          </span>
          <span className="block bg-gradient-to-b from-[#3bb9ff] via-[#2563eb] to-[#0e224c] bg-clip-text text-transparent drop-shadow-lg mt-2 tracking-tight">
            FOR MODERN BUSINESSES
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-6 sm:mt-8
            text-center
            text-base xs:text-lg md:text-xl lg:text-2xl
            text-[#b4c5db] font-medium
            max-w-xl sm:max-w-2xl
            drop-shadow-sm font-['Inter',sans-serif]
            mx-auto
          "
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {about.subTitle ||
            "Top-tier ReactJs, NextJs web apps, engineered with dedication and expertise."}
        </p>

        {/* Fiverr rating & CTA */}
        <div
          className="
            flex flex-col sm:flex-row items-center justify-center 
            gap-6 sm:gap-8 mt-10 sm:mt-14 w-full
          "
        >
          <div
            className="
              flex items-center gap-2 sm:gap-3
              bg-[#18213c] rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3
              shadow border border-[#2563eb40]
              w-[90vw] max-w-xs sm:w-auto
              justify-center
            "
          >
            <span className="text-xl sm:text-2xl font-extrabold text-white font-sans tracking-tight">
              fiverr.
            </span>
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
            <span className="text-white font-bold ml-2 text-base sm:text-lg font-sans">
              5.0
            </span>
            <span className="text-[#60a5fa] font-semibold text-sm sm:text-md ml-1">
              (20)
            </span>
          </div>

          {/* DISCUSS PROJECT Button with exact Fiverr size and toned-down background */}
          <Link
            href="#contact"
            className="
              relative rounded-2xl w-[90vw] max-w-xs sm:w-auto
              px-4 sm:px-5 py-2.5 sm:py-3
              font-semibold text-base sm:text-lg tracking-wide
              bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#2563eb]
              text-black
              shadow-sm hover:shadow-md active:scale-95
              transition duration-300 ease-in-out
              flex items-center justify-center gap-2
              select-none
              font-['Inter',sans-serif]
              overflow-hidden
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3bb9ff] focus-visible:ring-offset-2
              before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
              before:shadow-[inset_0_0_0_1.5px_rgba(37,99,235,0.35)]
            "
            aria-label="Discuss project"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <TextReveal>DISCUSS PROJECT</TextReveal>
            <svg
              className="w-5 h-5 text-black transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
