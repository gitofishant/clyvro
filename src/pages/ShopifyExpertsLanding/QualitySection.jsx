import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ProcessStep = ({ icon, title, description }) => {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
        <div className="mb-2 sm:mb-0 sm:mr-4">
          <div className="w-12 h-12 bg-[#f8f4ef] border border-black rounded-full flex items-center justify-center">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#171717]">{title}</h3>
      </div>
      <p className="text-base sm:text-lg text-[#171717]">{description}</p>
    </div>
  );
};

const QualitySection = () => {
  const navigate = useNavigate();
  const handleBookCall = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 max-w-[1440px]">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        <h2 className="text-4xl sm:text-4xl md:text-5xl font-normal text-center mb-4 leading-tight">
          Our Process Of Making <span className="font-semibold">High</span><br />
          <span className="font-semibold">Quality Shopify Store</span>
        </h2>

        <p className="text-base sm:text-lg text-center text-[#171717] mb-10 max-w-2xl mx-auto">
          From initial blueprint to final launch, here's how we craft each high-converting Shopify store.
        </p>

        {/* ✅ Wider container for steps */}
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <ProcessStep
            icon="/images/img_component_1_6.svg"
            title="Theme Selection"
            description="Explore our curated Shopify themes for any modern store—whether a minimal boutique or a feature-rich megastore, our designs provide the ideal eCommerce foundation."
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
            className="bg-black text-white font-semibold px-5 py-3 rounded-lg"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
