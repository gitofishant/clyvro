import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopifyExpertsHero = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    // Navigate to the contact page
    navigate('/contact');
  };

  return (
    <section className="bg-[#f8f4ef] mt-10 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 pt-16">
            <img 
              src="/images/shopi.png" 
              alt="Shopify Partner" 
              className="h-5 mb-2"
            />
            <h1 className="text-4xl md:text-5xl font-normal leading-tight text-[#171717] mb-4">
              Shopify Pros Ready to Assist
            </h1>
            <p className="text-lg text-[#171717] mb-8 max-w-xl leading-7">
              Skip the hiring hassle delegate unlimited Shopify tasks with a simple monthly subscription, cancel anytime.
            </p>
            
            <button 
              onClick={handleGetInTouch}
              className="bg-black text-white font-semibold px-5 py-3 rounded-lg flex items-center"
            >
              Get In Touch
              <svg className="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <use href="img_component_1_2.svg#icon" />
              </svg>
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
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/images/one.jpg" 
              alt="Shopify Expert Services" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyExpertsHero;
