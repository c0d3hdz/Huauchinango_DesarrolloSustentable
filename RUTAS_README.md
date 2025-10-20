# Cómo Agregar Nuevas Rutas

Este documento explica cómo agregar nuevas rutas turísticas al sitio web de Huauchinango.

## Pasos para Agregar una Nueva Ruta

### 1. Crear un archivo MDX en `src/content/routes/`

Crea un nuevo archivo `.mdx` con el nombre de la ruta (usar kebab-case). Por ejemplo: `mi-nueva-ruta.mdx`

### 2. Agregar el frontmatter (metadatos)

Al inicio del archivo, agrega los metadatos entre `---`:

```mdx
---
title: "Nombre de la Ruta"
description: "Descripción breve de la ruta"
type: "cultural"  # o "senderismo"
difficulty: "facil"  # "facil", "moderado", o "dificil"
image: "/image/ruta-imagen.jpg"
duration: "2-3 horas"
distance: "5 km"  # opcional
mapUrl: "https://www.google.com/maps/embed?pb=..."  # opcional
guideContacts:  # opcional
  - name: "Nombre del Guía"
    phone: "+52 776 123 4567"
    email: "guia@ejemplo.com"  # opcional
---
```

### 3. Escribir el contenido

Después del frontmatter, escribe el contenido de la ruta usando Markdown:

```markdown
# Título de la Ruta

Descripción detallada de la ruta...

## Sección 1

Contenido de la sección...

### Subsección

Más detalles...

## Mapa

### Opción 1: Mapa interactivo con archivo KML (recomendado para senderismo)

import LeafletMap from "../../components/LeafletMap.astro";

<LeafletMap
  dataUrl={frontmatter.mapUrl}
  isKml={true}
  height="450px"
/>

### Opción 2: Google Maps embebido (para ubicaciones generales)

<iframe 
  src={frontmatter.mapUrl}
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>

## Consejos

- Consejo 1
- Consejo 2
- Consejo 3
```

## Tipos de Ruta

### Cultural (`type: "cultural"`)
- Color morado/magenta
- Icono: 🏛️
- Para recorridos históricos, culturales, y artesanales

### Senderismo (`type: "senderismo"`)
- Color verde/azul
- Icono: 🥾
- Para rutas de caminata y naturaleza

## Niveles de Dificultad

- **facil** (○) - Verde: Para todos los niveles
- **moderado** (◐) - Amarillo: Requiere condición física básica
- **dificil** (●) - Rojo: Requiere experiencia y buena condición física

## Campos Opcionales

### distance
Distancia total de la ruta (ej: "10 km", "5 km ida y vuelta")

### mapUrl
URL de Google Maps embebido o ruta a archivo KML local (ej: `/KML/mi-ruta.kml`) para mostrar la ubicación

### guideContacts
Lista de guías locales certificados:
```yaml
guideContacts:
  - name: "Juan Pérez"
    phone: "+52 776 123 4567"
    email: "juan@guias.mx"
  - name: "María López"
    phone: "+52 776 234 5678"
```

## Ejemplo Completo

```mdx
---
title: "Ruta del Café"
description: "Visita plantaciones de café y aprende sobre el proceso de producción"
type: "cultural"
difficulty: "facil"
image: "/image/cafe-ruta.jpg"
duration: "3 horas"
distance: "2 km"
mapUrl: "https://www.google.com/maps/embed?pb=..."
guideContacts:
  - name: "Carlos Café"
    phone: "+52 776 111 2222"
    email: "carlos@caferuta.mx"
---

# Ruta del Café

Descubre el mundo del café de Huauchinango visitando plantaciones tradicionales...

## Puntos de Interés

### Finca El Cafetal
Primera parada donde conocerás el proceso de cultivo...

### Tostador Tradicional
Observa cómo se tuesta el café de forma artesanal...

## Mapa

<iframe 
  src={frontmatter.mapUrl}
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>

## Qué Incluye

- Degustación de café
- Visita guiada por la plantación
- Taller de catación

## Contacto

{frontmatter.guideContacts && frontmatter.guideContacts.map(guide => (
  <div key={guide.name}>
    <strong>{guide.name}</strong>
    <br />
    Teléfono: {guide.phone}
    {guide.email && (
      <>
        <br />
        Email: {guide.email}
      </>
    )}
  </div>
))}
```

## Ubicación de Archivos

```
src/
├── content/
│   └── routes/
│       ├── mi-nueva-ruta.mdx       ← Aquí se crea la nueva ruta
│       ├── centro-historico.mdx
│       ├── cascadas-totolapa.mdx
│       └── ...
├── components/
│   └── RouteCard.astro             ← Componente de tarjeta (no modificar)
└── pages/
    ├── turismo.astro               ← Página principal de turismo (no modificar)
    └── rutas/
        └── [slug].astro            ← Plantilla de detalle (no modificar)
```

## Automático

Una vez que crees el archivo MDX:
1. La ruta aparecerá automáticamente en `/turismo` en la sección correspondiente
2. Se generará automáticamente una página en `/rutas/[nombre-de-ruta]`
3. El estilo se aplicará automáticamente según el tipo de ruta

## Build y Preview

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Imágenes

Coloca las imágenes en la carpeta `public/image/` y referéncialas como:
```
image: "/image/nombre-imagen.jpg"
```

## Mapas KML para Rutas de Senderismo

### ¿Qué es un archivo KML?

KML (Keyhole Markup Language) es un formato de archivo que permite mostrar rutas GPS en mapas interactivos. Es ideal para rutas de senderismo porque muestra:
- El trazado exacto del camino
- Puntos de interés en la ruta
- Elevación y topografía
- Coordenadas GPS precisas

### Cómo obtener un archivo KML

1. **Google Earth / Google Maps**: Puedes crear una ruta y exportarla como KML
2. **Aplicaciones GPS**: Apps como Wikiloc, AllTrails, o Strava permiten exportar rutas en formato KML
3. **Dispositivos GPS**: La mayoría de dispositivos GPS Garmin, etc. pueden exportar tracks en KML

### Cómo agregar un archivo KML a tu ruta

1. **Coloca el archivo KML** en la carpeta `public/KML/`:
   ```
   public/
   └── KML/
       ├── Zempoala.kml
       └── mi-nueva-ruta.kml  ← Tu archivo aquí
   ```

2. **En el frontmatter de tu ruta**, especifica la ruta al archivo:
   ```yaml
   ---
   title: "Mi Ruta de Senderismo"
   type: "senderismo"
   mapUrl: "/KML/mi-nueva-ruta.kml"
   # ... otros campos
   ---
   ```

3. **En el contenido**, importa y usa el componente LeafletMap:
   ```mdx
   import LeafletMap from "../../components/LeafletMap.astro";

   ## Mapa y Ubicación
   
   <LeafletMap
     dataUrl={frontmatter.mapUrl}
     isKml={true}
     height="450px"
   />
   ```

### Propiedades del componente LeafletMap

- `dataUrl`: Ruta al archivo KML (ej: `/KML/mi-ruta.kml`)
- `isKml`: `true` para archivos KML, `false` para GeoJSON
- `center`: Coordenadas del centro inicial `[latitud, longitud]` (opcional, se auto-calcula con KML)
- `zoom`: Nivel de zoom inicial (opcional, se auto-calcula con KML)
- `height`: Altura del mapa (por defecto `"400px"`)

### Ejemplo completo con KML

```mdx
---
title: "Cerro Zempoaltepetl"
description: "Ruta de senderismo al pico más alto de la región"
type: "senderismo"
difficulty: "moderado"
image: "/image/zempoala.jpg"
duration: "2-9 horas"
distance: "8 km (ida y vuelta)"
mapUrl: "/KML/Zempoala.kml"
guideContacts:
  - name: "Guía Local"
    phone: "+52 776 123 4567"
---

import LeafletMap from "../../components/LeafletMap.astro";

## Descripción de la Ruta

El Cerro Zempoaltépetl ofrece vistas panorámicas espectaculares...

## Mapa y Ubicación

<LeafletMap
  dataUrl={frontmatter.mapUrl}
  isKml={true}
/>

## Guías Locales Certificados

Para garantizar tu seguridad y una experiencia enriquecedora...
```

### Ventajas del mapa KML vs Google Maps

**Mapa KML (LeafletMap)**:
- ✅ Muestra el trazado exacto de la ruta
- ✅ Interactivo: zoom, desplazamiento, popups
- ✅ No requiere API key
- ✅ Funciona offline una vez cargado
- ✅ Ligero y rápido
- ✅ Muestra elevación y puntos de interés

**Google Maps embebido**:
- ✅ Bueno para ubicaciones generales
- ✅ Muestra negocios y puntos de interés de Google
- ✅ Familiar para los usuarios
- ❌ Requiere conexión constante
- ❌ Limitaciones de uso gratuito

### Recomendación

- **Para rutas de senderismo**: Usa LeafletMap con archivos KML
- **Para ubicaciones fijas** (museos, restaurantes, talleres): Usa Google Maps embebido
