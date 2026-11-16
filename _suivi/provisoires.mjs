import sharp from 'sharp';
const L = [['grok/violences-matin', 1920, 1080, [640,1280,1920]], ['grok/violences-matin-mobile', 1080, 1920, [640,1080]],
 ['grok/psy-fauteuil', 1920, 1080, [640,1280,1920]], ['grok/psy-fauteuil-mobile', 1080, 1920, [640,1080]],
 ['grok/souffle-lin', 784, 980, [480,640,784]], ['grok/olivier-fenetre', 784, 980, [480,640,784]],
 ['grok/sophro-chaise', 1920, 1280, [640,1280,1920]], ['grok/rdv-bureau', 784, 980, [480,640,784]]];
for (const [nom, W, H, ws] of L) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#efe7dc"/><stop offset="1" stop-color="#dccbb6"/></linearGradient><radialGradient id="r" cx=".68" cy=".42" r=".45"><stop offset="0" stop-color="#f7e3d6"/><stop offset="1" stop-color="#f7e3d6" stop-opacity="0"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#r)"/></svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  for (const w of ws) await sharp(buf).resize(w).webp({ quality: 70 }).toFile(`assets/images/${nom}-${w}.webp`);
}
console.log('ok');
