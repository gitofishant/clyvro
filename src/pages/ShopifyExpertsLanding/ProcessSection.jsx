import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom'; 

const ProcessStep = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center mb-12 md:mb-0">
      <div className="w-24 h-24 bg-white border border-black rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt={`Step ${number}`} className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-semibold text-[#171717] mb-2">{title}</h3>
      <p className="text-base text-[#171717] max-w-xs">{description}</p>
    </div>
  );
};

const ProcessSection = () => {
  const navigate = useNavigate(); 
  const handleBookCall = () => {
    // Implement booking functionality
    window.location.href = '/Contact';
  };

  return (
    <section className="py-16 bg-[#f8f4ef]">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-white text-sm font-medium py-1.5 px-5 rounded-xl">
            Find The Best Shopify Experts
          </div>
        </div>
        
        <h2 className="text-4xl font-normal text-center mb-16">
          A few simple steps to get started
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <ProcessStep 
            number={1}
            icon="/images/img_component_1_40x40.svg"
            title="Book a call"
            description="A quick 30 minute call to check if we are a good match for each other."
          />
          
          <div className="hidden md:block">
            <img src="/images/img_component_1_32x32.svg" alt="Arrow" className="w-8 h-8" />
          </div>
          
          <ProcessStep 
            number={2}
            icon="/images/img_component_1_4.svg"
            title="Subscribe to a plan"
            description="Our plans come with no strings attached. Simple and hassle free."
          />
          
          <div className="hidden md:block">
            <img src="/images/img_component_1_32x32.svg" alt="Arrow" className="w-8 h-8" />
          </div>
          
          <ProcessStep 
            number={3}
            icon="/images/img_component_1_5.svg"
            title="Submit your request"
            description="Use a premade request template or go freestyle. It's up to you."
          />
        </div>
        
        <div className="flex justify-center">
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

export default ProcessSection;