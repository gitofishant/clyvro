import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom'; 

const ProcessStep = ({ icon, title, description }) => {
  return (
    <div className="mb-12">
      <div className="flex mb-4">
        <div className="mr-4">
          <div className="w-12 h-12 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-[#171717]">{title}</h3>
      </div>
      <p className="text-base text-[#171717] mb-0 max-w-4xl">{description}</p>
    </div>
  );
};

const QualitySection = () => {
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
          Our Process Of Making High <span className="font-semibold">Quality Shopify Store</span>
        </h2>
        
        <p className="text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          From initial blueprint to final launch, here's how we craft each high-converting Shopify store.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <ProcessStep 
            icon="/images/img_component_1_6.svg"
            title="Theme Selection"
            description="Explore Jhango's curated Shopify themes for any modern store—whether a minimal boutique or a feature-rich megastore, our designs provide the ideal eCommerce foundation."
          />
          
          <ProcessStep 
            icon="/images/img_component_1_6.svg"
            title="Custom Coding Advanced Features"
            description="We develop advanced eCommerce features—like bundle builders, mega menus, and cross-sells—giving your store the tools for higher conversions and a customized brand experience."
          />
          
          <ProcessStep 
            icon="/images/img_component_1_6.svg"
            title="Making CRO-Focused Store Layout"
            description="We craft result-driven layouts grounded in Conversion Rate Optimization. We balance eye-catching design with a seamless shopping path—so every visitor is encouraged to take action."
          />
          
          <ProcessStep 
            icon="/images/img_component_1_6.svg"
            title="Product & Collection Page A+ Listing"
            description="Showcase your products with engaging infographics that spotlight core features, benefits, and brand story—turning visitors into informed buyers."
          />
          
          <ProcessStep 
            icon="/images/img_component_1_6.svg"
            title="High Quality Website Banners"
            description="We craft visually captivating banners that leave a lasting impression—each design carefully tailored to your brand's style and message."
          />
          
          <ProcessStep 
            icon="/images/img_component_1_24x24.svg"
            title="Shopify Training & Post Launch Support"
            description="We don't just hand over the keys—we provide Shopify training and ongoing support so you can confidently run and grow your store long after launch."
          />
        </div>
        
        <div className="flex justify-center mt-8">
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

export default QualitySection;