import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '../../components/ui/Button';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex mb-8">
      <div className="mr-4">
        <div className="w-14 h-14 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-[#171717] mb-2">{title}</h3>
        <p className="text-base text-[#171717] mb-0">{description}</p>
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-normal text-black mb-8">
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
              className="bg-black text-white font-semibold px-5 py-3 rounded-lg flex items-center mt-4"
            >
              Book a Call
              <svg className="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <use href="img_component_1_2.svg#icon" />
              </svg>
            </Button>
          </div>

          <div className="w-full md:w-1/2 md:pl-10">
            <img 
              src="/images/service.jpg" 
              alt="Shopify Store Development" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
