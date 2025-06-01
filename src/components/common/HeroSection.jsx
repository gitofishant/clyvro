import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaAction, 
  image, 
  backgroundColor = 'bg-[#f8f4ef]',
  badgeText
}) => {
  return (
    <section className={`${backgroundColor} py-24 md:py-32`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            {badgeText && (
              <div className="inline-block bg-black text-white text-sm font-medium py-1.5 px-5 rounded-xl mb-6">
                {badgeText}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-normal leading-tight mb-6">{title}</h1>
            <p className="text-lg mb-8 max-w-xl leading-relaxed">{subtitle}</p>
            <Button 
              onClick={ctaAction}
              className="bg-black text-white px-5 py-3 rounded-lg flex items-center"
            >
              {ctaText}
              <svg className="ml-2 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <use href="img_component_1_2.svg#icon" />
              </svg>
            </Button>
            
            {/* Trust indicators */}
            <div className="mt-8 flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="currentColor">
                <use href="img_container.png#icon" />
              </svg>
              <span className="text-base">Worked with 600+ brands</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            {image && (
              <img 
                src={image} 
                alt="Hero illustration" 
                className="w-full h-auto rounded-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaAction: PropTypes.func.isRequired,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  badgeText: PropTypes.string
};

export default HeroSection;