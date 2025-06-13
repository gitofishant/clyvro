import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Popup from './Popup';
import HeroSection from './HeroSection';
import PartnerBrands from './PartnerBrands';
import ValueProposition from './ValueProposition';
import ServicesSection from './ServicesSection';
import BenefitsSection from './BenefitsSection';
import TroubleshootingSection from './TroubleshootingSection';
import ProcessSection from './ProcessSection';
import PortfolioSection from './PortfolioSection';
import MetricsSection from './MetricsSection';
import CustomizationServices from './CustomizationServices';
import QualitySection from './QualitySection';
import TechnologySection from './TechnologySection';
import TestimonialSection from './TestimonialSection';
import FaqSection from './FaqSection';
import PricingSection from './PricingSection';
import { useLocation } from "react-router-dom";

const ShopifyExpertsLanding = () => {
  const location = useLocation();

  // UseEffect to handle smooth scrolling based on the query parameter scrollTo
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get('scrollTo');
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Popup />
        <HeroSection />
        <PartnerBrands />
        <ValueProposition />
        <ServicesSection />
        <BenefitsSection />
        <TroubleshootingSection />
        <ProcessSection />
        <PortfolioSection />
        <MetricsSection />
        <CustomizationServices />
        <QualitySection />
        <TechnologySection />
        <TestimonialSection/>
        <FaqSection />
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopifyExpertsLanding;
