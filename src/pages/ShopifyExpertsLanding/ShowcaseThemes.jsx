import React, { useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const themes = [
  { image: "images/i1.png", url: "#" },
  { image: "images/i2.png", url: "#" },
  { image: "images/i3.png", url: "#" },
  { image: "images/i4.png", url: "#" },
  { image: "images/i5.png", url: "#" },
  { image: "images/i4.png", url: "#" },
  { image: "images/i5.png", url: "#" },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
  >
    <FaArrowRight />
  </button>
);

const ShowcaseThemes = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
    }, []);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col font-[Inter,Manrope,sans-serif]">
      <Header />
      <main className="flex-grow text-center px-4 sm:px-8 lg:px-20 py-16 mt-8 mb-8">
        <div className="inline-block border border-black text-xs font-medium px-3 py-[2px] rounded-md mb-4">
          Built on Our Themes
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2">
          Shopify Stores Built-on <span className="font-semibold">Our Themes</span>
        </h1>

        <p className="text-base sm:text-lg text-[#333] mb-10">
          High-Performance Shopify Stores Powered by Our Themes
        </p>

        <div className="relative max-w-7xl mx-auto">
          <Slider {...sliderSettings}>
            {themes.map((theme, index) => (
              <div key={index} className="px-2">
                <div className="w-[250px] mx-auto flex flex-col items-center">
                  <img
                    src={theme.image}
                    alt={`Store ${index + 1}`}
                    className="w-full h-[380px] object-cover rounded-md shadow-md mb-3"
                  />
                  <a
                    href={theme.url}
                    className="w-full block bg-black text-white text-sm font-semibold py-2 rounded-md hover:bg-gray-800 transition text-center"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShowcaseThemes;
