# Identidad Visual

Derivada directamente de spelucin.pro (`../spelucin.pro/src/styles/global.css`). Esta es la base para todos los assets de redes sociales.

## Paleta de colores

### Primarios
| Token | CSS Custom Property | Hex | Uso |
|-------|---------------------|-----|-----|
| Background | `--color-background` | `#f4fdff` | Fondos claros (blanco con tinte cyan muy sutil) |
| Foreground | `--color-foreground` | `#0d1f3c` | Texto principal, headings, elementos oscuros |
| Primary Blue | `--color-primary` | `#1560bd` | Color principal, acentos, botones, links |
| Primary Foreground | `--color-primary-foreground` | `#ffffff` | Texto sobre primary |
| Accent Blue | `--color-accent` | `#0d4a9e` | Hover states, enfasis, elementos secundarios |
| Accent Foreground | `--color-accent-foreground` | `#ffffff` | Texto sobre accent |
| Card | `--color-card` | `#eaf6ff` | Fondos de cards y secciones |
| Card Foreground | `--color-card-foreground` | `#0d1f3c` | Texto sobre card |

### Secundarios
| Token | CSS Custom Property | Hex | Uso |
|-------|---------------------|-----|-----|
| Secondary | `--color-secondary` | `#daeeff` | Elementos secundarios |
| Secondary Foreground | `--color-secondary-foreground` | `#1560bd` | Texto sobre secondary |
| Muted | `--color-muted` | `#d4edfc` | Fondos muted |
| Muted Text | `--color-muted-foreground` | `rgba(21, 96, 189, 0.5)` | Texto atenuado |
| Border | `--color-border` | `rgba(21, 96, 189, 0.14)` | Bordes sutiles |
| Ring | `--color-ring` | `rgba(21, 96, 189, 0.35)` | Focus rings |

### Destructivo
| Token | CSS Custom Property | Hex |
|-------|---------------------|-----|
| Error | `--color-error` | `#c0392b` |

### Chart palette (para data viz)
| Color | Hex |
|-------|-----|
| Chart 1 | `#1560bd` |
| Chart 2 | `#0d4a9e` |
| Chart 3 | `#3b82f6` |
| Chart 4 | `#60a5fa` |
| Chart 5 | `#93c5fd` |

### Opacidad RGBA - Primary (`#1560bd`)
| Opacidad | Valor | Uso |
|----------|-------|-----|
| 3% | `rgba(21, 96, 189, 0.03)` | Fondos ultra sutiles |
| 4% | `rgba(21, 96, 189, 0.04)` | Icon backgrounds, chart grid |
| 5% | `rgba(21, 96, 189, 0.05)` | Card shadows, button hover |
| 6% | `rgba(21, 96, 189, 0.06)` | Separadores SVG |
| 8% | `rgba(21, 96, 189, 0.08)` | Badge backgrounds, section borders |
| 10% | `rgba(21, 96, 189, 0.10)` | Rules, card borders |
| 14% | `rgba(21, 96, 189, 0.14)` | Borders (=`--color-border`) |
| 20% | `rgba(21, 96, 189, 0.20)` | Scrollbar thumb |
| 28% | `rgba(21, 96, 189, 0.28)` | Button box-shadow |
| 30% | `rgba(21, 96, 189, 0.30)` | Scrollbar thumb hover |
| 35% | `rgba(21, 96, 189, 0.35)` | Ring, eyebrow text (=`--color-ring`) |
| 50% | `rgba(21, 96, 189, 0.50)` | Muted foreground (=`--color-muted-foreground`) |

### Opacidad RGBA - Foreground (`#0d1f3c`)
| Opacidad | Valor | Uso |
|----------|-------|-----|
| 40% | `rgba(13, 31, 60, 0.40)` | Muted text, labels |
| 50% | `rgba(13, 31, 60, 0.50)` | Body text |
| 55% | `rgba(13, 31, 60, 0.55)` | Body text (hero) |
| 65% | `rgba(13, 31, 60, 0.65)` | Card text |
| 70% | `rgba(13, 31, 60, 0.70)` | Testimonial quotes |

### Principio
**Monocromatico azul.** Todo se deriva de `#1560bd` con variaciones de opacidad y luminosidad. No usar colores calidos excepto para errores/destructivo.

---

## Tipografia

### Familia principal
**DM Sans** (Google Fonts) - variable optical size

```
https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap
```

### Familia secundaria (monoespaciada)
**JetBrains Mono** (Google Fonts) - para números, métricas, KPIs y código

### Weights DM Sans
| Weight | Uso |
|--------|-----|
| 300 (Light) | Metricas grandes, texto decorativo |
| 400 (Regular) | Cuerpo de texto |
| 500 (Medium) | Eyebrow text, subtitulos |
| 600 (Semibold) | Section headings |
| 700 (Bold) | Display headings, titulos principales |

### Weights JetBrains Mono
| Weight | Uso |
|--------|-----|
| 300 (Light) | Números grandes, métricas, KPIs |
| 400 (Regular) | Código inline, valores numéricos |
| 500 (Medium) | Labels técnicos, unidades |

### Escala tipografica para assets sociales

#### LinkedIn Carousel (1080x1080 por slide)
| Elemento | Font | Size | Weight | Tracking |
|----------|------|------|--------|----------|
| Slide title | DM Sans | 56-64px | 700 | -0.02em |
| Slide subtitle | DM Sans | 32-36px | 500 | -0.01em |
| Body text | DM Sans | 24-28px | 400 | normal |
| Caption/label | DM Sans | 16-18px | 500 | 0.18em (uppercase) |
| Metric number | JetBrains Mono | 72-96px | 300 | -0.02em |

#### LinkedIn Banner (1200x667)
| Elemento | Font | Size | Weight |
|----------|------|------|--------|
| Headline | DM Sans | 48-56px | 700 |
| Subheadline | DM Sans | 28-32px | 400 |
| CTA | DM Sans | 20-24px | 600 |

#### YouTube Thumbnail (1280x720)
| Elemento | Font | Size | Weight |
|----------|------|------|--------|
| Title principal | DM Sans | 64-80px | 700 |
| Title secundario | DM Sans | 36-48px | 600 |
| Label/tag | DM Sans | 20-24px | 500 |

#### Instagram Post (1080x1080)
| Elemento | Font | Size | Weight |
|----------|------|------|--------|
| Titulo | DM Sans | 48-56px | 700 |
| Subtitulo | DM Sans | 28-32px | 500 |
| Body | DM Sans | 22-26px | 400 |

#### Instagram Story (1080x1920)
| Elemento | Font | Size | Weight |
|----------|------|------|--------|
| Titulo | DM Sans | 56-72px | 700 |
| Body | DM Sans | 28-36px | 400 |
| CTA | DM Sans | 24-28px | 600 |

### Uso de JetBrains Mono

**Cuando usar JetBrains Mono:**
- Números grandes, métricas, KPIs (ej. "47+", "280%", "$12M")
- Código inline y bloques de código
- Valores técnicos (ej. "LCP: 1.8s", "CLS: 0.05")
- Labels técnicos y unidades
- Datos tabulares y cifras en tablas

**Cuando NO usar JetBrains Mono:**
- Texto corrido (usar DM Sans)
- Headlines y títulos (usar DM Sans)
- CTAs (usar DM Sans)

**Ejemplo de combinación:**
```
Headline (DM Sans 700): "Diagnóstico técnico profundo"
Metric (JetBrains Mono 300): "47+ tiendas auditadas"
Body (DM Sans 400): "Análisis completo de indexación, rendimiento y schema."
```

---

## Texturas y patrones

### Dot grid
El elemento visual mas distintivo. Patron de puntos sutiles sobre fondos.

```css
/* Dot grid para fondos */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 24px 24px;

/* Dot grid para hero (mas denso) */
background-image: radial-gradient(circle, rgba(21, 96, 189, 0.18) 1px, transparent 1px);
background-size: 22px 22px;
```

### Gradientes diagonales
```css
/* Gradiente suave para secciones */
background: linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%);

/* Gradiente para CTAs */
background: linear-gradient(135deg, #eaf6ff 0%, #daeeff 100%);
```

### CTA Panel (textura compuesta)
```css
background:
  radial-gradient(ellipse at top left, rgba(21, 96, 189, 0.08), transparent 50%),
  radial-gradient(ellipse at bottom right, rgba(21, 96, 189, 0.05), transparent 50%),
  radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
background-size: 100% 100%, 100% 100%, 24px 24px;
```

---

## Logo

### Logo oficial
`brand/logo.svg` - SVG con cuatro cuadrantes de arcos circulares en patron de pinwheel/compas. Color: `#1560bd`.

### Uso en assets sociales
- **Avatar LinkedIn/IG**: Foto de Alex (alex-spelucin-avatar.jpg)
- **Watermark en banners/carousels**: `brand/logo.svg` en esquina, opacity 0.4-0.6
- **Fijo en todo contenido visual**: Siempre incluir el logo en assets exportados
- **No usar**: Logo como wordmark, no existe. Solo el simbolo geometrico.

---

## Iconografia

Iconos SVG inline custom (no libreria). Estilo:
- Stroke: `currentColor`, 1.8px
- Caps y joins: rounded
- Estilo: line icons minimalistas y limpios

### Iconos disponibles
arrows, bar-chart, check, chevrons, clock, github, layers, linkedin, mail, menu, search, rss, trending-up, close (x)

### Para assets sociales
Usar iconos simples y reconocibles. Si necesitas iconos que no estan en el set, mantener el mismo estilo: line, 1.8px stroke, rounded.

---

## Fotografia

### Avatar
- `alex-spelucin-avatar.jpg` - Avatar circular para perfiles
- `alex-spelucin-tall-2.jpg` - Retrato vertical (3:4), para homepage y about

### Estilo fotografico
- Profesional, no corporativo
- Luz natural preferiblemente
- Fondo limpio o con textura sutil
- Ropa casual-profesional

### Para assets sociales
- Usar foto de Alex solo en: perfiles, carousels de presentacion, posts personales
- No sobrecargar con fotos. El diseno monocromatico es la identidad visual principal.

---

## Espaciado y layout

### Border radius
```css
--radius: 0.5rem;
/* Variantes: sm: -4px, md: -2px, lg: base, xl: +4px */
/* Pill buttons: 9999px */
```

### Sombras
Sutiles, siempre derivadas del primary blue:
```css
/* Card shadow */
box-shadow: 0 1px 3px rgba(21, 96, 189, 0.08);

/* Elevated shadow */
box-shadow: 0 4px 12px rgba(21, 96, 189, 0.12);

/* Button primary */
box-shadow: 0 4px 16px rgba(21, 96, 189, 0.28);

/* Button primary hover */
box-shadow: 0 6px 22px rgba(21, 96, 189, 0.36);

/* Metric card */
box-shadow: 0 2px 8px rgba(21, 96, 189, 0.05);

/* Contact card */
box-shadow: 0 1px 6px rgba(21, 96, 189, 0.05);

/* Nav pill */
box-shadow: 0 4px 24px rgba(21, 96, 189, 0.08);

/* Dropdown */
box-shadow: 0 12px 40px rgba(21, 96, 189, 0.14);

/* Mobile menu */
box-shadow: 0 8px 32px rgba(21, 96, 189, 0.10);

/* Dashboard card */
box-shadow: 0 12px 40px rgba(21, 96, 189, 0.10);
```

### Padding generoso
Los assets deben respirar. No llenar cada pixel.

---

## Animaciones y transiciones

### Curvas de easing
```css
/* Standard (botones, hover, FAQ) */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Reveal (fade-up entrance) */
animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;

/* Stagger children */
animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;

/* Nav hide/show, FAQ accordion */
transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframes
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-stagger > * { opacity: 1 !important; animation: none !important; }
  html { scroll-behavior: auto; }
}
```

---

## Scrollbar

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(21, 96, 189, 0.2); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(21, 96, 189, 0.4); }
```

---

## Principios de diseno

1. **Menos es mas**: Pocas cosas en cada asset, mucho espacio en blanco
2. **Jerarquia clara**: Un elemento domina, los demas apoyan
3. **Consistencia monocromatica**: Todo en azules, sin colores calidos
4. **Textura sutil**: Dot grids y gradientes suaves, nunca pesados
5. **Tipografia como protagonista**: DM Sans hace todo el trabajo visual
6. **Datos visuales**: Numeros grandes, metricas, graficos simples
7. **Profesional, no corporativo**: Limpio y directo, no frio ni distante
