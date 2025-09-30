import { useMemo } from "react";
import { parse } from "date-fns";
import { contactMeta, languageMeta, profile } from "./global";
import { Card } from "./components/Card";
import { TimelineItem } from "./components/TimelineItem";
import { Languages, GraduationCap, MapPin } from "lucide-react";

export default function ResumePage() {
  const sortedExperiences = useMemo(() => {
    return [...(profile?.experiences ?? [])].sort((a, b) => {
      const endA = parse(a.period.split("–")[1].trim(), "yyyy", new Date());
      const endB = parse(b.period.split("–")[1].trim(), "yyyy", new Date());
      return endB.getTime() - endA.getTime();
    });
  }, []);

  const profileInitials = useMemo(() => {
    if (!profile.name) return "";
    return profile.name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);
  }, [profile.name]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white bg-gradient-to-br from-indigo-100 via-white to-emerald-100 shadow-md ring-4 ring-indigo-100/70">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Foto de ${profile.name}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl font-semibold text-indigo-700">{profileInitials}</span>
              )}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name || "Nome do Usuário"}</h1>
              <p className="text-lg text-zinc-600 mt-1">{profile.title}</p>
            </div>
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
            <ul className="flex flex-col gap-4">
              {profile.education.map((e) => (
                <li
                  key={e.course}
                  className="rounded-2xl border border-indigo-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-indigo-900 md:text-base">{e.course}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                        {e.period}
                      </p>
                      <p className="text-sm text-zinc-600">{e.org}</p>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium text-zinc-600">
                    <MapPin className="h-4 w-4" /> {e.location}
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* Languages */}
          <Card title="Idiomas">
            <ul className="flex flex-col gap-3">
              {profile.languages.map((l) => {
                const styles = languageMeta[l.level as keyof typeof languageMeta] ?? languageMeta.default;

                return (
                  <li
                    key={l.name}
                    className="rounded-xl border border-zinc-200 bg-white/80 px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${styles.iconWrap}`}>
                          <Languages className="h-5 w-5" />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-zinc-800 md:text-base">{l.name}</span>
                          {styles.caption && <span className="text-xs text-zinc-500">{styles.caption}</span>}
                        </div>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${styles.badge}`}>
                        {l.level}
                      </span>
                    </div>
                    <div className={`mt-4 h-2 w-full overflow-hidden rounded-full ${styles.track}`}>
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${styles.bar}`}
                        style={{ width: `${styles.percent}%` }}
                      />
                    </div>
                  </li>
                );
              })}
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
