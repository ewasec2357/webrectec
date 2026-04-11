# CLAUDE.md — Recursos Tecnológicos S.A.C.

## Proyecto
Sitio web de Recursos Tecnológicos S.A.C., empresa peruana especializada en baterías de litio, vehículos eléctricos y energía solar. Construido con React + Vite. Corre en `npm run dev` → `localhost:5173`.

## Stack
- React 18 + Vite
- CSS puro en `src/styles.css` (sin Tailwind, sin librerías)
- Sin router — navegación por estado `tab` en `App.jsx`
- Fuentes: Outfit (títulos), Cormorant Garamond (cursivas), Inter (cuerpo) — Google Fonts en `index.html`

## Estructura
```
src/
├── App.jsx               — Nav desktop + Mobile + Footer + lógica de tabs
├── main.jsx
├── styles.css            — TODOS los estilos aquí, variables CSS en :root
├── constants.js          — Datos empresa, WhatsApp, array TABS
├── components/
│   ├── Icons.jsx         — WaIcon (SVG WhatsApp) y CompanyLogo
│   ├── Splash.jsx        — Pantalla de carga animada al entrar
│   └── MobileMenu.jsx    — Hamburguesa + panel lateral mobile
└── pages/
    ├── Inicio.jsx
    ├── Baterias.jsx
    ├── Solar.jsx
    ├── Asesoria.jsx
    ├── Vehiculos.jsx
    ├── Nosotros.jsx
    └── Contacto.jsx
```

## Nav
- Fondo oscuro: `rgba(2, 8, 22, 0.97)` — dark navy casi negro
- Links: mixed case, `font-weight: 400`, `color: rgba(255,255,255,.55)`, sin mayúsculas forzadas
- CTA: fondo blanco con texto oscuro
- Mobile: hamburguesa aparece en `≤ 900px`, abre `MobileMenu.jsx`

## Galería de media
- Clase `.media-grid` — grid 3 columnas de placeholders (`aspect-ratio: 16/10`)
- Clase `.media-ph` — cada celda; reemplaza contenido con `<img>` o `<video>` cuando tengas archivos reales
- Añadida en `Inicio.jsx`; replicable en otras páginas

## Paleta de colores (variables en :root de styles.css)
```
--blue:      #0057B8   → color principal, tabs activas, botones
--blue-d:    #003D8F   → hover de azul
--blue-dd:   #00256A   → hero, footer, page-hero, alianzas
--blue-l:    #3B82F6   → azul claro, gradientes
--blue-xl:   #EFF6FF   → fondos de iconos, tags, hover
--amber-l:   #F59E0B   → acento dorado, CTAs primarios, splash
--amber:     #D97706   → métricas solar, hover ámbar
--cream:     #FAF7F2   → fondo general del body
--cream2:    #F2EDE4   → fondo panel hero-right
--text:      #0F172A   → texto principal
--text-muted:#476A8A   → texto secundario
```

## Empresa
```js
// src/constants.js
WA_NUMBER = "51900025403"
phone     = "+51 900 025 403"
email     = "recursostecnologicossac@gmail.com"
address   = "Av. Alameda Sur 547, Chorrillos, Lima"
address2  = "Jr. Leticia 939, Lima"
facebook  = "https://facebook.com/rectecnologicosperu"
instagram = "https://instagram.com/recursostecnologicos"
```

## Logo
- Placeholder SVG en `src/components/Icons.jsx` dentro de `CompanyLogo`
- **Para logo real**: reemplazar el `<svg>` por `<img src="/logo_empresa.jpeg" style={{width:"100%",height:"100%",objectFit:"contain"}} alt="RT" />`
- Copiar `logo_empresa.jpeg` a la carpeta `public/`

## Splash screen
- Componente `Splash.jsx` — dura ~2.9s, luego fade-out
- Engranaje RT animado + barra de progreso + nombre empresa
- Controlado por estado `splashDone` en `App.jsx`
- Para cambiar duración: ajustar los `setTimeout` en `Splash.jsx`

## Responsive — breakpoints
```
> 900px   → Desktop: nav horizontal con todas las pestañas
≤ 900px   → Tablet: menú hamburguesa, hero en columna, grids 2 col
≤ 560px   → Mobile: grids 1 columna, botones full width
≤ 380px   → XS: tipografía reducida
```

## Agregar nueva pestaña
1. Crear `src/pages/NuevaPagina.jsx`
2. Agregar `{ id: "nueva", label: "Nueva" }` al array `TABS` en `constants.js`
3. Importar y registrar en el objeto `pages` dentro de `App.jsx`

## Reglas de diseño
- Títulos siempre con `font-family: 'Outfit', sans-serif; font-weight: 700`
- Cursivas decorativas con `font-family: 'Cormorant Garamond', serif; font-style: italic`
- Tarjetas: `background: var(--white); border: 1px solid var(--border-s); border-radius: var(--radius-lg)`
- Secciones oscuras (hero, footer, alianzas): `background: var(--blue-dd)`
- Botón principal (CTA): `background: var(--amber-l); color: var(--blue-dd)`
- Botón WhatsApp nav: `background: var(--blue); color: #fff`
- NO usar librerías de componentes, NO usar Tailwind — solo CSS puro en styles.css
- NO cambiar la estructura de pestañas ni el contenido sin instrucción explícita

## SEO
- Meta tags completos en `index.html` (title, description, keywords, OG, Twitter Card)
- Schema.org LocalBusiness en `index.html`
- Keywords SEO en footer (`.seo-kw`) y texto oculto en Inicio (`.seohide`)
- Canonical: `https://recursostecnologicos.pe`

## WhatsApp
- Todos los links usan `wm("texto del mensaje")` de `constants.js`
- Botón flotante (`.waf`) usa el SVG oficial de WhatsApp desde `WaIcon`
- El formulario de contacto genera el mensaje automáticamente y abre WhatsApp
