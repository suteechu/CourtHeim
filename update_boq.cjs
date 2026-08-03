const fs = require('fs');

const path = './src/components/BOQ.jsx';
let content = fs.readFileSync(path, 'utf-8');

const OLD_AREA = 177.50;
const NEW_AREA = 178;

// Replace area in descriptions
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  if (line.includes('177.50')) {
    line = line.replace(/177\.50/g, '178');
  }

  // Also replace calculated volume quantities
  // Crushed stone 0.1m
  if (line.includes('17.75') && line.includes('id: 2')) {
    line = line.replace('17.75', (NEW_AREA * 0.1).toFixed(4));
  }
  // Sand cushion 0.05m
  if (line.includes('8.875') && line.includes('id: 3')) {
    line = line.replace('8.8750', (NEW_AREA * 0.05).toFixed(4));
    line = line.replace('8.875', (NEW_AREA * 0.05).toFixed(4));
  }
  // Concrete 0.2m
  if (line.includes('35.5') && line.includes('id: 6')) {
    line = line.replace('35.5000', (NEW_AREA * 0.2).toFixed(4));
    line = line.replace('35.5', (NEW_AREA * 0.2).toFixed(4));
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
console.log('BOQ updated successfully to 178.');
