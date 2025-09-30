import { Phone, Mail, Github } from "lucide-react";

export const profile = {
  name: "Daniel Machado Pintos",
  title: "Software Engineer",
  photo: "https://github.com/danielmachado65.png",
  contacts: [
    {
      label: "Telefone",
      value: "+55 41 99887-8877",
      href: "tel:+5541998878877",
    },
    {
      label: "E-mail",
      value: "danielmachadopintos@gmail.com",
      href: "mailto:danielmachadopintos@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/danielmachado65",
      href: "https://github.com/danielmachado65",
    },
  ],
  summary:
    "Programador e empreendedor com experiência em IA (reconhecimento de fala), sistemas de recomendação, criptografia/cripto e engenharia de software full‑stack. Forte atuação com React, Vue.js, Ruby, Elixir, TypeScript e Go, além de arquitetura de microserviços e DevOps (AWS, Docker, Pulumi).",
  education: [
    {
      course: "Pós‑graduação em Agile Software Development",
      org: "UFPR — Universidade Federal do Paraná",
      location: "Curitiba, Brasil",
      period: "2024–2025",
    },
    {
      course: "B.Sc. em Systems Analysis",
      org: "UFPR — Universidade Federal do Paraná",
      location: "Curitiba, Brasil",
      period: "2017–2020",
    },
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado" },
    { name: "Espanhol", level: "Básico" },
  ],
  techStacks: [
    {
      area: "Back-end",
      items: ["Ruby", "Elixir", "Python", "Go", "JavaScript (Node.js / NestJS)"],
    },
    {
      area: "Front-end",
      items: ["React", "Vue.js"],
    },
  ],
  experiences: [
    {
      role: "Senior Developer (Developer + DevOps)",
      company: "Olho no Carro → Gringo → Sem Parar",
      location: "São Paulo (Brasil)",
      period: "2023–2025",
      bullets: [
        "Evolução do sistema core que alimenta o app e liderança em migração de front-end de monólitos para sub-fronts modulares.",
        "Entrega de serviço de mensagens em TypeScript + Go e solução de user tracking (AWS Lambda, RabbitMQ, Google Cloud Data Lake).",
        "Vivência em 2 processos de aquisição, do estágio startup à escala internacional.",
      ],
      stack:
        "TypeScript (NestJS), React, Node, Go, Elixir, Flutter, RabbitMQ, AWS Lambda & Lambda@Edge, microservices, MongoDB, PostgreSQL, EventBridge; Infra: AWS (API Gateway, SQS, SES, ECS, ECR, EC2…), Pulumi, Docker.",
    },
    {
      role: "Senior Full‑Stack Developer + DevOps",
      company: "Chiligum → VidMob",
      location: "São Paulo (BR) / Nova York (EUA)",
      period: "2021–2023",
      bullets: [
        "Desenvolvimento e otimização de aplicações e integrações focadas em arquitetura e microserviços.",
        "Projetos em Ruby (automação criativa), Elixir (escalabilidade) e módulos em Java para pipelines de mídia.",
      ],
      stack:
        "Ruby, Elixir, Java, microserviços, integrações, otimização de pipelines.",
    },
  ],
} as const;

export const contactMeta = {
  Telefone: {
    icon: Phone,
    card: "border-indigo-100 hover:border-indigo-200 hover:ring-2 hover:ring-indigo-100/70",
    iconWrap:
      "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 group-hover:text-indigo-700",
  },
  "E-mail": {
    icon: Mail,
    card: "border-indigo-100 hover:border-indigo-200 hover:ring-2 hover:ring-indigo-100/70",
    iconWrap:
      "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 group-hover:text-indigo-700",
  },
  GitHub: {
    icon: Github,
    card: "border-indigo-100 hover:border-indigo-200 hover:ring-2 hover:ring-indigo-100/70",
    iconWrap:
      "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 group-hover:text-indigo-700",
  },
  default: {
    icon: Mail,
    card: "border-indigo-100 hover:border-indigo-200 hover:ring-2 hover:ring-indigo-100/70",
    iconWrap:
      "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 group-hover:text-indigo-700",
  },
} as const;

export const languageMeta = {
  Nativo: {
    percent: 100,
    bar: "from-indigo-500 via-indigo-600 to-indigo-700",
    track: "bg-indigo-100",
    iconWrap: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-100 text-indigo-700",
    caption: "Fluência nativa",
  },
  Avançado: {
    percent: 85,
    bar: "from-indigo-400 via-indigo-500 to-indigo-600",
    track: "bg-indigo-100/80",
    iconWrap: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    caption: "Comunica com alta proficiência",
  },
  Intermediário: {
    percent: 65,
    bar: "from-indigo-300 via-indigo-400 to-indigo-500",
    track: "bg-indigo-100/70",
    iconWrap: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    caption: "Boa compreensão com ajustes pontuais",
  },
  Básico: {
    percent: 40,
    bar: "from-indigo-200 via-indigo-300 to-indigo-400",
    track: "bg-indigo-100/60",
    iconWrap: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    caption: "Conhecimentos fundamentais",
  },
  default: {
    percent: 50,
    bar: "from-indigo-300 via-indigo-400 to-indigo-500",
    track: "bg-indigo-100",
    iconWrap: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    caption: "",
  },
} as const;
