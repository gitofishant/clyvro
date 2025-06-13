import React, { useState } from 'react';
import Accordion from '../../components/common/Accordion';

const FaqSection = () => {
  const faqItems = [
    {
      title: "What is Shopify and why should I use it for my online store?",
      content: (
        <p className="text-gray-700">
          Shopify is a leading e-commerce platform that allows businesses to create and manage online stores. It's ideal for businesses of all sizes due to its user-friendly interface, extensive app ecosystem, secure payment processing, and scalable infrastructure. Shopify handles the technical aspects of running an online store, allowing you to focus on growing your business.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "What services do you offer for Shopify store development?",
      content: (
        <p className="text-gray-700">
          We offer comprehensive Shopify development services including custom theme design, store setup and configuration, app integration, performance optimization, migration from other platforms, custom feature development, and ongoing maintenance and support. Our team specializes in creating high-converting, visually appealing stores tailored to your specific business needs.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "How long does it take to develop a Shopify store?",
      content: (
        <p className="text-gray-700">
          The timeline for developing a Shopify store varies depending on the complexity of your requirements. A basic store setup can be completed in 1-2 weeks, while more complex custom stores with extensive features may take 4-8 weeks. During our initial consultation, we'll provide a more accurate timeline based on your specific needs and goals.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "What is the cost of developing a Shopify store?",
      content: (
        <p className="text-gray-700">
          The cost of developing a Shopify store depends on your specific requirements, including design complexity, custom features, and the number of products. Our pricing is transparent and competitive, with options to suit various budgets. We offer package deals as well as hourly rates for ongoing development work. Contact us for a personalized quote based on your project scope.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "Can you help with migrating my existing store to Shopify?",
      content: (
        <p className="text-gray-700">
          Yes, we specialize in seamless migrations from platforms like WooCommerce, Magento, BigCommerce, and others to Shopify. Our migration process includes transferring products, customers, orders, and content while ensuring minimal disruption to your business. We'll also optimize your new Shopify store for performance and user experience during the migration process.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "Do you offer custom Shopify theme development?",
      content: (
        <p className="text-gray-700">
          Yes, we offer custom Shopify theme development tailored to your brand's unique identity and business requirements. Our designers and developers work together to create visually stunning, high-performing themes that align with your brand guidelines and optimize for conversions. We can build from scratch or customize existing themes to meet your specific needs.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "How do I get started with your Shopify development services?",
      content: (
        <p className="text-gray-700">
          Getting started is easy! Simply book a call with our team using the button below. During this initial consultation, we'll discuss your business goals, requirements, and timeline. After understanding your needs, we'll provide a detailed proposal and quote. Once approved, we'll begin the development process with regular updates and collaboration throughout the project.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "I already have a shopify store and ad campaigns are also live on it however I am not able to get the best conversion. Can you help me?",
      content: (
        <p className="text-gray-700">
          Absolutely! We offer comprehensive conversion rate optimization (CRO) services for existing Shopify stores. Our team will conduct a thorough audit of your store, analyzing user behavior, checkout flow, mobile responsiveness, and overall user experience. Based on our findings, we'll implement strategic improvements to increase your conversion rates, such as optimizing product pages, streamlining checkout, improving site speed, and enhancing trust elements.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "Do I need to pay anything to schedule an appointment?",
      content: (
        <p className="text-gray-700">
          No, scheduling an initial consultation with our team is completely free of charge. We believe in understanding your needs first before discussing any payment. This consultation allows us to learn about your project, answer your questions, and determine if we're a good fit for your requirements before any commitment is made.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    },
    {
      title: "How can I book the appointment?",
      content: (
        <p className="text-gray-700">
          Booking an appointment is simple. Click the "Book a Call" button on our website, which will direct you to our scheduling page. Select a date and time that works for you, fill in your contact information, and briefly describe your project. Once submitted, you'll receive a confirmation email with the call details and any preparation information if needed.
        </p>
      ),
      icon: <img src="/images/img_component_1_7.svg" alt="FAQ icon" className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 max-w-[1440px]">
        <div className="flex justify-center mb-4">
          <div className="bg-black text-base font-medium py-1.5 px-5 rounded-xl">
            <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
            </span>
          </div>

        </div>

        <h2 className="text-4xl sm:text-5xl font-normal text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-base sm:text-lg text-center text-[#171717] mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our services, features, and how we can help you.
        </p>

        <div className="max-w-6xl mx-auto">
          <Accordion
            items={faqItems}
            className="bg-white rounded-lg"
            itemClassName="mb-0 bg-white rounded-lg"
            titleClassName="py-4 px-4 bg-white rounded-lg"
            contentClassName="px-4 pb-4 pt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
