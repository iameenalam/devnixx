"use client";

import { InfiniteScroll } from "./ui/InfiniteScroll";

const Brands = () => {
  const brands = [
    { id: 1, url: "/reeorg.png", alt: "ReeOrg" },
    { id: 2, url: "/zamzam.png", alt: "ZamZam" },
    { id: 3, url: "/cravin.png", alt: "Cravin" },
    { id: 4, url: "/jobverse.png", alt: "Jobverse" },
    { id: 5, url: "/solezaar.png", alt: "Solezaar" },
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-0 sm:py-0 relative" id="brands">
      <h3 className="text-center text-sm sm:text-md text-gray-400 px-4">
        TRUSTED BY ENTERPRISES WORLDWIDE
      </h3>

      <InfiniteScroll
        speed="normal"
        pauseOnHover
        direction="left"
        className="flex gap-2 px-4 sm:px-8"
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-lg flex items-center justify-center"
          >
            <img
              src={brand.url}
              alt={brand.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Brands;
