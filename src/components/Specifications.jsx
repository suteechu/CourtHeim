import React, { useState } from 'react';

const Specifications = () => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <section id="specifications" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heim-blue mb-4">Technical <span className="text-heim-red">Specifications</span></h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            มาตรฐานวิศวกรรมขั้นสูง เพื่อบูรณาการพื้นที่ให้มีความปลอดภัยและคงทนต่อการใช้งานหนัก (Heavy-duty utilization)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Engineering Standards */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-between text-gray-900 w-full">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                มาตรฐานโครงสร้างพื้นฐาน
              </div>
              <button onClick={() => setModalContent({ src: './foundation_blueprint.jpg', caption: 'แบบขยายรายละเอียดฐานราก/แผ่นพื้นชั้น' })} className="text-sm font-normal text-heim-blue bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors flex items-center border border-blue-200" title="ดูแบบแปลน">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                ดูแบบแปลน
              </button>
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">ชั้นดินเดิม (Subgrade):</strong> ปรับระดับและบดอัดด้วยรถบดสั่นสะเทือน ทดสอบ Field Density Test ไม่น้อยกว่า 95% Modified Proctor (CBR &gt; 8%)
                </div>
                <button onClick={() => setModalContent({ src: './subgrade.jpg', caption: 'แบบขยาย ชั้นดินเดิม (Subgrade)' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">ชั้นรองพื้นฐาน (Base Course):</strong> ลงหินคลุก หนา 150 มม. บดอัดแน่น ค่า CBR &gt; 10%
                </div>
                <button onClick={() => setModalContent({ src: './Subbase.jpg', caption: 'แบบขยาย ชั้นรองพื้นฐาน (Base Course)' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">แผ่นพลาสติกปูรอง (Vapor Barrier):</strong> ปูแผ่นพลาสติก PE หนา 0.15 มม. (Overlap อย่างน้อย 10 ซม.) ป้องกันความชื้นใต้ดิน
                </div>
              </li>
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">พื้นคอนกรีตเสริมเหล็ก (RC Slab):</strong> ความหนา 200 มม. คอนกรีตกำลังอัด 280 ksc (Cylinder) เทรวดเดียวไม่มีรอยต่อ (Monolithic Pour)
                </div>
                <button onClick={() => setModalContent({ src: './rc_slab.jpg', caption: 'แบบขยาย พื้นคอนกรีตเสริมเหล็ก (RC Slab)' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
              <li className="flex items-center justify-between pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">เหล็กเสริม (Reinforcement):</strong> เหล็ก Wiremesh #4mm. @ 0.20 ม. วาง 2 ชั้น (Top &amp; Bottom) ระยะหุ้มคอนกรีต (Covering) 3-5 ซม.
                </div>
                <button onClick={() => setModalContent({ src: './wiremesh.jpg', caption: 'แบบขยาย เหล็กเสริม (Reinforcement)' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
            </ul>
          </div>

          {/* Card 2: Multi-purpose */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
              <svg className="w-6 h-6 mr-3 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              การบูรณาการพื้นที่ (Multi-purpose)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ออกแบบวางเส้นสนามแบบซ้อนทับ (Overlay Marking) รองรับ 5 กิจกรรมหลัก พร้อมจัดสรรพื้นที่ Buffer Zone &gt; 850 มม. ระหว่างเขตสนามกับผนังอาคาร
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <span className="font-medium text-gray-700 mr-2">Futsal</span>
                <button onClick={() => setModalContent({ src: './futsal_court.jpg', caption: 'แบบขยายสนาม Futsal' })} className="text-gray-400 hover:text-heim-blue transition-colors" title="ดูภาพจำลอง">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <span className="font-medium text-gray-700 mr-2">Basketball (Half)</span>
                <button onClick={() => setModalContent({ src: './basketball_court.jpg', caption: 'แบบขยายสนาม Basketball (Half)' })} className="text-gray-400 hover:text-heim-blue transition-colors" title="ดูภาพจำลอง">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <span className="font-medium text-gray-700 mr-2">Pickleball / Sepak Takraw</span>
                <button onClick={() => setModalContent({ src: './pickleball_takraw_court.jpg', caption: 'แบบขยายสนาม Pickleball / Sepak Takraw' })} className="text-gray-400 hover:text-heim-blue transition-colors" title="ดูภาพจำลอง">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <span className="font-bold text-heim-blue mr-2">HYROX</span>
                <button onClick={() => setModalContent({ src: './hyrox_court.jpg', caption: 'แบบขยายพื้นที่ HYROX (Functional Fitness)' })} className="text-gray-400 hover:text-heim-blue transition-colors" title="ดูภาพจำลอง">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Coating System */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
              <svg className="w-6 h-6 mr-3 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              ระบบเคลือบผิว 5-Layer A.S.A.
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Wear Coat (A) - กันลื่น</span>
                <span className="text-gray-900 font-medium">180 micron</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span>Cushion Coat (B) - ซับแรงกระแทก</span>
                <span className="text-gray-900 font-medium">1.5 มม.</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Base Coat (C) - สร้างแรงยึดเกาะ 2 ชั้น</span>
                <span className="text-gray-900 font-medium">0.6 มม.</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">รูปแบบสีของสนาม (Court Colors)</p>
                <div className="flex flex-col mb-3 space-y-2">
                  <div className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-[#B24C38] mr-3 shrink-0 shadow-sm border border-gray-200"></span>
                    <span><strong className="text-gray-800">สีหลัก (Main):</strong> Terracotta (แดงอิฐ) - พื้นที่ 105 ตร.ม.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-[#378136] mr-3 shrink-0 shadow-sm border border-gray-200"></span>
                    <span><strong className="text-gray-800">สีรอง (Secondary):</strong> Green (เขียว) - พื้นที่ 70 ตร.ม.</span>
                  </div>
                </div>
                <p>* ความหนารวมของระบบ Acrylic Coating อยู่ที่ประมาณ 2-3 mm</p>
              </div>
            </div>
          </div>
          
          {/* Card 4: Drainage */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
              <svg className="w-6 h-6 mr-3 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              ระบบระบายน้ำ (Drainage)
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">Slope Design:</strong> ความลาดเอียง 0.5–0.8% เพื่อการระบายน้ำที่มีประสิทธิภาพ
                </div>
                <button onClick={() => setModalContent({ src: './slope_design.jpg', caption: 'แบบขยาย Slope Design (0.5-0.8%)' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
              <li className="flex items-start justify-between pb-3">
                <div className="flex items-start">
                  <span className="text-heim-red mr-2 mt-1">■</span>
                  <div>
                    <strong className="text-gray-900">Concrete Joints:</strong> ตัดรอยต่อคอนกรีตเพื่อป้องกันการแตกร้าว
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm border border-gray-100">
                      <strong className="text-gray-800 block mb-1">คำแนะนำที่ดีที่สุดสำหรับพื้นที่ 10.70 x 15.00 m:</strong>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>ด้านกว้าง (10.70 ม.): แบ่งออกเป็น 3 ช่วง = 3.56 เมตร / ช่วง</li>
                        <li>ด้านยาว (15.00 ม.): แบ่งออกเป็น 4 ช่วง = 3.75 เมตร / ช่วง</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button onClick={() => setModalContent({ src: './concrete_joints_new.png', caption: 'แบบขยาย Concrete Joints (ระยะ 3-4 เมตร)' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0 mt-1" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
            </ul>
          </div>

          {/* Card 5: Equipment */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
              <svg className="w-6 h-6 mr-3 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              อุปกรณ์ที่ HEIM จัดหาและประกอบเอง
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">1. เสาแป้นบาสเกตบอล</strong>
                </div>
                <button onClick={() => setModalContent({ src: './basketball_hoop_gen.jpg', caption: 'ภาพจำลองเสาแป้นบาสเกตบอล' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
              <li className="flex items-center justify-between pb-2">
                <div>
                  <span className="text-heim-red mr-2">■</span>
                  <strong className="text-gray-900">2. เสาประตูโกลหนู ขนาด 120 x 80 x 54 cm. พร้อมตาข่าย</strong>
                </div>
                <button onClick={() => setModalContent({ src: './mini_goal_gen.jpg', caption: 'ภาพจำลองเสาโกลหนู' })} className="text-gray-400 hover:text-heim-blue transition-colors ml-4 shrink-0" title="ดูภาพจำลอง">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
              </li>
            </ul>
          </div>
        </div>


        {/* Construction Method & Quality Control */}
        <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
            <svg className="w-6 h-6 mr-3 text-heim-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            ลำดับขั้นตอนการดำเนินงานก่อสร้าง (Method Statement) & ควบคุมคุณภาพ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-heim-blue mb-4">ขั้นตอนการดำเนินงาน</h4>
              <ol className="space-y-4 text-gray-600 list-decimal list-inside">
                <li><strong className="text-gray-900">Substrate Preparation:</strong> รื้อถอนและบดอัดชั้นดิน (Subgrade) และ Base Course ด้วยรถบดสั่นสะเทือน</li>
                <li><strong className="text-gray-900">Drainage Installation:</strong> ขุดร่องและติดตั้งระบบระบายน้ำ พร้อมหุ้ม Geotextile ก่อนงานพื้น</li>
                <li><strong className="text-gray-900">RC Slab Construction:</strong> วางเหล็กเสริม Wiremesh # 4 มม. สองชั้นพร้อมลูกปูน เทคอนกรีตด้วยรถปั๊ม</li>
                <li><strong className="text-gray-900">Acrylic System & Marking:</strong> ทำความสะอาดพื้นผิว และดำเนินการเคลือบระบบ A.S.A. 5 ชั้น</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-heim-red mb-4">มาตรการควบคุมคุณภาพ (Hold Points)</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                  <span><strong className="text-gray-900">Hold Point 1:</strong> ผลการทดสอบการบดอัดดิน (CBR Test Report & Field Density 95%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                  <span><strong className="text-gray-900">Hold Point 2:</strong> ตรวจสอบความถูกต้องของเหล็กเสริม Wiremesh # 4 มม. และระยะ Chair Spacers ก่อนเทคอนกรีต</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                  <span><strong className="text-gray-900">Hold Point 3:</strong> ทดสอบขังน้ำ 24 ชั่วโมง (Flood Test) เพื่อตรวจระดับความลาดเอียงและจุดน้ำขัง ก่อนเคลือบผิว</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative animate-fade-in-up">
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="p-2">
              <img 
                src={modalContent.src} 
                alt={modalContent.caption} 
                className="w-full h-auto rounded-xl object-contain max-h-[80vh]" 
                onError={(e) => {
                  if (e.target.src.includes('.jpg')) e.target.src = e.target.src.replace('.jpg', '.png');
                  else if (e.target.src.includes('.png')) e.target.src = e.target.src.replace('.png', '.jpg');
                  else e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
                }}
              />
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600 font-medium">{modalContent.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Specifications;
