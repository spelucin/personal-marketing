---
name: linkedin-carousel
description: Use when generating LinkedIn carousel assets. Creates standalone HTML files that can be exported to PDF. Applies brand guidelines, visual identity, and carousel best practices.
---

# LinkedIn Carousel Skill

Genera carousels de LinkedIn como HTML standalone que se exportan a PDF. **Siempre incluye un post companion** de LinkedIn que acompaña al carousel (el post es el hook que lleva a la gente a hacer swipe).

## Antes de generar

1. Lee `brand/visual-identity.md` para paleta, tipografía y texturas
2. Lee `brand/linkedin-guidelines.md` para dimensiones y reglas de carousel
3. Lee `knowledge/voice-guide.md` para generar el copy del carousel Y el post companion
4. Revisa `templates/linkedin/carousel/` para ver si hay un template que encaje

> **IMPORTANTE**: Todo carousel DEBE ir acompañado de un post de LinkedIn. Ver sección "Post companion" más abajo.

## Sistema de templates

Hay 5 templates predefinidos en `templates/linkedin/carousel/`. Todos comparten `base.css` (design system) y dimensiones 1080×1350px (4:5 portrait).

### Selección de template

| Template | Cuándo usarlo | Estilo |
|----------|---------------|--------|
| **listicle** | Tips, herramientas, errores, hacks | Light, card-based |
| **tutorial** | Paso a paso, how-to secuencial | Light, step numbers + terminal |
| **concepts** | Explicar conceptos, definir términos | Alternating dark/light |
| **metrics** | Case study, resultados, data story | Light, numbers-first |
| **framework** | Metodología propia, proceso | All dark, flow diagrams |

**Regla**: Si un template encaja al 80%, úsalo y adapta. Si no, genera HTML standalone fresco siguiendo las especificaciones de abajo.

### Usar un template

1. Copiar el HTML del template a `output/{lang}/linkedin/carousels/{date}-{slug}.html`
2. Agregar/quitar slides según necesidad (6-10 slides, ideal 7-9)
3. Rellenar placeholders `<!-- ... -->` con copy real
4. Actualizar slide numbers y total
5. El HTML referencia `base.css` vía `<link rel="stylesheet" href="base.css">`. Para exportar, usar `export.js` o incluir `base.css` inline.

### Exportar template

```bash
# Desde templates/linkedin/carousel/:
node export.js input.html output.pdf

# O desde output/ con su propio export script:
node export.js
```

## Si no usas template: especificaciones técnicas

### Dimensiones
- **Slide**: 1080 x 1350 px (4:5 portrait)
- **Slides por carousel**: 6-10 (ideal: 7-9)
- **Output**: HTML standalone -> PDF

### Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Titulo del Carousel]</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  <style>/* Estilos del carousel */</style>
</head>
<body>
  <div class="slide" id="slide-1"><!-- Slide 1: Hook + titulo --></div>
  <div class="slide" id="slide-2"><!-- Slide 2: Contenido --></div>
  <!-- Mas slides... -->
  <div class="slide" id="slide-final"><!-- Slide final: CTA + bio --></div>
</body>
</html>
```

## Reglas de diseño

### Colores
- **Fondo light**: `#f4fdff` → `#eaf6ff` (gradiente 135deg)
- **Texto principal**: `#1560bd`
- **Acentos**: `#0d4a9e`
- **Dark bg**: `#0a0d14`
- **Dark text**: `#f0f6ff`
- **Dark accent**: `#60a5fa`
- **Dot grid**: `rgba(21, 96, 189, 0.035)` a 1px, 24px spacing

### Tipografía
- **Familia**: DM Sans (body) + JetBrains Mono (code/metrics)
- **Slide title**: 64px, weight 700, letter-spacing -0.02em
- **Slide subtitle**: 30px, weight 400
- **Body text**: 28px, weight 400
- **Caption/label**: 15px, weight 500, uppercase, letter-spacing 0.18em
- **Metric number**: 120px, weight 300

### Texturas
```css
/* Dot grid de fondo (light slides) */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 24px 24px;

/* Gradiente suave */
background: linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%);
```

### Composición de slide
```
┌─────────────────────────────────┐
│  [eyebrow: categoria]           │
│                                 │
│  TITULO GRANDE                  │
│  subtitulo o descripcion        │
│                                 │
│  ┌─────────────────────────┐   │
│  │  contenido visual       │   │
│  │  (diagrama, metrica,    │   │
│  │   lista, codigo)        │   │
│  └─────────────────────────┘   │
│                                 │
│  02/08                          │
│  [avatar] Alex Spelucin         │
│           SEO Técnico p/Shopify │
└─────────────────────────────────┘
```

## Estructura del carousel

### Slide 1: Hook (cover)
- Eyebrow con categoría (ej: "SEO TECNICO")
- Título grande y provocativo
- Subtítulo con promesa o contexto
- Author-bar (avatar + nombre + puesto) — sin monograma
- Puede ser dark o light según template

### Slides 2-N: Contenido
- Una idea por slide
- Título claro
- Contenido visual: diagrama, lista, métrica, código, comparación
- Número de slide (ej: "02/08")
- Author-bar (avatar + nombre + puesto) — sin monograma

### Slide final: CTA
- Resumen o takeaway principal
- CTA claro: "Guarda este post", "Comenta X", "Sígueme para más"
- Author-bar (avatar + nombre + puesto)
- Monograma grande (`.monogram-lg`) — único slide donde aparece

## Author-bar (avatar + nombre + puesto)

Aparece en **todos** los slides (cover, contenido, recap, CTA). Es la única marca de identidad recurrente — el monograma NO se repite junto a ella.

```html
<div class="author-bar">
  <img src="[avatar base64]" alt="Alex Spelucin">
  <div class="author-bar-text">
    <span class="author-bar-name author-bar-name-light">Alex Spelucin</span>
    <span class="author-bar-role author-bar-role-light">SEO Técnico para Shopify</span>
  </div>
</div>
```

- Usar sufijo `-dark` (`author-bar-name-dark`, `author-bar-role-dark`) en slides oscuros.
- **Puesto según idioma**: `SEO Técnico para Shopify` (ES) / `Shopify Technical SEO` (EN). Es texto fijo de marca, no un placeholder — no varía por carousel.

## Monograma (watermark)

SVG del logo de Alex. Va **solo en el slide final** (CTA), en tamaño grande (`.monogram-lg`). No se repite en el cover ni en los slides de contenido — ahí la identidad la lleva la author-bar.

```html
<!-- Light slides -->
<svg class="monogram-lg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 A40 40 0 0 1 90 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M90 50 A40 40 0 0 1 50 90" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M50 90 A40 40 0 0 1 10 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M10 50 A40 40 0 0 1 50 10" stroke="#1560bd" stroke-width="3" fill="none"/>
</svg>

<!-- Dark slides: agregar class="monogram-dark" y usar stroke="#60a5fa" -->
```

## Export a PDF

### Método automatizado (recomendado)
Usar `templates/linkedin/carousel/export.js` o crear un script similar:

```javascript
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve('carousel.html'));
  await page.waitForLoadState('networkidle');
  await page.pdf({
    path: 'output.pdf',
    width: '1080px',
    height: '1350px',
    printBackground: true
  });
  await browser.close();
})();
```

### Método manual
1. Abrir HTML en Chrome/Brave
2. Ctrl+P para imprimir
3. Destino: "Guardar como PDF"
4. Tamaño: Custom -> 1080 x 1350 px (o 108mm x 135mm)
5. Márgenes: None
6. Escala: 100%
7. Gráficos de fondo: Activado

## Componentes disponibles en base.css

| Componente | Clases CSS | Uso |
|------------|-----------|-----|
| Slide base | `.slide`, `.slide-light`, `.slide-dark` | Contenedor de slide |
| Tipografía | `.eyebrow`, `.slide-title`, `.slide-subtitle`, `.body-text` | Jerarquía de texto |
| Terminal | `.terminal`, `.terminal-bar`, `.terminal-body`, `.terminal-line` | Bloques de código |
| Folder tree | `.tree-box`, `.tree-line` | Estructura de archivos |
| Timeline | `.timeline`, `.commit-node`, `.timeline-line` | Secuencias temporales |
| Split comparison | `.split`, `.split-col`, `.split-item` | A vs B |
| Recap grid | `.recap-grid`, `.recap-cell` | Resumen visual |
| Hook/cover | `.hook-content`, `.hook-title`, `.hook-subtitle` | Slide de portada |
| CTA | `.cta-content`, `.cta-title`, `.cta-actions` | Slide de cierre |
| Monograma | `.monogram-lg` | Watermark, solo slide final |
| Author-bar | `.author-bar`, `.author-bar-text`, `.author-bar-name`, `.author-bar-role` | Avatar + nombre + puesto, todos los slides |
| Slide number | `.slide-number` | Numeración |
| Icons | `.icon`, `.icon-light`, `.icon-dark` | Iconos decorativos |
| Blobs (dark) | `.blob`, `.blob-1`, `.blob-2`, `.blob-3` | Fondos dark slides |
| Flow diagram | `.flow-node`, `.flow-arrow-down` | Diagramas de proceso |
| Metrics | `.metric-big`, `.metric-card`, `.metric-label` | Datos grandes |
| Steps | `.step-number`, `.step-title`, `.step-desc` | Tutorial paso a paso |
| Tips | `.tip-card`, `.tip-title`, `.tip-desc` | Listicle tips |

## Post companion (OBLIGATORIO)

**Siempre** generar un post de LinkedIn que acompañe al carousel. El carousel sin post es contenido incompleto — en LinkedIn, el post es el hook que lleva a la gente a hacer swipe.

### Estructura del post companion

El post debe:
1. Hablar en la voz de Alex (`spelucin-voice`)
2. Resumir la idea principal del carousel en texto plano
3. Incluir un hook que enganche y haga querer ver el carousel
4. Tener CTA claro: "Desliza para ver el paso a paso" / "Guarda el carousel" / "El detalle está en las slides"
5. Seguir las reglas de formato del voice guide (parrafos cortos, code-switching, max 2 hashtags)

### Formato del post

```markdown
---
platform: linkedin
type: post
title: "[Título del carousel]"
topics: [mismos topics del carousel]
language: [mismo idioma del carousel]
status: ready
created: YYYY-MM-DD
---

[Hook provocativo - 1-2 lineas]

[Contexto breve del problema]

[Insight principal del carousel en texto]

[CTA: "Desliza para ver el detalle" / "Guarda el carousel"]

#hashtag1 #hashtag2
```

### Ruta de guardado

El post companion se guarda junto al carousel:
- `output/{lang}/linkedin/posts/{date}-{slug}-companion.md`

Donde `{slug}` es el mismo slug del carousel HTML.

### Checklist del post companion

- [ ] Hook provocativo en las primeras 2 lineas
- [ ] Resumen claro de qué trata el carousel
- [ ] CTA que invita a hacer swipe/deslizar
- [ ] Parrafos cortos (1-3 oraciones)
- [ ] Code-switching natural
- [ ] Maximo 2 hashtags
- [ ] Mismo idioma que el carousel
- [ ] Mismos topics que el carousel

## Checklist antes de entregar

- [ ] HTML standalone (sin dependencias externas excepto Google Fonts)
- [ ] Todos los slides son 1080x1350px
- [ ] Tipografía: DM Sans + JetBrains Mono cargados desde Google Fonts
- [ ] Colores: monocromático azul (#1560bd)
- [ ] Dot grid sutil en light slides
- [ ] Numeración de slides (excepto cover y CTA)
- [ ] Author-bar (avatar + "Alex Spelucin" + puesto) en todos los slides
- [ ] Monograma SOLO en el slide final, tamaño `.monogram-lg`
- [ ] Slide 1: hook + título + author-bar (sin monograma)
- [ ] Slide final: CTA + author-bar + monograma grande
- [ ] Legible en mobile (texto grande, 4:5 maximiza espacio vertical)
- [ ] Mucho espacio en blanco, no clutter
- [ ] **Post companion generado** en `output/{lang}/linkedin/posts/`
- [ ] Post tiene hook provocativo + CTA a deslizar el carousel
- [ ] Post en la voz de Alex (spelucin-voice)
