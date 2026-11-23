const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createCircularLogo() {
  const source = 'C:/Users/user/.gemini/antigravity/brain/cf368d1d-b616-46ba-95d6-eaa91279942c/.user_uploaded/media_1795462675584_d56398f4.jpg';
  const size = 992;
  const radius = size / 2;
  
  // Extract square centered at (503, 516)
  const left = Math.round(502.5 - radius);
  const top = Math.round(516 - radius);
  
  const squareBuffer = await sharp(source)
    .extract({ left: Math.max(0, left), top: Math.max(0, top), width: size, height: size })
    .toBuffer();

  // Create circle mask SVG
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius - 2}" fill="#fff" /></svg>`
  );

  // Composite with circle mask for clean circular transparent bounds
  await sharp(squareBuffer)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile('public/logo-toshfarmi.webp');

  fs.copyFileSync('public/logo-toshfarmi.webp', 'public/images/logo-toshfarmi.webp');
  console.log('Successfully created public/logo-toshfarmi.webp!');
}

createCircularLogo().catch(console.error);
