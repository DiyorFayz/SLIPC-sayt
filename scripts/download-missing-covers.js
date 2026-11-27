const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const sharp = require('../node_modules/sharp');

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redir = res.headers.location;
        if (!redir.startsWith('http')) redir = new URL(url).origin + redir;
        return resolve(downloadBuffer(redir));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

const targets = [
  {
    id: 11,
    url: 'https://media.springernature.com/lw400/springer-static/cover-hires/book/978-3-031-80050-4?as=jpg',
    name: 'Bioactive Compounds in Edible Mushrooms (Vol 1)'
  },
  {
    id: 12,
    url: 'https://media.springernature.com/lw400/springer-static/cover-hires/book/978-3-031-80050-4?as=jpg',
    name: 'Bioactive Compounds in Edible Mushrooms (Vol 2)'
  },
  {
    id: 17,
    url: 'https://i5.walmartimages.com/asr/109e89c1-1cf1-4ead-a396-70e684e9d36b.cbf3c33c71c57ef9e4d5c037d66179f4.jpeg',
    name: 'Water crises and sustainable management in the global south'
  },
  {
    id: 18,
    url: 'https://redshelf-images.s3-external-1.amazonaws.com/cover_image/9783031741579.jpg',
    name: 'Sustainable Strategies for Air Pollution Mitigation'
  }
];

async function main() {
  const outDir = path.join(__dirname, '../public/images/journals');
  for (const t of targets) {
    console.log(`Downloading ${t.id}: ${t.name}...`);
    try {
      const buf = await downloadBuffer(t.url);
      console.log(`Downloaded ${t.id}, buffer length: ${buf.length}`);
      const meta = await sharp(buf).metadata();
      console.log(`Original image for ${t.id}: ${meta.width}x${meta.height}, format: ${meta.format}`);
      
      const outPath = path.join(outDir, `journal-${t.id}.webp`);
      await sharp(buf)
        .resize(400, 532, { fit: 'cover', position: 'top' })
        .sharpen()
        .webp({ quality: 92, effort: 6 })
        .toFile(outPath);
      
      const stat = fs.statSync(outPath);
      console.log(`✓ Saved journal-${t.id}.webp (${stat.size} bytes)`);
    } catch (e) {
      console.error(`✗ Error on ${t.id}:`, e.message);
    }
  }
}

main().catch(console.error);
