import {
  BrainCircuit,
  PanelsTopLeft,
  Server,
  Database,
  CodeXml,
  Cloud,
  FileSearch,
  Binary,
  ScanSearch,
  Network,
  Boxes,
  Plug,
  Workflow,
} from "@lucide/astro";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siRedux,
  siNestjs,
  siFastapi,
  siDotnet,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siOllama,
  siDocker,
  siGit,
  siGithubactions,
  siAnthropic,
  siGooglegemini,
  siFlutter,
  siDart,
  siHtml5,
  siCss,
  siMysql,
  siAstro,
  siVercel,
  siSupabase,
  siCloudflarepages,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type InterfaceIcon = typeof BrainCircuit;

export type Technology =
  | { kind: "brand"; name: string; icon: SimpleIcon }
  | { kind: "image"; name: string; src: string; lightPlate: boolean }
  | { kind: "concept"; name: string; icon: InterfaceIcon; color: string };

interface TechnologyGroup {
  name: string;
  label: string;
  symbol: InterfaceIcon;
  description: string;
  items: Technology[];
}

const brand = (name: string, icon: SimpleIcon): Technology => ({
  kind: "brand",
  name,
  icon,
});
const image = (name: string, file: string, lightPlate = false): Technology => ({
  kind: "image",
  name,
  src: `/icons/tech/${file}.svg`,
  lightPlate,
});
const concept = (
  name: string,
  icon: InterfaceIcon,
  color = "#A5D8E7",
): Technology => ({ kind: "concept", name, icon, color });

export const technologyGroups: TechnologyGroup[] = [
  {
    name: "AI Engineering",
    label: "INTELIGENCIA APLICADA",
    symbol: BrainCircuit,
    description:
      "Proveedores LLM, asistentes conversacionales y técnicas para trabajar con documentos y contexto.",
    items: [
      image("OpenAI APIs", "openai", true),
      brand("Anthropic", siAnthropic),
      brand("Gemini", siGooglegemini),
      brand("Ollama", siOllama),
      concept("RAG", FileSearch, "#C0B6F3"),
      concept("Embeddings", Binary, "#9ED8B5"),
      concept("Vector Search", ScanSearch, "#F2C58F"),
    ],
  },
  {
    name: "Frontend & móvil",
    label: "EXPERIENCIAS DIGITALES",
    symbol: PanelsTopLeft,
    description:
      "Interfaces web y móviles, gestión de estado y consumo de APIs.",
    items: [
      brand("React", siReact),
      brand("Next.js", siNextdotjs),
      brand("Astro", siAstro),
      brand("Redux Toolkit", siRedux),
      brand("RTK Query", siRedux),
      brand("Flutter", siFlutter),
      brand("React Native", siReact),
      brand("HTML5", siHtml5),
      brand("CSS", siCss),
    ],
  },
  {
    name: "Backend",
    label: "LO QUE HACE QUE FUNCIONE",
    symbol: Server,
    description:
      "Frameworks, servicios y patrones para construir la lógica que conecta cada producto.",
    items: [
      brand("NestJS", siNestjs),
      brand("FastAPI", siFastapi),
      brand("ASP.NET Core", siDotnet),
      brand("Node.js", siNodedotjs),
      concept("REST APIs", Plug, "#94D7D0"),
      concept("Microservicios", Network, "#B7B2ED"),
      concept("Arquitectura modular", Boxes, "#E6BC88"),
    ],
  },
  {
    name: "Lenguajes",
    label: "UNA BASE COMPARTIDA",
    symbol: CodeXml,
    description:
      "Lenguajes que utilizo en interfaces, servicios, inteligencia artificial, aplicaciones móviles y datos.",
    items: [
      brand("TypeScript", siTypescript),
      brand("JavaScript", siJavascript),
      brand("Python", siPython),
      image("C#", "csharp"),
      brand("Dart", siDart),
      concept("SQL", Database, "#E8BD7B"),
    ],
  },
  {
    name: "Datos",
    label: "INFORMACIÓN BIEN ESTRUCTURADA",
    symbol: Database,
    description:
      "Bases de datos relacionales, modelado de información y acceso a datos con ORM.",
    items: [
      brand("PostgreSQL", siPostgresql),
      brand("Prisma ORM", siPrisma),
      image("SQL Server", "sql-server", true),
      brand("MySQL", siMysql),
      brand("Supabase", siSupabase),
    ],
  },
  {
    name: "Cloud & DevOps",
    label: "DEL CÓDIGO AL DESPLIEGUE",
    symbol: Cloud,
    description:
      "Infraestructura, contenedores, control de versiones y automatización de entregas.",
    items: [
      image("AWS", "aws", true),
      brand("Vercel", siVercel),
      brand("Cloudflare Pages", siCloudflarepages),
      brand("Docker", siDocker),
      brand("Git", siGit),
      brand("GitHub Actions", siGithubactions),
      concept("CI/CD", Workflow, "#A0D9B9"),
    ],
  },
];

const technologyByName = new Map(
  technologyGroups
    .flatMap((group) => group.items)
    .map((technology) => [technology.name, technology]),
);

export function getTechnology(name: string): Technology {
  return technologyByName.get(name) ?? concept(name, CodeXml);
}
