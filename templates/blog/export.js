const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const categories = [
  { id: 'seo-tecnico', title: 'Arquitectura de catalogo para tiendas Shopify con 1000+ productos' },
  { id: 'ai-search', title: 'Como Google esta redefiniendo la busqueda con IA generativa' },
  { id: 'analitica', title: 'GA4 + BigQuery: pipeline de datos para ecommerce' }
];
const author = 'Alex Spelucin';
const outputDir = 'output/es/blog';

function getAvatarBase64() {
  const buf = fs.readFileSync(path.resolve('brand/alex-spelucin-avatar.jpg'));
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

(async () => {
  const avatarBase64 = getAvatarBase64();
  const browser = await chromium.launch();

  const ogTemplate = fs.readFileSync('templates/blog/og-image.html', 'utf-8');

  for (const cat of categories) {
    console.log(cat.id);

    const ogPage = await browser.newPage();
    await ogPage.setViewportSize({ width: 1200, height: 630 });
    let og = ogTemplate
      .replace('data-category="seo-tecnico"', `data-category="${cat.id}"`)
      .replace('data-title="Arquitectura de catalogo para tiendas Shopify con 1000+ productos"', `data-title="${cat.title}"`)
      .replace('data-author="Alex Spelucin"', `data-author="${author}"`);
    await ogPage.setContent(og, { waitUntil: 'networkidle' });
    await ogPage.evaluate(src => { document.getElementById('avatar-img').src = src; }, avatarBase64);
    await ogPage.screenshot({
      path: path.join(outputDir, 'og', `og-${cat.id}.jpg`),
      type: 'jpeg', quality: 95,
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    });
    await ogPage.close();
  }

  await browser.close();
  console.log('3 OG images listos');
})();
