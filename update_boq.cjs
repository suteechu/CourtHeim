const fs = require('fs');

const path = './src/components/BOQ.jsx';
let content = fs.readFileSync(path, 'utf-8');

const OLD_AREA = 175.5;
const NEW_AREA = 177.085;

// We will regex replace all occurrences of 175.5 with 177.085 in the items,
// and then re-evaluate the total fields.

let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  if (line.includes('175.5')) {
    line = line.replace(/175\.5/g, '177.085');
  }

  // Also replace calculated volume quantities
  // Crushed stone 0.1m
  if (line.includes('17.55') && line.includes('id: 2')) {
    line = line.replace('17.55', (NEW_AREA * 0.1).toFixed(4));
  }
  // Sand cushion 0.05m
  if (line.includes('8.77') && line.includes('id: 3')) {
    line = line.replace('8.77', (NEW_AREA * 0.05).toFixed(4));
  }
  // Concrete 0.2m
  if (line.includes('35.1') && line.includes('id: 6')) {
    line = line.replace('35.1', (NEW_AREA * 0.2).toFixed(4));
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
  
  // Also fix the text 120x80 to 200x100
  if (line.includes('120x80')) {
    line = line.replace('120x80', '200x100');
  }

  lines[i] = line;
}

fs.writeFileSync(path, lines.join('\n'), 'utf-8');
console.log('BOQ updated successfully.');
