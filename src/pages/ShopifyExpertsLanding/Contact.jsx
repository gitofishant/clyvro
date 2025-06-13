import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import Footer from "@/components/common/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "Jeff Bezos",
    email: "jeff@jhango.com",
    company: "Amazon",
    phone: "8369487891",
    service: "New Shopify Website",
    budget: "Less than ₹25,000/-",
    industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white mt-20 px-4 py-10 md:px-20 lg:px-32 font-[Inter,Manrope,sans-serif]">
        {/* Top Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-black text-sm font-medium py-1.5 px-5 rounded-xl">
              <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
              </span>
          </div>
        </div>
          <h1 className="text-3xl md:text-4xl font-normal">
            Sign Up Now To Get <span className="font-semibold text-black">FREE</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Performance Marketing For 1 Month
          </h2>
          <p className="text-sm font-medium text-gray-700">LIMITED TIME OFFER ⏳</p>
          <p className="text-lg font-bold text-black">00:00:00:00</p>
          <p className="text-sm text-gray-500 mt-2">
            Get a free 30 mins consultation call by filling out the form below.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-md shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Form Fields */}
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
              { label: "Business Email", name: "email", type: "email", placeholder: "you@example.com" },
              { label: "Company / Brand Name", name: "company", type: "text", placeholder: "Company Name" },
              { label: "Phone Number", name: "phone", type: "tel", placeholder: "1234567890" },
            ].map((field, index) => (
              <div key={index}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            ))}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>New Shopify Website</option>
                <option>Redesign Existing Website</option>
                <option>Shopify Marketing</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Less than ₹25,000/-</option>
                <option>₹25,000 - ₹50,000</option>
                <option>₹50,000+</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <input
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              placeholder="e.g., Fashion, Home Decor"
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition duration-300"
          >
            Confirm
          </button>
        </form>

        {/* Horizontal Line */}
        <hr className="border-black-300 my-10" />

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-black text-sm font-medium py-1.5 px-5 rounded-xl">
              <span className="bg-gradient-to-r from-white via-green-300 to-white 
                   bg-[length:200%_100%] bg-clip-text text-transparent 
                   animate-shimmer inline-block">
                  Find The Best Shopify Experts
              </span>
          </div>
        </div>
          <h2 className="text-3xl md:text-5xl font-normal mb-4">
            Trusted by <span className="font-semibold">600+ brands</span>
          </h2>
          <p className="text-base text-gray-700 max-w-5xl mx-auto text-center">
            Join 550+ brands that trust Jhango for their eCommerce success. From innovative design
            to seamless performance, we deliver results that elevate businesses in today’s
            competitive market.
          </p>
        </div>

        {/* Scrollable Logos Section */}
        <div className="overflow-hidden mt-16 px-8">
          <div className="flex w-[300%] animate-scroll-fast gap-8">
            {[
              "/images/img_0b6b2ayysliusfpqbi6q0sv8ke8png.png",
              "/images/img_omukgavslib2bfv4e2bk8u5qnnspng.png",
              "/images/img_d7oifnvekooh0cwx99hwhj44aaipng.png",
              "/images/img_w6dc6rxsj4lvrp4hprgj4uatal0png.png",
              "/images/img_ux5imnjvwngbbyh5icow39bkzepng.png",
              "/images/img_75orltecrakx8yxq4eqddpx9uxwpng.png",
              "/images/img_fvzk5llmaqftwoo4ybqu2fp6oopng.png",
            ]
              .concat([
                "/images/img_0b6b2ayysliusfpqbi6q0sv8ke8png.png",
                "/images/img_omukgavslib2bfv4e2bk8u5qnnspng.png",
                "/images/img_d7oifnvekooh0cwx99hwhj44aaipng.png",
                "/images/img_w6dc6rxsj4lvrp4hprgj4uatal0png.png",
                "/images/img_ux5imnjvwngbbyh5icow39bkzepng.png",
                "/images/img_75orltecrakx8yxq4eqddpx9uxwpng.png",
                "/images/img_fvzk5llmaqftwoo4ybqu2fp6oopng.png",
              ])
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className="h-24 w-auto object-contain"
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
