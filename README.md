# Spelucin.mkt - Sistema de Marketing Personal

Sistema de marketing personal de **Alex Spelucin**, consultor independiente de SEO tecnico para ecommerce Shopify.

## Estructura

```
spelucin.mkt/
├── opencode.json                 # Config de opencode
├── AGENTS.md                     # Instrucciones globales
│
├── .opencode/
│   ├── skills/                   # Skills personalizados
│   │   ├── spelucin-voice/       # Escribir en la voz de Alex
│   │   ├── linkedin-carousel/    # Generar carousels HTML -> PDF
│   │   ├── linkedin-banner/      # Generar banners HTML -> JPG
│   │   ├── social-asset/         # Assets genericos (YT, IG)
│   │   └── content-repurpose/    # Adaptar contenido entre plataformas
│   │
│   └── agents/                   # Agents personalizados
│       ├── content-writer.md     # Escribe copy en la voz de Alex
│       ├── asset-designer.md     # Genera assets visuales HTML
│       └── content-strategist.md # Planifica calendario y estrategia
│
├── knowledge/                    # Base de conocimiento
│   ├── profile.md                # Quien es Alex, objetivos, cifras
│   ├── voice-guide.md            # Estilo de escritura, tono, estructura
│   ├── topics.md                 # Pilares de contenido
│   ├── audience.md               # Buyer personas, pains, lenguaje
│   └── products.md               # Servicios y productos
│
├── brand/                        # Brand guidelines
│   ├── visual-identity.md        # Paleta, tipografia, texturas, logo
│   ├── linkedin-guidelines.md    # Dimensiones, reglas LinkedIn
│   ├── youtube-guidelines.md     # Dimensiones, reglas YouTube
│   └── instagram-guidelines.md   # Dimensiones, reglas Instagram
│
├── templates/                    # Templates HTML base
│   ├── linkedin/
│   │   ├── carousel/             # Templates de carousels
│   │   ├── banner/               # Templates de banners
│   │   └── post-structures.md    # Estructuras de copy probadas
│   ├── youtube/
│   │   └── thumbnail/            # Templates de thumbnails
│   └── instagram/
│       ├── post/                 # Templates de posts
│       └── story/                # Templates de stories
│
├── system/                       # Sistema de generacion
│   ├── content-pipeline.md       # Flujo de trabajo completo
│   ├── content-calendar.md       # Calendario editorial
│   ├── asset-generator.md        # Como generar assets
│   └── prompts/                  # Prompts reutilizables
│       └── linkedin-post.md      # Prompts para generar contenido
│
└── output/                       # Assets generados
    ├── linkedin/
    │   ├── carousels/            # PDFs
    │   ├── banners/              # JPGs
    │   └── posts/                # .md con frontmatter (copy)
    ├── youtube/
    │   └── thumbnails/           # JPGs
    └── instagram/
        ├── posts/                # JPGs
        └── stories/              # JPGs
```

## Uso rapido

### 1. Generar un post de LinkedIn

```bash
# Usar el agent content-writer
# El agent usara automaticamente el skill spelucin-voice

# O directamente con el skill:
# Escribir un post sobre [TEMA] en la voz de Alex Spelucin
```

### 2. Generar un carousel

```bash
# 1. Escribir el script del carousel
# 2. Generar HTML con asset-designer + linkedin-carousel skill
# 3. Exportar HTML a PDF (Chrome print o Puppeteer)
```

### 3. Generar un banner

```bash
# 1. Escribir el copy del banner
# 2. Generar HTML con asset-designer + linkedin-banner skill
# 3. Exportar HTML a JPG (screenshot o Puppeteer)
```

### 4. Adaptar contenido entre plataformas

```bash
# Usar el skill content-repurpose
# Ejemplo: Adaptar un post de LinkedIn a Instagram
```

## Agents

### content-writer
Escribe posts, scripts de carousel, copies para banners en la voz de Alex.

**Uso**: Pedirle que escriba contenido para una plataforma especifica.

### asset-designer
Genera assets visuales como HTML standalone (carousels, banners, thumbnails, posts, stories).

**Uso**: Pedirle que genere un asset visual para una plataforma especifica.

### content-strategist
Planifica calendario editorial, sugiere temas, organiza la pipeline.

**Uso**: Pedirle que planifique la semana o sugiera ideas de contenido.

## Skills

### spelucin-voice
Se activa automaticamente al escribir copy. Aplica la voz, tono y estilo de Alex.

### linkedin-carousel
Genera carousels de LinkedIn como HTML standalone (1080x1080px por slide) para exportar a PDF.

### linkedin-banner
Genera banners de LinkedIn como HTML standalone (1200x667px) para exportar a JPG.

### social-asset
Genera assets para YouTube (thumbnails 1280x720px) e Instagram (posts 1080x1080px, stories 1080x1920px) como HTML standalone para exportar a JPG.

### content-repurpose
Adapta contenido entre plataformas manteniendo la voz pero ajustando formato y longitud.

## Convenciones

### Frontmatter de posts (.md)
```yaml
---
platform: linkedin | youtube | instagram
type: carousel | banner | post | thumbnail | story
title: "..."
topics: [seo-tecnico, arquitectura, analitica, ai-search]
language: es | en
status: draft | ready | scheduled | published | analyzed
created: YYYY-MM-DD
template: nombre-del-template
---
```

### Naming de archivos
```
output/[plataforma]/posts/YYYY-MM-DD-[tema-slug].md
output/[plataforma]/[tipo]/YYYY-MM-DD-[tema-slug].html
output/[plataforma]/[tipo]/YYYY-MM-DD-[tema-slug].pdf  # o .jpg
```

## Brand

### Paleta
- **Primary**: `#1560bd` (azul monocromatico)
- **Accent**: `#0d4a9e`
- **Background**: `#f4fdff`
- **Card**: `#eaf6ff`

### Tipografia
- **Familia**: DM Sans (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Texturas
- Dot grid sutil: `radial-gradient(circle, rgba(21, 96, 189, 0.035) 1px, transparent 1px)`
- Gradiente diagonal: `linear-gradient(135deg, #f4fdff 0%, #eaf6ff 100%)`

## Referencias

- **Sitio web**: `../spelucin.pro` (configurado como reference en opencode.json)
- **LinkedIn**: linkedin.com/in/spelucin
- **Knowledge base**: `knowledge/` (perfil, voz, topics, audiencia, productos)
- **Brand guidelines**: `brand/` (identidad visual, guidelines por plataforma)

## Proximos pasos

1. **Completar knowledge base**: Agregar info adicional de Alex (historia, valores, diferenciadores)
2. **Definir productos**: Completar `knowledge/products.md` con productos a vender
3. **Crear templates HTML**: Generar templates base en `templates/`
4. **Probar flujo completo**: Generar un post + carousel + banner de prueba
5. **Abrir canales**: Configurar YouTube e Instagram cuando este listo

## Notas

- Este sistema esta disenado para usarse con **opencode** (CLI de IA)
- Los skills y agents se cargan automaticamente desde `.opencode/`
- La referencia a `../spelucin.pro` permite acceder al sitio web como contexto
- Todos los assets visuales son HTML standalone para maxima portabilidad
- El flujo de trabajo esta documentado en `system/content-pipeline.md`
