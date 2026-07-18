# Asset Generator

## Como generar assets visuales

Este documento explica como generar assets visuales (carousels, banners, thumbnails, posts, stories) usando los templates y brand guidelines del sistema.

**Tokens de diseño**: Sincronizados con `../spelucin.pro/src/styles/global.css`

---

## Flujo general

```
1. Identificar tipo de asset necesario
2. Leer brand guidelines y visual identity
3. Generar HTML standalone usando template base
4. Aplicar contenido (copy, datos, imagenes)
5. Verificar checklist visual
6. Exportar a PDF o JPG
7. Guardar en output/
```

---

## Assets por plataforma

### LinkedIn

#### Carousel (PDF)
- **Dimension**: 1080 x 1080 px por slide
- **Slides**: 5-10 (ideal: 7-8)
- **Template**: `templates/linkedin/carousel/`
- **Output**: `output/linkedin/carousels/`
- **Formato**: HTML standalone -> PDF
- **Skill**: `linkedin-carousel`

#### Banner (JPG)
- **Dimension**: 1200 x 667 px (1.8:1)
- **Template**: `templates/linkedin/banner/`
- **Output**: `output/linkedin/banners/`
- **Formato**: HTML standalone -> JPG
- **Skill**: `linkedin-banner`

---

### YouTube

#### Thumbnail (JPG)
- **Dimension**: 1280 x 720 px (16:9)
- **Template**: `templates/youtube/thumbnail/`
- **Output**: `output/youtube/thumbnails/`
- **Formato**: HTML standalone -> JPG
- **Skill**: `social-asset`

---

### Instagram

#### Post cuadrado (JPG)
- **Dimension**: 1080 x 1080 px (1:1)
- **Template**: `templates/instagram/post/`
- **Output**: `output/instagram/posts/`
- **Formato**: HTML standalone -> JPG
- **Skill**: `social-asset`

#### Post vertical (JPG)
- **Dimension**: 1080 x 1350 px (4:5)
- **Template**: `templates/instagram/post/`
- **Output**: `output/instagram/posts/`
- **Formato**: HTML standalone -> JPG
- **Skill**: `social-asset`

#### Story (JPG)
- **Dimension**: 1080 x 1920 px (9:16)
- **Template**: `templates/instagram/story/`
- **Output**: `output/instagram/stories/`
- **Formato**: HTML standalone -> JPG
- **Skill**: `social-asset`

---

## Elementos de marca

### Colores
```css
/* Primarios */
--color-background: #f4fdff;
--color-foreground: #0d1f3c;
--color-primary: #1560bd;
--color-primary-foreground: #ffffff;
--color-accent: #0d4a9e;
--color-accent-foreground: #ffffff;
--color-card: #eaf6ff;
--color-card-foreground: #0d1f3c;
--color-secondary: #daeeff;
--color-secondary-foreground: #1560bd;
--color-muted: #d4edfc;
--color-muted-foreground: rgba(21, 96, 189, 0.5);
--color-border: rgba(21, 96, 189, 0.14);
--color-ring: rgba(21, 96, 189, 0.35);
--color-error: #c0392b;
--radius: 0.5rem;
```

### Tipografia
```css
/* Familia */
font-family: 'DM Sans', sans-serif;

/* Google Fonts link */
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">

/* Weights */
font-weight: 300; /* Light - metricas */
font-weight: 400; /* Regular - body */
font-weight: 500; /* Medium - eyebrows */
font-weight: 600; /* Semibold - subtitles */
font-weight: 700; /* Bold - titles */
```

### Texturas
```css
/* Dot grid sutil */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 24px 24px;

/* Gradiente suave */
background: linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%);

/* CTA panel */
background:
  radial-gradient(ellipse at top left, rgba(21, 96, 189, 0.08), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(21, 96, 189, 0.05), transparent 50%),
  radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 100% 100%, 100% 100%, 24px 24px;
```

### Monograma (watermark)
```html
<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 A40 40 0 0 1 90 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M90 50 A40 40 0 0 1 50 90" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M50 90 A40 40 0 0 1 10 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M10 50 A40 40 0 0 1 50 10" stroke="#1560bd" stroke-width="3" fill="none"/>
</svg>
```

---

## Estructura HTML base

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Titulo del Asset]</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'DM Sans', sans-serif;
      width: [WIDTH]px;
      height: [HEIGHT]px;
      overflow: hidden;
    }
    .asset {
      width: [WIDTH]px;
      height: [HEIGHT]px;
      position: relative;
      background: #f4fdff;
      background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
      background-size: 24px 24px;
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <div class="asset">
    <!-- Contenido del asset -->
  </div>
</body>
</html>
```

---

## Export metodos

### Metodo 1: Chrome/Brave (manual)

#### Para PDF (carousels)
1. Abrir HTML en Chrome/Brave
2. Cmd+P (Mac) o Ctrl+P (Windows/Linux)
3. Destino: "Guardar como PDF"
4. Tamano: Custom -> 1080 x 1080 px (o 113mm x 113mm)
5. Margenes: None
6. Escala: 100%
7. Graficos de fondo: Activado
8. Guardar

#### Para JPG (banners, thumbnails, posts, stories)
1. Abrir HTML en Chrome/Brave
2. Abrir DevTools (F12)
3. Toggle device toolbar (Cmd+Shift+M o Ctrl+Shift+M)
4. Dimensiones: segun asset (1200x667, 1280x720, 1080x1080, 1080x1920)
5. Click derecho en el asset -> "Capture node screenshot"
6. Guardar como JPG

### Metodo 2: Puppeteer (automatizado)

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Configurar viewport segun tipo de asset
  await page.setViewport({ width: 1280, height: 720 }); // Ajustar
  
  // Cargar HTML
  await page.goto('file:///path/to/asset.html', { waitUntil: 'networkidle0' });
  
  // Para PDF (carousels)
  await page.pdf({
    path: 'output.pdf',
    width: '1080px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  // Para JPG (otros assets)
  await page.screenshot({
    path: 'output.jpg',
    type: 'jpeg',
    quality: 90,
    fullPage: false
  });
  
  await browser.close();
})();
```

---

## Checklist visual

### General (todos los assets)
- [ ] HTML standalone (sin dependencias excepto Google Fonts)
- [ ] Dimension correcta segun tipo de asset
- [ ] DM Sans cargada desde Google Fonts
- [ ] Colores monocromaticos azules (#1560bd)
- [ ] Dot grid sutil de fondo
- [ ] Mucho espacio en blanco, no clutter
- [ ] Contraste suficiente para legibilidad

### Carousel especifico
- [ ] Todos los slides son 1080x1080px
- [ ] Slide 1: hook + titulo + nombre
- [ ] Slides 2-N: una idea por slide
- [ ] Slide final: CTA + bio + redes
- [ ] Numeracion de slides (excepto primero y ultimo)
- [ ] Monograma en cada slide (excepto primero)

### Banner especifico
- [ ] Dimension: 1200x667px (o 1200x1200, 1200x1500)
- [ ] Headline legible en mobile
- [ ] Maximo 2-3 lineas de texto
- [ ] Monograma en esquina

### Thumbnail especifico
- [ ] Dimension: 1280x720px
- [ ] Titulo grande: 64-80px
- [ ] Maximo 4-5 palabras
- [ ] Contraste alto
- [ ] Foto de Alex opcional

### Post IG especifico
- [ ] Dimension: 1080x1080px o 1080x1350px
- [ ] Texto legible en mobile
- [ ] @spelucin en esquina
- [ ] Monograma en esquina

### Story IG especifico
- [ ] Dimension: 1080x1920px
- [ ] Zona segura: 250px arriba y abajo
- [ ] Texto grande y legible
- [ ] @spelucin visible

---

## Agentes y skills

### Para generar assets
- **Agent**: `asset-designer`
- **Skills**:
  - `linkedin-carousel` (carousels)
  - `linkedin-banner` (banners)
  - `social-asset` (thumbnails, posts, stories)

### Para generar copy
- **Agent**: `content-writer`
- **Skill**: `spelucin-voice`

### Para adaptar entre plataformas
- **Skill**: `content-repurpose`

---

## Referencias

- `brand/visual-identity.md` - Paleta, tipografia, texturas
- `brand/linkedin-guidelines.md` - Dimensiones y reglas LinkedIn
- `brand/youtube-guidelines.md` - Dimensiones y reglas YouTube
- `brand/instagram-guidelines.md` - Dimensiones y reglas Instagram
- `templates/` - Templates HTML base por tipo de asset
