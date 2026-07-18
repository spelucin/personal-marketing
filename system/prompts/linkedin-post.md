# Prompts para Generar Contenido

## Prompt: LinkedIn Post

```
Escribe un post de LinkedIn en la voz de Alex Spelucin sobre [TEMA].

Contexto:
- Pilar de contenido: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Angulo: [Provocativo / Educativo / Data-driven / Herramienta]
- Audiencia: [Duenos de ecommerce / Ecommerce managers / Agency owners]
- CTA: [Comentar X / Link en bio / Charlamos? / Comentame tu experiencia]

Reglas:
- Hook provocativo en las primeras 2 lineas
- Estructura: Hook -> Problema -> Insight -> CTA
- Parrafos cortos (1-3 oraciones)
- Maximo 3 emojis
- Maximo 2 hashtags
- Code-switching natural (terminos tecnicos en ingles)
- Sin relleno ni fluff
- Tono: autoridad tecnica con edge contrarian

Usa la estructura de [INSIGHT CONTRARIAN / ERROR TECNICO / LISTA EDUCATIVA / etc.]

Guarda el resultado en output/linkedin/posts/[fecha]-[tema-slug].md con frontmatter completo.
```

---

## Prompt: Carousel Script

```
Escribe el script para un carousel de LinkedIn sobre [TEMA].

Contexto:
- Pilar de contenido: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Numero de slides: [7-10]
- Audiencia: [Duenos de ecommerce / Ecommerce managers / Agency owners]
- CTA final: [Sigueme / Comenta X / Link en bio]

Estructura:
- Slide 1: Hook + titulo + nombre de Alex
- Slides 2-[N-1]: Una idea por slide, titulo claro, contenido visual sugerido
- Slide final: Resumen + CTA + bio + redes

Reglas:
- Cada slide es independiente
- Titulo grande y legible
- Mucho espacio en blanco
- Numerar slides (excepto primero y ultimo)
- Monograma en cada slide (excepto primero)

Guarda el script en output/linkedin/posts/[fecha]-[tema-slug].md con type: carousel-script.
Luego genera el HTML del carousel en output/linkedin/carousels/[fecha]-[tema-slug].html.
```

---

## Prompt: YouTube Script

```
Escribe el script para un video de YouTube sobre [TEMA].

Contexto:
- Pilar de contenido: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Duracion: [8-15 min / 10-20 min / 5-10 min]
- Tipo: [Tutorial / Analisis / Opinion / Caso de estudio]
- Audiencia: [Duenos de ecommerce / Ecommerce managers / Agency owners]
- CTA: [Suscribete / Comenta / Link a recurso]

Estructura:
- Intro (15-30s): Hook + promesa + quien es Alex
- Desarrollo (8-15min): 3-5 secciones principales
- Outro (30-60s): Resumen + CTA + suscribete

Reglas:
- Lenguaje conversacional (no leido)
- Transiciones entre secciones
- Ejemplos concretos
- Screenshots o diagrams sugeridos
- Tono: autoridad tecnica con edge contrarian

Guarda el script en output/linkedin/posts/[fecha]-[tema-slug].md con type: carousel-script.
```

---

## Prompt: Instagram Caption

```
Escribe el caption para un post de Instagram sobre [TEMA].

Contexto:
- Pilar de contenido: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Tipo de post: [Imagen unica / Carousel / Reel]
- Audiencia: [Duenos de ecommerce / Ecommerce managers]
- CTA: [Guarda este post / Comparte / Link en bio]

Reglas:
- Primera linea critica (visible antes de "ver mas")
- Parrafos cortos y escaneables
- Maximo 3 emojis
- 3-5 hashtags relevantes al final
- Code-switching natural
- Tono: autoridad tecnica con edge contrarian

Guarda el caption en output/bluesky/posts/[fecha]-[tema-slug].md con type: post.
```

---

## Prompt: LinkedIn Article

```
Escribe un artículo de LinkedIn sobre [TEMA].

Contexto:
- Pilar de contenido: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Angulo: [Deep Dive / Contrarian / Tutorial / Caso de estudio]
- Audiencia: [Duenos de ecommerce / Ecommerce managers / Agency owners]
- Longitud: [1000-2000 palabras, ideal 1200-1500]

Estructura:
- Título: 5-10 palabras, claro y específico
- 3-5 secciones con H2 (##)
- Conclusión con resumen + CTA suave

Reglas:
- Tono: autoridad técnica con edge contrarian
- Code-switching natural (términos técnicos en inglés)
- Párrafos cortos (máximo 3-4 oraciones)
- Blockquotes para insights clave
- Listas bien formateadas (- bullets, 1. numerados)
- Ejemplos concretos en cada sección
- Sin H1 (LinkedIn lo reserva para el título)
- 1000-2000 palabras

Guarda el artículo en output/es/linkedin/articles/[fecha]-[tema-slug].md con type: article.
```

---

## Prompt: Article Cover

```
Genera la imagen de portada para un artículo de LinkedIn sobre [TEMA].

Contexto:
- Título del artículo: [TÍTULO]
- Categoría: [SEO Técnico / Arquitectura / AI Search / Analítica]
- Estilo: monocromático azul, DM Sans, dot grid

Especificaciones:
- Dimension: 744x400px
- Solo texto: título + eyebrow (categoría) + monograma
- Sin avatar/foto ni CTA
- Mucho espacio en blanco

Guarda el HTML en output/es/linkedin/covers/[fecha]-[tema-slug].html.
```

---

## Prompt: Banner Copy

```
Escribe el copy para un banner de LinkedIn sobre [TEMA].

Contexto:
- Tipo de banner: [Announcement / Quote / Data / Tutorial / Comparison]
- Mensaje principal: [Que quieres comunicar]
- CTA: [Link / Comenta / Charlamos]

Reglas:
- Headline en maximo 2-3 lineas
- Subtitulo o CTA corto
- Texto grande y legible
- Mucho espacio en blanco

Guarda el copy en output/linkedin/posts/[fecha]-[tema-slug].md con type: banner-copy.
Luego genera el HTML del banner en output/linkedin/banners/[fecha]-[tema-slug].html.
```

---

## Prompt: Repurpose Content

```
Adapta el siguiente contenido de [PLATAFORMA ORIGEN] a [PLATAFORMA DESTINO].

Contenido original:
[PEGAR CONTENIDO O REFERENCIAR ARCHIVO]

Reglas:
- Mantener la voz de Alex
- Mantener el mensaje central
- Ajustar longitud a plataforma destino
- Ajustar formato (texto, visual, video)
- Ajustar estructura segun convencion de plataforma
- Ajustar hashtags segun plataforma
- Ajustar CTA segun canal

Guarda el resultado en output/[plataforma-destino]/posts/[fecha]-[tema-slug].md.
```

---

## Prompt: Content Idea

```
Genera 5 ideas de contenido sobre [PILAR DE CONTENIDO] para [PLATAFORMA].

Contexto:
- Pilar: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Plataforma: [LinkedIn / Bluesky]
- Audiencia: [Duenos de ecommerce / Ecommerce managers / Agency owners]
- Angulo: [Provocativo / Educativo / Data-driven / Herramienta]

Para cada idea incluye:
- Titulo tentativo
- Angulo especifico
- Tipo de contenido (post, carousel, thread, etc.)
- CTA sugerido
- Por que funcionaria

Guarda las ideas en system/content-calendar.md bajo "Banco de ideas".
```

---

## Prompt: Content Calendar

```
Planifica el calendario editorial para la semana [FECHA].

Contexto:
- Plataformas activas: [LinkedIn / Bluesky]
- Pilares a cubrir: [SEO Tecnico / Analitica / Arquitectura / AI Search]
- Frecuencia objetivo: [X posts por semana por plataforma]

Para cada dia incluye:
- Plataforma
- Tipo de contenido
- Pilar de contenido
- Tema tentativo
- Status (idea)

Asegurar rotacion balanceada de pilares.

Actualiza system/content-calendar.md con el calendario detallado.
```

---

## Uso de prompts

### Con agents
Estos prompts pueden usarse directamente con los agents:
- `content-writer`: Para prompts de copy (LinkedIn post, carousel script, banner copy)
- `content-strategist`: Para prompts de planificacion (content idea, content calendar)

### Con skills
- `spelucin-voice`: Se activa automaticamente al escribir copy
- `linkedin-carousel`: Para generar HTML de carousels
- `linkedin-banner`: Para generar HTML de banners
- `social-asset`: Para generar HTML de posts
- `content-repurpose`: Para adaptar contenido entre plataformas

### Ejemplo de flujo completo

```
1. Usar prompt "Content Idea" con content-strategist
2. Elegir una idea
3. Usar prompt "LinkedIn Post" con content-writer
4. Review y aprobacion
5. Usar prompt "Carousel Script" con content-writer
6. Generar HTML con asset-designer + linkedin-carousel skill
7. Exportar a PDF
8. Programar publicacion
```
