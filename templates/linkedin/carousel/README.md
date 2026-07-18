# LinkedIn Carousel Templates

5 templates HTML para carousels de LinkedIn. Todos comparten `base.css` y dimensiones **1080 × 1350 px (4:5 portrait)**.

## Estructura

```
templates/linkedin/carousel/
├── base.css          # Design system compartido (colores, tipografía, componentes)
├── listicle.html     # "7 tips para...", "5 errores de..."
├── tutorial.html     # Paso a paso: "Cómo hacer X en N pasos"
├── concepts.html     # Explicar conceptos: dark/light alternating
├── metrics.html      # Datos-driven: métricas grandes, resultados
├── framework.html    # Framework/metodología propia: dark bg, flow diagrams
└── README.md         # Este archivo
```

## Matriz de selección

| Template | Cuándo usarlo | Estructura | Estilo |
|----------|---------------|------------|--------|
| **listicle** | Tips, herramientas, errores, hacks, checklist | Cover → N tips → Recap → CTA | Light, card-based |
| **tutorial** | Instrucciones secuenciales, how-to | Cover → N pasos → Recap → CTA | Light, step numbers + terminal |
| **concepts** | Explicar qué es algo, definir términos | Dark cover → Light concept → Dark concept → Recap → CTA | Alternating dark/light, analogías |
| **metrics** | Case study, resultados, data story | Cover big number → N métricas → Recap grid → CTA | Light, numbers-first |
| **framework** | Metodología propia, proceso, sistema propio | Dark cover → Dark overview flow → Dark step details → Recap → CTA | All dark, flow diagrams |

## Flujo de uso

1. **Seleccionar template** según tipo de contenido
2. **Copiar** el HTML a `output/{lang}/linkedin/carousels/{date}-{slug}.html`
3. **Agregar slides** si es necesario (duplicar el último slide de contenido)
4. **Rellenar** placeholders `<!-- ... -->` con copy real
5. **Actualizar** slide numbers y total
6. **Exportar** con `node export.js` o manualmente (Ctrl+P → PDF)

## Reglas de contenido

- **6-10 slides** (ideal: 7-9)
- **1 idea por slide**
- **Hook slide** (slide 1): título provocativo + categoría
- **CTA slide** (slide final): acción clara + monograma grande (`.monogram-lg`)
- **Slide numbers** en slides 2-N (excepto cover y CTA)
- **Author-bar** (avatar + "Alex Spelucin" + "SEO Técnico para Shopify") en **todos** los slides
- **Monograma**: solo en el slide final, nunca en cover ni en slides de contenido

## Personalización

Cada template tiene un bloque `<style>` con clases específicas. Para agregar slides:

1. Duplicar el último slide de contenido (no el de CTA)
2. Actualizar el número de slide (`.slide-number`)
3. Mantener la consistencia visual del template
4. Incluir la author-bar (avatar + nombre + puesto) — el monograma NO va en slides de contenido, solo en el slide final

## Exportar

```bash
# Desde el directorio del carousel exportado:
node export.js

# Output:
# - PDF: {slug}.pdf (multi-page, 1080x1350 por página)
# - JPG: {slug}-{nn}.jpg (opcional, por slide)
```

## Dimensiones de referencia

- **Slide**: 1080 × 1350 px (4:5 portrait)
- **Ratio**: 0.8:1 (ancho:alto)
- **Why 4:5**: +15-20% más impresiones en mobile vs 1:1 (investigación LinkedIn 2026)
