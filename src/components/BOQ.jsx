import React, { useState } from 'react';

const BOQ = () => {
  const [boqItems, setBoqItems] = useState([
    // 1. งานเตรียมพื้นที่และโครงสร้าง (Site Prep & Structural)
    { id: 1, category: 'งานโครงสร้าง (Structural)', item: 'งานเตรียมพื้นที่ ปรับระดับและบดอัดดินเดิม (Subgrade Compaction)', qty: 160.5, unit: 'ตร.ม.', materialPrice: 0, laborPrice: 50, total: 8025, imageSrc: './subgrade.jpg' },
    { id: 2, category: 'งานโครงสร้าง (Structural)', item: 'งานหินคลุกบดอัดแน่น หนา 0.10 ม. (Crushed Stone Subbase)', qty: 16.05, unit: 'ลบ.ม.', materialPrice: 550, laborPrice: 150, total: 11235, imageSrc: './subgrade.jpg' },
    { id: 3, category: 'งานโครงสร้าง (Structural)', item: 'งานทรายหยาบรองพื้น หนา 0.05 ม. (Sand Cushion)', qty: 8.03, unit: 'ลบ.ม.', materialPrice: 350, laborPrice: 100, total: 3613.5, imageSrc: './subgrade.jpg' },
    { id: 4, category: 'งานโครงสร้าง (Structural)', item: 'แผ่นพลาสติกปูรองกันความชื้น (PE Sheet 0.15mm)', qty: 160.5, unit: 'ตร.ม.', materialPrice: 10, laborPrice: 5, total: 2407.5, imageSrc: './rc_slab.jpg' },
    { id: 5, category: 'งานโครงสร้าง (Structural)', item: 'เหล็กตะแกรง Wiremesh #4mm @0.20m', qty: 160.5, unit: 'ตร.ม.', materialPrice: 35, laborPrice: 10, total: 7222.5, imageSrc: './wiremesh.jpg' },
    { id: 6, category: 'งานโครงสร้าง (Structural)', item: 'คอนกรีตผสมเสร็จ 280 ksc (Cylinder) หนา 200 มม.', qty: 32.1, unit: 'ลบ.ม.', materialPrice: 1800, laborPrice: 400, total: 70620, imageSrc: './rc_slab.jpg' },
    { id: 7, category: 'งานโครงสร้าง (Structural)', item: 'งานไม้แบบและตั้งแบบ (Formwork)', qty: 1, unit: 'เหมา', materialPrice: 3500, laborPrice: 5000, total: 8500, imageSrc: './rc_slab.jpg' },
    { id: 8, category: 'งานโครงสร้าง (Structural)', item: 'งานตัด Joint และหยอดยางมะตอย (Concrete Joint)', qty: 65, unit: 'ม.', materialPrice: 40, laborPrice: 20, total: 3900, imageSrc: './concrete_joints.jpg' },
    
    // 2. งานสถาปัตยกรรมพื้นผิว (Surface Coating)
    { id: 9, category: 'งานสถาปัตยกรรม (Architectural)', item: 'น้ำยารองพื้น Primer อะคริลิก (Acrylic Primer)', qty: 160.5, unit: 'ตร.ม.', materialPrice: 60, laborPrice: 40, total: 16050, imageSrc: './acrylic_surface.jpg' },
    { id: 10, category: 'งานสถาปัตยกรรม (Architectural)', item: 'ชั้นยางสังเคราะห์รองพื้น (Cushion Layer) 2 ชั้น', qty: 160.5, unit: 'ตร.ม.', materialPrice: 200, laborPrice: 150, total: 56175, imageSrc: './acrylic_surface.jpg' },
    { id: 11, category: 'งานสถาปัตยกรรม (Architectural)', item: 'สีทับหน้าอะคริลิก 100% ทน UV (Acrylic Topcoat) 3 ชั้น', qty: 160.5, unit: 'ตร.ม.', materialPrice: 150, laborPrice: 100, total: 40125, imageSrc: './acrylic_surface.jpg' },
    { id: 12, category: 'งานสถาปัตยกรรม (Architectural)', item: 'งานตีเส้นสนาม (Futsal, Basketball, Takraw)', qty: 1, unit: 'เหมา', materialPrice: 5000, laborPrice: 10000, total: 15000, imageSrc: './court_markings.jpg' },

    // 3. งานหลังคาและอุปกรณ์ (Roofing & Equipment)
    { id: 13, category: 'งานหลังคา (Roofing)', item: 'งานดึงสลิงติดผ้าใบกันแดด (Sunshade Sail with Cable Tension)', qty: 160.5, unit: 'ตร.ม.', materialPrice: 900, laborPrice: 300, total: 192600, imageSrc: './tensile_roof.jpg' },
    { id: 14, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'เสาแป้นบาสเกตบอล เหล็กกล่อง 100x100 t3.2 พร้อมแป้นกระจกอะคริลิกใส', qty: 1, unit: 'ชุด', materialPrice: 45000, laborPrice: 10000, total: 55000, imageSrc: './sports_equipment.jpg' },
    { id: 15, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'ประตูโกลหนู 120x80x54 ซม. พร้อมตาข่าย', qty: 2, unit: 'ชุด', materialPrice: 7500, laborPrice: 1000, total: 17000, imageSrc: './sports_equipment.jpg' },
    { id: 16, category: 'งานภูมิทัศน์ (Landscape & Fencing)', item: 'งานตาข่ายกันลูกบอลหลังประตู (โครงสร้างเสาและตาข่าย 2 ด้าน)', qty: 1, unit: 'เหมา', materialPrice: 10000, laborPrice: 5000, total: 15000, imageSrc: './fencing_net.jpg' },

    // 4. งานระบบไฟฟ้า (Electrical)
    { id: 17, category: 'งานระบบไฟฟ้า (Electrical)', item: 'เสาไฟเหล็กกัลวาไนซ์ สูง 6 ม.', qty: 4, unit: 'ต้น', materialPrice: 6500, laborPrice: 2000, total: 34000, imageSrc: './led_lighting.jpg' },
    { id: 18, category: 'งานระบบไฟฟ้า (Electrical)', item: 'โคมไฟ LED Floodlight 400W พร้อมติดตั้ง', qty: 8, unit: 'โคม', materialPrice: 7500, laborPrice: 1000, total: 68000, imageSrc: './led_lighting.jpg' },
    { id: 19, category: 'งานระบบไฟฟ้า (Electrical)', item: 'ตู้คอนโทรล สายไฟ NYY และท่อร้อยสาย', qty: 1, unit: 'เหมา', materialPrice: 14000, laborPrice: 4000, total: 18000, imageSrc: './led_lighting.jpg' }
  ]);

  const totalAmount = boqItems.reduce((sum, item) => sum + item.total, 0);
  const vat = totalAmount * 0.07;
  const grandTotal = totalAmount + vat;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(amount);
  };

  const groupedBoq = boqItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const exportToCSV = () => {
    // UTF-8 BOM for Excel
    const BOM = '\uFEFF';
    const headers = ['ลำดับ', 'หมวดหมู่ (Category)', 'รายการ (Description)', 'จำนวน (Qty)', 'หน่วย (Unit)', 'ค่าวัสดุ/หน่วย (Material Price)', 'ค่าแรง/หน่วย (Labor Price)', 'จำนวนเงิน (Total)'];
    
    let csvContent = BOM + headers.join(',') + '\n';
    
    Object.entries(groupedBoq).forEach(([category, items], catIndex) => {
      const safeCategory = `"${category.replace(/"/g, '""')}"`;
      csvContent += `${catIndex + 1},${safeCategory},,,,,,\n`;

      items.forEach((item, itemIndex) => {
        const description = `"${item.item.replace(/"/g, '""')}"`;
        const qty = item.qty;
        const unit = `"${item.unit.replace(/"/g, '""')}"`;
        const materialPrice = item.materialPrice;
        const laborPrice = item.laborPrice;
        const total = item.total;
        
        csvContent += `${catIndex + 1}.${itemIndex + 1},${safeCategory},${description},${qty},${unit},${materialPrice},${laborPrice},${total}\n`;
      });
    });

    csvContent += `\n,,,,,,รวมเป็นเงิน (Sub Total),${totalAmount}\n`;
    csvContent += `,,,,,,ภาษีมูลค่าเพิ่ม (VAT 7%),${vat}\n`;
    csvContent += `,,,,,,รวมยอดเงินสุทธิ (Grand Total),${grandTotal}\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CourtHeim_BOQ.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const parseCSVRow = (text) => {
    let result = [];
    let cur = '';
    let inQuote = false;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '"') {
        if (inQuote && text[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuote = !inQuote;
        }
      } else if (text[i] === ',' && !inQuote) {
        result.push(cur);
        cur = '';
      } else {
        cur += text[i];
      }
    }
    result.push(cur);
    return result;
  };

  const handleImportCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
      
      const newItems = [];
      let startIdx = 1; // skip header
      let nextId = 1;
      
      for (let i = startIdx; i < lines.length; i++) {
        const row = parseCSVRow(lines[i]);
        if (row.length >= 8) {
          if (!row[0] || row[0].trim() === '') break;
          if (!row[2] || row[2].trim() === '') continue; // skip category header row

          const qty = parseFloat(row[3].trim().replace(/,/g, '')) || 0;
          const materialPrice = parseFloat(row[5].trim().replace(/,/g, '')) || 0;
          const laborPrice = parseFloat(row[6].trim().replace(/,/g, '')) || 0;
          
          const total = parseFloat(row[7].trim().replace(/,/g, '')) || (qty * (materialPrice + laborPrice));

          newItems.push({
            id: nextId++,
            category: row[1].trim(),
            item: row[2].trim(),
            qty: qty,
            unit: row[4].trim(),
            materialPrice: materialPrice,
            laborPrice: laborPrice,
            total: total,
            imageSrc: './logo.png' 
          });
        }
      }
      
      if (newItems.length > 0) {
        setBoqItems(newItems);
      }
      e.target.value = '';
    };
    reader.readAsText(file, 'utf-8');
  };

  return (
    <section id="boq" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heim-blue mb-4">
            Estimated <span className="text-heim-red">BOQ</span> & Pricing
          </h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ตัวอย่างการประเมินราคาวัสดุและค่าแรง (Bill of Quantities) สำหรับการก่อสร้างสนามกีฬามัลติฟังก์ชัน ขนาด 10.70 x 15.00 เมตร (160.5 ตร.ม.) วิเคราะห์โดย AI (ราคาโดยประมาณการ)
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-4 flex justify-end gap-3">
          <label className="flex items-center gap-2 bg-white border border-heim-blue text-heim-blue px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors shadow-sm font-medium text-sm cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            Import CSV
            <input type="file" accept=".csv" className="hidden" onChange={handleImportCSV} />
          </label>
          <button 
            onClick={exportToCSV}
            className="flex items-center gap-2 bg-heim-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-sm font-medium text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Export to CSV
          </button>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-heim-blue text-white text-sm">
                  <th className="px-3 py-2 font-semibold w-12 text-center">ลำดับ</th>
                  <th className="px-3 py-2 font-semibold">รายการ (Description)</th>
                  <th className="px-3 py-2 font-semibold text-right w-24">จำนวน</th>
                  <th className="px-3 py-2 font-semibold text-center w-24">หน่วย</th>
                  <th className="px-3 py-2 font-semibold text-right w-32">ค่าวัสดุ/หน่วย</th>
                  <th className="px-3 py-2 font-semibold text-right w-32">ค่าแรง/หน่วย</th>
                  <th className="px-3 py-2 font-semibold text-right w-40">จำนวนเงิน (บาท)</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {Object.entries(groupedBoq).map(([category, items], catIndex) => (
                  <React.Fragment key={category}>
                    <tr className="bg-blue-50/50 font-semibold text-heim-blue">
                      <td className="px-3 py-2 text-center">{catIndex + 1}</td>
                      <td className="px-3 py-2" colSpan={6}>{category}</td>
                    </tr>
                    {items.map((item, itemIndex) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-3 py-2 text-center text-gray-500">{`${catIndex + 1}.${itemIndex + 1}`}</td>
                        <td className="px-3 py-2 pl-8">
                          <span className="text-gray-800 leading-relaxed block">{item.item}</span>
                        </td>
                        <td className="px-3 py-2 text-right text-gray-700">{item.qty}</td>
                        <td className="px-3 py-2 text-center text-gray-500">{item.unit}</td>
                        <td className="px-3 py-2 text-right text-gray-700">{item.materialPrice.toLocaleString('th-TH')}</td>
                        <td className="px-3 py-2 text-right text-gray-700">{item.laborPrice.toLocaleString('th-TH')}</td>
                        <td className="px-3 py-2 text-right font-medium text-gray-800">{item.total.toLocaleString('th-TH')}</td>
                      </tr>
                    ))}
                  </React.Fragment>
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
    </section>
  );
};

export default BOQ;
