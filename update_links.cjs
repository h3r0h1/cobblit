const fs = require('fs');


const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace links based on text content
  content = content.replace(/href="#"(>Cobblit®<\/a>)/g, 'href="/index.html"$1');
  content = content.replace(/href="#"(>Producten<\/a>)/g, 'href="/producten.html"$1');
  content = content.replace(/href="#"(>Contact<\/a>)/g, 'href="/contact.html"$1');
  
  // Update task list
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
