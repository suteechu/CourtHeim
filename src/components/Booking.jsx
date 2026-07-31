import React, { useState } from 'react';

const Booking = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would normally send the data to a backend server
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', department: '', time: '' });
      onClose(); // Auto close after success
    }, 3000);
  };

  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '17:00 - 19:00',
    '19:00 - 21:00'
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative animate-fade-in-up flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 md:text-gray-400 md:hover:text-gray-800 bg-black/20 md:bg-gray-100 hover:bg-black/40 md:hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        {/* Left Panel */}
        <div className="bg-heim-blue md:w-2/5 p-8 md:p-10 text-white flex flex-col justify-center overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Court <span className="text-heim-red">Booking</span></h2>
          <p className="text-blue-200 mb-8">ระบบจองการใช้งานสนามกีฬามัลติฟังก์ชัน</p>
          
          <h3 className="text-xl font-bold mb-4 border-t border-white/20 pt-6">กฎการใช้สนาม</h3>
          <ul className="space-y-4 text-sm text-blue-100">
            <li className="flex items-start">
              <span className="text-heim-red mr-3 font-bold text-lg leading-none">✓</span>
              <span>กรุณาสวมรองเท้ากีฬาที่เหมาะสม (Non-marking shoes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-heim-red mr-3 font-bold text-lg leading-none">✓</span>
              <span>ห้ามนำอาหารและเครื่องดื่ม (ยกเว้นน้ำเปล่า) เข้าในบริเวณสนาม</span>
            </li>
            <li className="flex items-start">
              <span className="text-heim-red mr-3 font-bold text-lg leading-none">✓</span>
              <span>จองสนามล่วงหน้าได้ไม่เกิน 7 วัน และใช้งานได้สูงสุดครั้งละ 2 ชั่วโมง</span>
            </li>
          </ul>
        </div>
        
        {/* Right Panel */}
        <div className="md:w-3/5 p-8 md:p-10 overflow-y-auto bg-gray-50">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in-up min-h-[300px]">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">จองสนามสำเร็จ!</h4>
              <p className="text-gray-600">
                ระบบได้บันทึกการจองของคุณเรียบร้อยแล้ว ขอให้สนุกกับการเล่นกีฬาครับ
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล (Name)</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-heim-blue focus:border-transparent transition-all"
                  placeholder="กรอกชื่อ-นามสกุล"
                />
              </div>
              
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">แผนก/หน่วยงาน (Department)</label>
                <input 
                  type="text" 
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-heim-blue focus:border-transparent transition-all"
                  placeholder="เช่น IT, HR, Marketing"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">ช่วงเวลาที่ต้องการจอง (Time Slot)</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-heim-blue focus:border-transparent transition-all bg-white"
                >
                  <option value="" disabled>เลือกช่วงเวลา</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-heim-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-4"
              >
                ยืนยันการจองสนาม
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
