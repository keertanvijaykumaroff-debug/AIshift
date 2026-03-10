const fs = require('fs');

const path = 'c:/Users/keert/Downloads/b_NM206Jdkp02-1773151280151/data/slides.ts';
let code = fs.readFileSync(path, 'utf8');

// Function to map some title to icon
const mapIcon = (title) => {
    title = title.toLowerCase();
    if (title.includes('finance') || title.includes('business')) return 'Briefcase';
    if (title.includes('job') || title.includes('work')) return 'Users';
    if (title.includes('ethic') || title.includes('privacy')) return 'ShieldCheck';
    if (title.includes('data') || title.includes('analytic')) return 'Database';
    if (title.includes('evolution') || title.includes('timeline')) return 'Clock';
    if (title.includes('code') || title.includes('prompt')) return 'Terminal';
    if (title.includes('agent') || title.includes('automation')) return 'Cpu';
    if (title.includes('company') || title.includes('organization')) return 'Building2';
    if (title.includes('landscape') || title.includes('stack')) return 'Layers';
    if (title.includes('ai') || title.includes('deep learning')) return 'BrainCircuit';
    return 'Sparkles';
};

// Extremely naive regex replace to append an icon field to objects
const lines = code.split('\n');
const updatedLines = [];
let currentTitle = '';

for (const line of lines) {
    if (line.includes('title: "')) {
        const match = line.match(/title: "([^"]+)"/);
        if (match) currentTitle = match[1];
    }

    // For single line obj formatting like { id: 8, title: "Evolution...
    if (line.trim().startsWith('{ id:') && line.includes('title:')) {
        const match = line.match(/title: "([^"]+)"/);
        if (match) {
            const tempTitle = match[1];
            const icon = mapIcon(tempTitle);
            const replaced = line.replace(' layout:', ` icon: '${icon}', layout:`);
            updatedLines.push(replaced);
            continue;
        }
    } else if (line.trim().startsWith('layout:')) {
        const icon = mapIcon(currentTitle);
        updatedLines.push(`    icon: '${icon}',`);
    }

    updatedLines.push(line);
}

// Add 'icon?: string;' to interface
const interfaceFixed = updatedLines.join('\n').replace(
    "extraContent?: any;",
    "extraContent?: any;\n  icon?: string;"
);

fs.writeFileSync(path, interfaceFixed);
console.log('Icons added successfully.');
