import React, { useState, useEffect } from 'react';
import Booking from './Booking';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 print:hidden ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="SCG HEIM" className="h-10 object-contain bg-white rounded p-1" />
          <div className="text-xl font-bold text-heim-blue tracking-tighter hidden sm:block">
            <span className="font-light text-gray-600 ml-1">Sports</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#home" className="text-gray-800 hover:text-heim-red font-medium transition-colors">หน้าแรก</a>
          <a href="#courts" className="text-gray-800 hover:text-heim-red font-medium transition-colors">มิติสนาม</a>
          <a href="#blueprints" className="text-gray-800 hover:text-heim-red font-medium transition-colors">ดูแบบ</a>
          <a href="#timeline" className="text-gray-800 hover:text-heim-red font-medium transition-colors">แผนงาน (Milestone)</a>
          <a href="#specifications" className="text-gray-800 hover:text-heim-red font-medium transition-colors">สเปกวิศวกรรม</a>
          <a href="#boq" className="text-gray-800 hover:text-heim-red font-medium transition-colors">BOQ (ราคา)</a>
        </nav>
        <div className="flex space-x-3 items-center">
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-white text-heim-blue border-2 border-heim-blue px-4 py-1.5 rounded-full font-bold hover:bg-heim-blue hover:text-white transition-colors shadow-sm hidden sm:block whitespace-nowrap"
          >
            จองสนาม (Booking)
          </button>
        </div>
      </div>
      
      {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} />}
    </header>
  );
};

export default Header;
