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
    window.location.href = '/contact';
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/yourphonenumber', '_blank');
  };

  return (
    <section id="plans" className="py-16 bg-[#f8f4ef]">
      <div className="w-full mx-auto px-6 max-w-[1440px]">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        <h2 className="text-4xl sm:text-5xl text-center font-normal mb-4">
          Simple Pricing, <span className="font-semibold">Maximum Value</span>
        </h2>

        <p className="text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Get everything you need in one simple, all-inclusive plan—no extra fees, no surprises.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 bg-white border border-black rounded-2xl p-6">
            {[ 
              {
                title: 'High Converting Branded Store',
                desc: 'We create a custom-branded, conversion-optimized store designed for maximum sales and engagement.',
              },
              {
                title: 'Free Paid Premium Themes',
                desc: 'Get access to premium Shopify themes at no extra cost, ensuring a sleek, high-converting design.',
              },
              {
                title: 'End-to-End Store Development',
                desc: 'We handle everything from store setup, design, and customization to ensure a fully functional Shopify store.',
              },
            ].map((item, idx) => (
              <div className="flex items-start mb-6" key={idx}>
                <img
                  src="/images/img_component_1_8.svg"
                  alt="Check"
                  className="w-6 h-6 mt-1 mr-4"
                />
                <div>
                  <h3 className="text-xl font-medium text-[#171717] mb-2">{item.title}</h3>
                  <p className="text-base text-[#171717]">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Side-by-side pricing cards */}
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              {/* Shopify Store */}
              <div className="flex-1 p-4 flex flex-col items-center ">
                <div className="mb-2">
                  <span className="text-xs font-semibold bg-white px-3 py-0.5 rounded-lg inline-block border border-black text-center">
                    Shopify Store
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-center">₹35,999</h3>
                <p className="text-base text-center mb-2">Delivery within 2 weeks</p>
                <p className="text-sm text-gray-500 text-center">
                  Small businesses often can't afford to have that sort
                </p>
              </div>

              {/* A+ Listing */}
              <div className="flex-1 p-4 flex flex-col items-center">
                <div className="mb-2">
                  <span className="text-xs font-semibold bg-white px-3 py-0.5 rounded-lg inline-block border border-black text-center">
                    A+ Listing
                  </span>
                </div>
                <h3 className="text-3xl font-semibold text-center">₹4,999</h3>
                <p className="text-base text-center mb-2">Delivery in 3 days per A+ listing</p>
                <p className="text-sm text-gray-500 text-center">
                  Small businesses often can't afford to have that sort
                </p>
              </div>
            </div>
             <hr className="my-8 border-black" />
            <p className="text-sm text-gray-500 mt-6">
              Moment in the life of any aspiring astronomer of that it is time to buy that first telescope.
            </p>
          </div>

          {/* Right Column */}
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
                className=" !text-black !bg-white border border-black font-semibold px-5 py-3 rounded-lg"
              >
                Get Help on Whatsapp
              </Button>
              <Button
                onClick={handleBookCall}
                className="bg-black text-white font-semibold px-5 py-3 rounded-lg"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
