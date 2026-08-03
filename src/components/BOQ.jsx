import React, { useState } from 'react';

const BOQ = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    'งานโครงสร้าง (Structural)': true,
    'งานสถาปัตยกรรม (Architectural)': true,
    'งานหลังคา (Roofing)': true,
    'อุปกรณ์กีฬา (Sports Equipment)': true,
    'งานภูมิทัศน์ (Landscape & Fencing)': true,
    'งานระบบไฟฟ้า (Electrical)': true,
  });

  const [selectedCategories, setSelectedCategories] = useState({
    'งานโครงสร้าง (Structural)': true,
    'งานสถาปัตยกรรม (Architectural)': true,
    'งานหลังคา (Roofing)': true,
    'อุปกรณ์กีฬา (Sports Equipment)': true,
    'งานภูมิทัศน์ (Landscape & Fencing)': true,
    'งานระบบไฟฟ้า (Electrical)': true,
  });

  const toggleSelection = (category, e) => {
    e.stopPropagation();
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const isSummaryView = Object.values(expandedCategories).every(v => v === false);
  
  const handleToggleSummaryView = (e) => {
    const isSummary = e.target.checked;
    setExpandedCategories(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(key => {
        newState[key] = !isSummary;
      });
      return newState;
    });
  };

  const [boqItems, setBoqItems] = useState([
    // 1. งานเตรียมพื้นที่และโครงสร้าง (Site Prep & Structural)
    { id: 1, category: 'งานโครงสร้าง (Structural)', item: 'งานเตรียมพื้นที่ ปรับระดับบดอัดดินเดิม และทำ Slope 1:200 (Subgrade & Slope 1:200)', qty: 175.5, unit: 'ตร.ม.', materialPrice: 0, laborPrice: 50, total: 8775 },
    { id: 2, category: 'งานโครงสร้าง (Structural)', item: 'งานหินคลุกบดอัดแน่น หนา 0.10 ม. (Crushed Stone Subbase)', qty: 17.55, unit: 'คิว', materialPrice: 550, laborPrice: 150, total: 12285 },
    { id: 3, category: 'งานโครงสร้าง (Structural)', item: 'งานทรายหยาบรองพื้น หนา 0.05 ม. (Sand Cushion)', qty: 8.77, unit: 'คิว', materialPrice: 350, laborPrice: 100, total: 3946.5 },
    { id: 4, category: 'งานโครงสร้าง (Structural)', item: 'แผ่นพลาสติกปูรองกันความชื้น (PE Sheet 0.15mm)', qty: 175.5, unit: 'ตร.ม.', materialPrice: 10, laborPrice: 5, total: 2632.5 },
    { id: 5, category: 'งานโครงสร้าง (Structural)', item: 'เหล็กตะแกรง Wiremesh #4mm @0.20m', qty: 175.5, unit: 'ตร.ม.', materialPrice: 35, laborPrice: 10, total: 7897.5 },
    { id: 6, category: 'งานโครงสร้าง (Structural)', item: 'คอนกรีตผสมเสร็จ 280 ksc หนา 200 มม. พร้อมขัดหยาบปรับ Slope 1:200', qty: 35.1, unit: 'คิว', materialPrice: 1800, laborPrice: 400, total: 77220 },
    { id: 7, category: 'งานโครงสร้าง (Structural)', item: 'งานไม้แบบและตั้งแบบ (Formwork)', qty: 1, unit: 'เหมา', materialPrice: 3500, laborPrice: 5000, total: 8500 },
    { id: 8, category: 'งานโครงสร้าง (Structural)', item: 'งานตัด Joint และหยอดยางมะตอย (Concrete Joint)', qty: 71, unit: 'ม.', materialPrice: 40, laborPrice: 20, total: 4260 },
    { id: 23, category: 'งานโครงสร้าง (Structural)', item: 'เหล็ก Dowel Bar 16มม. @0.30ม. (เหล็กเดือยตรงรอยต่อ)', qty: 71, unit: 'ม.', materialPrice: 60, laborPrice: 20, total: 5680 },
    { id: 24, category: 'งานโครงสร้าง (Structural)', item: 'น้ำยาบ่มคอนกรีต (Curing Compound)', qty: 175.5, unit: 'ตร.ม.', materialPrice: 15, laborPrice: 5, total: 3510 },
    
    // 2. งานสถาปัตยกรรมพื้นผิว (Surface Coating)
    { id: 9, category: 'งานสถาปัตยกรรม (Architectural)', item: 'น้ำยารองพื้น Primer อะคริลิก (Acrylic Primer)', qty: 175.5, unit: 'ตร.ม.', materialPrice: 60, laborPrice: 40, total: 17550 },
    { id: 10, category: 'งานสถาปัตยกรรม (Architectural)', item: 'ชั้นยางสังเคราะห์รองพื้น (Cushion Layer) 2 ชั้น', qty: 175.5, unit: 'ตร.ม.', materialPrice: 200, laborPrice: 150, total: 61425 },
    { id: 11, category: 'งานสถาปัตยกรรม (Architectural)', item: 'สีทับหน้าอะคริลิก 100% ทน UV (Acrylic Topcoat) 3 ชั้น', qty: 175.5, unit: 'ตร.ม.', materialPrice: 150, laborPrice: 100, total: 43875 },
    { id: 12, category: 'งานสถาปัตยกรรม (Architectural)', item: 'งานตีเส้นสนาม (Futsal, Basketball, Takraw)', qty: 1, unit: 'เหมา', materialPrice: 5000, laborPrice: 10000, total: 15000 },

    // 3. งานหลังคาและอุปกรณ์ (Roofing & Equipment)
    { id: 13, category: 'งานหลังคา (Roofing)', item: 'งานผ้าใบกันแดด HDPE (4 แผ่น ขนาด 10.7x4.1 ม.)', qty: 175.5, unit: 'ตร.ม.', materialPrice: 600, laborPrice: 150, total: 131625 },
    { id: 14, category: 'งานหลังคา (Roofing)', item: 'ชุดสลิงสแตนเลส 8mm ดึงตึง (ยาวรวม 90 ม.) พร้อมอุปกรณ์ยึด', qty: 1, unit: 'ชุด', materialPrice: 25000, laborPrice: 15000, total: 40000 },
    { id: 15, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'แป้นบาสฝังพื้น 72 นิ้ว (HOOP IT รุ่น SPG-1209)', qty: 1, unit: 'ชุด', materialPrice: 40000, laborPrice: 0, total: 40000 },
    { id: 16, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'โกลหนู (WINNER) เหล็กกลม 2 นิ้ว ขนาด 120x80 ซม. พร้อมตาข่าย', qty: 1, unit: 'คู่', materialPrice: 15000, laborPrice: 0, total: 15000 },
    { id: 17, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'บาร์โหนติดผนัง (YINGERJIAN)', qty: 4, unit: 'ชุด', materialPrice: 1500, laborPrice: 0, total: 6000 },
    { id: 18, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'ลูกบาสเกตบอล (Basketball)', qty: 2, unit: 'ลูก', materialPrice: 1200, laborPrice: 0, total: 2400 },
    { id: 19, category: 'อุปกรณ์กีฬา (Sports Equipment)', item: 'ลูกฟุตซอล (Futsal)', qty: 2, unit: 'ลูก', materialPrice: 900, laborPrice: 0, total: 1800 },
    { id: 20, category: 'งานภูมิทัศน์ (Landscape & Fencing)', item: 'งานตาข่ายกันลูกบอลหลังประตู (โครงสร้างเสาและตาข่าย 2 ด้าน)', qty: 1, unit: 'เหมา', materialPrice: 10000, laborPrice: 5000, total: 15000 },

    // 4. งานระบบไฟฟ้า (Electrical)
    { id: 21, category: 'งานระบบไฟฟ้า (Electrical)', item: 'โคมไฟ LED Floodlight 400W พร้อมขายึดติดผนัง (Wall-mounted)', qty: 8, unit: 'โคม', materialPrice: 0, laborPrice: 0, total: 0 },
    { id: 22, category: 'งานระบบไฟฟ้า (Electrical)', item: 'ตู้คอนโทรล สายไฟ NYY และท่อร้อยสาย', qty: 1, unit: 'เหมา', materialPrice: 0, laborPrice: 0, total: 0 }
  ]);

  const totalAmount = boqItems.reduce((sum, item) => {
    return selectedCategories[item.category] !== false ? sum + item.total : sum;
  }, 0);
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
      if (selectedCategories[category] === false) return; // Skip unselected categories

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
            สำหรับการก่อสร้างสนามกีฬามัลติฟังก์ชัน ขนาด 10.70 x 16.40 เมตร (175.5 ตร.ม.)
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium text-sm mr-auto sm:mr-0 select-none">
            <input 
              type="checkbox" 
              className="w-5 h-5 text-heim-blue rounded focus:ring-heim-blue cursor-pointer border-gray-300"
              checked={isSummaryView}
              onChange={handleToggleSummaryView}
            />
            แสดงเฉพาะหมวด (Summary View)
          </label>
          <div className="flex gap-3 w-full sm:w-auto justify-end">
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
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-heim-blue text-white text-sm">
                  <th className="px-3 py-2 font-semibold w-12 text-center whitespace-nowrap">ลำดับ</th>
                  <th className="px-3 py-2 font-semibold whitespace-nowrap">รายการ (Description)</th>
                  <th className="px-3 py-2 font-semibold text-right w-24 whitespace-nowrap">จำนวน</th>
                  <th className="px-3 py-2 font-semibold text-center w-24">หน่วย</th>
                  <th className="px-3 py-2 font-semibold text-right w-32">ค่าวัสดุ/หน่วย</th>
                  <th className="px-3 py-2 font-semibold text-right w-32">ค่าแรง/หน่วย</th>
                  <th className="px-3 py-2 font-semibold text-right w-40">จำนวนเงิน (บาท)</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {Object.entries(groupedBoq).map(([category, items], catIndex) => {
                  const categoryTotal = items.reduce((sum, i) => sum + i.total, 0);
                  const isExpanded = expandedCategories[category] !== false;

                  return (
                  <React.Fragment key={category}>
                    <tr 
                      className="bg-blue-50/50 font-semibold text-heim-blue cursor-pointer hover:bg-blue-100 transition-colors"
                      onClick={() => toggleCategory(category)}
                    >
                      <td className="px-3 py-2 text-center text-gray-500">
                        <svg className={`w-4 h-4 mx-auto transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </td>
                      <td className="px-3 py-2" colSpan={5}>
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox"
                            className="w-4 h-4 text-heim-blue rounded focus:ring-heim-blue cursor-pointer border-gray-300"
                            checked={selectedCategories[category] !== false}
                            onChange={(e) => toggleSelection(category, e)}
                            onClick={(e) => e.stopPropagation()}
                            title="เลือก/ไม่เลือกหมวดหมู่นี้เพื่อคำนวณราคารวม"
                          />
                          <span>{catIndex + 1}. {category}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2 text-right text-heim-blue">{categoryTotal.toLocaleString('th-TH')}</td>
                    </tr>
                    {isExpanded && items.map((item, itemIndex) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-3 py-2 text-center text-gray-400 whitespace-nowrap">{`${catIndex + 1}.${itemIndex + 1}`}</td>
                        <td className="px-3 py-2 pl-8 whitespace-nowrap">
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
                )})}
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
