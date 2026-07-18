---
name: social-asset
description: Use when generating social media assets for Bluesky (posts). Creates standalone HTML files that can be exported to JPG. Applies brand guidelines and visual identity.
---

# Social Asset Skill

Genera assets visuales para Bluesky como HTML standalone que se exportan a JPG.

## Antes de generar

1. Lee `brand/visual-identity.md` para paleta, tipografia y texturas
2. Lee `brand/bluesky-guidelines.md` si es post de Bluesky
3. Lee `knowledge/voice-guide.md` si necesitas generar el copy del asset

---

## Bluesky Posts

### Dimensiones
- **Post landscape**: 1200 x 675 px (16:9)
- **Post cuadrado**: 1080 x 1080 px (1:1)
- **Output**: HTML standalone -> JPG

### Estructura HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Titulo del Post]</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 675px; /* o 1080px para cuadrado */
      font-family: 'DM Sans', sans-serif;
      overflow: hidden;
    }
    .post {
      width: 1200px;
      height: 675px;
      position: relative;
      /* Estilos del post */
    }
  </style>
</head>
<body>
  <div class="post">
    <!-- Contenido del post -->
  </div>
</body>
</html>
```

### Tipos de post

#### 1. Quote
- Frase provocativa sobre fondo azul
- Tipografia grande como protagonista
- Dot grid sutil

#### 2. Metrica
- Numero grande con contexto
- Fondo monocromatico
- Ejemplo: "47 tiendas auditadas"

#### 3. Tip
- Consejo rapido visual
- Icono o numero
- Texto claro

#### 4. Announcement
- Lanzamiento o noticia
- Headline directo
- CTA visual

### Reglas de diseno
- **Texto grande**: Legible en mobile sin zoom
- **Un elemento dominante**: No distraer
- **Dot grid sutil**: Textura de marca
- **Monograma**: Watermark en esquina

### Tipografia
- **Titulo**: 48-56px, weight 700
- **Subtitulo**: 28-32px, weight 500
- **Body**: 22-26px, weight 400

### Composicion (1200x675)
```
┌──────────────────────────────────────────────────┐
│                                                  │
│  [eyebrow: categoria]                            │
│                                                  │
│  TITULO                                          │
│  GRANDE                                          │
│                                                  │
│  ┌─────────────────────────┐                    │
│  │  contenido visual       │                    │
│  └─────────────────────────┘                    │
│                                                  │
│                              [monograma]         │
└──────────────────────────────────────────────────┘
```

---

## Reglas generales de diseno

### Colores
- **Fondo**: `#f4fdff` o `#eaf6ff` o gradiente
- **Texto principal**: `#1560bd`
- **Acentos**: `#0d4a9e`
- **Dot grid**: `rgba(21, 96, 189, 0.035)` a 1px, 24px spacing

### Tipografia
- **Familia**: DM Sans (Google Fonts)
- Cargar desde: `https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap`

### Texturas
```css
/* Dot grid de fondo */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 24px 24px;

/* Gradiente suave */
background: linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%);
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

## Export a JPG

### Metodo recomendado
1. Abrir HTML en Chrome/Brave
2. Abrir DevTools (F12)
3. Toggle device toolbar (Cmd+Shift+M o Ctrl+Shift+M)
4. Dimensiones: segun el asset (1200x675 o 1080x1080)
5. Screenshot -> Capture full size o Capture node
6. Guardar como JPG

### Alternativa: Puppeteer
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 675 }); // Ajustar segun asset
  await page.goto('file:///path/to/asset.html');
  await page.screenshot({ path: 'asset.jpg', type: 'jpeg', quality: 90 });
  await browser.close();
})();
```

---

## Checklist antes de entregar

- [ ] HTML standalone (sin dependencias externas excepto Google Fonts)
- [ ] Dimension correcta segun plataforma y tipo de asset
- [ ] Tipografia: DM Sans cargada desde Google Fonts
- [ ] Colores: monocromatico azul (#1560bd)
- [ ] Dot grid sutil de fondo (cuando aplique)
- [ ] Texto grande y legible en mobile
- [ ] Monograma en esquina (cuando aplique)
- [ ] Mucho espacio en blanco, no clutter
- [ ] Contraste suficiente para legibilidad
