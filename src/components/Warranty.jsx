import React from 'react';

const Warranty = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl font-bold text-heim-blue mb-2">Facility Management (FM) Guidelines</h2>
        <p className="text-gray-500 text-sm mb-8 border-b pb-4">คู่มือการบำรุงรักษาพื้นที่และการจัดการข้อบกพร่อง (Defect Management)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-heim-blue px-2 py-1 rounded text-sm mr-3">Warranty</span>
              เงื่อนไขการรับประกัน
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
              <li><strong>โครงสร้าง (RC Slab):</strong> 5 ปี (ครอบคลุมการทรุดตัว แตกหักจากงานวิศวกรรม)</li>
              <li><strong>สีเคลือบผิว (A.S.A):</strong> 2 ปี (ครอบคลุมสีลอก ร่อน บวมน้ำ จากความชื้นสะสม)</li>
              <li><strong>อุปกรณ์ยึดติดผนัง (Wall-mounted):</strong> 1 ปี (ตรวจเช็กน็อตและจุดเชื่อมต่อ)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-sm mr-3">Maintenance</span>
              SOP การบำรุงรักษารายเดือน
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
              <li>ทำความสะอาดพื้นผิวด้วยเครื่องขัดพื้นรอบต่ำ (Low-speed scrubber) และน้ำยา pH เป็นกลาง ห้ามใช้กรด</li>
              <li>ตรวจสอบท่อระบายน้ำ (PVC Ø 150mm) รอบสนาม ป้องกันใบไม้และขยะอุดตัน</li>
              <li>ห้ามลากจูงอุปกรณ์หนักโดยไม่มีล้อเลื่อนแบบยางนิ่ม</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
