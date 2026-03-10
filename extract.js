const fs = require('fs');
const path = require('path');

const sectionsDir = path.join('c:/Users/keert/Downloads/b_NM206Jdkp02-1773151280151/components/sections');
const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

let fullText = '';
files.forEach(file => {
    const content = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
    // strip out tsx tags to get mostly text
    const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    fullText += `--- ${file} ---\n${text}\n\n`;
});

fs.writeFileSync('c:/Users/keert/Downloads/b_NM206Jdkp02-1773151280151/section_texts.txt', fullText);
console.log('Extraction complete. Files processed:', files.length);
