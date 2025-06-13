import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex mb-6 sm:mb-8">
      <div className="mr-4 shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
          <img src={icon} alt={title} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-[#171717] mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-[#171717]">{description}</p>
      </div>
    </div>
  );
};

const TroubleshootingSection = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left: Text Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-6 sm:mb-8">
              Troubleshooting and maintenance
            </h2>

            <ServiceItem 
              icon="/images/img_component_1_3.svg"
              title="Speed Optimization"
              description="Conduct site speed audits to enhance performance and improve load times."
            />
            
            <ServiceItem 
              icon="/images/img_component_1_24x24.svg"
              title="Bug Fixes & Troubleshooting"
              description="Resolve urgent bugs, app conflicts, and theme issues quickly and efficiently."
            />
            
            <ServiceItem 
              icon="/images/img_component_1_1.svg"
              title="App Configuration"
              description="Install and configure apps seamlessly to ensure full compatibility with your store."
            />

            <Button 
              onClick={handleBookCall}
              className="bg-black text-white font-semibold px-5 py-3 rounded-lg mt-4"
            >
              Book a Call
            </Button>
          </div>

          {/* Right: Vertically Centered Image */}
          <div className="w-full lg:w-1/2 lg:pl-10 self-center">
            <img 
              src="/images/performance.jpg" 
              alt="Shopify Troubleshooting" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TroubleshootingSection;
