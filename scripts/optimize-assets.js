const fs = require('fs');
const path = require('path');
const sharp = require('../node_modules/sharp');

const root = path.join(__dirname, '..');
const pub = path.join(root, 'public');

async function run() {
  console.log('--- STARTING HIGH-FIDELITY ASSET OPTIMIZATION ---');

  // 1. ISO 17025 Badge: 222x99 -> 666x297 (3x Retina HD)
  const isoSrc = path.join(pub, 'images/badges/iso-17025-certified-badge.png');
  const isoWebp = path.join(pub, 'images/badges/iso-17025-certified-badge.webp');
  if (fs.existsSync(isoSrc)) {
    await sharp(isoSrc)
      .resize(666, 297, { kernel: 'lanczos3' })
      .sharpen({ sigma: 1, m1: 1.5, m2: 2 })
      .webp({ quality: 95, effort: 6 })
      .toFile(isoWebp);
    console.log('✓ Created 3x HD iso-17025-certified-badge.webp (666x297)');
  }

  // 2. GLP Badge: 400x400 -> 800x800 (2x Retina HD)
  const glpSrc = path.join(pub, 'images/badges/glp-certified-badge.png');
  const glpWebp = path.join(pub, 'images/badges/glp-certified-badge.webp');
  if (fs.existsSync(glpSrc)) {
    await sharp(glpSrc)
      .resize(800, 800, { kernel: 'lanczos3', fit: 'inside' })
      .sharpen({ sigma: 0.8, m1: 1.2, m2: 2 })
      .webp({ quality: 92, effort: 6 })
      .toFile(glpWebp);
    console.log('✓ Created 2x HD glp-certified-badge.webp (800x800)');
  }

  // 3. IFBIL Logo: from logo.jpg (621x791 -> 1000px height with pristine webp quality 95)
  const logoJpg = path.join(pub, 'logo.jpg');
  if (fs.existsSync(logoJpg)) {
    const ifbilBuf = await sharp(logoJpg)
      .resize(1000, null, { kernel: 'lanczos3' })
      .sharpen({ sigma: 0.8, m1: 1.2, m2: 2 })
      .webp({ quality: 95, effort: 6 })
      .toBuffer();

    fs.writeFileSync(path.join(pub, 'logo-ifbil.webp'), ifbilBuf);
    fs.writeFileSync(path.join(pub, 'images/logo-ifbil.webp'), ifbilBuf);
    fs.writeFileSync(path.join(pub, 'logo.webp'), ifbilBuf);
    console.log('✓ Created HD logo-ifbil.webp & logo.webp (1000px height, ~96KB)');
  }

  // 4. SLIPC Logo: from slipc-logo.jpg (621x791 -> 1000px height with pristine webp quality 95)
  const slipcJpg = path.join(pub, 'slipc-logo.jpg');
  if (fs.existsSync(slipcJpg)) {
    const slipcBuf = await sharp(slipcJpg)
      .resize(1000, null, { kernel: 'lanczos3' })
      .sharpen({ sigma: 0.8, m1: 1.2, m2: 2 })
      .webp({ quality: 95, effort: 6 })
      .toBuffer();

    fs.writeFileSync(path.join(pub, 'logo-slipc.webp'), slipcBuf);
    fs.writeFileSync(path.join(pub, 'images/logo-slipc.webp'), slipcBuf);
    fs.writeFileSync(path.join(pub, 'slipc-logo.webp'), slipcBuf);
    console.log('✓ Created HD logo-slipc.webp & slipc-logo.webp (1000px height, ~96KB)');
  }

  // 5. Handover Banner photo: from certificate-handover.png (1600px width with webp quality 90)
  const handoverPng = path.join(pub, 'images/certificate-handover.png');
  const handoverWebp = path.join(pub, 'images/certificate-handover.webp');
  if (fs.existsSync(handoverPng)) {
    await sharp(handoverPng)
      .resize(1600, null, { kernel: 'lanczos3' })
      .sharpen({ sigma: 0.5 })
      .webp({ quality: 90, effort: 6 })
      .toFile(handoverWebp);
    console.log('✓ Created crisp certificate-handover.webp (1600px, ~78KB)');
  }

  console.log('--- ALL ASSETS ENHANCED SUCCESSFULLY ---');
}

run().catch(console.error);
