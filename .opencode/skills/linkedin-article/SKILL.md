---
name: linkedin-article
description: Use when writing LinkedIn articles (long-form native posts published in-platform). Produces markdown copy in Alex Spelucin's voice, ready to paste into LinkedIn's article editor.
---

# LinkedIn Article Skill

Genera artículos nativos de LinkedIn en la voz de Alex Spelucin. Los artículos se publican **in-platform**: escribes en el editor nativo de LinkedIn, pegas el markdown y subes la portada ahí mismo. Por eso esta skill entrega solo **copy en markdown**, sin assets gráficos.

## Cargar contexto antes de generar

1. Carga la skill `spelucin-voice` — es la fuente de verdad para tono, estructura y expresiones.
2. Lee `knowledge/voice-guide.md` para la guía completa de voz.
3. Lee `brand/linkedin-guidelines.md` (sección "Artículos LinkedIn").
4. Lee `knowledge/topics.md` para los pilares de contenido.

Si el artículo es en inglés, sigue las mismas reglas pero con copy en inglés y guarda en `output/en/...`.

## Qué es un LinkedIn Article

Artículo nativo de LinkedIn (no un post largo). Se escribe y publica directamente en el editor de LinkedIn. Beneficios:
- Mayor alcance orgánico que los posts normales.
- SEO en buscadores de LinkedIn y Google.
- Posicionamiento como thought leadership.
- Contenido evergreen que sigue trayendo tráfico.

## Output esperado

### Article copy (`.md`)
- Markdown puro para pegar en el editor de LinkedIn.
- Frontmatter con metadata del sistema.
- Estructura: subtítulo/gancho + cuerpo con H2, H3, listas, bold y blockquotes.
- Longitud: 1000-2000 palabras (ideal: 1200-1500).
- Guardar en `output/es/linkedin/articles/YYYY-MM-DD-[tema-slug].md`.

---

## Article copy (markdown)

### Frontmatter
```yaml
---
title: "..."
platform: linkedin
type: article
topics: [seo-tecnico, arquitectura, analitica, ai-search]
language: es | en
status: draft | ready | published
created: YYYY-MM-DD
template: nombre-del-template
---
```

### Estructura
```markdown
## [Subtítulo o gancho — opcional]

[Cuerpo. Párrafos cortos (2-4 oraciones). Mucho espacio entre secciones.]

## [Sección 1: Problema]

[Pain point o problema real de tiendas Shopify]

- Punto clave 1
- Punto clave 2
- Punto clave 3

## [Sección 2: Insight / Análisis]

[Análisis técnico profundo, con ejemplo concreto]

> Blockquote para enfatizar un insight clave o frase provocativa

## [Sección 3: Solución / Framework]

[Framework o approach recomendado]

1. **Paso 1**: Descripción
2. **Paso 2**: Descripción
3. **Paso 3**: Descripción

## [Sección 4: Ejemplo / Caso]

[Caso concreto anclado en experiencia real]

## Conclusión

[Resumen ejecutivo + CTA suave]
```

### Reglas de formato markdown para LinkedIn
- `##` para secciones (H2). `###` para subsecciones (H3).
- **No usar H1 (`#`)** — LinkedIn reserva el H1 para el título del artículo.
- `**bold**` para enfatizar conceptos clave.
- `- ` para bullet points; `1. ` para pasos/frameworks.
- `> ` para blockquotes (insights, frases provocativas).
- ` ``` ` para code fences (queries SQL, config GTM/GA4, scripts).
- `---` para separadores visuales.

### Voz y tono (de `spelucin-voice` / `voice-guide.md`)
- **Técnico apasionado con edge contrarian y calidez community.** Especialista que ha visto implementaciones rotas y auditorías basura: se indigna con lo mediocre, pero siempre enseña y comparte.
- Directo, sin relleno, pero cercano. Provocativo al denunciar malas prácticas; educativo al enseñar.
- **Code-switching natural**: términos técnicos en inglés sin traducir (GA4, GTM, BigQuery, Screaming Frog, renderizado, crawling, indexación).
- Ejemplos concretos anclados en experiencia real (cifras específicas para credibilidad: "47 tiendas auditadas", "70% de tu tráfico").
- Cierre con signature block cuando aplica (thought leadership):
  ```
  ——

  📌 Ayudo a tiendas Shopify a multiplicar su tráfico orgánico con SEO técnico y arquitectura de catálogo.

  ¿Charlamos?
  ```
- Emojis como marcadores de sección (💢 indignación, 🔎 análisis, 💡 insight, ✅ correcto, ❌ incorrecto), no decoración.
- Anti-patrones: posts motivacionales vacíos, clickbait sin sustancia, traducir términos técnicos, tono condescendiente, falsa modestia.

### Párrafos y ritmo
- Máximo 3-4 oraciones por párrafo. Alternar cortos (1-2) con medianos.
- Oraciones clave como párrafo propio para énfasis.
- Puntos suspensivos para pausa dramática: "Tus datos simplemente dejan de mostrarse..."

### Estructuras que funcionan
1. **Deep Dive Técnico**: Intro problema → Contexto → Análisis → Framework → Ejemplo → Conclusión
2. **Contrarian Take**: Declaración provocativa → Por qué todos lo hacen mal → Realidad técnica → Framework correcto → Conclusión
3. **Tutorial / Paso a paso**: Intro → Prerequisitos → Paso 1/2/3 → Troubleshooting → Conclusión
4. **Caso de estudio**: Intro → Diagnóstico → Intervención → Resultados → Lecciones → Conclusión

---

## Flujo de ejecución

### Copy
1. Definir tema, ángulo y pilar (ver `knowledge/topics.md`).
2. Elegir estructura y escribir en la voz de Alex.
3. Guardar en `output/es/linkedin/articles/YYYY-MM-DD-[tema-slug].md`.
4. El usuario pega el markdown en el editor nativo de LinkedIn y sube la portada desde ahí.

---

## Checklist antes de entregar

### Article copy
- [ ] Frontmatter con metadata
- [ ] Markdown válido (H2/H3, bold, listas, blockquotes)
- [ ] 1000-2000 palabras
- [ ] Título claro y específico (5-10 palabras)
- [ ] 3-5 secciones con H2
- [ ] Párrafos cortos (máximo 3-4 oraciones)
- [ ] Code-switching natural (términos técnicos en inglés)
- [ ] Blockquotes para insights clave
- [ ] Ejemplos concretos con cifras
- [ ] Conclusión con CTA suave / signature block
- [ ] Sin H1
- [ ] Voz de Alex: técnica, contrarian, directa, cercana
