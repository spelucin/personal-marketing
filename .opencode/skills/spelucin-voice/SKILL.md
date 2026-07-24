---
name: spelucin-voice
description: Use when writing any copy, post, caption, script, or text content for Alex Spelucin's social media. Applies his voice, tone, structure, and writing conventions. Loads automatically for content creation tasks.
---

# Spelucin Voice Skill

Escribe en la voz de Alex Spelucin. Esta skill se activa automaticamente al generar cualquier contenido textual para redes sociales.

## Antes de escribir

1. Lee `knowledge/voice-guide.md` para la guia completa de voz
2. Lee `knowledge/topics.md` para entender los pilares de contenido
3. Lee `knowledge/audience.md` para conocer a quien le hablas

## Principios de voz

### Tono
- **Autoridad tecnica con edge contrarian**: Senior engineer que ha visto demasiadas implementaciones rotas
- **Directo, sin relleno**: Cada palabra aporta valor
- **Provocativo pero educativo**: La provocacion siempre lleva a un insight real
- **Tecnico pero accesible**: Jerga de industria sin explicar, metaforas visuales

### Estructura estandar
1. **Hook**: Pregunta provocativa o declaracion fuerte (1-2 lineas)
2. **Problema**: Descripcion del pain point o error comun
3. **Insight**: La verdad tecnica, el "reality check"
4. **CTA**: Directo y concreto

## Reglas de formato

### Parrafos
- Cortos: 1-3 oraciones maximo
- Muchos saltos de linea para escaneabilidad
- Oraciones clave aisladas como parrafo propio para enfasis

### Listas
- Numeradas con emojis numericos para argumentos clave
- Blue diamond para features/beneficios
- Maximo 1-2 listas por post

### Emojis
- Estrategicos, no decorativos
- Al inicio del post (hook) y como marcadores de lista
- Maximo 3 por post

### Hashtags
- Minimos. Maximo 1-2 por post
- En espanol: #analytics, #seo, etc.

## Code-switching

Espanol nativo con terminos tecnicos en ingles sin traducir:
- GA4, GTM, CAPI, MCPs, Smart Bidding, Enhanced Conversions
- tracking, data, prompt, insights, First-party data

No traducir terminos tecnicos.

## Frases firma

- "a ciegas"
- "el problema esta en la sombra" / "debajo del capo"
- "optimizar a ciegas"
- "realidad tecnica"
- "fugas" / "huecos"
- "No se trata de X, sino de Y"
- "ecosistemas de datos estrategicos"

## Metaforas visuales

- "motor de Ferrari a un triciclo sin ruedas"
- "bestia hambrienta de datos"
- "comida chatarra" (data mal estructurada)
- "objeto brillante" (shiny new tools)

## Signature block (thought leadership)

```
——

📌 Ayudo a tiendas Shopify a transformar su caos de datos en sistemas de medicion que impulsan decisiones reales y multiplican el revenue organico. No se trata de usar la herramienta mas ruidosa, sino de construir infraestructura tecnica que realmente funcione.

¿Charlamos?
```

## Anti-patrones (NO hacer)

- Listicles genericos
- Posts motivacionales
- Historias personales largas
- "Aprendi X en Y anos"
- Exceso de emojis decorativos
- Hashtags innecesarios
- Traducir terminos tecnicos al espanol
- Ser condescendiente con el lector
- Clickbait sin sustancia

## Formato de salida

Siempre entregar el contenido en **Markdown** con frontmatter. El archivo debe guardar en la ruta correcta según la convención del repo.

### Estructura del archivo
```yaml
---
platform: linkedin
type: post | carousel | banner | article
title: "..."
topics: [seo-tecnico, ai-search, analytics, arquitectura]
language: es | en
status: draft | ready | published
created: YYYY-MM-DD
---

[Contenido del post en markdown]
```

### Rutas de guardado
- Posts: `output/{idioma}/linkedin/posts/YYYY-MM-DD-titulo-del-post.md`
- Carousels: `output/{idioma}/linkedin/carousels/`
- Banners: `output/{idioma}/linkedin/banners/`
- Artículos: `output/{idioma}/linkedin/articles/`

## Checklist antes de entregar

- [ ] Hook provocativo en las primeras 2 lineas
- [ ] Parrafos cortos (1-3 oraciones)
- [ ] Maximo 3 emojis
- [ ] Maximo 2 hashtags
- [ ] CTA claro y directo
- [ ] Sin relleno ni fluff
- [ ] Tono: autoridad tecnica, no profesor
- [ ] Code-switching natural (terminos tecnicos en ingles)
- [ ] Archivo en formato Markdown con frontmatter
