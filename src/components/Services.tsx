"use client";

import Link from "next/link";

import { Service } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { HoverImage } from "./ui/HoverImage";

interface ServiceProps {
  services: Service[];
}

function Services({ services }: ServiceProps) {
  return (
    <section
      className="px-2 py-20 relative bg-[#0a0f1a] dark:bg-[#0a0f1a]"
      id="services"
    >
      <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10 opacity-50" />
      <SectionHeading className="md:pl-16 overflow-hidden tracking-tighter">
        <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
        <SlideIn>we can help you</SlideIn>
      </SectionHeading>
      <div className="mx-auto pt-10 flex flex-col gap-8">
        {services.map((service) => (
          <Transition key={service._id}>
            <>
              {/* HoverImage only on md and larger with dark theme wrapper */}
              <div className="hidden md:block bg-[#121827] dark:bg-[#121827] rounded-lg shadow-lg border border-[#2563eb33]">
                <HoverImage
                  heading={service.name}
                  imgSrc={service.image.url}
                  subheading={service.desc}
                />
              </div>

              {/* Static image for small screens */}
              <div className="block md:hidden bg-[#0a0f1a] rounded-lg overflow-hidden shadow-lg border border-[#2563eb80]">
                <div className="flex flex-col items-center gap-4 p-4">
                  <img
                    src={service.image.url}
                    alt={`Image representing ${service.name}`}
                    className="w-full h-48 object-cover rounded-lg border border-[#2563eb80]"
                  />
                  <h4 className="text-xl font-semibold text-[#7caaff] tracking-tight">
                    {service.name}
                  </h4>
                  <p className="text-sm text-[#b4c5db] text-center">
                    {service.desc}
                  </p>
                  <Link
                    href="#contact"
                    aria-label={`Discuss project about ${service.name}`}
                  >
                    <span className="mt-2 inline-block cursor-pointer rounded-full border border-[#3bb9ff] px-4 py-2 text-[#3bb9ff] font-semibold text-sm hover:bg-[#3bb9ff]/20 transition-colors">
                      Discuss Project!
                    </span>
                  </Link>
                </div>
              </div>
            </>
          </Transition>
        ))}
      </div>
    </section>
  );
}

export default Services;
