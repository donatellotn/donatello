import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = '4c61de43c0b8a428d9d5c42e9006c051';
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const LOGOS_DIR = path.join(__dirname, '..', 'public', 'logos');

const filesToUpload = [
  { file: path.join(IMAGES_DIR, 'hero-bg.png'), name: 'donatello-hero' },
  { file: path.join(IMAGES_DIR, 'about-interior.png'), name: 'donatello-about' },
  { file: path.join(IMAGES_DIR, 'menu-brunch.png'), name: 'donatello-brunch' },
  { file: path.join(IMAGES_DIR, 'menu-cappuccino.png'), name: 'donatello-cappuccino' },
  { file: path.join(IMAGES_DIR, 'menu-mojito.png'), name: 'donatello-mojito' },
  { file: path.join(LOGOS_DIR, 'Logo-donatello.jpg'), name: 'donatello-logo' },
];

async function upload(filePath, name) {
  const base64 = fs.readFileSync(filePath, 'base64');
  const form = new URLSearchParams();
  form.append('key', API_KEY);
  form.append('image', base64);
  form.append('name', name);

  const res = await fetch('https://api.imgbb.com/1/upload', {
    method: 'POST',
    body: form,
  });
  const json = await res.json();
  if (!json.success) throw new Error(`Upload failed: ${JSON.stringify(json)}`);
  return { name, url: json.data.display_url };
}

async function main() {
  console.log('Uploading images to ImgBB...\n');
  const results = [];
  for (const { file, name } of filesToUpload) {
    try {
      process.stdout.write(`  Uploading ${name}...`);
      const result = await upload(file, name);
      console.log(` ✅ ${result.url}`);
      results.push(result);
    } catch (e) {
      console.log(` ❌ ${e.message}`);
    }
  }
  console.log('\n--- RESULTS ---');
  results.forEach(r => console.log(`${r.name}: ${r.url}`));
}

main().catch(console.error);
