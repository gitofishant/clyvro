import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom'; 

const PricingFeature = ({ title, description }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-medium text-[#171717] mb-2">{title}</h3>
      <p className="text-base text-[#171717]">{description}</p>
    </div>
  );
};

const PricingSection = () => {
  const navigate = useNavigate(); 
  const handleBookCall = () => {
    // Implement booking functionality
    window.location.href = '/contact';
  };

  const handleWhatsapp = () => {
    // Implement WhatsApp functionality
    window.open('https://wa.me/yourphonenumber', '_blank');
  };

  return (
    <section id='plans' className="py-16 bg-[#f8f4ef]">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-white text-sm font-medium py-1.5 px-5 rounded-xl">
            Find The Best Shopify Experts
          </div>
        </div>
        
        <h2 className="text-6xl font-normal text-center mb-4">
          Simple Pricing, Maximum Value
        </h2>
        
        <p className="text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Get everything you need in one simple, all-inclusive plan—no extra fees, no surprises.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 bg-white border border-black rounded-2xl p-6">
            <div className="flex items-start mb-6">
              <img src="/images/img_component_1_8.svg" alt="Check" className="w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-medium text-[#171717] mb-2">High Converting Branded Store</h3>
                <p className="text-base text-[#171717]">We create a custom-branded, conversion-optimized store designed for maximum sales and engagement.</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <img src="/images/img_component_1_8.svg" alt="Check" className="w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-medium text-[#171717] mb-2">Free Paid Premium Themes</h3>
                <p className="text-base text-[#171717]">Get access to premium Shopify themes at no extra cost, ensuring a sleek, high-converting design.</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <img src="/images/img_component_1_8.svg" alt="Check" className="w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-medium text-[#171717] mb-2">End-to-End Store Development</h3>
                <p className="text-base text-[#171717]">We handle everything from store setup, design, and customization to ensure a fully functional Shopify store.</p>
              </div>
            </div>
            
            <div className="bg-[#a3a3a314] border border-black rounded-2xl p-6 mt-8">
              <div className="flex justify-between mb-4">
                <div className="bg-white border border-black rounded-lg py-1 px-2">
                  <span className="text-xs font-semibold">Shopify Store</span>
                </div>
              </div>
              
              <h3 className="text-4xl font-semibold text-center ">₹35,999</h3>
              <p className="text-lg text-center mb-4">Delivery within 2 weeks</p>
              <p className="text-sm text-gray-500 text-center mb-4">Small businesses often can't afford to have that sort</p>
              
              <div className="mt-8">
                <div className="bg-white border border-black rounded-lg py-1 px-2 inline-block">
                  <span className="text-xs font-semibold">A+ Listing</span>
                </div>
                
                <h3 className="text-4xl font-semibold text-center mt-4 mb-4">₹4,999</h3>
                <p className="text-lg text-center mb-4">Delivery in 3 days per A+ listing</p>
                <p className="text-sm text-gray-500 text-center">Small businesses often can't afford to have that sort</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <PricingFeature 
              title="50 Product Listings"
              description="We list up to 50 products with optimized descriptions, images, and SEO-friendly content for better discoverability."
            />
            
            <PricingFeature 
              title="Conversion-Focused Store Setup"
              description="Implement strategies like upsells, abandoned cart recovery, and trust badges to boost conversions."
            />
            
            <PricingFeature 
              title="Ongoing Support & Consultation"
              description="Get free e-commerce consultation and expert support for seamless store management."
            />
            
            <PricingFeature 
              title="Advanced Marketing Automation"
              description="Implement email automation, retargeting ads, and conversion tracking for long-term sales growth."
            />
            
            <PricingFeature 
              title="3 Months Free Shopify Basic Plan"
              description="Launch your store with a free Shopify Basic plan for 3 months, saving costs while you grow."
            />
            
            <hr className="my-8 border-black" />
            
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Button 
                onClick={handleWhatsapp}
                className="bg-black text-[#ffffff] border border-black font-semibold px-5 py-3 rounded-lg flex items-center"
              >
                <img src="/images/img_component_1_9.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
                Get Help on Whatsapp
              </Button>
              
              <Button 
                onClick={handleBookCall}
                className="bg-black text-white font-semibold px-5 py-3 rounded-lg flex items-center"
              >
                Book a Call
                <svg className="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <use href="img_component_1_10.svg#icon" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;