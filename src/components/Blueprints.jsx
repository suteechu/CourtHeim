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

        {/* DIY Manuals Section */}
        <div className="max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">แบบคู่มือการทำประตูและเสาแป้นบาส (DIY)</h3>
            <div className="w-16 h-1 bg-heim-blue mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">คู่มือสำหรับจัดเตรียมวัสดุและประกอบโครงสร้างด้วยตนเอง</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Football Goal Manual */}
            <div className="flex flex-col group">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-heim-blue transition-colors">1. คู่มือการเชื่อมโกลฟุตบอล (โกลหนู)</h4>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex-grow relative shadow-sm hover:shadow-md transition-shadow min-h-[400px] flex items-center justify-center">
                <img 
                  src="./diy-football-goal.png" 
                  alt="คู่มือการทำโกลฟุตบอล" 
                  className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => window.open('./diy-football-goal.png', '_blank')}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x1000/f3f4f6/6b7280.png?text=Waiting+for+Image%0A%0A%5B+diy-football-goal.png+%5D%0A%0APlease+save+in+public+folder";
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <span className="text-white font-medium bg-black/60 px-4 py-2 rounded-lg">คลิกเพื่อดูรูปเต็ม</span>
                </div>
              </div>
            </div>

            {/* Basketball Hoop Manual */}
            <div className="flex flex-col group">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-heim-blue transition-colors">2. แบบละเอียดเสาแป้นบาสเกตบอล</h4>
              <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 flex-grow relative shadow-sm hover:shadow-md transition-shadow min-h-[400px] flex items-center justify-center">
                <img 
                  src="./diy-basketball-hoop.png" 
                  alt="แบบเสาแป้นบาสเกตบอล" 
                  className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => window.open('./diy-basketball-hoop.png', '_blank')}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x1000/f3f4f6/6b7280.png?text=Waiting+for+Image%0A%0A%5B+diy-basketball-hoop.png+%5D%0A%0APlease+save+in+public+folder";
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <span className="text-white font-medium bg-black/60 px-4 py-2 rounded-lg">คลิกเพื่อดูรูปเต็ม</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprints;
