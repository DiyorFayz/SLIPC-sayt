const sharp = require('../node_modules/sharp');
const path = require('path');
const fs = require('fs');

const srcImg = 'C:/Users/user/.gemini/antigravity/brain/ea1ad745-4d69-422f-a000-29af6bd56988/.user_uploaded/media_1795760398218_bf96538a.png';
const outLogo = path.join(__dirname, '../public/images/springer-nature.webp');
const outCover = path.join(__dirname, '../public/images/journals/default-cover.webp');

async function processImages() {
  // 1. Direct WebP logo
  await sharp(srcImg)
    .webp({ quality: 95, effort: 6 })
    .toFile(outLogo);
  console.log('Saved', outLogo);

  // 2. 3:4 portrait journal cover (400x532) with white background & Springer Nature logo
  const logoResized = await sharp(srcImg)
    .resize(340, null, { fit: 'inside' })
    .toBuffer();

  const svgBorder = Buffer.from(`
    <svg width="400" height="532">
      <rect x="0" y="0" width="400" height="532" fill="#ffffff" />
      <rect x="12" y="12" width="376" height="508" rx="16" fill="none" stroke="#E2E8F0" stroke-width="2" />
      <rect x="12" y="12" width="376" height="8" fill="#108A54" />
      <rect x="12" y="512" width="376" height="8" fill="#0F2942" />
      <text x="200" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748B" text-anchor="middle" letter-spacing="2">INTERNATIONAL RESEARCH</text>
      <line x1="40" y1="75" x2="360" y2="75" stroke="#CBD5E1" stroke-width="1" />
      <text x="200" y="460" font-family="sans-serif" font-size="13" font-weight="600" fill="#0F2942" text-anchor="middle">SCOPUS &amp; WEB OF SCIENCE</text>
      <text x="200" y="482" font-family="monospace" font-size="11" fill="#94A3B8" text-anchor="middle">PEER REVIEWED PUBLICATION</text>
    </svg>
  `);

  await sharp(svgBorder)
    .composite([
      { input: logoResized, top: 190, left: 30 }
    ])
    .webp({ quality: 95, effort: 6 })
    .toFile(outCover);
  console.log('Saved', outCover);
}

processImages().catch(console.error);
