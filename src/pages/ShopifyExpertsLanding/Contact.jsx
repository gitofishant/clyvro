import React, { useState,useEffect } from "react";
import Header from "../../components/common/Header";
import Footer from "@/components/common/Footer";

const Contact = () => {
  useEffect(() => {
    // Prevent automatic scrolling to any specific section on page load
    window.scrollTo(0, 0);
  }, [location]);
  const [formData, setFormData] = useState({
    name: "Jeff Bezos",
    email: "jeff@jhango.com",
    company: "Amazon",
    phone: "8369487891", // Removed +91 to keep only digits
    service: "New Shopify Website",
    budget: "Less than ₹25,000/-",
    industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only digits
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white mt-20 px-4 py-10 md:px-20 lg:px-32">
        <div className="text-center mb-10">
          <button className="bg-black text-white py-2 px-4 rounded-full text-sm mb-4">
            Find The Best Shopify Experts
          </button>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Sign Up Now To Get <span className="text-black font-bold">FREE</span>
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

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-md shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Business Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company / Brand Name
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Company Name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="1234567890"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
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
      </div>
      <Footer />
    </>
  );
};

export default Contact;
