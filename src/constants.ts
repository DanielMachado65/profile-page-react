import { Phone, Mail, Github, Linkedin } from "lucide-react";

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
    {
      label: "LinkedIn",
      value: "linkedin.com/in/danielmachado65",
      href: "https://www.linkedin.com/in/danielmachado65",
    },
  ],
  summary:
    "Programador e empreendedor com experiência em IA (reconhecimento de fala), sistemas de recomendação, criptografia/cripto e engenharia de software full‑stack. Forte atuação com React, Vue.js, Ruby, Elixir, TypeScript e Go, além de arquitetura de microserviços e DevOps (AWS, Docker, Pulumi).",
  education: [
    {
      course: "Pós-graduação em Agile Software Development",
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
      items: [
        "Ruby",
        "Elixir",
        "Python",
        "Go",
        "JavaScript (Node.js / NestJS)",
        "typeScript",
        "GraphQL",
        "gRPC",
        "REST",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "RabbitMQ",
        "Kafka",
        "Docker",
        "Kubernetes",
        "Microservices",
      ],
    },
    {
      area: "Front-end",
      items: [
        "React",
        "Vue.js",
        "Angular",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Sass",
        "Bootstrap",
      ],
    },
    {
      area: "DevOps / Cloud",
      items: [
        "AWS",
        "Google Cloud",
        "Terraform",
        "Pulumi",
        "CI/CD",
        "Linux",
        "Nginx",
      ],
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
      role: "Senior Full-Stack Developer + DevOps",
      company: "Chiligum → VidMob",
      location: "São Paulo (BR) / Nova York (EUA)",
      period: "2021–2023",
      bullets: [
        "Construção e otimização de aplicações e integrações com foco em arquitetura e microserviços.",
        "Projetos em Ruby (automação criativa), Elixir (escalabilidade), módulos em Java para pipelines de mídia e front-ends em React com design system próprio.",
        "Acompanhamento de aquisição internacional e trabalho presencial em Nova York.",
      ],
      stack:
        "Ruby (Rails, Sinatra DDL), TypeScript (Node), Elixir (Phoenix), Angular, React, Sidekiq, Docker, Java (Maven), microservices, Vector, MongoDB, PostgreSQL, GraphQL; Infra: AWS (CloudFormation, Lambda, EC2, API Gateway…), Terraform.",
    },
    {
      role: "Mid-Level Full-Stack Developer",
      company: "Pontomais",
      location: "Curitiba (Brasil)",
      period: "2020–2021",
      bullets: [
        "Manutenção e evolução de sistemas de RH e controle de ponto, atuando em Ruby no back-end e React no front-end.",
        "Melhorias de performance, correção de issues críticas e entregas de features incrementais.",
        "Uso de Google Cloud para deploy, monitoramento e escalabilidade, garantindo estabilidade do produto.",
      ],
      stack: "Ruby, React; Infra: Google Cloud.",
    },
    {
      role: "Mid-Level Full-Stack Developer (Contract)",
      company: "Checkplant Sistemas",
      location: "Curitiba (Brasil)",
      period: "2020-2020",
      bullets: [
        "Contrato de curto prazo focado em manutenção e evolução de sistemas para agronomia.",
        "Atuação em bug fixing, melhorias de features e suporte a serviços de rastreio de eventos geológicos.",
      ],
      stack:
        "Ruby, Elixir, Java (Maven), TypeScript (NestJS), React; Infra: AWS (Terraform, EventBridge).",
    },
    {
      role: "Full-Stack Developer (Junior → Mid-Level)",
      company: "Social Wave",
      location: "Curitiba (Brasil)",
      period: "2018–2020",
      bullets: [
        "Manutenção e evolução de aplicação de ticketing para eventos orgânicos.",
        "Projetos chave: novo fluxo de checkout, migração de site legado para SPA moderna e migração de infraestrutura para AWS.",
      ],
      stack: "Ruby (Rails & Padrino), React (MobX), React Native.",
    },
    {
      role: "Full-Stack Developer (Junior)",
      company: "Grupo ABL",
      location: "Curitiba (Brasil)",
      period: "2017-2018",
      bullets: [
        "Atuação com IA e blockchain, desenvolvendo soluções de reconhecimento de fala com TensorFlow e DialogFlow.",
      ],
      stack: "Java, Python.",
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
  LinkedIn: {
    icon: Linkedin,
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
