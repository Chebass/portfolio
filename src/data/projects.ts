export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  cover?: string;
  screenshots: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  demo?: string;
  repository?: string;
  problem: string;
  contribution: string;
  solution: string;
  result: string;
  template: boolean;
  context?: string;
  role?: string;
  features?: { title: string; description: string }[];
}

export interface ProjectCategory {
  slug: string;
  title: string;
  category: string;
  summary: string;
  template: boolean;
  projects: Project[];
  planned: string[];
}

export const websiteProjects: Project[] = [
  {
    slug: "sdi",
    title: "SDI Ingenieros",
    category: "WEB CORPORATIVA",
    context: "Negocio familiar",
    role: "Desarrollo del sitio web",
    summary:
      "Una presencia digital para un negocio familiar de ingeniería: servicios de puesta a tierra, experiencia y contacto directo por WhatsApp.",
    technologies: ["Astro", "JavaScript", "CSS", "Vercel"],
    cover: "/projects/sitios-web/sdi/cover.webp",
    demo: "https://sdi-sable.vercel.app/",
    template: false,
    problem:
      "Presentar los servicios técnicos de SDI de forma comprensible y facilitar que una persona interesada pueda consultar por su proyecto.",
    contribution:
      "Desarrollé la web informativa del negocio familiar, organizando la presentación de la empresa, sus servicios y los puntos de contacto.",
    solution:
      "Una navegación por secciones conecta la historia de la empresa, el catálogo de servicios, su proceso de trabajo y el contacto. El formulario prepara una consulta para continuar en WhatsApp.",
    result:
      "La demo está publicada y permite explorar la propuesta de SDI y acceder a consultas contextualizadas por servicio. La atención continúa directamente con el negocio.",
    features: [
      {
        title: "Servicios con contexto",
        description:
          "Diseño, instalación vertical y horizontal, mediciones, mantenimiento y asesoría técnica.",
      },
      {
        title: "Contacto por WhatsApp",
        description:
          "Accesos por servicio y un formulario para preparar el mensaje de consulta.",
      },
      {
        title: "Una empresa con historia",
        description:
          "Presentación, valores, proceso de trabajo y archivo fotográfico.",
      },
      {
        title: "Información fácil de encontrar",
        description:
          "Preguntas frecuentes, datos de contacto y navegación dentro de la página.",
      },
    ],
    screenshots: [
      {
        src: "/projects/sitios-web/sdi/services.webp",
        width: 1392,
        height: 1335,
        alt: "Sección de servicios de SDI Ingenieros con imágenes de trabajos y opciones de consulta.",
        caption:
          "El catálogo organiza los servicios técnicos y sus accesos a WhatsApp.",
      },
      {
        src: "/projects/sitios-web/sdi/contact.webp",
        width: 1392,
        height: 737,
        alt: "Formulario de SDI para preparar una consulta por WhatsApp.",
        caption:
          "El contacto recoge el nombre, servicio y contexto antes de continuar en WhatsApp.",
      },
      {
        src: "/projects/sitios-web/sdi/mobile.webp",
        width: 390,
        height: 844,
        alt: "Página de inicio de SDI Ingenieros en una pantalla móvil.",
        caption: "La misma propuesta, adaptada a una pantalla móvil.",
      },
    ],
  },
  {
    slug: "under-net",
    title: "Bajo la Red",
    category: "WEB CULTURAL & INTERACTIVA",
    context: "Proyecto universitario · Under-Net",
    role: "Desarrollo web e integración de reseñas",
    summary:
      "El espacio digital de un documental universitario sobre la pesca y la comunidad de Chancay, con contenido visual y una conversación abierta a través de reseñas.",
    technologies: ["Next.js", "React", "Supabase", "Cloudflare Pages"],
    cover: "/projects/sitios-web/under-net/cover.webp",
    demo: "https://under-net.pages.dev/",
    template: false,
    problem:
      "Reunir la historia del documental y sus materiales en un lugar accesible, y permitir que los visitantes compartan su mirada sobre el proyecto.",
    contribution:
      "Desarrollé el sitio y sus interacciones, junto con el sistema de reseñas conectado a Supabase. El contenido y la realización audiovisual pertenecen al equipo del documental.",
    solution:
      "Una experiencia por capítulos combina historia, territorio, galería, materiales y un cómic navegable. Las redes conectan con el equipo y las reseñas incorporan calificación y comentarios.",
    result:
      "La demo permite explorar el universo de Bajo la Red y consultar reseñas publicadas. El contenido audiovisual enlaza al perfil de Vimeo del equipo, mientras el sitio mantiene su espacio de presentación.",
    features: [
      {
        title: "Narrativa por capítulos",
        description:
          "Historia, territorio y galería alrededor de la actividad pesquera en Chancay.",
      },
      {
        title: "Un cómic para explorar",
        description: "Lectura por escenas y acceso a su versión en PDF.",
      },
      {
        title: "Reseñas con Supabase",
        description:
          "Calificación y comentarios con consentimiento, verificación de envío y moderación.",
      },
      {
        title: "Conexiones con el proyecto",
        description:
          "Accesos a Instagram, TikTok, Vimeo y una ubicación con mapa bajo demanda.",
      },
    ],
    screenshots: [
      {
        src: "/projects/sitios-web/under-net/comic.webp",
        width: 1440,
        height: 1218,
        alt: "Lector del cómic de Bajo la Red con controles para recorrer sus escenas.",
        caption:
          "El lector permite avanzar por las escenas y acceder al PDF del cómic.",
      },
      {
        src: "/projects/sitios-web/under-net/reviews.webp",
        width: 1440,
        height: 1255,
        alt: "Sección de reseñas de Bajo la Red con calificaciones, comentarios y formulario.",
        caption:
          "Reseñas publicadas y un formulario conectado a Supabase, con verificación y moderación.",
      },
      {
        src: "/projects/sitios-web/under-net/mobile.webp",
        width: 390,
        height: 844,
        alt: "Inicio de Bajo la Red adaptado a una pantalla móvil.",
        caption:
          "Una presentación adaptable para explorar la historia desde el móvil.",
      },
    ],
  },
];

export const projects: ProjectCategory[] = [
  {
    slug: "sitios-web",
    title: "Sitios que cuentan historias.",
    category: "SITIOS WEB",
    summary:
      "Dos contextos, dos identidades: una web para SDI Ingenieros y el espacio digital del documental Bajo la Red.",
    template: false,
    projects: websiteProjects,
    planned: [],
  },
  {
    slug: "apps-moviles",
    title: "Ideas que van contigo.",
    category: "APPS MÓVILES",
    summary:
      "Un espacio para explorar dos demos móviles, sus pantallas y las decisiones detrás de cada experiencia.",
    template: true,
    projects: [],
    planned: ["Primera demo móvil", "Segunda demo móvil"],
  },
  {
    slug: "aplicaciones-web",
    title: "Productos para el día a día.",
    category: "APLICACIONES WEB",
    summary:
      "Experiencia en aplicaciones empresariales y un proyecto personal de gestión para centros psicológicos.",
    template: true,
    projects: [],
    planned: ["Laraigo", "Aplicación para centros psicológicos"],
  },
];
