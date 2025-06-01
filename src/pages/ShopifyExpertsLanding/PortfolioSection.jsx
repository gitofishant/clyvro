import React, { useState } from "react";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      image: "images/i1.png",
      alt: "Portfolio 1",
    },
    {
      image: "images/i2.png",
      alt: "Portfolio 2",
    },
    {
      image: "images/i3.png",
      alt: "Portfolio 3",
    },
    {
      image: "images/i4.png",
      alt: "Portfolio 4",
    },
    {
      image: "images/i5.png",
      alt: "Portfolio 5",
    },
    {
      image: "images/img_item_f4pxiuidszfjhx8pl881vq2atbkpng.png",
      alt: "Portfolio 6",
    },
    {
      image: "images/img_item_ri7dmpwpv3cig5arivssjlyjxpapng.png",
      alt: "Portfolio 7",
    },
    {
      image: "images/img_item_czbrj2mgifidkpqqbqybcs1cdj4png.png",
      alt: "Portfolio 8",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-beige text-primary-dark" id="portfolio">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-6xl font-extrabold">Portfolio</h2>
        <p className="mt-4 text-lg">
          Explore some of my recent work and freelance projects.
        </p>
      </div>

      {/* Carousel Section */}
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

      {/* Modal for full image view */}
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
