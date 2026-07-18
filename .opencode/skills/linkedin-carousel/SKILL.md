---
name: linkedin-carousel
description: Use when generating LinkedIn carousel assets. Creates standalone HTML files that can be exported to PDF. Applies brand guidelines, visual identity, and carousel best practices.
---

# LinkedIn Carousel Skill

Genera carousels de LinkedIn como HTML standalone que se exportan a PDF.

## Antes de generar

1. Lee `brand/visual-identity.md` para paleta, tipografia y texturas
2. Lee `brand/linkedin-guidelines.md` para dimensiones y reglas de carousel
3. Lee `knowledge/voice-guide.md` si necesitas generar el copy del carousel

## Especificaciones tecnicas

### Dimensiones
- **Slide**: 1080 x 1080 px (1:1)
- **Slides por carousel**: 5-10 (ideal: 7-8)
- **Output**: HTML standalone -> PDF

### Estructura HTML
Cada slide es un `<div>` con dimensiones fijas de 1080x1080px. El HTML completo contiene todos los slides en secuencia vertical, listos para capturar como PDF multi-pagina.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Titulo del Carousel]</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <style>
    /* Estilos del carousel */
  </style>
</head>
<body>
  <div class="slide" id="slide-1">
    <!-- Slide 1: Hook + titulo -->
  </div>
  <div class="slide" id="slide-2">
    <!-- Slide 2: Contenido -->
  </div>
  <!-- Mas slides... -->
  <div class="slide" id="slide-final">
    <!-- Slide final: CTA + bio -->
  </div>
</body>
</html>
```

## Reglas de diseno

### Colores
- **Fondo**: `#f4fdff` o `#eaf6ff`
- **Texto principal**: `#1560bd`
- **Acentos**: `#0d4a9e`
- **Dot grid**: `rgba(21, 96, 189, 0.035)` a 1px, 24px spacing

### Tipografia
- **Familia**: DM Sans (Google Fonts)
- **Slide title**: 56-64px, weight 700, letter-spacing -0.02em
- **Slide subtitle**: 32-36px, weight 500, letter-spacing -0.01em
- **Body text**: 24-28px, weight 400
- **Caption/label**: 16-18px, weight 500, uppercase, letter-spacing 0.18em
- **Metric number**: 72-96px, weight 300

### Texturas
```css
/* Dot grid de fondo */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 24px 24px;

/* Gradiente suave */
background: linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%);
```

### Composicion de slide
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
│  02/08              [monograma] │
└─────────────────────────────────┘
```

## Estructura del carousel

### Slide 1: Hook
- Eyebrow con categoria (ej: "SEO TECNICO")
- Titulo grande y provocativo
- Subtitulo con promesa o contexto
- Nombre de Alex + monograma

### Slides 2-N: Contenido
- Una idea por slide
- Titulo claro
- Contenido visual: diagrama, lista, metrica, codigo, comparacion
- Numero de slide (ej: "02/08")
- Monograma en esquina

### Slide final: CTA
- Resumen o takeaway principal
- CTA claro: "Sigueme para mas", "Comenta X", "Link en bio"
- Bio corta de Alex
- Redes sociales
- Monograma mas grande

## Monograma (watermark)

SVG del logo de Alex. Usar en esquina inferior derecha de cada slide (excepto el primero).

```html
<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Monograma de 4 cuadrantes con arcos circulares -->
  <path d="M50 10 A40 40 0 0 1 90 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M90 50 A40 40 0 0 1 50 90" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M50 90 A40 40 0 0 1 10 50" stroke="#1560bd" stroke-width="3" fill="none"/>
  <path d="M10 50 A40 40 0 0 1 50 10" stroke="#1560bd" stroke-width="3" fill="none"/>
</svg>
```

## Export a PDF

### Metodo recomendado
1. Abrir HTML en Chrome/Brave
2. Cmd+P (o Ctrl+P) para imprimir
3. Destino: "Guardar como PDF"
4. Tamano: Custom -> 1080 x 1080 px (o 113mm x 113mm)
5. Margenes: None
6. Escala: 100%
7. Graficos de fondo: Activado
8. Guardar

### Alternativa: Puppeteer
Si necesitas automatizar, usar Puppeteer con `page.pdf()` configurado para 1080x1080px.

## Checklist antes de entregar

- [ ] HTML standalone (sin dependencias externas excepto Google Fonts)
- [ ] Todos los slides son 1080x1080px
- [ ] Tipografia: DM Sans cargada desde Google Fonts
- [ ] Colores: monocromatico azul (#1560bd)
- [ ] Dot grid sutil de fondo
- [ ] Numeracion de slides (excepto primero y ultimo)
- [ ] Monograma en cada slide (excepto primero)
- [ ] Slide 1: hook + titulo + nombre
- [ ] Slide final: CTA + bio + redes
- [ ] Legible en mobile (texto grande)
- [ ] Mucho espacio en blanco, no clutter
