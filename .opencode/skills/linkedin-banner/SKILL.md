---
name: linkedin-banner
description: Use when generating LinkedIn banner assets (post images). Creates standalone HTML files that can be exported to JPG. Applies brand guidelines and visual identity.
---

# LinkedIn Banner Skill

Genera banners de LinkedIn como HTML standalone que se exportan a JPG.

## Antes de generar

1. Lee `brand/visual-identity.md` para paleta, tipografia y texturas
2. Lee `brand/linkedin-guidelines.md` para dimensiones y reglas de banners
3. Lee `knowledge/voice-guide.md` si necesitas generar el copy del banner

## Especificaciones tecnicas

### Dimensiones
- **Banner de post**: 1200 x 667 px (1.8:1)
- **Imagen cuadrada**: 1200 x 1200 px (1:1)
- **Imagen vertical**: 1200 x 1500 px (4:5)
- **Output**: HTML standalone -> JPG

### Estructura HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Titulo del Banner]</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 667px;
      font-family: 'DM Sans', sans-serif;
      overflow: hidden;
    }
    .banner {
      width: 1200px;
      height: 667px;
      position: relative;
      /* Estilos del banner */
    }
  </style>
</head>
<body>
  <div class="banner">
    <!-- Contenido del banner -->
  </div>
</body>
</html>
```

## Tipos de banner

### 1. Announcement
- Lanzamiento de servicio, nuevo ofrecimiento
- Headline claro y directo
- CTA visual (boton o link)
- Ejemplo: "Auditorias SEO tecnico para tiendas Shopify"

### 2. Quote
- Frase provocativa o insight
- Tipografia grande como protagonista
- Fondo monocromatico con dot grid
- Ejemplo: "La IA es inteligente, pero no es adivina."

### 3. Data/Metrica
- Numero grande y metrica
- Contexto breve
- Visualizacion simple si aplica
- Ejemplo: "47 tiendas auditadas. 280% crecimiento medio."

### 4. Tutorial
- Paso a paso visual
- Iconos o numeros para cada paso
- Titulo explicativo
- Ejemplo: "3 pasos para arreglar tu GA4"

### 5. Comparison
- Antes/despues, A vs B
- Split screen o lado a lado
- Etiquetas claras
- Ejemplo: "Tu tracking hoy vs. como deberia ser"

## Reglas de diseno

### Colores
- **Fondo**: `#f4fdff` o gradiente `linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%)`
- **Texto principal**: `#1560bd`
- **Acentos**: `#0d4a9e`
- **Dot grid**: `rgba(21, 96, 189, 0.035)` a 1px, 24px spacing

### Tipografia
- **Familia**: DM Sans (Google Fonts)
- **Headline**: 48-56px, weight 700, letter-spacing -0.02em
- **Subheadline**: 28-32px, weight 400
- **CTA**: 20-24px, weight 600
- **Eyebrow**: 14-16px, weight 500, uppercase, letter-spacing 0.18em

### Texturas
```css
/* Dot grid de fondo */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 24px 24px;

/* Gradiente suave */
background: linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%);

/* CTA panel (para secciones destacadas) */
background:
  radial-gradient(ellipse at top left, rgba(21, 96, 189, 0.08), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(21, 96, 189, 0.05), transparent 50%),
  radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 100% 100%, 100% 100%, 24px 24px;
```

### Composicion de banner (1200x667)
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [eyebrow]                                              │
│                                                         │
│  TITULO PRINCIPAL EN                                    │
│  MAXIMO 2-3 LINEAS                                      │
│                                                         │
│  Subtitulo o CTA                                        │
│                                                         │
│                                          [monograma]    │
└─────────────────────────────────────────────────────────┘
```

## Monograma (watermark)

SVG del logo de Alex. Usar en esquina inferior derecha.

```html
<svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 A40 40 0 0 1 90 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M90 50 A40 40 0 0 1 50 90" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M50 90 A40 40 0 0 1 10 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M10 50 A40 40 0 0 1 50 10" stroke="#1560bd" stroke-width="3" fill="none"/>
</svg>
```

## Export a JPG

### Metodo recomendado
1. Abrir HTML en Chrome/Brave
2. Abrir DevTools (F12)
3. Toggle device toolbar (Cmd+Shift+M o Ctrl+Shift+M)
4. Dimensiones: 1200 x 667 px (o la dimension del banner)
5. Screenshot -> Capture full size o Capture node
6. Guardar como JPG

### Alternativa: Puppeteer
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 667 });
  await page.goto('file:///path/to/banner.html');
  await page.screenshot({ path: 'banner.jpg', type: 'jpeg', quality: 90 });
  await browser.close();
})();
```

## Checklist antes de entregar

- [ ] HTML standalone (sin dependencias externas excepto Google Fonts)
- [ ] Dimension correcta: 1200x667px (o 1200x1200px, 1200x1500px)
- [ ] Tipografia: DM Sans cargada desde Google Fonts
- [ ] Colores: monocromatico azul (#1560bd)
- [ ] Dot grid sutil de fondo
- [ ] Headline legible en mobile (texto grande)
- [ ] Maximo 2-3 lineas de texto
- [ ] Monograma en esquina
- [ ] Mucho espacio en blanco, no clutter
- [ ] Contraste suficiente para legibilidad
