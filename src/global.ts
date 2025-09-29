export const profile = {
  name: "Daniel Machado Pintos",
  title: "Software Engineer",
  contacts: [
    { label: "+55 41 99887-8877", href: "tel:+5541998878877" },
    {
      label: "danielmachadopintos@gmail.com",
      href: "mailto:danielmachadopintos@gmail.com",
    },
    { label: "GitLab", href: "https://gitlab.com/danielmachado" },
    { label: "Site/Perfil", href: "https://daniel-machado-pintos" },
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
};
