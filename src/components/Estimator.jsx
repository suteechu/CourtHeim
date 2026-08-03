import React, { useState } from 'react';

const Estimator = () => {
  const [area, setArea] = useState(177.085);

  const estimatedDays = Math.max(30, Math.ceil(area / 10) + 20);
  const concreteVolume = (area * 0.20).toFixed(1);
  const paintVolume = Math.ceil(area * 1.5); // approx 1.5 liters per sqm for 5 layers

  return (
    <section className="py-16 bg-heim-blue text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10 glass">
          <h2 className="text-2xl font-bold mb-2">Material & Timeline Calculator (Internal Tool)</h2>
          <p className="text-gray-400 text-sm mb-8 border-b border-white/10 pb-4">
            เครื่องมือประเมินวัสดุและระยะเวลาสำหรับ PM และทีมจัดซื้อ
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-lg font-medium text-gray-200">พื้นที่ก่อสร้าง (ตารางเมตร)</label>
                <div className="text-2xl font-bold text-heim-red">{area} <span className="text-base text-gray-400 font-normal">ตร.ม.</span></div>
              </div>
              <input 
                type="range" min="50" max="500" step="0.1"
                value={area} 
                onChange={(e) => setArea(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-heim-red"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">ระยะเวลาทำงาน (รวมบ่ม)</div>
                <div className="text-3xl font-bold text-white mt-1">{estimatedDays} <span className="text-sm">วัน</span></div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">คอนกรีต RC Slab (หนา 200mm)</div>
                <div className="text-3xl font-bold text-white mt-1">{concreteVolume} <span className="text-sm">คิว (m³)</span></div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-gray-400 text-sm">สีอะคริลิก A.S.A (5 Layers)</div>
                <div className="text-3xl font-bold text-white mt-1">{paintVolume} <span className="text-sm">ลิตร</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
