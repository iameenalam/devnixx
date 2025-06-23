"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { SocialHandle } from "../utils/interface";
import { TextReveal } from "./ui/Typography";
import { useMediaQuery } from "../utils/useMediaQuery";
import Link from "next/link";
import { ArrowUpRight } from "./ui/Icons";

interface HeaderProps {
  social: SocialHandle[];
}
const DARK_BLUE = "#152442"; // consistent dark blue for menu background

const Header = ({ social }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const MotionLink = motion.create(Link);

  const variants = {
    open: {
      clipPath: `inset(0% 0% 0% 0% round ${isMobile ? 0 : "24px"})`,
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      clipPath: `inset(5% 12% 93% 85% round ${isMobile ? 0 : "24px"})`,
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const menuText = "text-white";
  const menuTextAccent = "text-[#60a5fa]";

  return (
    <motion.header className="fixed top-0 md:mt-12 md:mr-12 right-0 z-20">
      {/* LOGO: No animation or transition */}
      <div className="fixed md:top-8 top-6 md:left-8 left-6 z-30">
        <Link href={"/"}>
          <div
            className={`
              font-semibold font-days text-2xl
              lg:mt-3.5
            `}
          >
            devnixx
            <span style={{ color: "#008EFF" }}>.</span>
          </div>
        </Link>
      </div>
      <motion.div
        initial={false}
        animate={isActive ? "open" : "closed"}
        variants={variants}
        className={`absolute top-0 right-0 md:-top-6 md:-right-6 w-dvw md:w-[480px] h-dvh md:h-[calc(100dvh_-_2.5rem)]`}
        style={{ backgroundColor: DARK_BLUE, transition: "background 0.5s" }}
      >
        <AnimatePresence>
          {isActive && (
            <motion.nav
              className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]"
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <motion.div
                className="flex gap-2 flex-col"
                initial="exit"
                animate="enter"
                exit="exit"
              >
                {navLinks.map((link, i) => {
                  const { title, href } = link;
                  return (
                    <div
                      key={`b_${i}`}
                      className=""
                      onClick={() => setIsActive(false)}
                    >
                      <Link
                        href={href}
                        className="flex flex-wrap overflow-hidden group"
                      >
                        <motion.div
                          variants={perspective}
                          custom={i}
                          initial="initial"
                          animate="enter"
                          whileHover="whileHover"
                          whileTap="whileHover"
                          exit="exit"
                          className={`text-5xl ${menuText} flex items-center justify-between transition-colors group-hover:text-[#60a5fa]`}
                        >
                          <motion.span
                            variants={{
                              initial: { x: -20 },
                              whileHover: { x: 0 },
                            }}
                            className={menuTextAccent}
                          >
                            <ArrowUpRight />
                          </motion.span>
                          <motion.span
                            variants={{
                              initial: { x: 0 },
                              whileHover: { x: 20 },
                            }}
                            className="transition-colors"
                          >
                            {title}
                          </motion.span>
                        </motion.div>
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
              <motion.div
                className="flex flex-wrap"
                initial="exit"
                animate="enter"
                exit="exit"
              >
                {social.map((link, i) => {
                  const { platform, _id, url } = link;
                  return (
                    <MotionLink
                      href={url}
                      target="_blank"
                      className={`
                        w-1/2 mt-1 text-white transition-colors
                        hover:text-[#60a5fa]
                      `}
                      variants={slideIn}
                      custom={i}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      key={_id}
                    >
                      <TextReveal>{platform}</TextReveal>
                    </MotionLink>
                  );
                })}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </motion.header>
  );
};

export default Header;

function Button({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  // Menu: black border, bg dark blue, text #60a5fa
  // Close: no border, bg white, text #152442
  const btnBgMenu = "bg-[#152442]";
  const btnBgClose = "bg-white";
  const menuText = "text-[#60a5fa]";
  const closeText = "text-[#152442]";
  return (
    <div
      className={`
        absolute md:top-0 top-4 right-4 md:right-0
        w-[100px] h-10
        overflow-hidden cursor-pointer
        flex items-center justify-center
        rounded-2xl
        bg-transparent
        z-40
      `}
      style={{ padding: 0, borderRadius: "1rem" }}
      onClick={toggleMenu}
    >
      <motion.div className="relative w-full h-full" style={{ borderRadius: "inherit" }}>
        {/* Menu Button (when closed) */}
        <motion.div
          className={`
            ${btnBgMenu} w-full h-full grid place-items-center rounded-2xl
            font-semibold absolute inset-0 transition-opacity pointer-events-auto
            border border-black
            ${menuText}
          `}
          style={{
            borderRadius: "inherit",
            opacity: isActive ? 0 : 1,
            pointerEvents: isActive ? "none" : "auto",
            transition: "opacity 0.4s",
          }}
        >
          <TextReveal>Menu</TextReveal>
        </motion.div>
        {/* Close Button (when open) */}
        <motion.div
          className={`
            ${btnBgClose} w-full h-full grid place-items-center rounded-2xl
            font-semibold absolute inset-0 transition-opacity pointer-events-auto
            ${closeText}
          `}
          style={{
            borderRadius: "inherit",
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? "auto" : "none",
            transition: "opacity 0.4s",
          }}
        >
          <TextReveal>Close</TextReveal>
        </motion.div>
      </motion.div>
    </div>
  );
}

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const perspective = {
  initial: {
    y: 50,
    opacity: 0,
  },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};