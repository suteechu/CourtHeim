import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Dynamic Background with SVG Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0a192f]/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 z-10 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-heim-red/20 to-transparent z-10 transform skew-x-[-15deg] translate-x-32" />
        <img 
          src="./hero-bg.jpg" 
          alt="Sports Field Background" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          {/* Sporty Badge */}
          <div className="inline-block transform -skew-x-12 bg-heim-red mb-6 px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <span className="block transform skew-x-12 text-white font-bold tracking-widest text-sm uppercase">
              INTERNAL DOCUMENT
            </span>
          </div>

          {/* Aggressive Typography */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 uppercase italic tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">คู่มือโครงการสนามกีฬา</span>
            <span className="block text-heim-red drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] mt-2">SCG HEIM Project</span>
          </h1>
          
          <div className="w-24 h-1.5 bg-heim-red mb-8 transform -skew-x-12"></div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed border-l-4 border-heim-red pl-6 font-medium">
            ศูนย์รวมข้อมูลอ้างอิง สเปกวิศวกรรม (Technical Specs) และมาตรฐานปฏิบัติงาน สำหรับทีมงาน SCG HEIM เพื่อควบคุมคุณภาพการก่อสร้างและการส่งมอบพื้นที่
          </p>

          {/* Sporty Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#specifications" className="group relative px-8 py-4 bg-heim-blue text-white font-bold text-lg uppercase tracking-wider transform -skew-x-12 transition-all hover:bg-blue-800 shadow-[6px_6px_0_0_#dc2626] hover:shadow-[2px_2px_0_0_#dc2626] hover:translate-x-1 hover:translate-y-1">
              <span className="block transform skew-x-12 flex items-center justify-center">
                ดูสเปกวิศวกรรม (Specs)
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </span>
            </a>
            
            <a href="#boq" className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg uppercase tracking-wider transform -skew-x-12 transition-all hover:bg-white hover:text-heim-blue shadow-[6px_6px_0_0_#ffffff40] hover:shadow-[2px_2px_0_0_#ffffff40] hover:translate-x-1 hover:translate-y-1">
              <span className="block transform skew-x-12 flex items-center justify-center">
                ดูราคา (BOQ)
              </span>
            </a>

            <a href="./blueprint.html" target="_blank" className="group relative px-8 py-4 bg-heim-red text-white font-bold text-lg uppercase tracking-wider transform -skew-x-12 transition-all hover:bg-red-700 shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.2)] hover:translate-x-1 hover:translate-y-1 flex items-center justify-center">
              <span className="block transform skew-x-12 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                แบบแปลน (Blueprints)
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Sport Stripes */}
      <div className="absolute bottom-0 right-10 z-20 flex gap-2 transform skew-x-[-15deg] opacity-50">
        <div className="w-4 h-32 bg-heim-red"></div>
        <div className="w-2 h-32 bg-white"></div>
        <div className="w-8 h-32 bg-heim-blue"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#courts" className="text-white opacity-50 hover:opacity-100 transition-opacity flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
