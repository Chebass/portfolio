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
  device?: "mobile";
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

export const mobileProjects: Project[] = [
  {
    slug: "siqiy",
    title: "Siqiy",
    category: "APP MÓVIL · DIBUJO Y LIBROS",
    context: "Proyecto personal · Demo local en Android",
    role: "Diseño de producto y desarrollo en Flutter",
    status: "Demo funcional · En evolución",
    device: "mobile",
    repository: "https://github.com/Chebass/siqiy",
    summary:
      "Un espacio tranquilo para dibujar y convertir esos dibujos en libros con portada, páginas animadas y exportación a PDF. Funciona sin conexión y sin cuentas: las obras se quedan en el dispositivo.",
    technologies: ["Flutter", "Dart", "Android"],
    cover: "/projects/apps-moviles/siqiy/cover.webp",
    coverWidth: 1600,
    coverHeight: 1000,
    template: false,
    problem:
      "Dibujar en el celular suele quedar en hojas sueltas que se pierden en la galería. Siqiy propone reunir esos trazos en libros: elegir una portada, ordenar las páginas y recorrerlas como si se hojeara un cuaderno.",
    contribution:
      "Concebí la propuesta y desarrollé la app completa: biblioteca, gestión de libros y hojas sueltas, el editor de dibujo con sus herramientas, el guardado local con recuperación y la exportación a PNG y PDF.",
    solutionTitle: "Del trazo al libro.",
    solution:
      "Una app en Flutter organizada por capas: dominio, coordinación del guardado, repositorio local, servicios de exportación e interfaz. Los libros se recorren en un carrusel con perspectiva y transición de portada; dentro, las páginas pasan con una animación. El editor guarda cada cambio de forma automática y conserva la revisión anterior para recuperarla.",
    resultTitle: "Una base para seguir creando.",
    result:
      "La demo funciona en Android sin backend, anuncios ni servicios de pago. Los pinceles son una primera implementación propia y la curvatura realista de la página queda para la siguiente fase. La versión para tiendas, la validación en iOS y la sincronización en la nube son pasos futuros, no funcionalidades disponibles.",
    galleryDescription:
      "Capturas de la demo con dibujos de ejemplo. Selecciona una para ampliarla.",
    features: [
      {
        title: "Biblioteca de libros",
        description:
          "Carrusel con perspectiva o cuadrícula, búsqueda por nombre y libros de bienvenida para empezar.",
      },
      {
        title: "Libros a tu medida",
        description:
          "De 1 a 30 páginas al crear y hasta 100 después; reordenar páginas, portadas con color, foto o dibujo.",
      },
      {
        title: "Editor de dibujo",
        description:
          "Lápiz, tinta, marcador y borrador, color y grosor, deshacer y rehacer, zoom y modo solo lápiz digital.",
      },
      {
        title: "Exportar y compartir",
        description:
          "PNG de la hoja abierta y PDF del libro con tamaño, orientación, márgenes, portada y numeración configurables.",
      },
    ],
    screenshots: [
      {
        src: "/projects/apps-moviles/siqiy/library.webp",
        width: 780,
        height: 1688,
        alt: "Biblioteca de Siqiy con un libro en el carrusel y el botón para crear uno nuevo.",
        caption:
          "La biblioteca presenta cada libro con su portada en un carrusel.",
      },
      {
        src: "/projects/apps-moviles/siqiy/editor.webp",
        width: 780,
        height: 1688,
        alt: "Editor de dibujo de Siqiy con un paisaje, paleta de colores y herramientas.",
        caption:
          "El editor reúne herramientas, colores y grosor con guardado automático.",
      },
      {
        src: "/projects/apps-moviles/siqiy/book.webp",
        width: 780,
        height: 1688,
        alt: "Vista de un libro en Siqiy con su portada y la primera página dibujada.",
        caption:
          "Dentro del libro, las páginas se recorren y se editan con un toque.",
      },
      {
        src: "/projects/apps-moviles/siqiy/drafts.webp",
        width: 780,
        height: 1688,
        alt: "Hojas sueltas de Siqiy con bocetos de una flor, un paisaje y un cielo nocturno.",
        caption:
          "Las hojas sueltas guardan ideas que luego pueden pasar a un libro.",
      },
      {
        src: "/projects/apps-moviles/siqiy/library-grid.webp",
        width: 780,
        height: 1688,
        alt: "Biblioteca de Siqiy en cuadrícula con tres libros de distintos colores.",
        caption:
          "La vista en cuadrícula permite ver todos los libros a la vez.",
      },
    ],
  },
  {
    slug: "calma",
    title: "Calma",
    category: "PLANTILLA DE RESERVAS · MOBILE FIRST",
    context: "Plantilla para pequeños negocios · Demo con datos ficticios",
    role: "Diseño de producto y desarrollo Full Stack",
    status: "Plantilla funcional · Pensada para el celular",
    device: "mobile",
    summary:
      "Una plantilla para que un pequeño negocio gestione sus reservas, su agenda y la comunicación con sus clientes desde el celular. «Calma» es el nombre de ejemplo de la demo, ambientada en un servicio de bienestar.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "PWA",
    ],
    cover: "/projects/apps-moviles/calma/cover.webp",
    coverWidth: 1600,
    coverHeight: 1000,
    template: false,
    problem:
      "Muchos negocios pequeños coordinan sus citas por mensajes y notas sueltas. Eso dificulta saber qué horarios quedan libres, recordar a cada cliente su cita y mantener un historial ordenado, sobre todo cuando todo se gestiona desde el teléfono.",
    contribution:
      "Diseñé y desarrollé la aplicación completa: el panel de la persona que administra el negocio, la reserva pública para clientes sin cuenta, la lógica de disponibilidad, los enlaces para confirmar o modificar citas y la integración con Supabase.",
    solutionTitle: "La agenda del negocio, en el bolsillo.",
    solution:
      "Una web app mobile first con Next.js y Supabase, instalable como PWA. Los clientes reservan en tres pasos sin crear una cuenta; el negocio ve su día, su calendario y las fichas de clientes, y envía recordatorios con plantillas de WhatsApp. La seguridad se apoya en autenticación, políticas RLS, Turnstile y límites de frecuencia.",
    resultTitle: "Una base lista para adaptar.",
    result:
      "La demo funciona con datos ficticios guardados en el navegador y puede conectarse a un proyecto de Supabase para uso real. Está pensada para una sola persona administradora: los pagos, la API de WhatsApp y la gestión de varias sedes o profesionales quedan fuera de su alcance actual.",
    galleryDescription:
      "Recorrido de la demo en una pantalla móvil, con datos ficticios. Selecciona una captura para ampliarla.",
    features: [
      {
        title: "Reserva sin cuenta",
        description:
          "Tres pasos para elegir día y horario, dejar los datos y recibir un enlace para confirmar, cancelar o modificar.",
      },
      {
        title: "Agenda y disponibilidad",
        description:
          "Vista del día, calendario semanal y mensual, horarios fijos y bloqueos puntuales sin choques entre citas.",
      },
      {
        title: "Clientes y comunicación",
        description:
          "Fichas con notas e historial, recordatorios con plantillas editables de WhatsApp y avisos dentro de la app.",
      },
      {
        title: "Instalable y privada",
        description:
          "PWA con notificaciones push, acceso protegido para quien administra y exportación de datos a CSV.",
      },
    ],
    screenshots: [
      {
        src: "/projects/apps-moviles/calma/home.webp",
        width: 780,
        height: 1688,
        alt: "Inicio del panel de Calma con resumen de citas del día.",
        caption:
          "El inicio resume las citas del día y su estado de confirmación.",
      },
      {
        src: "/projects/apps-moviles/calma/booking.webp",
        width: 780,
        height: 1688,
        alt: "Página pública de reserva de Calma con la descripción del servicio.",
        caption:
          "La reserva pública presenta el servicio y guía al cliente paso a paso.",
      },
      {
        src: "/projects/apps-moviles/calma/booking-times.webp",
        width: 780,
        height: 1688,
        alt: "Selección de día y horarios disponibles en la reserva de Calma.",
        caption: "Solo se muestran los horarios realmente disponibles.",
      },
      {
        src: "/projects/apps-moviles/calma/calendar.webp",
        width: 780,
        height: 1688,
        alt: "Calendario mensual de Calma con citas marcadas por estado.",
        caption:
          "El calendario mensual señala las citas de cada día por estado.",
      },
      {
        src: "/projects/apps-moviles/calma/appointment.webp",
        width: 780,
        height: 1688,
        alt: "Detalle de una cita ficticia en Calma con acciones de llamada, WhatsApp y cambio de horario.",
        caption:
          "Cada cita reúne contacto, cambios de estado e historial en un solo lugar.",
      },
      {
        src: "/projects/apps-moviles/calma/clients.webp",
        width: 780,
        height: 1688,
        alt: "Listado de clientes ficticios de Calma con búsqueda por nombre o celular.",
        caption:
          "Las fichas de clientes permiten buscar, anotar y revisar sus visitas.",
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
      "Una app en Flutter para dibujar y crear libros, y una plantilla de reservas pensada primero para el celular.",
    template: false,
    projects: mobileProjects,
    planned: [],
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
