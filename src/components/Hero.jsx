import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Placeholder for 3D render background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-heim-blue/80 to-transparent z-10" />
        <img 
          src="/hero-bg.jpg" 
          alt="Sports Field Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-heim-red/20 text-heim-red font-semibold tracking-wide text-sm mb-6 border border-heim-red/30 backdrop-blur-sm">
            INTERNAL DOCUMENT
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            คู่มือโครงการสนามกีฬาอเนกประสงค์<br />
            <span className="text-heim-red drop-shadow-[0_0_25px_rgba(220,38,38,0.9)] animate-pulse">SCG HEIM Project Manual</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            ศูนย์รวมข้อมูลอ้างอิง สเปกวิศวกรรม (Technical Specs) และมาตรฐานปฏิบัติงาน สำหรับทีมงาน SCG HEIM เพื่อควบคุมคุณภาพการก่อสร้างและการส่งมอบพื้นที่
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#specifications" className="px-8 py-4 bg-heim-blue text-white rounded-full font-medium text-lg text-center hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              ดูสเปกวิศวกรรม (Specs)
            </a>
            <a href="/blueprint.html" target="_blank" className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-medium text-lg text-center hover:bg-white/20 transition-all flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              ดาวน์โหลดแบบแปลน (Blueprints)
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#courts" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
