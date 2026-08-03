import React from 'react';

const Features = () => {
  const objectives = [
    {
      title: 'Space Optimization',
      subtitle: 'การใช้พื้นที่อย่างคุ้มค่าสูงสุด',
      desc: 'เปลี่ยนพื้นที่ว่างระหว่างอาคาร (Idle Space) ให้กลายเป็นลานกิจกรรม โดยใช้เทคนิคทับซ้อนเส้นสนาม (Overlay Marking) ทำให้ 1 พื้นที่สามารถรองรับได้ถึง 5 ชนิดกีฬา (ฟุตซอล, บาสเกตบอล, ตะกร้อ, พิคเคิลบอล, HYROX) ใช้งานได้คุ้มค่ากว่าการสร้างแยกสนามถึง 5 เท่า',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    },
    {
      title: 'Employee Well-being',
      subtitle: 'สวัสดิการและสุขภาพของพนักงาน',
      desc: 'ยกระดับคุณภาพชีวิตในการทำงานด้วยพื้นที่ออกกำลังกายที่ได้มาตรฐานสากล ช่วยลดความเครียด ส่งเสริมสุขภาพที่ดี และสร้างความผูกพัน (Engagement) ระหว่างพนักงานในองค์กรหลังเลิกงาน',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Corporate Multipurpose Space',
      subtitle: 'พื้นที่อเนกประสงค์ของบริษัท',
      desc: 'ด้วยโครงสร้างพื้น Heavy-duty (RC Slab หนา 200 มม.) นอกจากการเล่นกีฬาแล้ว พื้นที่นี้ยังสามารถรองรับการจัดกิจกรรมใหญ่ของบริษัท เช่น งาน Town Hall, งานเลี้ยงปีใหม่, หรือใช้เป็นจุดรวมพลฉุกเฉิน (Assembly Point) ได้อย่างปลอดภัย',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-heim-blue/10 text-heim-blue font-semibold tracking-wide text-sm mb-4 border border-heim-blue/20">
            AI EVALUATION: SPACE UTILIZATION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Idle Space <span className="text-heim-red">Transformation</span>
          </h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            การประเมินความคุ้มค่าของการเปลี่ยนพื้นที่ว่างระหว่างอาคาร Office และ Canteen ให้กลายเป็นลานกิจกรรมอเนกประสงค์แบบบูรณาการ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {objectives.map((obj, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-heim-blue/50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-heim-blue/10 rounded-2xl flex items-center justify-center text-heim-blue mb-6 group-hover:bg-heim-blue group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={obj.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{obj.title}</h3>
              <h4 className="text-sm font-semibold text-heim-red mb-4">{obj.subtitle}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{obj.desc}</p>
            </div>
          ))}
        </div>

        {/* Original Space Gallery */}
        <div className="mt-20">
          <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">ภาพพื้นที่เดิม (Original Space)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['./original-space-1.jpg', './original-space-2.jpg'].map((imgSrc, index) => (
              <div key={index} className="h-64 bg-gray-200 rounded-lg overflow-hidden relative group">
                <img 
                  src={imgSrc} 
                  alt={`Original Space ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    if (e.target.src.includes('.jpg')) e.target.src = e.target.src.replace('.jpg', '.png');
                    else if (e.target.src.includes('.png')) e.target.src = e.target.src.replace('.png', '.jpg');
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3D Perspective Gallery */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">ภาพจำลองการใช้พื้นที่ (3D Reference)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['./3d-1.jpg', './3d-2.jpg', './hero-bg.jpg'].map((imgSrc, index) => (
              <div key={index} className="h-48 bg-gray-200 rounded-lg overflow-hidden relative group">
                <img 
                  src={imgSrc} 
                  alt={`3D Render ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    if (e.target.src.includes('.jpg')) e.target.src = e.target.src.replace('.jpg', '.png');
                    else if (e.target.src.includes('.png')) e.target.src = e.target.src.replace('.png', '.jpg');
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
