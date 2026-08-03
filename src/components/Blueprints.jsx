import React from 'react';

const Blueprints = () => {
  return (
    <section id="blueprints" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-heim-red font-bold tracking-widest uppercase text-sm mb-2 block">Drawing & Details</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase italic">
            แบบแปลนโครงการ
          </h2>
          <div className="w-24 h-1.5 bg-heim-red mx-auto mt-6 transform -skew-x-12"></div>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8" data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-end mb-4">
            <a 
              href="./Court Heim.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-heim-blue text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              ดาวน์โหลดไฟล์ PDF
            </a>
          </div>
          
          <div className="w-full aspect-[4/3] md:aspect-[16/9] border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-100">
            <iframe 
              src="./Court Heim.pdf#view=FitH" 
              title="แบบแปลนโครงการ Court Heim"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprints;
