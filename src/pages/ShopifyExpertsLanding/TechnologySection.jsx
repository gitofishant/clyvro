import React from 'react';
import technologies from './Technologies'; // Adjust the path based on your folder structure

const TechnologySection = () => {
  return (
    <section className="py-16 bg-[#f8f4ef]">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-white text-sm font-medium py-1.5 px-5 rounded-xl">
            Find The Best Shopify Experts
          </div>
        </div>

        <h2 className="text-4xl font-normal text-center mb-4">
          Softwares and technologies that <br />we use on a daily basis
        </h2>

        <p className="text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Effective marketing and advertising materials. It is also a great tool to use when you want to present your.
        </p>

        {/* Render technology logos from the array */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {technologies.map(({ id, icon, alt }) => (
            <div
              key={id}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm"
            >
              <img src={icon} alt={alt} className="w-12 h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;


