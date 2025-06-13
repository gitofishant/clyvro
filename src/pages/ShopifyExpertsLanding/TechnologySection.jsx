import React from 'react';
import technologies from './Technologies'; // Adjust the path as needed

const TechnologySection = () => {
  // Duplicate icons to allow seamless looping
  const scrollingTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-12 sm:py-16 bg-[#f8f4ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        <h2 className="text-4xl sm:text-3xl md:text-5xl font-normal text-center mb-4 leading-snug">
          Softwares and technologies that <br />
          <span className="font-semibold">we use on a daily basis</span>
        </h2>

        <p className="text-base sm:text-lg text-center text-[#171717] mb-10 max-w-2xl mx-auto">
          Effective marketing and advertising materials. It is also a great tool to use when you want to present your.
        </p>

        {/* Auto-scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-horizontal gap-6 w-max">
            {scrollingTechnologies.map(({ id, icon, alt }, index) => (
              <div
                key={`${id}-${index}`}
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm"
              >
                <img src={icon} alt={alt} className="w-12 h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
