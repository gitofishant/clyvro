import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ProcessStep = ({ number, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center mb-10 md:mb-0">
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border border-black rounded-full flex items-center justify-center mb-4">
        <img src={icon} alt={`Step ${number}`} className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-[#171717] max-w-xs">{description}</p>
    </div>
  );
};

const ProcessSection = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    window.location.href = '/Contact';
  };

  return (
    <section className="py-16 bg-[#f8f4ef]">
      <div className="w-full mx-auto px-4 sm:px-6 max-w-[1440px]">
        <div className="flex justify-center mb-4">
         <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        <h2 className="text-4xl sm:text-5xl font-normal text-center mb-12 sm:mb-16 text-[#171717]">
          A few simple steps <span className="font-semibold">to get started</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-6 mb-12">
          <div className="flex flex-col items-center">
            <ProcessStep
              number={1}
              icon="/images/img_component_1_40x40.svg"
              title="Book a call"
              description="A quick 30 minute call to check if we are a good match for each other."
            />
            <div className="block md:hidden my-4">
              <img
                src="/images/img_component_1_32x32.svg"
                alt="Arrow"
                className="w-6 h-6 rotate-90"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <ProcessStep
              number={2}
              icon="/images/img_component_1_4.svg"
              title="Subscribe to a plan"
              description="Our plans come with no strings attached. Simple and hassle free."
            />
            <div className="block md:hidden my-4">
              <img
                src="/images/img_component_1_32x32.svg"
                alt="Arrow"
                className="w-6 h-6 rotate-90"
              />
            </div>
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
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
