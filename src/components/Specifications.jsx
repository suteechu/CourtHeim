import React, { useState } from 'react';

const Specifications = () => {
  const [modalContent, setModalContent] = useState(null);

  const viewBtn = (src, caption) => (
    <button onClick={() => setModalContent({ src, caption })} className="text-gray-400 hover:text-heim-blue transition-colors shrink-0" title="ดูภาพจำลอง">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    </button>
  );

  return (
    <section id="specifications" className="py-16 bg-gray-50 relative print:py-0 print:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 print:mb-6">
          <h2 className="text-3xl font-bold text-heim-blue mb-2">Technical <span className="text-heim-red">Specs</span></h2>
          <div className="h-1 w-16 bg-heim-red mx-auto rounded-full mb-4 print:hidden"></div>
          <p className="text-gray-600 text-sm">ข้อมูลด้านวิศวกรรมแบบสรุป (SOP)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm print:border-gray-800 print:shadow-none break-inside-avoid">
            <h3 className="font-bold text-gray-900 border-b pb-2 mb-4 flex justify-between print:border-gray-800">
              1. งานโครงสร้างพื้นฐาน
              <div className="print:hidden">{viewBtn('./foundation_blueprint.jpg', 'แบบขยายฐานราก')}</div>
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 print:text-black">
              <li className="flex justify-between items-center">
                <span><strong className="text-heim-red mr-1 print:text-black">■</strong> Subgrade: บดอัด &ge; 95%</span>
                <div className="print:hidden">{viewBtn('./subgrade.jpg', 'ชั้นดินเดิม')}</div>
              </li>
              <li className="flex justify-between items-center">
                <span><strong className="text-heim-red mr-1 print:text-black">■</strong> Base Course: หินคลุก 150 มม.</span>
                <div className="print:hidden">{viewBtn('./Subbase.jpg', 'ชั้นรองพื้นฐาน')}</div>
              </li>
              <li className="flex justify-between items-center">
                <span><strong className="text-heim-red mr-1 print:text-black">■</strong> Vapor Barrier: PE 0.15 มม.</span>
              </li>
              <li className="flex justify-between items-center">
                <span><strong className="text-heim-red mr-1 print:text-black">■</strong> RC Slab: หนา 200 มม. (280 ksc)</span>
                <div className="print:hidden">{viewBtn('./rc_slab.jpg', 'พื้นคอนกรีต')}</div>
              </li>
              <li className="flex justify-between items-center">
                <span><strong className="text-heim-red mr-1 print:text-black">■</strong> Wiremesh: #4mm @ 0.20 ม.</span>
                <div className="print:hidden">{viewBtn('./wiremesh.jpg', 'เหล็กเสริม')}</div>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm print:border-gray-800 print:shadow-none break-inside-avoid">
            <h3 className="font-bold text-gray-900 border-b pb-2 mb-4 print:border-gray-800">2. ระบบเคลือบผิว & พื้นที่</h3>
            <ul className="space-y-3 text-sm text-gray-700 mb-4 print:text-black">
              <li className="flex justify-between"><span><strong>A.S.A. 5-Layer:</strong> หนา 2-3 มม.</span></li>
              <li className="flex justify-between"><span>- Wear Coat (กันลื่น)</span><span>180&mu;</span></li>
              <li className="flex justify-between"><span>- Cushion Coat</span><span>1.5 มม.</span></li>
              <li className="flex justify-between"><span>- Base Coat</span><span>0.6 มม.</span></li>
            </ul>
            <div className="bg-gray-50 p-3 rounded text-xs space-y-1 print:bg-white print:border print:border-gray-300">
              <div className="flex items-center"><span className="w-3 h-3 bg-[#B24C38] rounded-full mr-2 print:border print:border-black"></span>สีหลัก: Terracotta</div>
              <div className="flex items-center"><span className="w-3 h-3 bg-[#378136] rounded-full mr-2 print:border print:border-black"></span>สีรอง: Green</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm print:border-gray-800 print:shadow-none break-inside-avoid">
            <h3 className="font-bold text-gray-900 border-b pb-2 mb-4 print:border-gray-800">3. การระบายน้ำ & ควบคุมคุณภาพ</h3>
            <ul className="space-y-3 text-sm text-gray-700 mb-6 print:text-black">
              <li className="flex justify-between items-center">
                <span><strong className="text-heim-red mr-1 print:text-black">■</strong> Slope 1:200</span>
                <div className="print:hidden">{viewBtn('./slope_design.jpg', 'Slope Design')}</div>
              </li>
              <li className="flex flex-col justify-between">
                <div className="flex justify-between items-center w-full">
                  <span><strong className="text-heim-red mr-1 print:text-black">■</strong> Joint: ตัดร่องป้องกันรอยร้าว</span>
                  <div className="print:hidden">{viewBtn('./concrete_joints_new.png', 'Concrete Joints')}</div>
                </div>
                <div className="bg-gray-50 p-2 mt-2 rounded text-xs text-gray-600 print:bg-white print:border print:border-gray-300">
                  <p className="font-semibold text-gray-800 mb-1">ระยะแนะนำ (พื้นที่ 10.70 x 19.70 ม.):</p>
                  <ul className="list-disc list-inside">
                    <li>ด้านกว้าง: แบ่ง 3 ช่วง (3.56 ม./ช่วง)</li>
                    <li>ด้านยาว: แบ่ง 5 ช่วง (3.94 ม./ช่วง)</li>
                  </ul>
                </div>
              </li>
            </ul>
            <h4 className="font-bold text-heim-blue text-sm mb-2 print:text-black">Hold Points (จุดตรวจสอบสำคัญ)</h4>
            <ul className="text-xs space-y-2 text-gray-600 print:text-black">
              <li className="flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>ผลทดสอบบดอัดดิน (Field Density)</li>
              <li className="flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>ตรวจระยะเหล็กเสริมก่อนเทคอนกรีต</li>
              <li className="flex items-center"><span className="text-green-500 font-bold mr-2">✓</span>ทดสอบขังน้ำ (Flood Test) ก่อนทำสี</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity print:hidden">
          <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative">
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
            <div className="p-4 bg-gray-50 border-t text-center"><p className="text-sm font-medium">{modalContent.caption}</p></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Specifications;
