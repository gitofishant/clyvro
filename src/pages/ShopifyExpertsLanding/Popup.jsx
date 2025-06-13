import React, { useEffect, useState, useRef } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const timeoutRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  // Open popup after 5 seconds on mount
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(true);
      document.body.style.overflow = "hidden";
    }, 12000);

    const handleScroll = () => {
      if (popupClosed && !scrollTriggeredRef.current && window.scrollY > 300) {
        scrollTriggeredRef.current = true;

        // Open popup 5 seconds after scroll trigger
        timeoutRef.current = setTimeout(() => {
          setShowPopup(true);
          setPopupClosed(false);
          document.body.style.overflow = "hidden";
          timeoutRef.current = null;
        }, 5000);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showPopup) {
        handleClose();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [popupClosed, showPopup]);

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowPopup(false);
    setPopupClosed(true);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert("Form submitted!");
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center font-[Inter,Manrope,sans-serif] transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className="bg-white p-10 rounded-2xl w-full max-w-md sm:max-w-xl md:max-w-1xl relative shadow-lg animate-fadeIn">
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-4xl mb-2 text-center sm:text-left font-normal">
          Let’s Build Your{" "}
          <span className="font-semibold text-black">Shopify Store</span>
        </h2>
        <p className="text-gray-600 mb-4 text-center sm:text-left">
          Fill in a few details, and we'll get started.
        </p>

       <form
  className="space-y-4"
  action="https://formsubmit.co/your@email.com"
  method="POST"
>
  <input type="hidden" name="_captcha" value="false" />
  <input
    type="text"
    name="Name"
    placeholder="Name"
    className="w-full p-2 border rounded-md"
    required
  />
  <input
    type="email"
    name="Email"
    placeholder="Business email"
    className="w-full p-2 border rounded-md"
    required
  />
  <input
    type="text"
    name="Brand"
    placeholder="Company / Brand name"
    className="w-full p-2 border rounded-md"
    required
  />
  <input
    type="tel"
    name="Phone"
    placeholder="Phone Number"
    className="w-full p-2 border rounded-md"
    required
  />
  <select name="Service" className="w-full p-2 border rounded-md" required>
    <option>New Shopify Website</option>
    <option>Redesign Existing Website</option>
    <option>Ongoing Support</option>
  </select>
  <select name="Budget" className="w-full p-2 border rounded-md" required>
    <option>Less than ₹25,000/-</option>
    <option>₹25,000 - ₹50,000</option>
    <option>₹50,000+</option>
  </select>
  <input
    type="text"
    name="Industry"
    placeholder="Your Industry (e.g. Fashion, Decor)"
    className="w-full p-2 border rounded-md"
    required
  />
  <button
    type="submit"
    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800"
  >
    Confirm
  </button>
</form>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Popup;
