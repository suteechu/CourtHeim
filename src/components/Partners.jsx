import React, { useState } from 'react';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partners = [
    { 
      name: 'CPAC', 
      type: 'คอนกรีตผสมเสร็จคุณภาพสูง',
      details: 'คอนกรีตผสมเสร็จจาก CPAC มีจุดเด่นด้านกำลังอัด (Compressive Strength) ที่สม่ำเสมอ ควบคุมส่วนผสมด้วยระบบคอมพิวเตอร์ เหมาะสำหรับงานเทพื้นขนาดใหญ่ (RC Slab) ช่วยลดปัญหาการแตกร้าวจากการหดตัว (Shrinkage Crack) และมีความทนทานต่อสภาพอากาศและการรับน้ำหนักแบบ Heavy-duty'
    },
    { 
      name: 'TATA Steel', 
      type: 'เหล็กเส้นมาตรฐาน มอก.',
      details: 'เหล็กเส้นข้ออ้อย (Deformed Bars) ชั้นคุณภาพ SD40 หรือ SD50 จาก TATA Steel ผ่านกระบวนการผลิตและควบคุมคุณภาพอย่างเข้มงวดตามมาตรฐาน มอก. ให้ค่าจุดคราก (Yield Strength) และความเหนียวที่คงที่ ช่วยเสริมความแข็งแรงของพื้นผิว ป้องกันการทรุดหรือโก่งตัวของพื้นสนามเมื่อเจอแรงสั่นสะเทือน'
    },
    { 
      name: 'Deco Turf / Plexipave', 
      type: 'สีอะคริลิก 100% สำหรับสนามกีฬา',
      details: 'ระบบสีเคลือบผิวอะคริลิก 5 ชั้น ที่ได้รับการยอมรับในทัวร์นาเมนต์ระดับโลก (เช่น US Open และ Australian Open) มีคุณสมบัติเด่นในการซับแรงกระแทก (Shock Absorption) มีความหนืดกันลื่นที่พอเหมาะ (Slip Resistance) และทนทานต่อรังสี UV ทำให้สีไม่ซีดจางและมีอายุการใช้งานยาวนาน'
    },
    { 
      name: 'SCG Pipe', 
      type: 'ระบบท่อระบายน้ำ',
      details: 'ท่อพีวีซีแข็ง (PVC-U) จาก SCG ผลิตด้วยเทคโนโลยีที่ให้เนื้อพลาสติกเหนียว ทนทานต่อแรงดันดินและแรงกดทับได้อย่างดีเยี่ยม ไม่กรอบแตกง่ายเมื่อเทียบกับท่อเกรดทั่วไป ช่วยรับประกันว่าระบบระบายน้ำรอบสนามจะทำงานได้อย่างมีประสิทธิภาพระยะยาวโดยไม่เกิดปัญหาน้ำขัง'
    },
    { 
      name: 'FIBA / BWF Standard', 
      type: 'อุปกรณ์กีฬามาตรฐานแข่งขัน',
      details: 'อุปกรณ์ประกอบสนาม เช่น แป้นบาสเกตบอลกระจกนิรภัย และเสาขึงตาข่าย ถูกคัดเลือกโดยอ้างอิงตามข้อกำหนดของสหพันธ์กีฬานานาชาติ (FIBA สำหรับบาสเกตบอล และ BWF สำหรับแบดมินตัน) เพื่อให้ได้ระยะความสูงที่แม่นยำ ปลอดภัย และทนทานต่อการดังก์ (Dunk) หรือแรงกระแทกจากการเล่นอย่างหนัก'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Premium Materials & Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            เจาะลึกสเปกวัสดุแบรนด์ชั้นนำ
          </h2>
          <p className="text-gray-500 mt-2 text-sm">คลิกที่รายชื่อแบรนด์เพื่อดูรายละเอียดเชิงลึก</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedPartner(partner)}
              className="px-6 py-4 bg-gray-50 rounded-xl border border-gray-200 text-center hover:bg-heim-blue hover:text-white hover:shadow-lg hover:border-heim-blue transition-all w-full sm:w-auto group focus:outline-none"
            >
              <h4 className="text-xl font-black text-gray-800 group-hover:text-white tracking-tight transition-colors">{partner.name}</h4>
              <p className="text-xs text-heim-red group-hover:text-blue-200 mt-1 font-medium transition-colors">{partner.type}</p>
            </button>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedPartner(null)}>
            <div 
              className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-heim-blue p-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{selectedPartner.name}</h3>
                <button 
                  onClick={() => setSelectedPartner(null)}
                  className="text-white/70 hover:text-white focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <p className="text-heim-red font-bold mb-4">{selectedPartner.type}</p>
                <div className="h-px w-full bg-gray-100 mb-4"></div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {selectedPartner.details}
                </p>
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setSelectedPartner(null)}
                    className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    ปิดหน้าต่าง
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
