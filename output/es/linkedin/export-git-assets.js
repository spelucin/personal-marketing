const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const carouselHtml = path.resolve('output/es/linkedin/carousels/2026-07-18-git-para-marketing.html');
const carouselPdf = path.resolve('output/es/linkedin/carousels/2026-07-18-git-para-marketing.pdf');
const bannerHtml = path.resolve('output/es/linkedin/banners/2026-07-18-git-para-marketing.html');
const bannerJpg = path.resolve('output/es/linkedin/banners/2026-07-18-git-para-marketing.jpg');

(async () => {
  const browser = await chromium.launch();

  // Export carousel to PDF
  console.log('Exporting carousel to PDF...');
  const carouselPage = await browser.newPage();
  await carouselPage.setViewportSize({ width: 1080, height: 1350 });
  const carouselContent = fs.readFileSync(carouselHtml, 'utf-8');
  await carouselPage.setContent(carouselContent, { waitUntil: 'networkidle' });
  await carouselPage.pdf({
    path: carouselPdf,
    width: '1080px',
    height: '1350px',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });
  await carouselPage.close();
  console.log('Carousel PDF:', carouselPdf);

  // Export banner to JPG
  console.log('Exporting banner to JPG...');
  const bannerPage = await browser.newPage();
  await bannerPage.setViewportSize({ width: 1200, height: 667 });
  const bannerContent = fs.readFileSync(bannerHtml, 'utf-8');
  await bannerPage.setContent(bannerContent, { waitUntil: 'networkidle' });
  await bannerPage.screenshot({
    path: bannerJpg,
    type: 'jpeg',
    quality: 95,
    clip: { x: 0, y: 0, width: 1200, height: 667 }
  });
  await bannerPage.close();
  console.log('Banner JPG:', bannerJpg);

  await browser.close();
  console.log('Done!');
})();
