---
platform: linkedin
type: carousel
title: "Git para Marketing: Guía básica para no perder trabajo"
topics: [git, herramientas]
language: es
status: ready
created: 2026-07-18
slides: 9
---

## Slide 1 — Hook (Dark)

**Eyebrow**: HERRAMIENTAS PARA MARKETING
**Título**: Git no es solo para devs
**Subtítulo**: Es para cualquiera que no quiera perder trabajo.
**Tag**: 7 conceptos que necesitas saber
**Footer**: Alex Spelucin · spelucin.pro

---

## Slide 2 — ¿Qué es Git? (Light)

**Eyebrow**: CONCEPTO
**Título**: ¿Qué es Git?
**Contenido**:
Un sistema de control de versiones.

Cada vez que guardas un cambio, Git crea un "snapshot" de tu proyecto en ese momento.

Piensa en un historial de Google Docs, pero local y más potente.

---

## Slide 3 — Working Tree (Light)

**Eyebrow**: CONCEPTO
**Título**: Working Tree
**Contenido**:
Tu carpeta de archivos tal como la ves. Aquí editas, creas, borras.

**Diagrama**: Folder tree con proyecto/, banner.html, landing/, styles.css, .git/

Git observa los cambios que haces aquí y te dice qué ha cambiado.

---

## Slide 4 — Commits (Light)

**Eyebrow**: CONCEPTO
**Título**: Commits
**Contenido**:
Un commit es un checkpoint.

"Guardé esto así, a las 3pm, con este mensaje."

**Timeline**: a1b2c3d → e4f5g6h → i7j8k9l

Cada commit tiene un hash único que lo identifica para siempre.

---

## Slide 5 — Comandos básicos (Dark)

**Eyebrow**: COMANDOS
**Título**: Los 4 comandos básicos
**Terminal**:
- `git init` — Crea un repositorio nuevo en tu carpeta
- `git commit -m "mi primer commit"` — Guarda un snapshot de lo que tienes
- `git push` — Sube tus cambios a GitHub / la nube
- `git pull` — Baja los cambios que otros hicieron

---

## Slide 6 — Comandos intermedios (Dark)

**Eyebrow**: COMANDOS
**Título**: 3 comandos más
**Terminal**:
- `git checkout -b nueva-rama` — Salta entre versiones o crea ramas
- `git rebase main` — Reordenar tu historia para que sea limpia
- `git reset --soft HEAD~1` — Deshacer el último commit sin perder cambios

---

## Slide 7 — Commit messages (Light)

**Eyebrow**: BUENAS PRÁCTICAS
**Título**: Commit messages
**Contenido**:
El mensaje debe explicar qué cambió y por qué.

**MAL**: update, fix, asdf, changes
**BIEN**: feat(campaign): add holiday page, fix(tracking): correct GA4 events, docs(readme): update setup steps, style(landing): fix mobile layout

---

## Slide 8 — Recap Grid (Light)

**Eyebrow**: RESUMEN
**Título**: Guía rápida de Git
**Grid**:
1. Git — Control de versiones con snapshots
2. Working Tree — Tu carpeta de archivos
3. Commits — Checkpoints con hash único
4. init / commit — Crear repo y guardar cambios
5. push / pull — Subir y bajar de la nube
6. checkout / rebase — Saltar ramas y reordenar historia
7. reset — Deshacer o volver atrás
8. Buenos mensajes — tipo(scope): descripción clara

---

## Slide 9 — CTA (Dark)

**Eyebrow**: SIGUE APRENDIENDO
**Título**: ¿Cuál de estos comandos te genera más duda?
**CTAs**:
- Guarda este post para consultarlo después
- Comenta tu respuesta abajo
- Sígueme para más contenido técnico para marketing

**Footer**: Alex Spelucin · spelucin.pro
