import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'สามารถเบิกจ่ายงบประมาณ (Budget Drawdown) ได้ที่ไหน?',
      answer: 'โปรดอ้างอิงผ่านระบบ ERP ภายใน (รหัสโครงการ: HMC-2026-X) โดยแนบเอกสารใบตรวจรับงาน (Hold Points) จาก QA/QC เพื่อประกอบการตั้งเบิกในแต่ละเฟส'
    },
    {
      question: 'หากตรวจพบ Defect ระหว่างการก่อสร้างต้องทำอย่างไร?',
      answer: 'ให้ทีม Engineer เปิด Ticket ผ่านระบบ Support ด้านล่าง และระบุพิกัดในแบบแปลน พร้อมแนบรูปถ่าย ห้ามดำเนินการเทคอนกรีตหรือทับผิวจนกว่า QA จะปลดล็อก Hold Point'
    },
    {
      question: 'การสั่งซื้อวัสดุ (Material Procurement) สั่งล่วงหน้ากี่วัน?',
      answer: 'สีอะคริลิก A.S.A และเหล็กเสริม (RC Slab) มีระยะเวลาจัดส่ง (Lead Time) 14 วัน กรุณาทำการสั่งซื้อผ่านระบบจัดซื้อส่วนกลางล่วงหน้า'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Internal FAQs</h2>
        <p className="text-sm text-gray-500 mb-6">คำถามที่พบบ่อยเกี่ยวกับการประสานงานและข้อบังคับภายใน</p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-5 py-3 flex justify-between items-center focus:outline-none hover:bg-gray-100"
              >
                <h4 className="font-bold text-sm text-gray-800">{faq.question}</h4>
                <span className="text-heim-red font-bold">{openIndex === index ? '-' : '+'}</span>
              </button>
              <div className={`px-5 overflow-hidden transition-all ${openIndex === index ? 'max-h-40 pb-4' : 'max-h-0 py-0'}`}>
                <p className="text-sm text-gray-600 border-t border-gray-200 pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
