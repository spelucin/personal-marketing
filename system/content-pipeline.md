# Content Pipeline

## Flujo de trabajo

```
IDEACION -> DRAFT -> REVIEW -> ASSET -> SCHEDULE -> PUBLISH -> ANALYZE
```

### 1. Ideacion

**Input**: Tema, angulo, pilar de contenido
**Output**: Brief en `output/[plataforma]/posts/[fecha]-[tema].md` (status: draft)

**Actividades**:
- Identificar tema desde pilares de contenido
- Definir angulo (provocativo, educativo, data-driven, herramienta)
- Definir audiencia objetivo
- Definir CTA principal
- Escribir brief: titulo, topic, plataforma, tipo

### 2. Draft (Copy)

**Input**: Brief
**Output**: Copy completo en `output/[plataforma]/posts/[fecha]-[tema].md` (status: draft)

**Actividades**:
- Usar agent `content-writer` o skill `spelucin-voice`
- Escribir copy segun formato de plataforma
- Aplicar estructura: Hook -> Problema -> Insight -> CTA
- Incluir frontmatter con metadata

### 3. Review

**Input**: Draft
**Output**: Draft aprobado (status: ready)

**Actividades**:
- Alex revisa el copy
- Feedback y ajustes
- Aprobar o pedir cambios
- Marcar como `ready` cuando este aprobado

### 4. Asset (Visuales)

**Input**: Copy aprobado + tipo de asset
**Output**: HTML standalone en `output/[plataforma]/[tipo]/[nombre].html`

**Actividades**:
- Usar agent `asset-designer` o skill correspondiente
- Generar HTML standalone con brand guidelines
- Aplicar template correspondiente
- Verificar que cumpla checklist visual

### 5. Export

**Input**: HTML standalone
**Output**: PDF o JPG en `output/[plataforma]/[tipo]/`

**Actividades**:
- Carousel: HTML -> PDF (Chrome print o Puppeteer)
- Banner: HTML -> JPG (screenshot o Puppeteer)
- Post BS: HTML -> JPG

### 6. Schedule

**Input**: Copy + assets exportados
**Output**: Contenido programado (status: scheduled)

**Actividades**:
- Copiar copy a plataforma (LinkedIn)
- Subir assets (PDF, JPG)
- Programar fecha y hora
- Marcar como `scheduled` en frontmatter

### 7. Publish

**Input**: Contenido programado
**Output**: Contenido publicado (status: published)

**Actividades**:
- Publicar en fecha programada
- Actualizar status a `published`
- Agregar URL del post publicado

### 8. Analyze

**Input**: Post publicado
**Output**: Metricas registradas (status: analyzed)

**Actividades**:
- Medir metricas despues de 48-72 horas
- Registrar: impresiones, engagement, clics, seguidores nuevos
- Actualizar `system/content-calendar.md` con resultados
- Marcar como `analyzed`

---

## Estados de contenido

| Status | Significado |
|--------|-------------|
| `idea` | Solo el tema o angulo definido |
| `draft` | Copy escrito, pendiente de review |
| `ready` | Aprobado, listo para generar assets |
| `scheduled` | Programado para publicar |
| `published` | Publicado en la plataforma |
| `analyzed` | Resultados medidos y registrados |

---

## Frontmatter estandar

```yaml
---
platform: linkedin
type: carousel | banner | post | image | article
title: "..."
topics: [seo-tecnico, arquitectura, analitica, ai-search]
language: es | en
status: idea | draft | ready | scheduled | published | analyzed
created: YYYY-MM-DD
published: YYYY-MM-DD  # cuando se publique
template: nombre-del-template  # si usa template
url: "..."  # URL del post publicado
metrics:
  impressions: 0
  engagement: 0
  clicks: 0
  new_followers: 0
---
```

---

## Naming conventions

### Archivos de contenido
```
output/[plataforma]/posts/YYYY-MM-DD-[tema-slug].md
```

Ejemplos:
- `output/linkedin/posts/2026-07-05-errores-ga4.md`
- `output/linkedin/posts/2026-07-07-arquitectura-catalogo.md`

### Assets visuales
```
output/[plataforma]/[tipo]/YYYY-MM-DD-[tema-slug].html
output/[plataforma]/[tipo]/YYYY-MM-DD-[tema-slug].pdf  # o .jpg
```

Ejemplos:
- `output/linkedin/carousels/2026-07-05-errores-ga4.html`
- `output/linkedin/carousels/2026-07-05-errores-ga4.pdf`
- `output/linkedin/banners/2026-07-07-ga4-bigquery.html`
- `output/linkedin/banners/2026-07-07-ga4-bigquery.jpg`
- `output/linkedin/covers/2026-07-10-arquitectura-catalogo.html`
- `output/linkedin/covers/2026-07-10-arquitectura-catalogo.jpg`

---

## Roles

| Rol | Responsabilidad |
|-----|----------------|
| **content-strategist** | Planifica calendario, sugiere temas, organiza pipeline |
| **content-writer** | Escribe copy en la voz de Alex |
| **asset-designer** | Genera assets visuales HTML |
| **Alex** | Revisa, aprueba, publica, mide resultados |

---

## Herramientas

### Para escribir
- Agent: `content-writer`
- Skill: `spelucin-voice`
- Referencia: `knowledge/voice-guide.md`

### Para disenar
- Agent: `asset-designer`
- Skills: `linkedin-carousel`, `linkedin-banner`, `social-asset`
- Referencia: `brand/visual-identity.md`

### Para adaptar entre plataformas
- Skill: `content-repurpose`

### Para planificar
- Agent: `content-strategist`
- Referencia: `system/content-calendar.md`

---

## Checklist de pipeline

### Ideacion
- [ ] Tema definido
- [ ] Angulo claro
- [ ] Pilar de contenido identificado
- [ ] Audiencia objetivo
- [ ] CTA definido

### Draft
- [ ] Copy escrito
- [ ] Frontmatter completo
- [ ] Estructura: Hook -> Problema -> Insight -> CTA
- [ ] Voz de Alex aplicada
- [ ] Guardado en output/

### Review
- [ ] Alex reviso
- [ ] Feedback incorporado
- [ ] Aprobado (status: ready)

### Asset
- [ ] HTML generado
- [ ] Brand guidelines aplicadas
- [ ] Dimension correcta
- [ ] Checklist visual completado

### Export
- [ ] PDF o JPG generado
- [ ] Calidad verificada
- [ ] Guardado en output/

### Schedule
- [ ] Copy copiado a plataforma
- [ ] Asset subido
- [ ] Fecha y hora programadas
- [ ] Status: scheduled

### Publish
- [ ] Publicado
- [ ] URL registrada
- [ ] Status: published

### Analyze
- [ ] Metricas medidas (48-72h)
- [ ] Registradas en content-calendar
- [ ] Status: analyzed
