export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  cover?: string;
  coverWidth?: number;
  coverHeight?: number;
  status?: string;
  demoLabel?: string;
  stackLabel?: string;
  solutionTitle?: string;
  resultTitle?: string;
  galleryDescription?: string;
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

export const webAppProjects: Project[] = [
  {
    slug: "mindy",
    title: "Mindy",
    category: "GESTIÓN PARA CENTROS PSICOLÓGICOS",
    context: "Proyecto personal · Demo con información ficticia",
    role: "Diseño de producto y desarrollo Full Stack",
    status: "Demo funcional · En evolución",
    summary:
      "Un espacio de trabajo para que los centros psicológicos organicen pacientes, citas y evaluaciones. Pensado desde la práctica diaria y con la posibilidad de evolucionar hacia otros centros médicos.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
    cover: "/projects/aplicaciones-web/mindy/cover.webp",
    coverWidth: 1600,
    coverHeight: 718,
    template: false,
    problem:
      "La información de pacientes, la agenda y las pruebas pueden terminar repartidas entre distintas herramientas. Mindy nace para reunir ese trabajo en un mismo centro, con espacios y responsabilidades para psicólogos y managers.",
    contribution:
      "Concebí la propuesta y desarrollé la interfaz y la API: acceso por centro y roles, gestión de pacientes, calendario, biblioteca de pruebas, historial de evaluaciones, perfil y preferencias. Construí los flujos para conectar cada evaluación con su paciente y mantener separadas las agendas de los profesionales.",
    solutionTitle: "El trabajo diario, conectado.",
    solution:
      "Una aplicación con Next.js y NestJS, PostgreSQL y Prisma. Desde el dashboard se accede a pacientes y próximas citas; el calendario permite registrar citas y recordatorios, y las pruebas se aplican a un paciente seleccionado conservando su resultado y la versión utilizada. Los permisos distinguen la gestión administrativa del acceso a resultados clínicos.",
    resultTitle: "Una base funcional para seguir creciendo.",
    result:
      "La demo integra los principales flujos con información ficticia y avisos dentro de la aplicación. Los avisos del dispositivo requieren mantener Mindy abierto y dependen del navegador. Quedan por implementar los recordatorios por correo para profesionales y pacientes y ampliar la configuración del centro. La adaptación a centros médicos es una dirección futura, no una funcionalidad ya disponible.",
    galleryDescription:
      "Recorrido de la demo con información ficticia. Selecciona una captura para ampliarla.",
    features: [
      {
        title: "Pacientes y responsables",
        description:
          "Registro, búsqueda y actualización de pacientes, con asignación al psicólogo y alcance según el rol y el centro activo.",
      },
      {
        title: "Agenda y recordatorios",
        description:
          "Calendario semanal, citas vinculadas a pacientes y recordatorios personales. Avisos dentro de la app y protección frente a citas superpuestas.",
      },
      {
        title: "Pruebas con historial",
        description:
          "Biblioteca por centro, favoritos y nuevas fichas. Cada aplicación conserva el paciente, profesional, versión y resultado para su consulta posterior.",
      },
      {
        title: "Perfil y preferencias",
        description:
          "Edición de datos personales y contraseña, temas claro y oscuro y tiempo de inactividad. Roles de psicólogo y manager por membresía.",
      },
    ],
    screenshots: [
      {
        src: "/projects/aplicaciones-web/mindy/patients.webp",
        width: 1600,
        height: 724,
        alt: "Listado de pacientes de demostración en Mindy, con responsables y pruebas aplicadas.",
        caption:
          "Pacientes, búsqueda y acceso a su información desde un mismo listado.",
      },
      {
        src: "/projects/aplicaciones-web/mindy/patient-history.webp",
        width: 1600,
        height: 722,
        alt: "Panel de pruebas aplicadas a un paciente ficticio en Mindy.",
        caption:
          "Las evaluaciones quedan vinculadas al paciente y al profesional que las realizó.",
      },
      {
        src: "/projects/aplicaciones-web/mindy/tests.webp",
        width: 1600,
        height: 726,
        alt: "Biblioteca de pruebas psicológicas de Mindy con favoritos e historial.",
        caption:
          "Biblioteca del centro, favoritos y evaluaciones recientes para continuar cada proceso.",
      },
      {
        src: "/projects/aplicaciones-web/mindy/calendar.webp",
        width: 1600,
        height: 757,
        alt: "Agenda semanal de Mindy con una cita de demostración y sus detalles.",
        caption:
          "Calendario semanal con citas, recordatorios y horarios en la zona del centro.",
      },
      {
        src: "/projects/aplicaciones-web/mindy/settings.webp",
        width: 1600,
        height: 755,
        alt: "Preferencias de apariencia y tiempo de sesión en Mindy.",
        caption:
          "Preferencias personales de apariencia y cierre de sesión por inactividad.",
      },
      {
        src: "/projects/aplicaciones-web/mindy/profile.webp",
        width: 1600,
        height: 758,
        alt: "Perfil del profesional en Mindy con información personal y resumen de actividad.",
        caption:
          "El perfil reúne datos de la cuenta, membresía y actividad del profesional.",
      },
    ],
  },
  {
    slug: "laraigo",
    title: "Laraigo",
    category: "EXPERIENCIA PROFESIONAL · IA & PRODUCTO",
    context: "Producto de Laraigo · Uno de mis empleadores",
    role: "Desarrollo de módulos · Full Stack e integraciones IA",
    status: "Producto empresarial · Aporte como parte del equipo",
    demo: "https://www.laraigo.com/",
    demoLabel: "Conocer Laraigo",
    stackLabel: "TECNOLOGÍAS EN MI PARTICIPACIÓN",
    summary:
      "Uno de los productos en los que más he trabajado como desarrollador: una plataforma empresarial de automatización y comunicación omnicanal. Mi participación destaca en agentes IA, RAG y orquestación de distintos proveedores. La aplicación pertenece a Laraigo.",
    technologies: [
      "Next.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "OpenAI APIs",
      "Anthropic",
      "RAG",
      "Embeddings",
      "Vector Search",
    ],
    cover: "/projects/aplicaciones-web/laraigo/cover.webp",
    coverWidth: 1600,
    coverHeight: 758,
    template: false,
    problem:
      "Llevar la IA al trabajo de una empresa requiere conectar modelos, conocimiento y herramientas con las conversaciones y procesos de sus usuarios. Mi trabajo en Laraigo se enfoca en desarrollar partes de esa experiencia dentro de un producto compartido con el equipo.",
    contribution:
      "He participado en el desarrollo de módulos de agentes y asistentes IA, con especial foco en el proyecto de RAG y la orquestación de varios proveedores. También he trabajado en las experiencias de configuración, conversación y plantillas de comunicación que se muestran en estas capturas.",
    solutionTitle: "Agentes con conocimiento y contexto.",
    solution:
      "El trabajo combina recuperación de información para aportar contexto a los modelos con la configuración de agentes, bases de conocimiento y herramientas. Las pantallas permiten definir modelos e instrucciones y organizar asistentes, incluidos escenarios multiagente con un orquestador y agentes especializados.",
    resultTitle: "Experiencia construyendo en equipo.",
    result:
      "Esta experiencia reúne desarrollo de producto empresarial e integración de IA en flujos de uso reales. Presento una selección de los módulos en los que he trabajado, no la autoría de toda la plataforma. Laraigo es el propietario del producto; el enlace lleva a su web pública de presentación y no a una demo desarrollada por mí de forma independiente.",
    galleryDescription:
      "Selección de módulos de Laraigo en los que he trabajado. Selecciona una captura para ampliarla.",
    features: [
      {
        title: "Agentes y proveedores IA",
        description:
          "Configuración de modelos, instrucciones, parámetros de respuesta y modelos de respaldo de distintos proveedores.",
      },
      {
        title: "RAG y bases de conocimiento",
        description:
          "Mi foco principal: conectar la recuperación de información con las respuestas de los agentes para trabajar con conocimiento contextual.",
      },
      {
        title: "Asistentes y orquestación",
        description:
          "Experiencias para configurar copilots y escenarios multiagente, con permisos, agentes especializados y un orquestador.",
      },
      {
        title: "Conversación y comunicación",
        description:
          "Interfaz de chat con historial y presentación de respuestas, junto con configuración y vista previa de plantillas de comunicación.",
      },
    ],
    screenshots: [
      {
        src: "/projects/aplicaciones-web/laraigo/agents.webp",
        width: 1600,
        height: 763,
        alt: "Configuración de un agente IA en Laraigo, con modelo, instrucciones y parámetros.",
        caption:
          "Configuración de agentes: proveedor, modelo, instrucciones y opciones de respuesta.",
      },
      {
        src: "/projects/aplicaciones-web/laraigo/chat.webp",
        width: 1600,
        height: 724,
        alt: "Interfaz de conversación con un agente IA en Laraigo.",
        caption:
          "La experiencia conversacional reúne historial y respuestas del agente.",
      },
      {
        src: "/projects/aplicaciones-web/laraigo/cover.webp",
        width: 1600,
        height: 758,
        alt: "Configuración de asistentes Copilot y un escenario multiagente en Laraigo.",
        caption:
          "Asistentes Copilot: acceso de usuarios, bases de conocimiento y configuración multiagente.",
      },
      {
        src: "/projects/aplicaciones-web/laraigo/templates.webp",
        width: 1600,
        height: 756,
        alt: "Editor de plantillas de comunicación HSM de Laraigo con vista previa.",
        caption:
          "Plantillas de comunicación con categorías, formatos y vista previa del mensaje.",
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
    template: false,
    projects: webAppProjects,
    planned: [],
  },
];
