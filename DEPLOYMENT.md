# Guía de Despliegue en Producción

Este documento explica cómo está configurado el proyecto para su despliegue en producción y cómo solucionar problemas comunes.

## 🌐 URL de Producción

**Sitio web:** https://huauchinango-desarrollo-sustentable.vercel.app

El sitio está alojado en Vercel y se despliega automáticamente desde la rama `main`.

## ✅ Requisitos del Sistema

- **Node.js:** >= 18.0.0
- **npm:** >= 8.0.0
- **Memoria:** Mínimo 512 MB disponibles para el proceso de construcción

## 🏗️ Proceso de Construcción

### 1. Instalación de Dependencias

```bash
npm install
```

**Nota importante:** El comando `npm install` ejecuta automáticamente un script `postinstall` que:
- Crea el directorio `public/leaflet/`
- Copia los archivos CSS e imágenes de Leaflet desde `node_modules`

### 2. Construcción del Sitio

```bash
npm run build
```

Este comando:
- Compila todos los archivos Astro y MDX
- Genera páginas estáticas en el directorio `dist/`
- Optimiza CSS y JavaScript
- Procesa imágenes y recursos estáticos

### 3. Vista Previa Local

Para probar el sitio compilado localmente:

```bash
npm run preview
```

El sitio estará disponible en `http://localhost:4321`

## 📋 Configuración de Vercel

### Variables de Entorno (si fueran necesarias en el futuro)

Actualmente, el proyecto no requiere variables de entorno. Si necesitas agregar alguna en el futuro:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las variables necesarias

### Build Settings

Vercel detecta automáticamente la configuración de Astro, pero estos son los valores confirmados:

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 18.x (especificado en package.json)

## 🔧 Resolución de Problemas Comunes

### Problema: "Module not found: leaflet"

**Solución:** Asegúrate de que el script `postinstall` se haya ejecutado correctamente:

```bash
rm -rf node_modules public/leaflet
npm install
```

### Problema: "Cannot find module '@mapbox/togeojson'"

**Solución:** Reinstala las dependencias:

```bash
npm ci
```

### Problema: Mapas no se muestran en producción

**Verificaciones:**
1. Los archivos KML están en `public/KML/`
2. Las rutas en los archivos MDX usan rutas absolutas (`/KML/archivo.kml`)
3. Los archivos CSS de Leaflet se copiaron correctamente a `public/leaflet/`

### Problema: "Build failed" en Vercel

**Pasos a seguir:**
1. Verifica que la versión de Node.js sea >= 18.0.0
2. Revisa los logs de construcción en Vercel para identificar el error específico
3. Asegúrate de que todos los archivos necesarios estén en el repositorio
4. Verifica que no haya errores de sintaxis en archivos Astro o MDX

## 📊 Monitoreo del Sitio

### Vercel Analytics

Vercel proporciona análisis integrados para monitorear:
- Tráfico del sitio
- Velocidad de carga de páginas
- Errores en tiempo de ejecución

Accede a ellos desde: Dashboard → Analytics

### Verificación de Despliegue

Después de cada push a `main`, verifica:
1. El despliegue se completó exitosamente en Vercel
2. El sitio carga correctamente en la URL de producción
3. Todas las páginas son accesibles
4. Los mapas interactivos funcionan correctamente

## 🚀 Proceso de Despliegue

### Despliegue Automático (Recomendado)

1. Haz cambios en tu rama local
2. Prueba localmente con `npm run dev`
3. Construye y verifica con `npm run build && npm run preview`
4. Haz commit de tus cambios
5. Haz push a la rama `main`
6. Vercel automáticamente construirá y desplegará el sitio

### Despliegue Manual (si es necesario)

Si necesitas desplegar manualmente:

```bash
# Instala Vercel CLI
npm install -g vercel

# Inicia sesión
vercel login

# Despliega a producción
vercel --prod
```

## 📝 Checklist Pre-Despliegue

Antes de desplegar cambios importantes, verifica:

- [ ] El sitio construye sin errores (`npm run build`)
- [ ] Todas las páginas se generan correctamente
- [ ] Las rutas de imágenes son correctas
- [ ] Los enlaces internos funcionan
- [ ] Los mapas KML se cargan correctamente
- [ ] El sitio se ve bien en móvil y escritorio
- [ ] No hay errores en la consola del navegador

## 🔐 Consideraciones de Seguridad

- No cometas claves API o secretos en el repositorio
- Usa variables de entorno de Vercel para información sensible
- Mantén las dependencias actualizadas regularmente
- Revisa periódicamente los logs de Vercel por actividad inusual

## 📞 Soporte

Si encuentras problemas que no puedes resolver:

1. Revisa los logs de construcción en Vercel
2. Verifica la documentación de Astro: https://docs.astro.build
3. Consulta la documentación de Vercel: https://vercel.com/docs
4. Revisa issues similares en el repositorio de GitHub

## 🔄 Actualizaciones

Para actualizar las dependencias del proyecto:

```bash
# Verifica actualizaciones disponibles
npm outdated

# Actualiza dependencias menores
npm update

# Para actualizaciones mayores, actualiza package.json y ejecuta:
npm install
```

Siempre prueba las actualizaciones localmente antes de desplegar a producción.
