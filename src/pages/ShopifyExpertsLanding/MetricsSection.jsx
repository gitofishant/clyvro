import React from 'react';

const MetricCard = ({ number, text, subtext }) => {
  return (
    <div className="border border-black rounded-2xl p-6 flex flex-col items-center text-center h-full">
      <h3 className="text-3xl font-normal mb-2">{number}</h3>
      <p className="text-sm font-normal mb-0">
        {text} 
        {subtext && <span className="font-semibold">{subtext}</span>}
      </p>
    </div>
  );
};

const MetricsSection = () => {
  return (
    <section className="py-16 bg-[#f8f4ef]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            number="9+ Years"
            text="of experience working with 600+ brands on "
            subtext="Shopify"
          />
          
          <MetricCard 
            number="500+"
            text="Shopify brands chose us as their Shopify "
            subtext="partner"
          />
          
          <MetricCard 
            number="650+"
            text="Successful Shopify projects, both big and small"
          />
          
          <MetricCard 
            number="98.7%"
            text="of our clients have rated our service as "
            subtext="Excellent"
          />
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;