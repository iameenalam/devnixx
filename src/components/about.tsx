"use client";
import React, { useState } from "react";

// SVG Icons in blue
const CodingIcon = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    <circle cx="16" cy="32" r="3" stroke="#38bdf8" strokeWidth="2.5" />
    <circle cx="24" cy="16" r="3" stroke="#38bdf8" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="3" stroke="#38bdf8" strokeWidth="2.5" />
    <path
      d="M24 19v6l-6 7"
      stroke="#38bdf8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 19v6l6 7"
      stroke="#38bdf8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    <path
      d="M24 6l16 6v8c0 10.5-7.5 18.5-16 22-8.5-3.5-16-11.5-16-22V12l16-6z"
      stroke="#38bdf8"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M18 24l5 5 7-9"
      stroke="#38bdf8"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SupportIcon = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    <rect
      x="8"
      y="16"
      width="14"
      height="10"
      rx="2"
      stroke="#38bdf8"
      strokeWidth="2.5"
    />
    <rect
      x="26"
      y="16"
      width="14"
      height="10"
      rx="2"
      stroke="#38bdf8"
      strokeWidth="2.5"
    />
    <path
      d="M15 36v-3a3 3 0 013-3h12a3 3 0 013 3v3"
      stroke="#38bdf8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="15" cy="39" r="3" stroke="#38bdf8" strokeWidth="2.5" />
    <circle cx="33" cy="39" r="3" stroke="#38bdf8" strokeWidth="2.5" />
  </svg>
);

const features = [
  {
    title: "Coding Standards",
    icon: <CodingIcon />,
    description:
      "We adhere to best coding practices, staying current with the latest updates to deliver fully optimized, bug-free code.",
  },
  {
    title: "Clear & Transparent",
    icon: <ShieldCheckIcon />,
    description:
      "Our process is open and honest, with clear communication and regular updates, so you always know what’s happening with your project.",
  },
  {
    title: "Continuous Support",
    icon: <SupportIcon />,
    description:
      "We provide 1 month of free support after closing the deal, ensuring a smooth transition and ongoing assistance as needed.",
  },
];

const stats = [
  { value: "3+", label: "years in the game" },
  { value: "20+", label: "projects completed" },
  { value: "$50k+", label: "in revenue" },
  { value: "10+", label: "technologies" },
];

const faqs = [
  {
    question: "What makes Devnixx different from other tech agencies?",
    answer:
      "We focus on smart, human-centered solutions. Whether it's AI-powered features or simple user flows, everything we build is designed to actually be used and loved by real people.",
  },
  {
    question: "Can Devnixx help modernize our outdated website or app?",
    answer:
      "Yes! We specialize in redesigning and rebuilding legacy systems into modern, responsive, and scalable platforms that perform well and look great.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "We work with both. Whether you’re launching your first MVP or scaling an existing platform, we tailor our approach to match your business stage and goals.",
  },
  {
    question: "Can I be involved in the design and development process?",
    answer:
      "Absolutely. We encourage collaboration and regularly share updates so your feedback shapes the project every step of the way.",
  },
  {
    question: "Do you offer AI integration even if we’re not a tech company?",
    answer:
      "Yes. We make AI practical even for non-tech businesses. From smart recommendations to data-driven automation, we’ll suggest what fits your workflow best.",
  },
  {
    question: "Will I own the final product and code?",
    answer:
      "100%. Once the project is complete and payment is cleared, you fully own the code, assets, and everything we’ve built for you.",
  },
  {
    question: "What if I need help scaling after launch?",
    answer:
      "We’re here for the long run. From performance optimization to new feature rollouts, we offer post-launch support to help you grow smoothly.",
  },
];

const softwareHouseImage =
  "https://res.cloudinary.com/dxrm9mg7f/image/upload/v1750845689/software-house_zdrubj.png";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-[#0a192f] via-[#172a4a] to-[#101a2b] pb-14 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* ABOUT US with image */}
        <div className="pt-14 pb-16 flex flex-col md:flex-row items-center md:items-stretch gap-10">
          {/* Left: Text */}
          <div className="flex-1 min-w-[280px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              About <span className="text-[#38bdf8]">Devnixx</span>
            </h1>
            <p className="text-[#b4c5db] text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              At <span className="text-[#38bdf8] font-bold">Devnixx</span>,
              we’re all about bringing your ideas to life through smart,
              user-friendly technology. Whether it’s eye-catching web design,
              smooth web development, or handy app development, we focus on
              creating experiences that people love to use. We also dive into
              the world of AI and machine learning to make your projects smarter
              and help you make better decisions. Plus, our data analytics give
              you clear insights to grow your business confidently.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 min-w-[280px] flex justify-center items-center">
            <img
              src={softwareHouseImage}
              alt="Devnixx Software House"
              className="w-full max-w-full h-[280px] sm:h-[320px] md:h-auto md:min-h-[320px] object-cover rounded-3xl shadow-xl"
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-16 pb-16">
          <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
            <span className="text-white">WHY </span>
            <span className="text-[#38bdf8]">CHOOSE</span>
            <span className="text-white"> US?</span>
          </h2>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-3xl overflow-hidden shadow-2xl">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`
                  flex flex-col items-center text-center px-8 py-12
                  ${
                    idx === 1
                      ? "bg-gradient-to-b from-[#18316b] via-[#2563eb] to-[#18316b]"
                      : "bg-gradient-to-b from-[#141c2b] via-[#172a4a] to-[#141c2b]"
                  }
                  ${
                    idx === 0
                      ? "rounded-t-3xl md:rounded-t-none md:rounded-l-3xl"
                      : ""
                  }
                  ${
                    idx === features.length - 1
                      ? "rounded-b-3xl md:rounded-b-none md:rounded-r-3xl"
                      : ""
                  }
                  ${idx > 0 && idx < features.length - 1 ? "rounded-none" : ""}
                  border border-[#2563eb33]
                  min-h-[380px]
                `}
                tabIndex={0}
                aria-label={feature.title}
              >
                <span className="text-[#38bdf8] text-lg font-semibold mb-2">{`[${
                  idx + 1
                }]`}</span>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-snug">
                  {feature.title}
                </h3>
                <div className="mb-5">{feature.icon}</div>
                <p className="text-[#b4c5db] text-base font-medium max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROVEN EXPERTISE */}
        <div className="mt-16 pb-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Left: Heading and paragraph */}
            <div className="flex-1 min-w-[320px]">
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-white">
                <span className="text-white">PROVEN </span>
                <span className="text-[#38bdf8]">EXPERTISE</span>
                <span className="text-white"> &</span>
                <br />
                <span className="text-[#38bdf8]">EXCEPTIONAL</span>
                <span className="text-white"> RESULTS</span>
              </h2>
              <p className="text-[#b4c5db] text-base md:text-lg font-medium max-w-xl">
                Over 90% of our clients return to us! We ensure the quality of
                our work and are committed to your satisfaction. You’re not just
                a customer; you’re our partner in solving your challenges with
                tenacity.
              </p>
            </div>
            {/* Right: Stats grid */}
            <div className="flex-1 min-w-[320px] max-w-xl grid grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`
                    flex flex-col items-center justify-center py-14 px-6
                    ${
                      idx === 1 || idx === 2
                        ? "bg-gradient-to-b from-[#18316b] via-[#2563eb] to-[#18316b]"
                        : "bg-gradient-to-b from-[#141c2b] via-[#172a4a] to-[#141c2b]"
                    }
                    ${idx === 0 ? "rounded-tl-3xl" : ""}
                    ${idx === 1 ? "rounded-tr-3xl" : ""}
                    ${idx === 2 ? "rounded-bl-3xl" : ""}
                    ${idx === 3 ? "rounded-br-3xl" : ""}
                    border border-[#2563eb33]
                    min-h-[160px]
                  `}
                >
                  <span className="text-white text-4xl font-extrabold mb-1 drop-shadow">
                    {stat.value}
                  </span>
                  <span className="text-[#b4c5db] text-lg font-medium text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Heading and description */}
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight text-white">
                <span className="text-[#38bdf8]">FREQUENTLY</span>
                <span className="text-white"> ASKED</span>
                <br />
                <span className="text-white">QUESTIONS!</span>
              </h2>
              <p className="text-[#b4c5db] text-base md:text-lg font-medium max-w-lg mt-4">
                Can’t find the answer you’re looking for?{" "}
                <a
                  href="#contact"
                  className="text-[#38bdf8] hover:text-[#2563eb] transition-colors"
                >
                  Reach out
                </a>{" "}
                to us and we will get in touch with you
              </p>
            </div>
            {/* Right: FAQ Accordion */}
            <div className="flex-1 min-w-[280px] max-w-xl">
              <ul className="divide-y divide-[#1e293b]">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <li key={faq.question}>
                      <button
                        className={`
                          w-full text-left py-5 px-4 flex items-center justify-between
                          focus:outline-none transition bg-transparent
                          ${isOpen ? "bg-[#172a4a] rounded-lg" : ""}
                          hover:bg-[#152033]
                        `}
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${idx}`}
                      >
                        <span className="text-white text-lg md:text-xl font-semibold">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-5 h-5 ml-4 text-[#38bdf8] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        id={`faq-panel-${idx}`}
                        className="overflow-hidden transition-[max-height,padding] duration-300 ease-in-out"
                        style={{
                          maxHeight: isOpen ? "500px" : "0",
                          paddingTop: isOpen ? "0.5rem" : "0",
                          paddingBottom: isOpen ? "0.5rem" : "0",
                        }}
                        aria-hidden={!isOpen}
                      >
                        <p className="text-[#b4c5db] text-base md:text-lg font-normal px-4">
                          {faq.answer}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
