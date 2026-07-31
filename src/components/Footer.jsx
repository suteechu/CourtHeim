import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-heim-blue text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-bold tracking-tighter mb-4">
            SCG<span className="text-heim-red">HEIM</span> <span className="font-light text-gray-300 text-lg ml-1">Project Hub</span>
          </div>
          <p className="text-gray-300 max-w-sm text-sm">
            ศูนย์รวมข้อมูลอ้างอิง สเปกวิศวกรรม และคู่มือปฏิบัติงาน (Internal Document) สำหรับบุคลากร SCG HEIM
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">สารบัญ (Index)</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">หน้าแรก (Home)</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">วัตถุประสงค์ (Objectives)</a></li>
            <li><a href="#specifications" className="text-gray-400 hover:text-white transition-colors">สเปกวิศวกรรม (Specs)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">ฝ่ายสนับสนุน (Support)</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>ระบบแจ้งปัญหาผ่าน Ticket</li>
            <li>อีเมล: info@scgheim.com</li>
            <li>Line: @scgheim</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-blue-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SCG HEIM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
