# VerificaDocs — Sitio Web

Sitio institucional de **VerificaDocs**, servicio B2B de auditoría editorial, corrección profesional y certificación de calidad para medios digitales argentinos.

## Stack

- HTML5 semántico
- Tailwind CSS 3 (compilado con Tailwind CLI)
- JavaScript vanilla
- Deploy: Netlify
- Formularios: Formspree

## Estructura

```
verificadocs-website/
├── public/                # Carpeta pública servida por Netlify
│   ├── index.html         # Inicio
│   ├── servicios.html     # Servicios y precios
│   ├── radar.html         # Radar Editorial (archivo)
│   ├── sobre.html         # Sobre VerificaDocs
│   ├── contacto.html      # Formulario y datos de contacto
│   ├── css/styles.css     # CSS compilado (generado)
│   ├── js/main.js         # Navegación móvil + utilidades
│   └── assets/            # Imágenes, PDFs del Radar
├── src/input.css          # Entrada de Tailwind
├── tailwind.config.js
├── netlify.toml
└── package.json
```

## Desarrollo local

```bash
npm install
npm run dev          # compila Tailwind en modo watch
npm run serve        # sirve /public en http://localhost:8080
```

Abrir las dos terminales en paralelo: `npm run dev` y `npm run serve`.

## Build de producción

```bash
npm run build
```

Genera `public/css/styles.css` minificado.

## Deploy en Netlify

1. Subir el repo `verificadocs-website` a GitHub.
2. En Netlify: **Add new site → Import from Git → seleccionar repo**.
3. Netlify detectará automáticamente `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `public`
4. Click **Deploy**.

## Configurar Formspree

1. Crear formulario en [formspree.io](https://formspree.io).
2. Reemplazar el endpoint en `public/contacto.html`:
   ```html
   <form action="https://formspree.io/f/TU_ID_FORMSPREE" method="POST">
   ```

## Personalización

- **Colores**: editar `tailwind.config.js` → `theme.extend.colors`.
- **Tipografía**: cambiar `<link>` de Google Fonts en cada página y `fontFamily` en config.
- **Datos del fundador**: actualizar `sobre.html`.
- **Servicios y precios**: actualizar `servicios.html`.
- **Ediciones del Radar**: agregar entradas en `radar.html` y los PDFs en `public/assets/radar/`.
