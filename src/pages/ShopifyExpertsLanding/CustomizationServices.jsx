import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="mb-12">
      <div className="flex mb-4">
        <div className="mr-4">
          <div className="w-14 h-14 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] break-words">{title}</h3>
      </div>
      <p className="text-base sm:text-lg text-[#171717] mb-4">{description}</p>
      <a href="#" className="text-base font-semibold text-black">Learn more</a>
    </div>
  );
};

const CustomizationServices = () => {
  const navigate = useNavigate();
  const handleBookCall = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        <h2 className="text-4xl sm:text-4xl md:text-5xl font-normal leading-tight text-center mb-4">
          Why do you need Shopify<br /><span className="font-medium">Theme customization services?</span>
        </h2>

        <p className="text-base sm:text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Effective marketing and advertising materials. It is also a great tool to use when you want to present your.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceItem 
            icon="/images/img_component_1_3.svg"
            title="Need Extra Features"
            description="Pre-built themes may lack advanced features. Customize with filters, sliders, and popups for a tailored experience."
          />

          <ServiceItem 
            icon="/images/img_component_1_24x24.svg"
            title="Theme Migration"
            description="Upgrading to a new Shopify theme? We'll migrate and optimize your store for a better user experience."
          />

          <ServiceItem 
            icon="/images/img_component_1_1.svg"
            title="Boost Performance"
            description="Optimize or customize your theme for faster speed, better efficiency, and improved user experience."
          />
        </div>

        <div className="flex justify-center mt-4">
          <Button 
            onClick={handleBookCall}
            className="bg-black text-white font-semibold px-5 py-3 rounded-lg flex items-center"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationServices;
