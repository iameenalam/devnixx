"use client";

import { Testimonial as ITestimonial } from "../utils/interface";
import { InfiniteScroll } from "./ui/InfiniteScroll";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

const Testimonials = ({ testimonials }: { testimonials: ITestimonial[] }) => {
  return (
    <section className="py-20 relative" id="testimonials">
      <span className="blob size-1/2 absolute -top-20 left-0 blur-[100px] -z-10" />
      <SectionHeading className="md:pl-28">
        <SlideIn className="text-white/40">What Our</SlideIn> <br />
        <SlideIn className="">Clients Say</SlideIn>
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
            className="md:p-6 p-4 bg-gradient-to-br from-[#071530] via-[#0a1c3d] to-[#051027] md:w-[450px] w-[300px] rounded-2xl space-y-2 relative overflow-hidden z-0 border border-blue-900"
          >
            <div className="relative">
              <span className="text-9xl absolute -top-9 -left-2 size-10 text-blue-900 opacity-20 select-none pointer-events-none">
                &quot;
              </span>
              <p className="md:line-clamp-4 line-clamp-3 opacity-90 md:text-xl text-blue-200">
                {val.review}
              </p>
            </div>
            <div className="flex gap-3 pt-6 items-center">
              <img
                src={val.image.url}
                width={50}
                height={50}
                alt={val.name}
                className="object-scale-down size-10 rounded-full border-2 border-blue-700 bg-transparent"
              />
              <div>
                <h4 className="md:font-semibold font-medium text-blue-100">
                  {val.name}
                </h4>
                <h5 className="md:text-sm text-xs opacity-60 text-blue-300">
                  {val.position}
                </h5>
              </div>
            </div>
            <span className="absolute -bottom-6 -z-10 -right-0">
              <svg
                width="80"
                height="176"
                viewBox="0 0 80 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80 0.311005L80 75.7528L66.8466 87.9639L79.9853 100.869L79.9853 176H57.5783L57.5783 123.751L22.9432 157.376L6.80805 142.143L50.6601 99.1772L0 99.1772L0 77.0325L49.6613 77.0325L6.90351 34.3051L22.7082 18.7178L56.9467 52.1552L56.9467 0H80"
                  fill="#1e40af"
                />
              </svg>
            </span>
          </li>
        ))}
      </InfiniteScroll>
    </Transition>
  );
};
