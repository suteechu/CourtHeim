import React, { useState, useEffect, useCallback } from 'react';
import Papa from 'papaparse';

const BOQ = () => {
  const [items, setItems] = useState([]);
  const [summary, setSummary] = useState([]);
  const [categorySums, setCategorySums] = useState({});
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sheetUrl = 'https://docs.google.com/spreadsheets/d/1HWy64CBUPHPBXYTNBsbPKG5KB__C7XC7D_KrB3sByII/export?format=csv';

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    
    Papa.parse(sheetUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const data = results.data;
          const parsedItems = [];
          const parsedSummary = [];
          const catSums = {};

          data.forEach(row => {
            const values = Object.values(row);
            const index = values[0];
            const category = values[1];
            const desc = values[2];
            const qty = values[3];
            const unit = values[4];
            const matPrice = values[5];
            const laborPrice = values[6];
            const total = values[7];

            if (index && index.trim() !== '') {
              const isCategoryHeader = !desc || desc.trim() === '';
              parsedItems.push({
                index, category, desc, qty, unit, matPrice, laborPrice, total,
                isCategoryHeader
              });

              if (!isCategoryHeader && total) {
                const val = parseFloat(total);
                if (!isNaN(val)) {
                  catSums[category] = (catSums[category] || 0) + val;
                }
              }
            } else if (laborPrice && total) {
              parsedSummary.push({
                label: laborPrice,
                value: total
              });
            }
          });

          setItems(parsedItems);
          setSummary(parsedSummary);
          setCategorySums(catSums);
          setRawData(data);
          setLoading(false);
        } catch (err) {
          console.error("Parsing Error:", err);
          setError("เกิดข้อผิดพลาดในการประมวลผลข้อมูล BOQ");
          setLoading(false);
        }
      },
      error: (err) => {
        console.error("Fetch Error:", err);
        setError("ไม่สามารถดึงข้อมูลจาก Google Sheets ได้");
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatCurrency = (val) => {
    if (!val || isNaN(parseFloat(val))) return val;
    return parseFloat(val).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleExport = () => {
    if (rawData.length === 0) return;
    const csv = Papa.unparse(rawData);
    const bom = '\uFEFF';
    const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CourtHeim_BOQ.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="boq" className="py-24 bg-white relative border-t border-gray-100 print:py-0 print:border-none">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 print:mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Estimated <span className="text-heim-red">BOQ & Pricing</span></h2>
          <div className="h-1 w-24 bg-heim-red mx-auto rounded-full mb-6 print:hidden"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed print:hidden">
            รายการประเมินราคาอ้างอิงเบื้องต้นสำหรับโครงการสนามกีฬาอเนกประสงค์
          </p>
        </div>

        {loading && (
          <div className="flex flex-col justify-center items-center py-20 print:hidden">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heim-blue mb-4"></div>
            <span className="text-gray-500 font-medium">กำลังซิงค์ข้อมูลจาก Google Sheets...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-lg text-center max-w-2xl mx-auto border border-red-200 shadow-sm print:hidden">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="max-w-6xl mx-auto animate-fade-in-up">
            <div className="flex justify-end mb-4 space-x-3 print:hidden">
              <button 
                onClick={fetchData}
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors shadow-sm font-medium text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                ซิงค์ข้อมูลล่าสุด
              </button>
              <button 
                onClick={() => window.open('https://docs.google.com/spreadsheets/d/1HWy64CBUPHPBXYTNBsbPKG5KB__C7XC7D_KrB3sByII/edit?usp=sharing', '_blank')}
                className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-sm font-medium text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                แก้ไข Data
              </button>
              <button 
                onClick={handleExport}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm font-medium text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                นำออก (Export)
              </button>
            </div>
            <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl print:border-none print:shadow-none">
              <table className="w-full text-sm text-left text-gray-600 print:text-black">
                <thead className="text-base font-bold text-gray-800 bg-gray-200 border-b-2 border-gray-300 print:bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-16">ลำดับ</th>
                    <th scope="col" className="px-6 py-4 min-w-[450px]">รายการ</th>
                    <th scope="col" className="px-6 py-4 text-center">จำนวน</th>
                    <th scope="col" className="px-6 py-4 text-center">หน่วย</th>
                    <th scope="col" className="px-6 py-4 text-right whitespace-nowrap">ค่าวัสดุ/หน่วย</th>
                    <th scope="col" className="px-6 py-4 text-right whitespace-nowrap">ค่าแรง/หน่วย</th>
                    <th scope="col" className="px-6 py-4 text-right font-black text-gray-900 whitespace-nowrap">จำนวนเงิน</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    item.isCategoryHeader ? (
                      <tr key={idx} className="bg-gray-100 border-b border-gray-300 font-bold text-gray-900 shadow-inner print:shadow-none">
                        <td className="px-6 py-3">{item.index}</td>
                        <td className="px-6 py-3" colSpan="5">{item.category}</td>
                        <td className="px-6 py-3 text-right text-heim-blue text-base font-black print:text-black">
                          {categorySums[item.category] ? formatCurrency(categorySums[item.category]) : '0.00'}
                        </td>
                      </tr>
                    ) : (
                      <tr key={idx} className="bg-white border-b border-gray-100 hover:bg-blue-50/30 transition-colors break-inside-avoid">
                        <td className="px-6 py-3 text-gray-500 print:text-black">{item.index}</td>
                        <td className="px-6 py-3 font-medium text-gray-800 print:text-black">{item.desc}</td>
                        <td className="px-6 py-3 text-center print:text-black">{item.qty}</td>
                        <td className="px-6 py-3 text-center print:text-black">{item.unit}</td>
                        <td className="px-6 py-3 text-right text-gray-500 print:text-black">{formatCurrency(item.matPrice)}</td>
                        <td className="px-6 py-3 text-right text-gray-500 print:text-black">{formatCurrency(item.laborPrice)}</td>
                        <td className="px-6 py-3 text-right font-semibold text-heim-blue print:text-black">{formatCurrency(item.total)}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Summary Section */}
            <div className="mt-8 flex flex-col items-end break-inside-avoid">
              <div className="w-full md:w-[450px] bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm print:border-gray-800 print:shadow-none">
                {summary.map((sum, idx) => (
                  <div key={idx} className={`flex justify-between px-6 py-4 border-b border-gray-200 ${idx === summary.length - 1 ? 'bg-heim-blue text-white border-none print:bg-gray-800 print:text-white' : 'text-gray-800'}`}>
                    <span className={`font-semibold ${idx === summary.length - 1 ? 'text-white' : 'text-gray-600 print:text-black'}`}>{sum.label}</span>
                    <span className={`font-bold text-lg ${idx === summary.length - 1 ? 'text-white' : 'text-heim-red print:text-black'}`}>{formatCurrency(sum.value)} ฿</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-right print:text-black">
                * ข้อมูลนี้เป็นการประเมินเบื้องต้น อาจมีการเปลี่ยนแปลงตามสภาพพื้นที่จริง
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BOQ;
