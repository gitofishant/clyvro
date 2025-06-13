import React from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="w-full-xl mx-auto max-w-[1440px]">
        {/* Top Section with Flex Layout */}
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-16 gap-8">
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm flex-1">
            <div className="text-center">
              <h3 className="text-white text-lg">Our Services</h3>
              <ul className="space-y-2 mt-2">
                <li><a href="#" className="hover:underline text-white text-base">Shopify Designing</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg">Our Products</h3>
              <ul className="space-y-2 mt-2">
                <li><a href="#" className="hover:underline text-white text-base">Shopify Themes</a></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg">Portfolio</h3>
              <ul className="space-y-2 mt-2">
                <li><a href="#" className="hover:underline text-white text-base">Shopify Stores</a></li>
              </ul>
            </div>
          </div>

          {/* Right Side (Policies + Logo) */}
          <div className="flex flex-col  md:flex-row items-start gap-20">
            {/* Policies Section */}
            <div className="text-center">
              <h3 className="text-white text-lg">Policies</h3>
              <ul className="space-y-2 mt-2 text-left">
                <li><a href="#" className="hover:underline text-white text-base">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline text-white text-base">Terms Of Service</a></li>
                <li><a href="#" className="hover:underline text-white text-base">Refund Policy</a></li>
                <li><a href="#" className="hover:underline text-white text-base">About Us</a></li>
              </ul>
            </div>

            {/* Logo */}
            <div className="self-start">
              <img src="/images/shoplogo.jpg" alt="Logo" className="h-28 md:h-32" />
            </div>
          </div>
        </div>

        <hr className="border-white-600 my-8" />

        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-2/3">
            <form onSubmit={handleSubscribe} className="flex w-full max-w-xl">
              <input
                type="email"
                placeholder="mailbox@mail.com"
                required
                className="w-full px-4 py-2 text-sm bg-black border border-white text-white rounded-l-md placeholder-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2 text-sm font-medium text-black bg-white rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-white ml-4 mt-4 md:mt-0 max-w-xs">
              No spam, notifications only about new products, updates and freebies. You can always unsubscribe.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 md:ml-auto">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <span className="text-black text-xs">icon</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-white-600 my-8" />

        {/* Footer Bottom */}
        <p className="text-left text-sm text-white">
          © Copyright 2025 Jhango – The best Shopify developers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
