const fs = require('fs');
const path = require('path');

// Define folder structure
const folders = [
  'docs',
  'docs/css',
  'docs/js',
  'docs/assets'
];

// Define initial files and their content
const files = {
  'docs/index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REST Countries App</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Where in the world?</h1>
    <button id="theme-toggle">🌙 Dark Mode</button>
  </header>

  <main>
    <section class="controls">
      <input type="text" id="search" placeholder="Search for a country..." />
      <select id="region-filter">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
    <section id="country-list" class="grid"></section>
  </main>

  <script src="js/main.js"></script>
</body>
</html>`,

  'docs/country.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Country Details</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main id="country-detail">
    <!-- Details will be populated via JS -->
  </main>
  <script src="js/country.js"></script>
</body>
</html>`,

  'docs/css/style.css': `/* Basic styles */
body {
  font-family: Arial, sans-serif;
  padding: 1rem;
}
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.card {
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}`,

  'docs/js/main.js': `// Main page JS
console.log('Main script loaded');`,

  'docs/js/country.js': `// Country detail page script
console.log('Country detail script loaded');`,

  'docs/js/api.js': `// API utility functions will go here
export async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
}`,

  'docs/js/theme.js': `// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});`
};

// Create folders
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log('Created folder:', folder);
  }
});

// Create files
for (const [filePath, content] of Object.entries(files)) {
  fs.writeFileSync(filePath, content.trimStart(), 'utf-8');
  console.log('Created file:', filePath);
}

console.log('\n✅ Project scaffold complete. Ready to develop!');
