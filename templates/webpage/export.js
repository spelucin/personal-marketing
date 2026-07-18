const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const pages = [
  {
    id: 'default',
    eyebrow: 'SEO técnico para Shopify',
    title: 'Alex Spelucin',
    description: 'Consultor independiente de SEO técnico para Shopify. Auditorías, estrategia de catálogo y capacitaciones.',
  },
  {
    id: 'home',
    eyebrow: 'SEO técnico para Shopify',
    title: 'Alex Spelucin',
    description: 'Consultor independiente de SEO técnico para Shopify. Auditorías, estrategia de catálogo y capacitaciones para tiendas que quieren tráfico orgánico real.',
  },
  {
    id: 'servicios',
    eyebrow: 'Servicios',
    title: 'Servicios de SEO técnico para Shopify',
    description: 'Auditoría SEO técnica, estrategia de catálogo y talleres a medida. Sin paquetes genéricos, sin retainer mensual.',
  },
  {
    id: 'sobre-mi',
    eyebrow: 'Sobre mí',
    title: 'Alex Spelucin',
    description: 'Consultor independiente de SEO técnico para Shopify. 7 años de trayectoria optimizando ecommerces en LATAM, Norteamérica y España.',
  },
  {
    id: 'contacto',
    eyebrow: 'Contacto',
    title: 'Agenda una llamada',
    description: 'Consultoría SEO Shopify: 30 minutos gratis para evaluar el SEO técnico de tu tienda.',
  },
  {
    id: 'casos-de-estudio',
    eyebrow: 'Casos de estudio',
    title: 'Resultados reales, tiendas reales.',
    description: 'Auditorías SEO técnicas y estrategias de catálogo en tiendas Shopify de LATAM.',
  },
  {
    id: 'servicio-auditoria-seo-tecnica',
    eyebrow: 'Servicios',
    title: 'Auditoría SEO Técnica',
    description: 'Reporte técnico de 60-120 páginas que cubre indexación, performance, schema, arquitectura y recomendaciones priorizadas por impacto.',
  },
  {
    id: 'servicio-estrategia-de-catalogo',
    eyebrow: 'Servicios',
    title: 'Estrategia de Catálogo',
    description: 'Plan completo de keyword research, jerarquía de colecciones, estructura de URLs y enlaces internos, listo para implementar.',
  },
  {
    id: 'servicio-talleres-y-capacitaciones',
    eyebrow: 'Servicios',
    title: 'Talleres y Capacitaciones',
    description: 'Capacitación práctica para que tu equipo tome mejores decisiones SEO en el día a día.',
  },
  {
    id: 'tiendas-nuevas',
    eyebrow: 'Tiendas nuevas',
    title: 'Pack Tiendas Nuevas',
    description: 'Arquitectura de catálogo y contenidos para tiendas Shopify que están por lanzar. Desde $900 USD.',
  },
];

const outputDir = 'output/es/webpage/og';

(async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch();
  const template = fs.readFileSync('templates/webpage/og-image.html', 'utf-8');

  for (const p of pages) {
    console.log(p.id);

    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 630 });
    const html = template
      .replace('data-eyebrow="SEO técnico para Shopify"', `data-eyebrow="${p.eyebrow}"`)
      .replace('data-title="Alex Spelucin"', `data-title="${p.title}"`)
      .replace('data-description="Consultor independiente de SEO técnico para Shopify."', `data-description="${p.description}"`);
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.screenshot({
      path: path.join(outputDir, `${p.id}.jpg`),
      type: 'jpeg', quality: 95,
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    });
    await page.close();
  }

  await browser.close();
  console.log(`${pages.length} OG images listos`);
})();
