import React from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Subscription logic would go here
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white hover:text-gray-300">Shopify Designing</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">3d Animation</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Automation Solutions</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Business Websites</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Shopify White Labelling</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white hover:text-gray-300">Shopify Themes</a></li>
            </ul>
          </div>

          {/* Portfolio Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white hover:text-gray-300">Shopify Stores</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">3d Product</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Business Websites</a></li>
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Policies</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Terms Of Service</a></li>
              <li><a href="#" className="text-sm text-white underline hover:text-gray-300">Refund Policy</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-300">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <img src="/images/shoplogo.jpg" alt="Logo" className="h-28" />
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">mailbox@mail.com</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <form onSubmit={handleSubscribe} className="flex">
              <InputField
                type="email"
                placeholder="Your email"
                className="rounded-r-none"
                required
              />
              <Button
                type="submit"
                className="bg-black text-black font-semibold rounded-l-none"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-white max-w-md">
              No spam, notifications only about new products, updates and freebies. You can always unsubscribe.
            </p>
          </div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            <a href="#" className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <use href="img_component_1_11.svg#icon" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <use href="img_component_1_12.svg#icon" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <use href="img_component_1_12.svg#icon" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <use href="img_component_1_12.svg#icon" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <use href="img_component_1_13.svg#icon" />
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <use href="img_component_1_14.svg#icon" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div>
          <p className="text-sm text-white">© Copyright 2025 Jhango – The best Shopify developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;