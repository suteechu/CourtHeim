const fs = require('fs');

const path = './src/components/BOQ.jsx';
let content = fs.readFileSync(path, 'utf-8');

let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  if (line.includes('id: 9') && line.includes('Primer')) {
    line = `    { id: 9, category: 'งานสถาปัตยกรรม (Architectural)', item: 'สีรองพื้นอีพ็อกซี่ (TOA Floorguard Primer)', link: 'https://www.toagroup.com/th/product/protective-coating/flooring-system/216/toa-floorguard-primer', qty: 178, unit: 'ตร.ม.', materialPrice: 80, laborPrice: 50, total: 0 },`;
  }
  
  if (line.includes('id: 11') && line.includes('Topcoat')) {
    line = `    { id: 11, category: 'งานสถาปัตยกรรม (Architectural)', item: 'สีทับหน้าโพลียูรีเทน (TOA Floorguard PU 100) ผสมทรายกันลื่น', link: 'https://www.toagroup.com/th/product/protective-coating/flooring-system/214/toa-floorguard-pu-100', qty: 178, unit: 'ตร.ม.', materialPrice: 180, laborPrice: 120, total: 0 },`;
  }
  
  // Recalculate totals
  const match = line.match(/qty:\s*([\d.]+).*?materialPrice:\s*([\d.]+).*?laborPrice:\s*([\d.]+)/);
  if (match) {
    const qty = parseFloat(match[1]);
    const mat = parseFloat(match[2]);
    const lab = parseFloat(match[3]);
    const total = qty * (mat + lab);
    
    line = line.replace(/total:\s*[\d.]+/, `total: ${total}`);
  }

  lines[i] = line;
}

fs.writeFileSync(path, lines.join('\n'), 'utf-8');
console.log('BOQ updated for PU 100 and Primer.');
