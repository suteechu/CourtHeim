import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'คุณณัฐพล วิริยะกุล',
      role: 'Project Manager',
      desc: 'ควบคุมภาพรวมโครงการและบริหารเวลาการส่งมอบงานให้เป็นไปตามมาตรฐานสูงสุด',
      img: '/team-pm.jpg'
    },
    {
      name: 'คุณสิริพร วงศ์สว่าง',
      role: 'Lead Structural Engineer',
      desc: 'ดูแลความแข็งแรงของโครงสร้าง RC Slab และระบบระบายน้ำให้ได้ระดับที่ถูกต้อง',
      img: '/team-eng.jpg'
    },
    {
      name: 'คุณธนกฤต ชัยพัฒนา',
      role: 'QA/QC Specialist',
      desc: 'ตรวจสอบคุณภาพทุก Hold Points ตั้งแต่การบดอัดดินจนถึงการทดสอบขังน้ำ',
      img: '/team-qc.jpg'
    }
  ];

  return (
    <section className="py-24 bg-heim-blue text-white relative border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the <span className="text-heim-red">Experts</span></h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            ดูแลทุกตารางเมตรโดยทีมวิศวกรผู้เชี่ยวชาญจาก SCG HEIM เพื่อให้คุณมั่นใจในคุณภาพทุกขั้นตอนการก่อสร้าง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors group text-center">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-heim-red font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
