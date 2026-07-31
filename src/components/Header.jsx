import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="SCG HEIM" className="h-10 object-contain bg-white rounded p-1" />
          <div className="text-xl font-bold text-heim-blue tracking-tighter hidden sm:block">
            <span className="font-light text-gray-600 ml-1">Sports</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-heim-red font-medium transition-colors">หน้าแรก</a>
          <a href="#courts" className="text-gray-800 hover:text-heim-red font-medium transition-colors">มิติสนาม</a>
          <a href="#specifications" className="text-gray-800 hover:text-heim-red font-medium transition-colors">สเปกวิศวกรรม</a>
          <a href="#contact" className="text-gray-800 hover:text-heim-red font-medium transition-colors">ติดต่อเรา</a>
        </nav>
        <a href="#contact" className="bg-heim-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          แจ้งปัญหา (Ticket)
        </a>
      </div>
    </header>
  );
};

export default Header;
