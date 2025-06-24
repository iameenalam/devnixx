"use client";

import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

import { TextReveal } from "./Typography";

interface HoverImageProps {
  heading: string;
  imgSrc: string;
  subheading: string;
}

export const HoverImage = ({
  heading,
  imgSrc,
  subheading,
}: HoverImageProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const MotionLink = motion(Link);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <MotionLink
      href={"#contact"}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-[#3bb9ff33] py-4 transition-colors duration-500 md:py-6 md:px-16 hover:bg-[#3bb9ff11] rounded-lg"
    >
      <div>
        <div className="flex items-center justify-between">
          <h4 className="relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold md:text-[#7caaff] transition-colors duration-500 group-hover:text-[#a3c5ff] md:text-6xl tracking-tighter">
            {heading}
          </h4>
        </div>
        <p className="relative z-10 mt-2 block md:text-base text-sm text-[#b4c5db] transition-colors duration-500 group-hover:text-[#a3c5ff] pt-2">
          {subheading}
        </p>
      </div>

      {/* Image visible only on md and larger */}
      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 max-md:hidden border border-[#2563eb80]"
        alt={`Image representing a link for ${heading}`}
        draggable={false}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="z-10 md:p-4 grid justify-items-end gap-2 max-md:hidden"
      >
        <div className="border border-[#3bb9ff80] rounded-full py-2 px-4 text-[#3bb9ff] bg-[#0e1a3f]">
          <TextReveal>Discuss Project!</TextReveal>
        </div>
      </motion.div>
    </MotionLink>
  );
};
