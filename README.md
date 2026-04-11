# Recursos Tecnológicos S.A.C. — Sitio Web

React + Vite · Paleta azul eléctrico + crema + ámbar · SEO optimizado

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (abre en http://localhost:5173)
npm run dev

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

## Despliegue en Netlify (recomendado)

1. Crea cuenta en netlify.com
2. Arrastra la carpeta `dist/` después de hacer `npm run build`
3. O conecta tu repositorio GitHub para despliegue automático

## Agregar el logo real

En `src/components/Icons.jsx`, reemplaza el SVG dentro de `CompanyLogo` por:

```jsx
<img
  src="/logo_empresa.jpeg"
  style={{ width: "100%", height: "100%", objectFit: "contain" }}
  alt="Recursos Tecnológicos"
/>
```

Y copia `logo_empresa.jpeg` a la carpeta `public/`.

## Estructura del proyecto

```
rt-web/
├── public/
│   └── logo_empresa.jpeg     ← PONER AQUÍ tu logo real
├── src/
│   ├── components/
│   │   └── Icons.jsx         ← Logo y WaIcon
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Baterias.jsx
│   │   ├── Solar.jsx
│   │   ├── Asesoria.jsx
│   │   ├── Vehiculos.jsx
│   │   ├── Nosotros.jsx
│   │   └── Contacto.jsx
│   ├── App.jsx               ← Nav + Footer + routing
│   ├── constants.js          ← Datos de empresa, WhatsApp
│   ├── styles.css            ← Todos los estilos
│   └── main.jsx
├── index.html                ← SEO meta tags, Schema.org
├── vite.config.js
└── package.json
```

## Personalización rápida

- **Datos de empresa** → `src/constants.js`
- **Colores** → `src/styles.css` (variables `:root`)
- **WhatsApp** → `WA_NUMBER` en `constants.js`
- **SEO** → `index.html` (title, description, canonical)
- **Contenido** → archivos en `src/pages/`

## SEO incluido

- Meta tags completos (title, description, keywords, robots)
- Open Graph para redes sociales
- Twitter Card
- Schema.org LocalBusiness
- Texto SEO oculto en página de inicio
- Footer con keywords de posicionamiento
- `link rel="canonical"`
