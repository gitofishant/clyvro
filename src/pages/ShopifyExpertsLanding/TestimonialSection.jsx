import React, { useRef } from 'react';

const videos = [
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
  '/videos/video1.mp4',
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-white relative" id='testimonials'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tag */}
        <div className="flex justify-center mb-4">
          <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-normal text-center mb-4 leading-snug">
          Don’t Just Take <span className="font-bold">Our Word For It</span>
        </h2>

        <p className="text-base sm:text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Our success is reflected in our clients’ experiences. Read testimonials from satisfied businesses who have benefited from our <strong>Shopify maintenance services</strong> and see how we can help you grow.
        </p>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md p-2 rounded-full"
          >
            {/* Left Arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Videos */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide scroll-smooth"
          >
            {videos.map((src, index) => (
              <div
                key={index}
                className="w-[240px] min-w-[240px] bg-black rounded-xl overflow-hidden shadow-md"
              >
                <video
                  src={src}
                  controls
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md p-2 rounded-full"
          >
            {/* Right Arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
