import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#f8fafc] overflow-hidden pt-20">
      
      {/* Decorative Minimalist Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-1/2 h-[120%] bg-gradient-to-l from-gray-200/40 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-10 left-10 text-gray-200 text-9xl font-black italic opacity-30 select-none">SCG HEIM</div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 w-full text-left">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-1 bg-heim-red"></span>
            <span className="text-gray-900 font-bold tracking-[0.2em] text-sm uppercase">INTERNAL DOCUMENT</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter uppercase">
            SCG HEIM <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
              Project Manual
            </span>
          </h1>
          
          <h2 className="text-2xl text-gray-800 font-bold mb-6">
            คู่มือโครงการสนามกีฬาอเนกประสงค์
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-light">
            ศูนย์รวมข้อมูลอ้างอิง สเปกวิศวกรรม (Technical Specs) และมาตรฐานปฏิบัติงาน สำหรับทีมงาน SCG HEIM เพื่อควบคุมคุณภาพการก่อสร้างและการส่งมอบพื้นที่
          </p>

          {/* Minimalist Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#specifications" className="px-8 py-4 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center group shadow-xl hover:shadow-2xl">
              ดูสเปกวิศวกรรม
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <a href="#boq" className="px-8 py-4 bg-white border border-gray-300 text-gray-900 font-bold text-sm uppercase tracking-widest hover:border-gray-900 transition-all flex items-center justify-center shadow-sm hover:shadow-md">
              ดูราคาประเมิน
            </a>

            <a href="#blueprints" className="px-8 py-4 bg-heim-red text-white font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all flex items-center justify-center shadow-xl hover:shadow-2xl">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              แบบแปลน
            </a>
          </div>
        </div>

        {/* Hero Image Area */}
        <div className="lg:w-1/2 w-full relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform transition-transform hover:scale-[1.02] duration-700 border-4 border-white">
            <img 
              src="./hero-bg.jpg" 
              alt="Sports Field" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to make it look premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>
          
          {/* Floating minimal stat card */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4 animate-fade-in-up">
            <div className="w-12 h-12 bg-heim-red/10 rounded-full flex items-center justify-center text-heim-red">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">พื้นที่สนามมาตรฐาน</p>
              <p className="text-2xl font-black text-gray-900 tracking-tighter">177.50 <span className="text-sm font-medium text-gray-500 tracking-normal">sq.m</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
