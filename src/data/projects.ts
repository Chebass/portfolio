export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  cover?: string;
  screenshots: { src: string; alt: string; caption: string }[];
  demo?: string;
  repository?: string;
  problem: string;
  contribution: string;
  solution: string;
  result: string;
  template: boolean;
}

// Son plantillas editoriales, no proyectos ni experiencia atribuida a Sebastián.
export const projects: Project[] = [
  {
    slug: "proyecto-ia",
    title: "Inteligencia aplicada.",
    category: "AI ENGINEERING",
    summary:
      "Un espacio para documentar una solución de inteligencia artificial: del problema al producto.",
    technologies: [],
    screenshots: [],
    template: true,
    problem: "¿Qué problema resuelve y quién necesita resolverlo?",
    contribution: "¿Cuál fue tu rol y qué partes construiste?",
    solution:
      "Describe el flujo, los modelos utilizados y cómo evaluaste la calidad de las respuestas.",
    result:
      "Incluye resultados verificables, limitaciones y aprendizajes. No necesitas una demo pública.",
  },
  {
    slug: "producto-full-stack",
    title: "De la idea al producto.",
    category: "FULL STACK",
    summary:
      "Un espacio para mostrar una aplicación completa y las decisiones que la hacen funcionar.",
    technologies: [],
    screenshots: [],
    template: true,
    problem: "Describe el contexto y la necesidad del usuario.",
    contribution: "Explica tu responsabilidad en frontend, backend y datos.",
    solution:
      "Presenta los flujos principales, la arquitectura y las decisiones técnicas.",
    result:
      "Comparte el estado real del producto y lo aprendido durante el desarrollo.",
  },
  {
    slug: "integraciones",
    title: "Conectar. Automatizar.",
    category: "INTEGRACIONES",
    summary:
      "Un espacio para explicar una integración o automatización mediante su flujo y sus resultados.",
    technologies: [],
    screenshots: [],
    template: true,
    problem: "¿Qué proceso manual o conexión entre sistemas querías resolver?",
    contribution: "Detalla tu aporte y los límites de tu participación.",
    solution: "Documenta entradas, procesamiento, salidas y manejo de errores.",
    result:
      "Añade evidencia del funcionamiento, incluso con capturas o una grabación local.",
  },
];
