---
platform: github
type: readme
language: es
status: draft
created: 2026-07-06
---

# GitHub Profile README - Recomendaciones para @spelucin

## Widgets Dinámicos

### 1. GitHub Stats (Stats dinámicas)
Muestra estadísticas de tu actividad en GitHub (stars, commits, PRs, issues).

**Recomendado para Alex:** Sí, muestra actividad técnica y consistencia.

```markdown
![Alex's GitHub stats](https://github-readme-stats.vercel.app/api?username=spelucin&show_icons=true&theme=github_dark&hide_border=true&bg_color=0D1117&title_color=1560BD&text_color=FFFFFF&icon_color=1560BD)
```

**Nota:** El proyecto original está deprecado. Usa el fork mantenido: [github-stats-extended](https://github.com/stats-organization/github-stats-extended)

### 2. Top Languages (Lenguajes más usados)
Muestra los lenguajes que más usas en tus repositorios.

**Recomendado para Alex:** Sí, demuestra expertise técnico en Python, JavaScript, SQL.

```markdown
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=spelucin&layout=compact&theme=github_dark&hide_border=true&bg_color=0D1117&title_color=1560BD&text_color=FFFFFF)
```

### 3. Streak Stats (Racha de contribuciones)
Muestra tu racha actual, racha más larga y total de contribuciones.

**Recomendado para Alex:** Sí, muestra consistencia y compromiso.

```markdown
[![GitHub Streak](https://streak-stats.demolab.com?user=spelucin&theme=github-dark&hide_border=true&background=0D1117&ring=1560BD&fire=1560BD&currStreakLabel=1560BD)](https://git.io/streak-stats)
```

### 4. Activity Graph (Gráfico de actividad)
Muestra un gráfico de tu actividad de los últimos 31 días.

**Recomendado para Alex:** Sí, visualización de datos = tu marca personal.

```markdown
![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=spelucin&theme=github-dark&hide_border=true&bg_color=0D1117&title_color=1560BD&line=1560BD&point=FFFFFF&area=true&area_color=1560BD)
```

### 5. Snake Game (Juego de la serpiente)
Anima tu gráfico de contribuciones con una serpiente que "come" los cuadros.

**Recomendado para Alex:** Opcional, pero muy cool y demuestra conocimiento técnico.

**Configuración:**
1. Crear workflow en `.github/workflows/snake.yml`
2. Genera SVG/GIF automáticamente cada día

```yaml
name: Generate snake animation

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: generate snake animation
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark

      - name: push to branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Luego en tu README:
```markdown
![snake gif](https://github.com/spelucin/spelucin/blob/output/github-snake-dark.svg)
```

---

## Badges e Iconos

### 6. Shields.io (Badges personalizados)
Crea badges para tus habilidades, herramientas y proyectos.

**Recomendado para Alex:** Sí, muestra stack técnico de forma visual.

```markdown
### Stack Técnico

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/sql-00000F?style=for-the-badge&logo=sqlite&logoColor=white)
![R](https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white)

### Herramientas SEO & Analytics

![Google Analytics](https://img.shields.io/badge/Google%20Analytics-E37400?style=for-the-badge&logo=google%20analytics&logoColor=white)
![Shopify](https://img.shields.io/badge/Shopify-7AB55C?style=for-the-badge&logo=shopify&logoColor=white)
![BigQuery](https://img.shields.io/badge/BigQuery-4285F4?style=for-the-badge&logo=google%20cloud&logoColor=white)
![GTM](https://img.shields.io/badge/GTM-246FDB?style=for-the-badge&logo=google%20tag%20manager&logoColor=white)
```

### 7. Simple Icons (Iconos de marcas)
Más de 3400 iconos SVG de marcas populares.

**Recomendado para Alex:** Sí, para mostrar herramientas específicas.

```markdown
![Shopify](https://cdn.simpleicons.org/shopify/7AB55C)
![Google Analytics](https://cdn.simpleicons.org/googleanalytics/E37400)
![Python](https://cdn.simpleicons.org/python/3670A0)
```

---

## Elementos Visuales Creativos

### 8. Typing Animation (Animación de escritura)
Efecto de máquina de escribir para tu bio.

**Recomendado para Alex:** Sí, añade dinamismo y enganche visual.

```markdown
### Hi there 👋

I'm a <img src="https://readme-typing-svg.herokuapp.com?font=DM+Sans&size=22&duration=3000&pause=1000&color=1560BD&center=true&vCenter=true&width=440&lines=Technical+SEO+Consultant;Shopify+Expert;Data+Driven+Marketer;Analytics+Engineer" alt="Typing SVG" />
```

### 9. Profile Views Counter (Contador de visitas)
Muestra cuántas veces han visto tu perfil.

**Recomendado para Alex:** Opcional, pero interesante para mostrar alcance.

```markdown
![Profile Views](https://komarev.com/ghpvc/?username=spelucin&color=1560BD&style=flat-square)
```

### 10. Spotify Playing (Lo que estás escuchando)
Muestra la canción que estás escuchando en Spotify.

**Recomendado para Alex:** Opcional, añade toque personal.

**Requiere:** Configurar Spotify API y deploy en Vercel.

---

## Integraciones con Servicios

### 11. Latest Blog Posts (Posts recientes)
Si tienes blog, muestra tus últimos posts automáticamente.

**Recomendado para Alex:** Sí, si tienes blog técnico (spelucin.pro/blog).

```markdown
### 📝 Latest Blog Posts

<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
```

**Configuración con GitHub Actions:**
```yaml
name: Latest blog post workflow
on:
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          blog_url: "https://spelucin.pro/blog/feed"
          route: "/blog"
          max_post_count: 4
```

### 12. YouTube Videos (Videos recientes)
Muestra tus últimos videos de YouTube.

**Recomendado para Alex:** Sí, si tienes canal con tutoriales técnicos.

```markdown
### 🎥 Latest YouTube Videos

<!-- YOUTUBE:START -->
<!-- YOUTUBE:END -->
```

---

## Estructura Recomendada para @spelucin

### Opción A: Minimalista y Profesional
```markdown
# Alex Spelucin 👋

## Technical SEO Consultant for Shopify

🔭 I'm currently working on [project]  
🌱 I'm currently learning [technology]  
💬 Ask me about **SEO técnico, Shopify, GA4, BigQuery**  
⚡ Fun fact: [dato interesante]

### Stack Técnico
[badges de tecnologías]

### Stats
[github stats + top languages]

### Connect
[iconos de redes sociales con links]
```

### Opción B: Data-Driven (Recomendada para Alex)
```markdown
# Alex Spelucin

<img align="right" src="https://github-readme-stats.vercel.app/api?username=spelucin&show_icons=true&theme=github_dark&hide_border=true&bg_color=0D1117&title_color=1560BD&text_color=FFFFFF&icon_color=1560BD" alt="stats" />

### 🎯 Technical SEO Consultant for Shopify

Transformo caos de datos en sistemas de medición que multiplican revenue orgánico.

**Focus areas:**
- 🔧 SEO técnico (indexación, renderizado, velocidad)
- 🏗️ Arquitectura de catálogo Shopify
- 📊 Medición de impacto SEO
- 📈 Analítica ecommerce (GA4, GTM, BigQuery)

### 🛠️ Stack Técnico
[badges con iconos]

### 📊 Activity
[activity graph]

### 📫 Connect
[links a LinkedIn, website, etc.]
```

### Opción C: Visual y Dinámica (La más cool)
```markdown
# Alex Spelucin

<img src="https://readme-typing-svg.herokuapp.com?font=DM+Sans&size=22&duration=3000&pause=1000&color=1560BD&center=true&vCenter=true&width=440&lines=Technical+SEO+Consultant;Shopify+Expert;Data+Driven+Marketer" alt="Typing SVG" />

### 🎯 About Me
[descripción breve]

### 🛠️ Technologies & Tools
[grid de badges con iconos]

### 📊 GitHub Activity
[activity graph]

### 🐍 Snake Animation
[snake game]

### 📈 Stats
[stats + streak]

### 📫 Let's Connect
[redes sociales con iconos]
```

---

## Paleta de Colores (Alineada con tu marca)

Usa el azul monocromático de tu identidad visual:

```markdown
- Primary Blue: #1560BD
- Accent Blue: #0D4A9E
- Background Dark: #0D1117 (GitHub dark)
- Background Light: #F4FDFF (GitHub light)
- Text: #FFFFFF (dark mode) / #1560BD (light mode)
```

**Ejemplo de personalización:**
```markdown
![Stats](https://github-readme-stats.vercel.app/api?username=spelucin&show_icons=true&theme=github_dark&hide_border=true&bg_color=0D1117&title_color=1560BD&text_color=FFFFFF&icon_color=1560BD)
```

---

## Implementación Paso a Paso

### 1. Crear repositorio especial
```bash
# Crear repo con tu username
git clone https://github.com/spelucin/spelucin.git
cd spelucin
```

### 2. Crear README.md
```bash
touch README.md
# Editar con tu contenido
```

### 3. Configurar workflows (opcional)
```bash
mkdir -p .github/workflows
# Crear archivos .yml para automatizaciones
```

### 4. Push inicial
```bash
git add .
git commit -m "Initial commit: Profile README"
git push origin main
```

---

## Recursos Adicionales

### Generadores de README
- [readme.so](https://readme.so) - Editor visual
- [profilinator.rishav.dev](https://profilinator.rishav.dev) - Generador con badges
- [getreadme.com](https://getreadme.com) - Templates profesionales

### Inspiración
- [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- Perfiles de consultores técnicos y data engineers

### Documentación
- [GitHub Profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Shields.io](https://shields.io)

---

## Recomendación Final para @spelucin

**Configuración recomendada:**

1. **Stats dinámicas** - Muestra actividad técnica
2. **Top languages** - Demuestra expertise en Python, JS, SQL
3. **Activity graph** - Visualización de datos = tu marca
4. **Badges de herramientas** - Stack técnico visual
5. **Typing animation** - Dinamismo y enganche
6. **Links a redes** - LinkedIn, website, contacto

**Evitar:**
- Demasiados widgets (puede verse saturado)
- Colores que no coincidan con tu marca
- Información desactualizada
- Widgets que no funcionen (verificar que carguen)

**Prioridad:**
1. Contenido > Widgets
2. Profesional > Cool
3. Funcional > Visual

Tu perfil debe reflejar: **autoridad técnica, data-driven, Shopify expert**.
