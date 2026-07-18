# Spelucin.mkt - Sistema de Marketing Personal

## Contexto

Este repositorio es el sistema de marketing personal de **Alex Spelucin**, consultor independiente de SEO tecnico para ecommerce Shopify.

- **Sitio web**: spelucin.pro (repo: `../spelucin.pro`)
- **Email**: alex@spelucin.pro
- **LinkedIn**: linkedin.com/in/spelucin
- **Objetivo**: Captar clientes de consultoria + vender productos/servicios (ver `knowledge/products.md`)
- **Idiomas**: Espanol + Ingles

## Trayectoria profesional

**Arco narrativo:** De SEO en retail enterprise → analytics leadership → Shopify technical SEO

### SEO Enterprise (2019-2022)
- **Ripley Perú** (Technical SEO Analyst, 2020): Optimización para CyberWow 2020, logrando 3.7M sesiones en un día (pico histórico del sitio)
- **Intercorp Retail** (SEO Analyst, 2021-2022): SEO para Plaza Vea, Promart, Oechsle, Real Plaza, Inkafarma. Local SEO para 1,500+ locales de Inkafarma en Lima
- **Attach Media** (Senior SEO Consultant, 2021): SEO para Scotiabank y Yanbal. Empleado del mes (agosto 2021)

### Analytics Leadership (2022-2025)
- **Picnic** (Digital Analytics Lead, 2022-2023): Clientes en construcción e inmobiliario. Rediseño de Menorca con 30% mejora en conversiones. Etex con 120% aumento en completaciones de cursos
- **Notebook Agency** (Digital Analytics Lead, 2024-2025): 30+ clientes en SaaS, finanzas, healthcare. Auditoría de 10 cuentas GA4
- **Freelance** (2023-presente): 20+ dashboards para clientes en Argentina, México, EE.UU.

### Shopify Technical SEO (2026-presente)
Ahora enfocado en ayudar a tiendas Shopify a multiplicar su tráfico orgánico con SEO técnico y arquitectura de catálogo. El ángulo: las tiendas pequeñas merecen el mismo nivel de expertise técnico que las grandes.

**CV completo:** Ver `knowledge/cv.md` para detalles de experiencia, educación y certificaciones.

## Pilares de contenido

1. SEO tecnico + Arquitectura de catalogo (75% - pilar principal)
2. AI Search / GEO (15% - emergente)
3. Analitica y medicion (10% - soporte para SEO)

## Fuentes de verdad

- **Servicios y pricing**: `knowledge/products.md` (unico lugar autorizado). No duplicar tablas de servicios ni precios en otros archivos; referenciar este.
- **Identidad visual**: `brand/visual-identity.md`
- **Voz y tono**: `knowledge/voice-guide.md`
- **Perfil profesional**: `knowledge/profile.md`
- **Audiencia**: `knowledge/audience.md`
- **Pilares de contenido**: `knowledge/topics.md`

## Reglas de voz

- Leer `knowledge/voice-guide.md` antes de generar cualquier copy
- Tono: autoridad tecnica con edge contrarian, directo, sin relleno
- Espanol nativo con code-switching natural a terminos tecnicos en ingles
- Metáforas visuales para conceptos tecnicos
- Minimum emoji, zero hashtags innecesarios
- Estructura: Hook provocativo -> Problema -> Insight -> CTA

## Reglas visuales

- Paleta monocromatica azul (#1560bd) derivada de spelucin.pro
- Tipografia: DM Sans
- Texturas: dot grids sutiles, gradientes diagonales suaves
- Leer `brand/visual-identity.md` antes de generar cualquier asset visual

## Convenciones de archivos

### Copy/posts (.md con frontmatter)
```yaml
---
platform: linkedin | bluesky
type: carousel | banner | post | image
title: "..."
topics: [seo-tecnico, arquitectura, analitica, ai-search]
language: es | en
status: draft | ready | published
created: YYYY-MM-DD
template: nombre-del-template
---
```

### Assets visuales
- Carousels: HTML standalone -> exportar a PDF en `output/{idioma}/linkedin/carousels/`
- Banners: HTML standalone -> exportar a JPG en `output/{idioma}/linkedin/banners/`
- Posts BS: HTML standalone -> exportar a JPG en `output/{idioma}/bluesky/posts/`
- Assets sin texto/idioma (logos, fondos): `output/common/{plataforma}/`

### Organización por idioma

**Perfiles de plataforma:**
- `profile/es/{plataforma}.md` - Contenido en español
- `profile/en/{plataforma}.md` - Contenido en inglés

**Assets visuales:**
- `output/es/{plataforma}/` - Assets con copy en español
- `output/en/{plataforma}/` - Assets con copy en inglés
- `output/common/{plataforma}/` - Assets sin texto o genéricos (logos, fondos, elementos visuales sin idioma)

**Identificación de idioma:**
1. **Archivos .md**: Campo `language: es | en` en frontmatter
2. **Ruta de archivo**: `profile/es/`, `profile/en/`, `output/es/`, `output/en/`
3. **Assets sin idioma**: Van a `output/common/` (no tienen copy o son visualmente neutrales)

### Flujo de exportacion HTML -> JPG/PDF

Usar Playwright (Node.js) para capturar assets desde HTML standalone:

```javascript
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 667 } });
  await page.goto('file://' + path.resolve('ruta/al/asset.html'));
  await page.waitForLoadState('networkidle');
  
  // Para JPG/PNG
  await page.screenshot({ 
    path: 'output/ruta/asset.jpg', 
    type: 'jpeg', 
    quality: 95 
  });
  
  // Para PDF (carousels)
  await page.pdf({ 
    path: 'output/ruta/asset.pdf',
    width: '1080px',
    height: '1080px',
    printBackground: true
  });
  
  await browser.close();
})();
```

**Dimensiones por tipo de asset:**
- LinkedIn banner post: 1200x667px
- LinkedIn banner perfil: 1584x396px
- LinkedIn carousel: 1080x1080px (PDF multi-pagina)
- Bluesky post: 1200x675px

## Skills disponibles

- `spelucin-voice`: Escribir en la voz de Alex
- `linkedin-carousel`: Generar carousels HTML -> PDF
- `linkedin-banner`: Generar banners HTML -> JPG
- `social-asset`: Generar assets genericos (Bluesky)
- `content-repurpose`: Adaptar contenido entre plataformas

## Agents disponibles

- `content-writer`: Escribe posts/carousels en la voz de Alex
- `asset-designer`: Genera assets visuales con templates y brand guidelines
- `content-strategist`: Planifica calendario y estrategia de contenido
