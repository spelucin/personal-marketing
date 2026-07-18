---
name: linkedin-article
description: Use when writing LinkedIn articles (long-form posts) and generating their cover image banners. Creates markdown copy for LinkedIn's editor and a standalone HTML cover image (744x400px) that exports to JPG.
---

# LinkedIn Article Skill

Genera artículos de LinkedIn (contenido largo) con su imagen de portada. Dos outputs: copy en markdown + imagen de portada HTML standalone → JPG.

## Antes de generar

1. Lee `knowledge/voice-guide.md` para la guía completa de voz
2. Lee `brand/visual-identity.md` para paleta, tipografía y texturas
3. Lee `brand/linkedin-guidelines.md` para dimensiones y reglas
4. Lee `knowledge/topics.md` para pilares de contenido

## Qué es un LinkedIn Article

Artículo nativo de LinkedIn. No es un post largo — es contenido largo con portada, publicado directamente en LinkedIn (no en LinkedIn Pulse/WordPress). Se beneficia de:
- Mayor alcance orgánico que posts normales
- SEO en buscadores de LinkedIn y Google
- Posicionamiento como thought leadership
- Contenido evergreen en el feed

## Output esperado

### 1. Cover image (HTML → JPG)
- **Dimensión**: 744 x 400 px
- **Contenido**: Título del artículo + categoría + monograma
- **Sin avatar** — solo tipografía y elementos gráficos
- **Formato**: HTML standalone → JPG

### 2. Article copy (.md)
- **Formato**: Markdown puro para pegar en el editor de LinkedIn
- **Estructura**: Título + subtítulo + cuerpo con headings, lists, bold, blockquotes
- **Longitud**: 1000-2000 palabras (ideal: 1200-1500)
- **Frontmatter**: metadata para el sistema

## Cover image (744x400)

### Especificaciones técnicas
- **Dimensión**: 744 x 400 px (1.86:1)
- **Output**: HTML standalone → JPG
- **Elementos**: Título + eyebrow (categoría) + monograma
- **NO incluir**: Avatar/foto, CTA, hashtags

### Estructura HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Título del Artículo]</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'DM Sans', sans-serif;
      width: 744px;
      height: 400px;
      overflow: hidden;
    }
    .cover {
      width: 744px;
      height: 400px;
      position: relative;
      background: #f4fdff;
      background-image: radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px);
      background-size: 24px 24px;
      padding: 48px 56px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="cover">
    <!-- Contenido -->
  </div>
</body>
</html>
```

### Composición (744x400)
```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [eyebrow: CATEGORÍA]                                              │
│                                                                    │
│  TÍTULO DEL ARTÍCULO EN                                         │
│  MÁXIMO 3 LÍNEAS                                                   │
│                                                                    │
│                                              [monograma]          │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Reglas de diseño
- **Eyebrow**: 14-16px, weight 500, uppercase, letter-spacing 0.18em, color `rgba(21, 96, 189, 0.5)`
- **Título**: 36-44px, weight 700, letter-spacing -0.02em, color `#1560bd`
- **Monograma**: 32x32px, esquina inferior derecha, opacity 0.4
- **Fondo**: `#f4fdff` + dot grid sutil
- **Gradiente diagonal suave** (opcional): `linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%)`
- **Mucho espacio en blanco** — el título domina

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

## Article copy (markdown)

### Estructura del artículo

```markdown
# [Título del artículo]

## [Subtítulo o gancho — opcional]

[Cuerpo del artículo. Parrafos cortos (2-4 oraciones). Mucho espacio entre secciones.]

## [Sección 1: Problema]

[Desarrollo del problema o pain point]

- Punto clave 1
- Punto clave 2
- Punto clave 3

## [Sección 2: Insight / Análisis]

[Análisis técnico profundo]

> Blockquote para enfatizar un insight clave o frase provocativa

## [Sección 3: Solución / Framework]

[Framework o approach recomendado]

1. **Paso 1**: Descripción
2. **Paso 2**: Descripción
3. **Paso 3**: Descripción

## [Sección 4: Ejemplo / Caso]

[Ejemplo concreto o caso de estudio]

## Conclusión

[Resumen ejecutivo + CTA]

---
```

### Reglas de escritura para artículos

#### Estructura
- **Título**: 5-10 palabras, claro y específico (no clickbait)
- **Subtítulo**: Contexto adicional (opcional)
- **3-5 secciones** con H2 (`##`)
- **Conclusión** con resumen + CTA suave
- **Longitud**: 1000-2000 palabras (ideal: 1200-1500)

#### Formato markdown para LinkedIn
- `##` para secciones principales (H2)
- `###` para subsecciones (H3)
- `**bold**` para enfasis en conceptos clave
- `- ` para listas con bullet points
- `1. ` para listas numeradas (pasos, frameworks)
- `> ` para blockquotes (insights, frases clave)
- `---` para separadores visuales
- No usar H1 (`#`) — LinkedIn lo reserva para el título del artículo

#### Voz y tono
- **Autoridad técnica con edge contrarian**: Senior engineer que ha visto demasiadas implementaciones rotas
- **Directo, sin relleno**: Cada oración aporta valor
- **Code-switching natural**: Términos técnicos en inglés sin traducir
- **Ejemplos concretos**: Siempre anclar el insight en un caso real
- **Framework mental**: Dar al lector un modelo para pensar, no solo información

#### Longitud de párrafos
- Máximo 3-4 oraciones por párrafo
- Alternar párrafos cortos (1-2 oraciones) con medianos (3-4)
- Oraciones clave como párrafo propio para énfasis
- Usar `>` (blockquote) para insights que necesitan destacar

#### Blockquotes
Usar para:
- Frases provocativas o insights clave
- Citas de la industria
- Resúmenes ejecutivos de una sección
- "La realidad técnica" — el point ciego que nadie ve

```markdown
> La mayoría de las tiendas Shopify tienen datos de analytics configurados para reportar, no para decisiones. Y esa diferencia es la que separa a las que crecen de las que stagnan.
```

#### Listas
- Bullet points (`-`) para enumerar elementos, opciones, o conceptos
- Numerados (`1. 2. 3.`) para pasos secuenciales o frameworks
- Bold al inicio de cada item para jerarquía visual
- Máximo 6-8 items por lista (si es más, dividir en subsecciones)

#### Code fences
Usar para:
- Ejemplos de código o configuración
- Queries SQL o scripts
- Fragmentos de configuración GTM/GA4

```markdown
```sql
SELECT
  session_source,
  COUNT(*) as sessions
FROM `project.dataset.sessions`
GROUP BY 1
ORDER BY 2 DESC
```
```

### Estructuras de artículo (las que realmente funcionan)

#### 1. Deep Dive Técnico
```
## Introducción: El problema que nadie ve

## Contexto: Por qué importa

## Análisis: Lo que realmente está pasando

## Framework: Cómo pensarlo mejor

## Ejemplo: Caso concreto

## Conclusión: Qué hacer ahora
```

#### 2. Contrarian Take
```
## [Declaración contrarian]

## Por qué todos lo hacen mal

## La realidad técnica

## El framework correcto

## Conclusión
```

#### 3. Paso a Paso / Tutorial
```
## Introducción: Qué vamos a lograr

## Prerequisitos

## Paso 1: [Acción]

## Paso 2: [Acción]

## Paso 3: [Acción]

## Troubleshooting

## Conclusión
```

#### 4. Caso de Estudio
```
## Introducción: El caso

## Diagnóstico

## Intervención

## Resultados

## Lecciones aprendidas

## Conclusión
```

---

## Flujo de ejecución

### Paso 1: Generar el copy
1. Definir tema, ángulo y pilar de contenido
2. Elegir estructura de artículo
3. Escribir en la voz de Alex (ver `knowledge/voice-guide.md`)
4. Guardar en `output/es/linkedin/articles/YYYY-MM-DD-[tema-slug].md`

### Paso 2: Generar la cover image
1. Leer `brand/visual-identity.md` para tokens de diseño
2. Generar HTML standalone (744x400px)
3. Aplicar: dot grid + gradiente + monograma
4. Guardar en `output/es/linkedin/covers/YYYY-MM-DD-[tema-slug].html`

### Paso 3: Exportar cover a JPG
1. Abrir HTML en Chrome/Brave
2. DevTools → Toggle device toolbar → 744x400
3. Capture node screenshot → JPG
4. Guardar en `output/es/linkedin/covers/YYYY-MM-DD-[tema-slug].jpg`

---

## Frontmatter del artículo

```yaml
---
title: "..."
---
```

---

## Checklist antes de entregar

### Cover image
- [ ] HTML standalone (sin dependencias excepto Google Fonts)
- [ ] Dimensión: 744x400px
- [ ] DM Sans cargada desde Google Fonts
- [ ] Colores monocromáticos azules (#1560bd)
- [ ] Dot grid sutil de fondo
- [ ] Título legible en mobile
- [ ] Máximo 3 líneas de título
- [ ] Monograma en esquina inferior derecha
- [ ] Mucho espacio en blanco, no clutter
- [ ] Sin avatar/foto

### Article copy
- [ ] Markdown válido (H2, H3, bold, lists, blockquotes)
- [ ] 1000-2000 palabras
- [ ] Título claro y específico (5-10 palabras)
- [ ] 3-5 secciones con H2
- [ ] Párrafos cortos (máximo 3-4 oraciones)
- [ ] Code-switching natural (términos técnicos en inglés)
- [ ] Blockquotes para insights clave
- [ ] Listas bien formateadas
- [ ] Conclusión con CTA suave
- [ ] Sin H1 (LinkedIn lo reserva para el título)
- [ ] Voz de Alex: autoridad técnica, contrarian, directo
- [ ] Ejemplos concretos en cada sección

---

## Export a JPG

### Método recomendado
1. Abrir HTML en Chrome/Brave
2. Abrir DevTools (F12)
3. Toggle device toolbar (Cmd+Shift+M o Ctrl+Shift+M)
4. Dimensiones: 744 x 400 px
5. Click derecho en el elemento → "Capture node screenshot"
6. Guardar como JPG

### Alternativa: Puppeteer
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 744, height: 400 });
  await page.goto('file:///path/to/cover.html');
  await page.screenshot({ path: 'cover.jpg', type: 'jpeg', quality: 90 });
  await browser.close();
})();
```
