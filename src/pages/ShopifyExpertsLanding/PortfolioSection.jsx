import React, { useState } from "react";
import { FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const portfolioItems = [
    { image: "images/i1.png", alt: "Portfolio 1" },
    { image: "images/i2.png", alt: "Portfolio 2" },
    { image: "images/i3.png", alt: "Portfolio 3" },
    { image: "images/i4.png", alt: "Portfolio 4" },
    { image: "images/i5.png", alt: "Portfolio 5" },
    { image: "images/img_item_f4pxiuidszfjhx8pl881vq2atbkpng.png", alt: "Portfolio 6" },
    { image: "images/img_item_ri7dmpwpv3cig5arivssjlyjxpapng.png", alt: "Portfolio 7" },
    { image: "images/img_item_czbrj2mgifidkpqqbqybcs1cdj4png.png", alt: "Portfolio 8" },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 font-[Inter,Manrope,sans-serif]" id="portfolio">
      {/* 2. Glimpse Of Our Work Section */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* Tagline and Button in same row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-4 space-y-2 sm:space-y-0">
          <div className="inline-block border border-black px-3 py-1 text-xs font-medium rounded-md w-max">
            A Glimpse Of Our Work
          </div>
          <button
            onClick={() => navigate("/showcasethemes")}
            className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900 transition w-max"
          >
            <span>View Full Portfolio</span>
            <FiBriefcase className="text-lg" />
          </button>
        </div>

        {/* Heading & Description */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-normal text-[#171717] leading-tight mb-4">
              A few successful stores <br />
              <span className="font-semibold">developed by us</span>
            </h2>

            <p className="text-base text-[#171717] max-w-x2">
              Join 600+ brands that trust us for their eCommerce success. From innovative design to
              seamless performance, we deliver results that elevates businesses in the today’s competitive market.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Scrollable Image Section */}
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-carousel gap-4 w-max">
          {portfolioItems.concat(portfolioItems).map((item, index) => (
            <div
              key={index}
              className="w-72 shrink-0 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged Portfolio"
            className="max-w-full max-h-full object-contain rounded-lg animate-fade-in-modal"
          />
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;
