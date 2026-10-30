# Sebastian Delgado — Portfolio

Base local del portfolio de AI Engineering / Full Stack Developer. Astro, TypeScript, GSAP y CSS; negro como fondo, celeste `#D0EBF2` como acento, Inter e Instrument Serif alojadas localmente. Iconos de interfaz de Lucide y logos de Simple Icons renderizados como SVG durante el build, sin peticiones a un CDN de iconos.

## Desarrollo

Requiere Node.js 24.x, declarado en `package.json` y `.nvmrc`.

```sh
npm install
npm run dev
```

Abrir la dirección local indicada por Astro. `npm run check` verifica tipos y plantillas; `npm run build` genera el sitio estático en `dist/`; `npm run preview` permite revisarlo.

## Formato del código

Usamos Prettier con sus opciones predeterminadas y `prettier-plugin-astro` para archivos `.astro`, incluidos sus bloques de TypeScript y CSS. La configuración de EditorConfig establece indentación de dos espacios, UTF-8 y saltos de línea LF.

- `npm run format`: aplica el formato a los archivos del proyecto.
- `npm run format:check`: comprueba el formato sin modificar archivos.

Se excluyen dependencias, archivos generados, herramientas temporales y `package-lock.json`.

## Contenido

- `src/pages/index.astro`: presentación, sobre mí y contacto. Contenido basado en el CV facilitado por Sebastian.
- `src/components/AboutSection.astro`: sección editorial sobre Sebastian, experiencia y servicios, antes de los proyectos. Usa las fotos originales de `src/assets/about/`, optimizadas por Astro; el título universitario se amplía en un diálogo accesible.
- `src/components/TechStack.astro`: seis cajones independientes, inicialmente cerrados, con apertura animada e icono y nombre para cada elemento. Funcionan con ratón, teclado y pantallas táctiles; sin JavaScript mantienen la apertura nativa de `details`.
- `src/components/TechLogo.astro`: renderizador compartido de logos, colores y fondos de contraste para el stack y la sección «Construido con» de cada proyecto. El detalle busca las tecnologías por nombre en el mismo catálogo.
- `src/data/technologies.ts`: categorías y tecnologías. Los lenguajes se presentan en un cajón transversal; frontend incluye web y móvil, y datos y DevOps tienen cajones separados. Los conceptos sin marca (RAG, embeddings, SQL, patrones y CI/CD) usan iconos representativos de Lucide. Los logos proceden de Simple Icons y SVG locales, con fuentes documentadas en `public/icons/tech/SOURCES.md`.
- `src/data/projects.ts`: tres categorías (sitios web, apps móviles y aplicaciones web). `websiteProjects` contiene SDI Ingenieros y Bajo la Red; `mobileProjects`, Siqiy y Calma; `webAppProjects`, Mindy y Laraigo. `device: "mobile"` presenta todas las capturas de un caso como pantallas de teléfono.
- `src/components/ProjectCards.astro`: tarjetas de categorías con capturas reales o portadas conceptuales claramente identificadas.
- `src/components/ProjectCase.astro`: detalle de cada proyecto: contexto, contribución, solución, resultado, funcionalidades y capturas.
- `src/pages/proyectos/[slug].astro`: páginas por categoría, con pestañas accesibles para elegir un caso y visor de capturas.
- `src/styles/global.css`: sistema visual y adaptación a móvil.
- `src/styles/interactions.css`: iluminación, botones y estados interactivos de los enlaces.
- `src/scripts/motion.ts`: entradas, movimiento ambiental y seguimiento del puntero en inicio, proyectos y cajones. La luz utiliza coordenadas locales y se oculta al salir; respeta movimiento reducido.
- `src/scripts/project-motion.ts`: entradas por scroll en el caso visible, indicador deslizante de pestañas, progreso de lectura y apertura del visor. Al cambiar de proyecto limpia las animaciones anteriores; los cambios de preferencia de movimiento se aplican sin recargar la página.

Las tres categorías tienen dos casos cada una. No se ha añadido una descarga pública del CV.

## Cómo completar un proyecto

1. Añadir un objeto `Project` al arreglo `projects` de su categoría, con `title`, `slug`, `category` y `summary` reales.
2. Completar `context`, `role`, `problem`, `contribution`, `solution`, `result`, `features` y `technologies`.
3. Colocar las capturas en `public/projects/<categoria>/<proyecto>/`.
4. Añadir `cover` y las entradas de `screenshots` con `src`, `alt`, `caption`, `width` y `height`. Un archivo `mobile.webp` se presenta como captura móvil en la galería.
5. Añadir `demo` o `repository` solo cuando haya un enlace real y accesible. Son opcionales. La interfaz no muestra botones de código sin URL.
6. Cambiar `template` a `false` en la categoría al incorporar sus casos. Las capturas se utilizan en el inicio y en el detalle.

Las fichas de sitios web se pueden compartir con `/proyectos/sitios-web#sdi` y `/proyectos/sitios-web#under-net`. Las pestañas admiten flechas, Inicio, Fin y el historial del navegador. Sin JavaScript se muestran ambos casos y los enlaces funcionan como anclas.

Las capturas de las demos fueron tomadas el 28 de octubre de 2026 y convertidas a WebP. SDI usa Astro y está alojado en Vercel; Bajo la Red usa Next.js/React, Supabase para reseñas y Cloudflare Pages. No se enviaron consultas ni reseñas para preparar este material. Quedan por ampliar los aprendizajes personales, fechas, métricas verificables y repositorios que Sebastian decida compartir.

Material recomendado: una portada de aproximadamente 1600 × 1000, entre dos y cuatro capturas de flujos importantes y, opcionalmente, un video corto o grabación local. El texto alternativo describe lo que muestra cada imagen; el pie explica su relevancia. No presentar una portada conceptual como captura real.

Para trabajo privado o sin despliegue, documentar el caso con imágenes y una explicación del aporte personal. Mostrar resultados medidos solo si se dispone de evidencia. No es necesario proporcionar acceso al sistema o al código.

## Estado y siguientes pasos

Primera versión: inicio, tres categorías de proyectos (sitios web, apps móviles y aplicaciones web) con dos casos cada una, stack en cajones desplegables y contacto por correo, LinkedIn, GitHub, WhatsApp e Instagram. Pendientes: aprendizajes, resultados y enlaces opcionales de cada caso; posible publicación IEEE y descarga del CV.

Los casos `/proyectos/aplicaciones-web#mindy` y `/proyectos/aplicaciones-web#laraigo` comparten las pestañas, animaciones y galería ampliable de los sitios web. Las once capturas originales facilitadas por Sebastian se optimizaron a WebP (máximo 1600 px) y están en `public/projects/aplicaciones-web/`.

Mindy se documenta como proyecto personal y demo con datos ficticios, a partir del README del proyecto y las capturas entregadas. Los avisos dentro de la app están implementados; los correos, la ampliación de la configuración del centro y su adaptación a otras especialidades se presentan como pendientes o proyección futura. No se publica una URL de demo ni de código sin disponer de ella.

Laraigo se atribuye expresamente a la empresa y la participación se limita a los módulos descritos por Sebastian. El botón lleva a su web comercial, no a una demo personal. El resumen público se contrastó con [Laraigo](https://www.laraigo.com/) y su [guía de agentes IA](https://academy.laraigo.com/2025/09/29/entrenamiento-de-agente-genai-en-laraigo/). La lista de IA representa el alcance de la participación, no el stack completo del producto. Los modelos concretos visibles en las capturas no se presentan como catálogo vigente de proveedores.

Los casos `/proyectos/apps-moviles#siqiy` y `/proyectos/apps-moviles#calma` usan una galería de pantallas de teléfono; el visor ajusta las capturas verticales a la altura de la ventana. En el inicio, la tarjeta de apps móviles muestra la primera captura de cada caso dentro de un teléfono.

Siqiy (Flutter, demo local en Android, sin backend) se documenta a partir de su README y su repositorio público. Las capturas se generaron el 30 de octubre de 2026 con el entorno de pruebas de Flutter 3.47.7 en un lienzo de 390 × 844, con dibujos de ejemplo creados para la ocasión; la exportación PDF, la importación de fotos y el rendimiento en hardware real no aparecen en ellas.

Calma es una plantilla de reservas mobile first (Next.js, Supabase, PWA) para pequeños negocios. «Calma» es un nombre de ejemplo aplicado solo a la demo visual; el proyecto original usa otro nombre y no se enlaza. Las capturas se tomaron el 30 de octubre de 2026 en modo demostración local con datos ficticios, a 390 × 844. No se hicieron reservas reales ni se enviaron mensajes. Las portadas de ambos casos son composiciones de tres capturas reales.

## Despliegue en Vercel

El sitio genera archivos estáticos y no necesita adaptador SSR, servidor, base de datos ni variables de entorno. `vercel.json` declara estos ajustes:

| Ajuste            | Valor                       |
| ----------------- | --------------------------- |
| Framework         | Astro                       |
| Root Directory    | Raíz del repositorio (`./`) |
| Node.js           | 24.x                        |
| Install Command   | `npm ci`                    |
| Build Command     | `npm run build`             |
| Output Directory  | `dist`                      |
| Production Branch | `main`                      |

Importar `Chebass/portfolio` desde GitHub en Vercel y desplegar con estos valores. El lockfile se incluye para instalar las versiones comprobadas. La configuración local de Vercel, archivos `.env`, herramientas temporales y archivos generados están excluidos de Git.

Antes de subir cambios, ejecutar `npm run format:check`, `npm run check` y `npm run build`. Las plantillas de proyecto siguen pendientes de contenido real; esto no impide desplegar una primera versión de revisión.
