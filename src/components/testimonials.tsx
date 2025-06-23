"use client";

import { Testimonial as ITestimonial } from "../utils/interface";
import { InfiniteScroll } from "./ui/InfiniteScroll";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

const Testimonials = ({ testimonials }: { testimonials: ITestimonial[] }) => {
  return (
    <section className="py-20 relative" id="testimonials">
      {/* Blue blob background */}
      <span className="blob size-1/2 absolute -top-20 left-0 blur-[100px] -z-10 bg-gradient-to-tr from-[#3bb9ff88] via-[#2563eb66] to-[#0e224c44]" />
      <SectionHeading className="md:pl-28">
        <SlideIn className="text-[#b4c5db]">What Our</SlideIn> <br />
        <SlideIn className="text-[#e0edfa]">Clients Say</SlideIn>
      </SectionHeading>
      <Testimonial testimonials={testimonials} speed="normal" pauseOnHover />
      <Testimonial
        testimonials={testimonials}
        pauseOnHover
        speed="normal"
        direction="left"
      />
    </section>
  );
};

export default Testimonials;

interface TestimonialProps {
  testimonials: ITestimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const Testimonial = ({
  testimonials,
  direction,
  speed,
  pauseOnHover,
}: TestimonialProps) => {
  return (
    <Transition viewport={{ once: true }}>
      <InfiniteScroll
        direction={direction}
        speed={speed}
        pauseOnHover={pauseOnHover}
        className="pb-4"
      >
        {testimonials.map((val) => (
          <li
            key={val._id}
            className="md:p-6 p-4 md:w-[450px] w-[300px] rounded-2xl space-y-2 relative overflow-hidden z-0 border border-[#3bb9ff33]"
            style={{
              background:
                "linear-gradient(135deg, #152442 0%, #19345c 100%)",
              boxShadow: "none",
            }}
          >
            <div className="relative">
              <span className="text-9xl absolute -top-9 -left-2 size-10 text-[#3bb9ff33] select-none pointer-events-none">
                &quot;
              </span>
              <p className="md:line-clamp-4 line-clamp-3 opacity-95 md:text-xl text-[#e0edfa]">
                {val.review}
              </p>
            </div>
            <div className="flex gap-3 pt-6">
              <img
                src={val.image.url}
                width={50}
                height={50}
                alt={val.name}
                className="object-scale-down size-10 bg-[#233d5e] border-2 border-[#3bb9ff55] rounded-full"
              />
              <div>
                <h4 className="md:font-semibold font-medium text-[#b4c5db]">{val.name}</h4>
                <h5 className="md:text-sm text-xs opacity-70 text-[#7caaff]">
                  {val.position}
                </h5>
              </div>
            </div>
            <span className="absolute -bottom-6 -z-10 -right-0 ">
              <svg
                width="80"
                height="176"
                viewBox="0 0 80 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 0.311005L80 75.7528L66.8466 87.9639L79.9853 100.869L79.9853 176H57.5783L57.5783 123.751L22.9432 157.376L6.80805 142.143L50.6601 99.1772L0 99.1772L0 77.0325L49.6613 77.0325L6.90351 34.3051L22.7082 18.7178L56.9467 52.1552L56.9467 0H80"
                  fill="#2563eb"
                  opacity="0.14"
                />
              </svg>
            </span>
          </li>
        ))}
      </InfiniteScroll>
    </Transition>
  );
};