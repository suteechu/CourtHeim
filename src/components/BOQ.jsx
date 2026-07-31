import React, { useState } from 'react';

const BOQ = () => {
  const [modalContent, setModalContent] = useState(null);
  const boqItems = [
    {
      id: 1,
      category: 'งานโครงสร้าง (Structural)',
      item: 'พื้นความหนา 20 ซม. เสริมเหล็ก Wiremesh #4mm. พร้อมปรับสโลปลาดเอียงระบายน้ำแนวด้านข้าง (ไม่วางระบบท่อระบายน้ำ)',
      qty: '160.5',
      unit: 'ตร.ม.',
      unitPrice: 1100,
      total: 176550,
      imageSrc: './court_cross_section.jpg',
    },
    {
      id: 2,
      category: 'งานสถาปัตยกรรม (Architectural)',
      item: 'ระบบพื้นผิวอะคริลิก 5 ชั้น (Acrylic Coating 2-3 mm)',
      qty: '160.5',
      unit: 'ตร.ม.',
      unitPrice: 650,
      total: 104325,
      imageSrc: './acrylic_surface.jpg',
    },
    {
      id: 3,
      category: 'งานหลังคา (Roofing)',
      item: 'โครงสร้างหลังคาผ้าใบดึงสลิง (Tensile Fabric Roof)',
      qty: '160.5',
      unit: 'ตร.ม.',
      unitPrice: 2800,
      total: 449400,
      imageSrc: './tensile_roof.jpg',
    },
    {
      id: 4,
      category: 'งานสถาปัตยกรรม (Architectural)',
      item: 'งานตีเส้นสนาม (Court Markings: Futsal, Basketball, Takraw)',
      qty: '1',
      unit: 'เหมา',
      unitPrice: 25000,
      total: 25000,
      imageSrc: './court_markings.jpg',
    },
    {
      id: 5,
      category: 'งานภูมิทัศน์ (Landscape & Fencing)',
      item: 'งานตาข่ายกันลูกบอลหลังประตู',
      qty: '1',
      unit: 'เหมา',
      unitPrice: 50000,
      total: 50000,
      imageSrc: './fencing_net.jpg',
    },
    {
      id: 6,
      category: 'งานระบบไฟฟ้า (Electrical)',
      item: 'ระบบไฟส่องสว่าง LED 400W จำนวน 8 โคม พร้อมเสาและตู้คอนโทรล',
      qty: '1',
      unit: 'ชุด',
      unitPrice: 120000,
      total: 120000,
      imageSrc: './led_lighting.jpg',
    },
    {
      id: 7,
      category: 'อุปกรณ์กีฬา (Sports Equipment)',
      item: 'เสาบาสเกตบอล, ประตูฟุตซอล, เสาตะกร้อ พร้อมตาข่าย',
      qty: '1',
      unit: 'ชุด',
      unitPrice: 85000,
      total: 85000,
      imageSrc: './sports_equipment.jpg',
    }
  ];

  const totalAmount = boqItems.reduce((sum, item) => sum + item.total, 0);
  const vat = totalAmount * 0.07;
  const grandTotal = totalAmount + vat;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(amount);
  };

  return (
    <section id="boq" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heim-blue mb-4">
            Estimated <span className="text-heim-red">BOQ</span> & Pricing
          </h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ตัวอย่างการประเมินราคาวัสดุและค่าแรง (Bill of Quantities) สำหรับการก่อสร้างสนามกีฬามัลติฟังก์ชัน ขนาด 10.70 x 15.00 เมตร (160.5 ตร.ม.) วิเคราะห์โดย AI (ราคาโดยประมาณการ)
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-heim-blue text-white text-sm">
                  <th className="p-4 font-semibold w-12 text-center">ลำดับ</th>
                  <th className="p-4 font-semibold">รายการ (Description)</th>
                  <th className="p-4 font-semibold text-right w-24">จำนวน</th>
                  <th className="p-4 font-semibold text-center w-24">หน่วย</th>
                  <th className="p-4 font-semibold text-right w-32">ราคา/หน่วย</th>
                  <th className="p-4 font-semibold text-right w-40">จำนวนเงิน (บาท)</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {boqItems.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-center text-gray-500">{index + 1}</td>
                    <td className="p-4">
                      <div 
                        className="group flex items-start cursor-pointer"
                        onClick={() => setModalContent({ src: item.imageSrc, caption: item.item })}
                      >
                        <p className="font-medium text-gray-800 group-hover:text-heim-blue transition-colors mr-2">{item.category}</p>
                        <svg className="w-5 h-5 text-gray-300 group-hover:text-heim-blue opacity-50 group-hover:opacity-100 transition-all shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </div>
                      <span className="text-sm text-gray-500 block mt-1 leading-relaxed">{item.item}</span>
                    </td>
                    <td className="p-4 text-right text-gray-700">{item.qty}</td>
                    <td className="p-4 text-center text-gray-500">{item.unit}</td>
                    <td className="p-4 text-right text-gray-700">{item.unitPrice.toLocaleString('th-TH')}</td>
                    <td className="p-4 text-right font-medium text-gray-800">{item.total.toLocaleString('th-TH')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-100 p-6 flex flex-col items-end border-t border-gray-200 space-y-2">
            <div className="flex justify-between w-full md:w-1/2 text-sm text-gray-600">
              <span>รวมเป็นเงิน (Sub Total)</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
            <div className="flex justify-between w-full md:w-1/2 text-sm text-gray-600">
              <span>ภาษีมูลค่าเพิ่ม (VAT 7%)</span>
              <span>{formatCurrency(vat)}</span>
            </div>
            <div className="flex justify-between w-full md:w-1/2 text-lg font-bold text-heim-blue pt-2 border-t border-gray-300 mt-2">
              <span>รวมยอดเงินสุทธิ (Grand Total)</span>
              <span className="text-heim-red">{formatCurrency(grandTotal)}</span>
            </div>
            <div className="w-full md:w-1/2 text-xs text-gray-400 mt-4 text-right">
              * ราคาข้างต้นเป็นเพียงการประมาณการเบื้องต้น (Rough Order of Magnitude) โดย AI<br/>
              * ราคาอาจเปลี่ยนแปลงขึ้นอยู่กับพื้นที่ สภาพหน้างาน และสเปกวัสดุจริง
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
            <div className="p-2 min-h-[300px] flex items-center justify-center bg-gray-50">
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

export default BOQ;
