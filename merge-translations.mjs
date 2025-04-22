import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const langDir = resolve('src', 'lang');
const baseLang = 'en';
const targetLangs = ['fr', 'es']; // Add more if needed

const basePath = resolve(langDir, `${baseLang}.json`);
const baseMessages = JSON.parse(readFileSync(basePath, 'utf-8'));

for (const lang of targetLangs) {
  const langPath = resolve(langDir, `${lang}.json`);
  const existingMessages = existsSync(langPath)
    ? JSON.parse(readFileSync(langPath, 'utf-8'))
    : {};

  const merged = {};

  for (const key of Object.keys(baseMessages)) {
    if (existingMessages[key]) {
      merged[key] = existingMessages[key]; // keep translation
    } else {
      merged[key] = lang === 'en' ? baseMessages[key] : ""; // fallback or empty
    }
  }

  writeFileSync(langPath, JSON.stringify(merged, null, 2), 'utf-8');
  console.log(`✅ Merged translations into ${lang}.json`);
}
