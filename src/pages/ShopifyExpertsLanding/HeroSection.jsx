import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopifyExpertsHero = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <section className="bg-[#f8f4ef] mt-0 pt-10 md:mt-10 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 pt-24 md:pt-28 md:-ml-10">
            <img 
              src="/images/shopi.png" 
              alt="Shopify Partner" 
              className="h-5 mb-2"
            />
            <h1 className="text-4xl md:text-5xl font-normal leading-tight text-[#171717] mb-4 text-left">
              Shopify Pros <span className="font-medium"> Ready to Assist </span>
            </h1>
            <p className="text-lg text-[#171717] mb-8 max-w-[90%] leading-7 text-left">
              Skip the hiring hassle and delegate unlimited Shopify tasks effortlessly with a simple monthly subscription, cancel anytime, and enjoy expert support tailored to your needs
            </p>

            <button 
              onClick={handleGetInTouch}
              className="bg-black text-white font-semibold w-full sm:w-auto px-5 py-3 rounded-lg flex justify-center sm:justify-start items-center text-left"
            >
              Get In Touch
            </button>

            <div className="mt-4 flex items-center">
              <img 
                src="/images/img_container.png" 
                alt="Trust badge" 
                className="h-8 mr-2"
              />
              <span className="text-base text-[#171717]">Worked with 600+ brands</span>
            </div>
          </div>

          <div className="w-full md:w-1/2  mt-8 md:mt-0">
            <img 
              src="/images/onee.png" 
              alt="Shopify Expert Services" 
              className="w-[65%] sm:w-[60%] md:w-[50%] lg:w-[65%] max-h-[450px] rounded-2xl mx-auto mb-12 md:ml-auto md:translate-x-32 md:mt-10 md:mb-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyExpertsHero;
