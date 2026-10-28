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
- `src/data/technologies.ts`: categorías y tecnologías. Los lenguajes se presentan en un cajón transversal; frontend incluye web y móvil, y datos y DevOps tienen cajones separados. Los conceptos sin marca (RAG, embeddings, SQL, patrones y CI/CD) usan iconos representativos de Lucide. Los logos proceden de Simple Icons y SVG locales, con fuentes documentadas en `public/icons/tech/SOURCES.md`.
- `src/data/projects.ts`: fuente de datos de las tres plantillas de proyecto.
- `src/pages/proyectos/[slug].astro`: páginas de detalle generadas desde los datos.
- `src/styles/global.css`: sistema visual y adaptación a móvil.
- `src/styles/interactions.css`: iluminación, botones y estados interactivos de los enlaces.
- `src/scripts/motion.ts`: entradas, movimiento ambiental y seguimiento del puntero en inicio, proyectos y cajones. La luz utiliza coordenadas locales y se oculta al salir; respeta movimiento reducido.

Los proyectos actuales son **plantillas explícitas**, no trabajos reales. No publicar como portfolio terminado hasta completar sus datos. No se ha añadido una descarga pública del CV.

## Cómo completar un proyecto

1. Sustituir `title`, `slug`, `category` y `summary` por contenido real.
2. Completar `problem`, `contribution`, `solution`, `result` y `technologies`.
3. Colocar las capturas en `public/projects/<slug>/`.
4. Añadir `cover: '/projects/<slug>/portada.webp'` y las entradas de `screenshots` con `src`, `alt` y `caption`.
5. Añadir `demo` o `repository` solo cuando haya un enlace real y accesible. Son opcionales.
6. Cambiar `template` a `false`. La portada se utiliza automáticamente en el inicio y en la página del proyecto.

Material recomendado: una portada de aproximadamente 1600 × 1000, entre dos y cuatro capturas de flujos importantes y, opcionalmente, un video corto o grabación local. El texto alternativo describe lo que muestra cada imagen; el pie explica su relevancia. No presentar una portada conceptual como captura real.

Para trabajo privado o sin despliegue, documentar el caso con imágenes y una explicación del aporte personal. Mostrar resultados medidos solo si se dispone de evidencia. No es necesario proporcionar acceso al sistema o al código.

## Estado y siguientes pasos

Primera versión: inicio, tres plantillas de detalle, stack en cajones desplegables y contacto por correo, LinkedIn, GitHub, WhatsApp e Instagram. Pendientes de contenido: proyectos reales, capturas, resultados y enlaces opcionales; posible publicación IEEE y descarga del CV si se decide incluirlas.

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
