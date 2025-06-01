import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Show popup on every page load
    document.body.style.overflow = 'hidden'; // Disable scroll
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup just in case
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto'; // Re-enable scroll
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md sm:max-w-xl md:max-w-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center sm:text-left">
          Let’s Build Your <span className="text-black">Shopify Store</span>
        </h2>
        <p className="text-gray-600 mb-4 text-center sm:text-left">
          Fill in a few details, and we'll get started.
        </p>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" required/>
          <input type="email" placeholder="Business email" className="w-full p-2 border rounded-md" required />
          <input type="text" placeholder="Company / Brand name" className="w-full p-2 border rounded-md" required/>
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded-md" required />
          <select className="w-full p-2 border rounded-md" required>
            <option>New Shopify Website</option>
            <option>Redesign Existing Website</option>
            <option>Ongoing Support</option>
          </select>
          <select className="w-full p-2 border rounded-md" required>
            <option>Less than ₹25,000/-</option>
            <option>₹25,000 - ₹50,000</option>
            <option>₹50,000+</option>
          </select>
          <input type="text" placeholder="Your Industry (e.g. Fashion, Decor)" className="w-full p-2 border rounded-md" required />
          <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
