const fs = require('fs');
const path = require('path');

const dir = 'h:/00_PowerBI/Web/Court Heim/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;
  
  // Replace src="/image.png"
  if (content.includes('src="/')) {
    content = content.replace(/src="\/([^"]+)"/g, 'src="./$1"');
    modified = true;
  }
  
  // Replace src: '/image.jpg'
  if (content.includes("src: '/")) {
    content = content.replace(/src:\s*'\/([^']+)'/g, "src: './$1'");
    modified = true;
  }
  
  // Replace imageSrc: '/image.jpg'
  if (content.includes("imageSrc: '/")) {
    content = content.replace(/imageSrc:\s*'\/([^']+)'/g, "imageSrc: './$1'");
    modified = true;
  }
  
  // Replace url('/image.jpg')
  if (content.includes("url('/")) {
    content = content.replace(/url\('\/([^']+)'\)/g, "url('./$1')");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', file);
  }
}
