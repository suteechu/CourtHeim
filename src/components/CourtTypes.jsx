import React, { useState } from 'react';

const CourtTypes = () => {
  const [selectedCourt, setSelectedCourt] = useState(null);

  const courts = [
    {
      id: 'futsal',
      title: 'Futsal Field',
      desc: 'สนามแข่งขันขนาด 15,000 x 9,000 มม. รัศมีวงกลาง 600 มม. รัศมีเขตโทษ 2,800 มม.',
      color: 'bg-green-500',
      details: {
        equipment: ['โกลหนู (WINNER) เหล็กกลม 2 นิ้ว ขนาด 200x100 ซม. พร้อมตาข่าย', 'โครงข่ายตาข่ายกันบอลแค่หลังประตู (Netting)'],
        timeline: 'ระยะเวลาติดตั้งโครงสร้างและตีเส้น: 7-10 วัน (หลังงานพื้นเสร็จสิ้น)',
        extra: 'เน้นการใช้สี Green ในพื้นที่เขตสนามเพื่อความชัดเจน ทนทานต่อการเสียดสีสูง'
      }
    },
    {
      id: 'basketball',
      title: 'Basketball (Half-Court)',
      desc: 'เขตโทษและจุดชูตบาสเกตบอล ขนาด 12,320 x 15,240 มม. (50ft) รัศมี 3 คะแนน R6656',
      color: 'bg-orange-500',
      details: {
        equipment: ['แป้นบาสเกตบอลแบบยึดพื้น Fix', 'ห่วงบาสเกตบอลชนิดรองรับการดังก์พร้อมตาข่ายไนลอน'],
        timeline: 'ระยะเวลาติดตั้งอุปกรณ์ยึดผนังและตีเส้น: 5-7 วัน',
        extra: 'รัศมีเส้น 3 คะแนน (R6656) และเขตโทษ (R1679) ตามมาตรฐานพื้นที่ Half-Court'
      }
    },
    {
      id: 'takraw-pickleball',
      title: 'Sepak Takraw / Pickleball',
      desc: 'พื้นที่สนามร่วมกันขนาด 6,100 x 13,410 มม. ระยะแบ่งแดนกลาง 6,705 มม.',
      color: 'bg-yellow-500',
      details: {
        equipment: ['เสาอเนกประสงค์แบบถอดประกอบได้ (Removable Posts)', 'ตาข่ายสำหรับตะกร้อและพิคเคิลบอล (ปรับระดับความสูงได้)'],
        timeline: 'ระยะเวลาติดตั้งช่องเสียบเสา (Sleeves) และตีเส้น: 5 วัน',
        extra: 'ใช้เส้นเขตร่วมกันเพื่อประหยัดพื้นที่ (Overlay Marking) ออกแบบให้เปลี่ยนประเภทกีฬาได้ใน 10 นาที'
      }
    },
    {
      id: 'hyrox',
      title: 'HYROX & Wall Equipment',
      desc: 'พื้นที่ Functional Fitness พร้อมแป้นบาสและ Pull-up Bar แบบยึดผนัง (Wall-mounted)',
      color: 'bg-blue-500',
      details: {
        equipment: ['Pull-up Bar แบบติดตั้งกับผนัง', 'Wall Ball Target', 'พื้นที่สำหรับวางอุปกรณ์ Functional Training (Kettlebells, Sandbags)'],
        timeline: 'ระยะเวลาติดตั้งอุปกรณ์กับผนังอาคาร: 3-5 วัน',
        extra: 'ต้องตรวจสอบระยะความสูง (Height Clearance) ให้เป็นไปตามมาตรฐานโปรแกรม HYROX อย่างเข้มงวด'
      }
    }
  ];

  return (
    <section id="courts" className="py-24 bg-white relative">
      <div className="container mx-auto px-6" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heim-blue mb-4">Multi-Purpose <span className="text-heim-red">Courts</span></h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ออกแบบพื้นที่อย่างชาญฉลาด ให้คุณสามารถปรับเปลี่ยนการใช้งานได้หลากหลายกีฬาในพื้นที่เดียวกัน คลิกที่ชื่อกีฬาเพื่อดูรายละเอียดอุปกรณ์และเวลา
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image/Layout side */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 relative">
              <img 
                src="./layout.jpg" 
                alt="Court Layout" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-heim-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-5 space-y-4">
            {courts.map((court, index) => (
              <div 
                key={court.id}
                onClick={() => setSelectedCourt(court)}
                className="cursor-pointer p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${court.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{court.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm mb-2">{court.desc}</p>
                    <span className="text-heim-red text-xs md:text-sm font-medium flex items-center">
                      คลิกดูรายละเอียด <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCourt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative animate-fade-in-up">
            <button 
              onClick={() => setSelectedCourt(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className={`${selectedCourt.color} h-32 flex items-center px-8`}>
              <h3 className="text-3xl font-bold text-white">{selectedCourt.title}</h3>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-heim-blue flex items-center mb-3">
                  <svg className="w-5 h-5 mr-2 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  รายการอุปกรณ์ที่ต้องติดตั้ง (Equipment)
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedCourt.details.equipment.map((eq, i) => (
                    <li key={i}>{eq}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-heim-blue flex items-center mb-3">
                  <svg className="w-5 h-5 mr-2 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  ระยะเวลาดำเนินงาน (Timeline)
                </h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">{selectedCourt.details.timeline}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-heim-blue flex items-center mb-3">
                  <svg className="w-5 h-5 mr-2 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  ข้อมูลเทคนิคเพิ่มเติม (Technical Notes)
                </h4>
                <p className="text-gray-700">{selectedCourt.details.extra}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourtTypes;
