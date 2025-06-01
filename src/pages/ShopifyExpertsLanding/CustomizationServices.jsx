import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="mb-12">
      <div className="flex mb-4">
        <div className="mr-4">
          <div className="w-14 h-14 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-[#171717]">{title}</h3>
      </div>
      <p className="text-base text-[#171717] mb-4">{description}</p>
      <a href="#" className="text-base font-semibold text-black">Learn more</a>
    </div>
  );
};

const CustomizationServices = () => {
  const navigate = useNavigate();
  const handleBookCall = () => {
    // Implement booking functionality
    window.location.href = '/contact';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-white text-sm font-medium py-1.5 px-5 rounded-xl">
            Find The Best Shopify Experts
          </div>
        </div>
        
        <h2 className="text-4xl font-normal text-center mb-4">
          Why do you need Shopify<br />Theme customization services?
        </h2>
        
        <p className="text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Effective marketing and advertising materials. It is also a great tool to use when you want to present your.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <svg className="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <use href="img_component_1_2.svg#icon" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationServices;