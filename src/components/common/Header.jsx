import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define state to track whether the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation to sections with scroll behavior
  const handleNavigateToSection = (id) => {
    // If we are not on the home page, navigate to the home page and scroll
    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${id}`);
    } else {
      // Scroll to the section on the current page
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close the mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-black'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white">
            <img src="/images/shoplogo.jpg" alt="Logo" className="h-9 w-40" />
          </a>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 flex-grow justify-center">
          <a
            onClick={() => handleNavigateToSection('what-we-do')}
            className="flex items-center text-white font-semibold text-sm hover:text-gray-300 cursor-pointer"
          >
            What We Do?
          </a>
          <a
            onClick={() => handleNavigateToSection('portfolio')}
            className="flex items-center text-white font-semibold text-sm hover:text-gray-300 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            onClick={() => handleNavigateToSection('plans')}
            className="flex items-center text-white font-semibold text-sm hover:text-gray-300 cursor-pointer"
          >
            Plans
          </a>
        </nav>

        {/* Right Side Buttons with Individual White Borders */}
        <div className="flex items-center space-x-4 hidden md:flex">
          <a
            href="/Contact"
            className="flex items-center text-white font-semibold text-sm hover:text-gray-300 cursor-pointer border border-white py-2 px-4 rounded-lg"
          >
            Book a Call
          </a>
          <button
            onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
            className="flex items-center text-white font-semibold text-sm hover:text-gray-300 cursor-pointer border border-white py-2 px-4 rounded-lg"
          >
            Get Help on WhatsApp
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 right-0 bg-black bg-opacity-90 h-screen z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl"
            >
              &times; {/* Cross button */}
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 py-8">
            <a
              onClick={() => handleNavigateToSection('what-we-do')}
              className="text-white font-semibold text-lg hover:text-gray-300 cursor-pointer"
            >
              What We Do?
            </a>
            <a
              onClick={() => handleNavigateToSection('portfolio')}
              className="text-white font-semibold text-lg hover:text-gray-300 cursor-pointer"
            >
              Portfolio
            </a>
            <a
              onClick={() => handleNavigateToSection('plans')}
              className="text-white font-semibold text-lg hover:text-gray-300 cursor-pointer"
            >
              Plans
            </a>
            {/* Move "Book a Call" and "Get Help on WhatsApp" to the mobile menu */}
            <a
              href="/Contact"
              className="text-white font-semibold text-lg hover:text-gray-300 cursor-pointer border border-white py-2 px-4 rounded-lg"
            >
              Book a Call
            </a>
            <button
              onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
              className="text-white font-semibold text-lg hover:text-gray-300 cursor-pointer border border-white py-2 px-4 rounded-lg"
            >
              Get Help on WhatsApp
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
