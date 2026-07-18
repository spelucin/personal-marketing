# Bluesky Guidelines

## Dimensiones de assets

| Asset | Dimension | Ratio | Formato |
|-------|-----------|-------|---------|
| Post image (landscape) | 1200 x 675 px | 16:9 | JPG |
| Post image (cuadrado) | 1080 x 1080 px | 1:1 | JPG |

---

## Caracteristicas de la plataforma

### Limites
- **Maximo caracteres por post**: 300
- **Maximo imagenes por post**: 4
- **Formatos de imagen**: JPG, PNG, GIF
- **Links**: Se despliegan automaticamente ( unfurl)
- **Videos**: Soporte limitado (actualizando)

### Formatos nativos
1. **Post de texto**: Max 300 chars, sin hashtags nativos
2. **Post con imagen**: Texto + 1-4 imagenes
3. **Thread**: Hilo de posts encadenados
4. **Link share**: URL con preview automatico

---

## Reglas de composicion

### Post de texto
- Hook en la primera linea
- Max 300 caracteres
- Sin hashtags (el feed no los usa como Instagram)
- Links inline para contenido relacionado
- CTAs directos: "Leer mas", "Link en bio", "Comenta"

### Post con imagen
- Imagen complementa el texto
- Texto corto y directo
- Alt text recomendado para accesibilidad
- Imagen: 1200x675 (landscape) o 1080x1080 (cuadrado)

### Thread
- Primer post: Hook + contexto del hilo
- Posts intermedios: Una idea por post
- Ultimo post: Resumen + CTA
- Max 3-5 posts por thread (no mas de 10)

---

## Tips de engagement

### CTAs efectivos
- "Leer mas: [link]"
- "Comenta tu experiencia"
- "Guarda este post"
- "Comparte si te sirvio"

### Mejores practicas
- Responder a comentarios rapido
- Usar threads para contenido largo
- Compartir links a contenido de LinkedIn o blog
- Ser consistente: 1-2 posts por semana minimo

### Evitar
- Hashtags innecesarios
- Posts muy largos (respetar 300 chars)
- Exceso de emojis
- Copiar el mismo contenido de LinkedIn sin adaptar

---

## Voz en Bluesky

Mismo tono que LinkedIn pero mas:
- **Conciso**: 300 chars requiere precision
- **Directo**: Sin rodeos
- **Conversacional**: Mas cercano, menos formal
- **Tecnico**: Mantener el edge contrarian

Ejemplo:
```
El 80% de tiendas Shopify tienen problemas de indexacion que nadie ve.

Reviso 3 por semana. Siempre el mismo patron: canonicals rotos + paginacion sin seguir.

Si tu tienda tiene mas de 500 productos, revisa esto hoy.
```

---

## Output

Guarda assets en:
- `output/bluesky/posts/` - Posts con imagen (HTML -> JPG)
- `output/bluesky/threads/` - Threads como archivos .md

### Naming
```
output/bluesky/posts/YYYY-MM-DD-[tema-slug].html
output/bluesky/posts/YYYY-MM-DD-[tema-slug].jpg
output/bluesky/threads/YYYY-MM-DD-[tema-slug].md
```

---

## Export a JPG

### Metodo recomendado
1. Abrir HTML en Chrome/Brave
2. Abrir DevTools (F12)
3. Toggle device toolbar (Cmd+Shift+M o Ctrl+Shift+M)
4. Dimensiones: 1200x675 (landscape) o 1080x1080 (cuadrado)
5. Screenshot -> Capture full size
6. Guardar como JPG

### Alternativa: Puppeteer
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 675 });
  await page.goto('file:///path/to/asset.html');
  await page.screenshot({ path: 'asset.jpg', type: 'jpeg', quality: 90 });
  await browser.close();
})();
```

---

## Checklist de post

### Post de texto
- [ ] Max 300 caracteres
- [ ] Hook en primera linea
- [ ] CTA claro
- [ ] Sin hashtags innecesarios

### Post con imagen
- [ ] Dimension: 1200x675 o 1080x1080
- [ ] Imagen complementa el texto
- [ ] Alt text incluido
- [ ] Texto + imagen forman un todo coherente

### Thread
- [ ] Primer post: hook + contexto
- [ ] Cada post: una idea principal
- [ ] Ultimo post: resumen + CTA
- [ ] 3-5 posts maximo
