import React from 'react';

const Timeline = () => {
  const phases = [
    {
      title: "Phase 1: งานโครงสร้างพื้นฐาน",
      duration: "Day 1 - 15",
      desc: "ปรับระดับดินเดิม บดอัด เทคอนกรีตเสริมเหล็ก 200 มม. พร้อมขัดหยาบและบ่มคอนกรีต",
      color: "bg-gray-800"
    },
    {
      title: "Phase 2: งานผิวและสีอะคริลิก",
      duration: "Day 16 - 35",
      desc: "ลงสีรองพื้นอีพ็อกซี่, ชั้นยางสังเคราะห์ (Cushion) 2 ชั้น, และสีทับหน้าโพลียูรีเทน",
      color: "bg-heim-blue"
    },
    {
      title: "Phase 3: งานอุปกรณ์และการส่งมอบ",
      duration: "Day 36 - 45",
      desc: "ติดตั้งเสาบาสเกตบอล โกลฟุตซอล ระบบไฟส่องสว่าง ตาข่ายกันลูกบอล และทำความสะอาด",
      color: "bg-heim-red"
    }
  ];

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
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      <div className={`absolute top-0 left-0 w-1 h-full ${phase.color}`}></div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{phase.title}</h4>
                        <span className={`text-sm font-black px-3 py-1 rounded-full text-white ${phase.color}`}>
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {phase.desc}
                      </p>
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
