import { useMemo } from "react";
import { parse } from "date-fns";
import { Phone, Mail, Github } from "lucide-react";
import { profile } from "./global";
import { Card } from "./components/Card";
import { TimelineItem } from "./components/TimelineItem";

export default function ResumePage() {
  const sortedExperiences = useMemo(() => {
    return [...(profile?.experiences ?? [])].sort((a, b) => {
      const endA = parse(a.period.split("–")[1].trim(), "yyyy", new Date());
      const endB = parse(b.period.split("–")[1].trim(), "yyyy", new Date());
      return endB.getTime() - endA.getTime();
    });
  }, []);

  const contactMeta = {
    Telefone: {
      icon: Phone,
      card: "border-blue-100 hover:border-blue-200 hover:ring-2 hover:ring-blue-100",
      iconWrap: "bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700",
    },
    "E-mail": {
      icon: Mail,
      card: "border-amber-100 hover:border-amber-200 hover:ring-2 hover:ring-amber-100",
      iconWrap: "bg-amber-50 text-amber-600 group-hover:bg-amber-100 group-hover:text-amber-700",
    },
    GitHub: {
      icon: Github,
      card: "border-zinc-300 hover:border-zinc-400 hover:ring-2 hover:ring-zinc-200",
      iconWrap: "bg-zinc-900 text-white group-hover:bg-black group-hover:text-white",
    },
    default: {
      icon: Mail,
      card: "border-zinc-200 hover:border-zinc-300 hover:ring-2 hover:ring-zinc-200",
      iconWrap: "bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200 group-hover:text-zinc-700",
    },
  } as const;

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name || "Nome do Usuário"}</h1>
            <p className="text-lg text-zinc-600 mt-1">{profile.title}</p>
          </div>
          <nav className="flex w-full flex-col gap-3 md:w-auto" aria-label="Informações de contato">
            {profile.contacts.map((c) => {
              const { icon: Icon, card, iconWrap } = contactMeta[c.label as keyof typeof contactMeta] ?? contactMeta.default;
              const isExternal = c.href.startsWith("http");

              return (
                <a
                  key={c.href}
                  href={c.href}
                  className={`group relative flex w-full items-center gap-3 rounded-2xl border bg-white/80 px-5 py-4 shadow-sm transition hover:-translate-y-0.5 ${card}`}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-base font-semibold transition ${iconWrap}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col text-left text-sm">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {c.label}
                    </span>
                    <span className="text-base font-semibold text-zinc-800 md:text-lg">
                      {c.value}
                    </span>
                    {isExternal && (
                      <span className="mt-1 text-xs text-zinc-500 transition group-hover:text-zinc-600">
                        Abrir em nova aba ↗
                      </span>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 grid gap-6">
        {/* Summary */}
        <Card title="Resumo">
          <p className="leading-relaxed">{profile.summary}</p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <Card title="Educação">
            <ul className="space-y-4">
              {profile.education.map((e) => (
                <li key={e.course} className="">
                  <p className="font-medium">{e.course}</p>
                  <p className="text-sm text-zinc-600">{e.org}</p>
                  <p className="text-xs text-zinc-500">{e.location} • {e.period}</p>
                </li>
              ))}
            </ul>
          </Card>

          {/* Languages */}
          <Card title="Idiomas">
            <ul className="space-y-2">
              {profile.languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between">
                  <span>{l.name}</span>
                  <span className="text-sm text-zinc-600">{l.level}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Experience */}
        <Card title="Experiência">
          <div className="relative py-2">
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-zinc-200" />

            <ol className="grid gap-14">
              {sortedExperiences.map((exp, i) => (
                <TimelineItem key={exp.company + exp.period} exp={exp} side={i % 2 === 0 ? "left" : "right"} />
              ))}
            </ol>
          </div>
        </Card>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-zinc-500">
        Última atualização: {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}
