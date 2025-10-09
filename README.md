# Huauchinango - Turismo y Desarrollo Sustentable

Sitio web informativo sobre turismo, flora, gastronomía y desarrollo sustentable de la región de Huauchinango.

## 🌐 Sobre el Proyecto

Este sitio web fue desarrollado con [Astro](https://astro.build) para la materia de Desarrollo Sustentable. Presenta información sobre:

- 🏞️ **Turismo**: Lugares turísticos y atracciones naturales
- 🌿 **Flora**: Biodiversidad y conservación de la región
- 🍽️ **Gastronomía**: Platillos tradicionales y cultura culinaria
- 📝 **Blog**: Artículos sobre la región con contenido multimedia

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/c0d3hdz/Huauchinango_DesarrolloSustentable.git
cd Huauchinango_DesarrolloSustentable

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el sitio para producción
- `npm run preview` - Previsualiza la versión de producción

## 📁 Estructura del Proyecto

```
├── src/
│   ├── content/
│   │   ├── blog/          # Artículos del blog en formato MDX
│   │   └── config.ts      # Configuración de colecciones
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base del sitio
│   ├── pages/
│   │   ├── blog/          # Páginas del blog
│   │   ├── index.astro    # Página de inicio
│   │   ├── turismo.astro  # Página de turismo
│   │   ├── flora.astro    # Página de flora
│   │   └── gastronomia.astro  # Página de gastronomía
│   └── styles/
│       └── global.css     # Estilos globales
├── public/                # Archivos estáticos
└── astro.config.mjs      # Configuración de Astro
```

## ✨ Características

- ⚡ Sitio estático ultra-rápido generado con Astro
- 📱 Diseño responsive que funciona en todos los dispositivos
- 📝 Blog con soporte para MDX (Markdown + JSX)
- 🗺️ Integración de mapas interactivos
- 🎨 Diseño moderno con CSS personalizado
- ♿ Accesible y optimizado para SEO

## 📝 Agregar Contenido al Blog

Para agregar un nuevo artículo al blog:

1. Crea un nuevo archivo `.mdx` en `src/content/blog/`
2. Agrega el frontmatter con la información del artículo:

```mdx
---
title: "Título del Artículo"
description: "Descripción breve del contenido"
date: 2024-03-20
author: "Tu Nombre"
---

# Contenido del artículo

Escribe tu contenido aquí usando Markdown...
```

3. El artículo aparecerá automáticamente en la página del blog

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build) - Framework web estático
- [MDX](https://mdxjs.com/) - Markdown con componentes JSX
- CSS personalizado - Para estilos y diseño

## 📄 Licencia

Este proyecto es para fines educativos en el contexto de la materia de Desarrollo Sustentable.
