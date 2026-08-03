import React, { useState } from 'react';

const Timeline = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const phases = [
    {
      title: "Phase 1: งานโครงสร้างพื้นฐาน",
      duration: "Day 1 - 15",
      desc: "ปรับระดับดินเดิม บดอัด เทคอนกรีตเสริมเหล็ก 200 มม. พร้อมขัดหยาบและบ่มคอนกรีต",
      color: "bg-gray-800",
      details: [
        "รื้อถอนและปรับระดับพื้นที่เดิม",
        "บดอัดทรายและหินคลุก",
        "ผูกเหล็กและเทคอนกรีตความหนา 200 มม.",
        "ขัดหยาบหน้าผิวคอนกรีต",
        "ระยะเวลาบ่มคอนกรีตเพื่อให้ได้ค่า Strength ตามมาตรฐาน"
      ]
    },
    {
      title: "Phase 2: งานผิวและสีอะคริลิก",
      duration: "Day 16 - 35",
      desc: "ลงสีรองพื้นอีพ็อกซี่, ชั้นยางสังเคราะห์ (Cushion) 2 ชั้น, และสีทับหน้าโพลียูรีเทน",
      color: "bg-heim-blue",
      details: [
        "ทำความสะอาดหน้าผิวคอนกรีตและทาสีรองพื้น Epoxy",
        "ทาชั้นยางสังเคราะห์ (Cushion) 2-3 ชั้นเพื่อซับแรงกระแทก",
        "ทาสีทับหน้าด้วยระบบสีอะคริลิก 100%",
        "ตีเส้นสนามตามมาตรฐานแต่ละชนิดกีฬา",
        "ตรวจสอบความเรียบและสม่ำเสมอของสี"
      ]
    },
    {
      title: "Phase 3: งานอุปกรณ์และการส่งมอบ",
      duration: "Day 36 - 45",
      desc: "ติดตั้งเสาบาสเกตบอล โกลฟุตซอล ระบบไฟส่องสว่าง ตาข่ายกันลูกบอล และทำความสะอาด",
      color: "bg-heim-red",
      details: [
        "ติดตั้งแป้นบาสเกตบอลและโกลฟุตซอล",
        "ติดตั้งเสาไฟส่องสว่าง LED และทดสอบความสว่าง",
        "ติดตั้งตาข่ายกันลูกบอลรอบทิศทาง",
        "ตรวจสอบความเรียบร้อยและทำความสะอาดพื้นที่ทั้งหมด",
        "ส่งมอบงานพร้อมคู่มือการดูแลรักษา (FM Guidelines)"
      ]
    }
  ];

  const togglePhase = (idx) => {
    setExpandedPhase(expandedPhase === idx ? null : idx);
  };

  return (
    <section id="timeline" className="py-24 bg-white relative print:hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-heim-red font-bold tracking-widest uppercase text-sm mb-2 block">Project Milestone</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase italic">
            ไทม์ไลน์ 45 วัน
          </h2>
          <div className="w-24 h-1.5 bg-heim-red mx-auto mt-6 transform -skew-x-12"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Background Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

            <div className="space-y-12 md:space-y-0">
              {phases.map((phase, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md items-center justify-center z-10 bg-white">
                    <div className={`w-3 h-3 rounded-full ${phase.color}`}></div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div 
                      onClick={() => togglePhase(idx)}
                      className="bg-gray-50 rounded-2xl p-6 pb-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer group"
                    >
                      <div className={`absolute top-0 left-0 w-1 h-full ${phase.color}`}></div>
                      
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-900 pr-2">{phase.title}</h4>
                        <span className={`text-sm font-black px-3 py-1 rounded-full text-white ${phase.color} whitespace-nowrap`}>
                          {phase.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {phase.desc}
                      </p>
                      
                      {/* Expandable Details */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedPhase === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-4 border-t border-gray-200">
                          <ul className="space-y-2">
                            {phase.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start text-sm text-gray-600">
                                <svg className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${phase.color.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Toggle Indicator */}
                      <div className="absolute bottom-2 right-4 text-gray-400 group-hover:text-gray-600 transition-colors">
                        <svg className={`w-5 h-5 transform transition-transform duration-300 ${expandedPhase === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
