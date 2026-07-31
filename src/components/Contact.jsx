import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-heim-gray relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-heim-blue mb-1">Project Support Ticket</h2>
            <p className="text-gray-500 text-sm">
              ระบบแจ้งปัญหาการทำงาน, อัปเดต Defect, หรือร้องขอการปรับแก้แปลนก่อสร้าง
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">รหัสพนักงาน (Employee ID)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 text-sm rounded bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-heim-blue outline-none"
                  placeholder="EMP-XXXX"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">หมวดหมู่ปัญหา (Category)</label>
                <select className="w-full px-3 py-2 text-sm rounded bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-heim-blue outline-none">
                  <option>Structural (งานโครงสร้าง)</option>
                  <option>Material (วัสดุและจัดซื้อ)</option>
                  <option>Design & Specs (แบบแปลนและสเปก)</option>
                  <option>QA/QC (ตรวจสอบคุณภาพ)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">รายละเอียด (Issue Description)</label>
              <textarea 
                rows="3" 
                className="w-full px-3 py-2 text-sm rounded bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-heim-blue outline-none"
                placeholder="อธิบายรายละเอียดหรือสิ่งที่ต้องการความช่วยเหลือ..."
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="button" 
                className="px-6 py-2 bg-heim-blue text-white rounded text-sm font-bold hover:bg-blue-900 transition-colors w-full md:w-auto"
              >
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
