# VerificaDocs — Sitio Web

Sitio institucional de **VerificaDocs**, servicio de auditoría editorial especializado en medios digitales. Combina análisis humano con tecnología de IA. Fundado en 2025 por Martín Benítez Cima en Rosario, Argentina.

## Stack

- HTML5 semántico
- Tailwind CSS 3 (compilado con Tailwind CLI; CDN como fallback de preview)
- JavaScript vanilla
- Deploy: Netlify
- Formularios: Formspree

## Estructura

```
verificadocs-website/
├── public/                # Carpeta pública servida por Netlify
│   ├── index.html         # Inicio
│   ├── servicios.html     # 5 servicios + tabla comparativa
│   ├── radar.html         # Radar Editorial
│   ├── sobre.html         # Sobre VerificaDocs / Martín Benítez Cima
│   ├── contacto.html      # Formulario y datos de contacto
│   ├── css/styles.css     # CSS compilado (generado en build)
│   ├── js/main.js         # Navegación móvil y formulario
│   └── assets/radar/      # PDFs del Radar Editorial
├── src/input.css          # Entrada de Tailwind
├── tailwind.config.js
├── netlify.toml
└── package.json
```

## Datos de contacto

- Email: martin.verificadocs@gmail.com
- Teléfono: (+54) 341-3969973
- LinkedIn: https://linkedin.com/in/benitez-martin/
- Ubicación: Rosario, Argentina

## Desarrollo local

```bash
npm install
npm run dev          # compila Tailwind en modo watch
npm run serve        # sirve /public en http://localhost:8080
```

## Build de producción

```bash
npm run build
```

Genera `public/css/styles.css` minificado.

## Deploy en Netlify

1. Conectar el repo `verificadocs-website` a Netlify.
2. Netlify detecta `netlify.toml` automáticamente:
   - Build command: `npm run build`
   - Publish directory: `public`
3. Click **Deploy**.

## Configurar Formspree

1. Crear formulario en [formspree.io](https://formspree.io).
2. Reemplazar el endpoint en `public/contacto.html`:
   ```html
   <form action="https://formspree.io/f/TU_ID_FORMSPREE" method="POST">
   ```

## PDFs del Radar Editorial

Subir los PDFs del Radar a `public/assets/radar/` con estos nombres:

- `radar-local-mayo-2026.pdf`
- `radar-nacional-mayo-2026.pdf`
