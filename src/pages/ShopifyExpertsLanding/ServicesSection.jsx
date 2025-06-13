import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start mb-4 sm:mb-8">
      <div className="mr-4 shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
          <img src={icon} alt={title} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-[#171717]">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 max-w-[1440px]">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="w-full lg:w-7/12 lg:pr-10">
            <h2 className="text-3xl sm:text-4xl font-normal text-black mb-6 sm:mb-8 lg:text-left">
              Store development and customization
            </h2>

            <ServiceItem
              icon="/images/img_component_1.svg"
              title="Custom Theme Setup"
              description="Get a professional Shopify theme setup, ensuring your store looks polished and functions smoothly."
            />

            <ServiceItem
              icon="/images/img_component_1_24x24.svg"
              title="Feature Enhancements"
              description="Implement custom features like advanced filters, dynamic popups, and personalized product pages."
            />

            <ServiceItem
              icon="/images/img_component_1_1.svg"
              title="Performance Optimization"
              description="Upgrade your theme, improve speed, and optimize functionality for a seamless user experience."
            />

            <Button
              onClick={handleBookCall}
              className="bg-black text-white font-semibold px-5 py-3 rounded-lg mt-4"
            >
              Book a Call
            </Button>
          </div>

          <div className="w-full lg:w-5/12 mt-0 lg:mt-24 mb-10 lg:mb-0">
            <img
              src="/images/service1.png"
              alt="Shopify Store Development"
              className="w-full max-w-[500px] h-auto rounded-2xl object-cover mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
