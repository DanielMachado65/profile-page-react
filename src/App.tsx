import { useEffect, useMemo, useRef, useState } from "react";
import { parse } from "date-fns";
import { contactMeta, languageMeta, profile } from "./constants";
import { TimelineItem } from "./components/TimelineItem";
import { Languages, GraduationCap, MapPin, Server, MonitorSmartphone, Code2, BriefcaseBusiness, Sparkles, Calendar } from "lucide-react";

function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.2) {
  const elementRef = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref: elementRef, visible } as const;
}

export default function ResumePage() {
  const [lineProgress, setLineProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const extractPeriodRange = (period?: string) => {
    if (!period) return { start: 0, end: 0 };
    const segments = period
      .split(/[–-]/)
      .map((part) => part.trim())
      .filter(Boolean);
    if (segments.length === 0) return { start: 0, end: 0 };

    const parseYear = (value: string) => {
      const parsed = parse(value, "yyyy", new Date());
      return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
    };

    if (segments.length === 1) {
      const year = parseYear(segments[0]);
      return { start: year, end: year };
    }

    const start = parseYear(segments[0]);
    const end = parseYear(segments[segments.length - 1]);
    return { start, end };
  };

  const sortedExperiences = useMemo(() => {
    return [...(profile?.experiences ?? [])].sort((a, b) => extractPeriodRange(b.period).end - extractPeriodRange(a.period).end);
  }, [profile?.experiences]);

  const profileInitials = useMemo(() => {
    if (!profile.name) return "";
    return profile.name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);
  }, []);

  const stackIconMap = {
    "Back-end": Server,
    "Front-end": MonitorSmartphone,
    "DevOps / Cloud": Server,
  } as const;

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

    const updateProgress = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalHeight = rect.height || 1;

      if (rect.bottom <= 0) {
        setLineProgress(0);
        return;
      }

      if (rect.top >= viewportHeight) {
        setLineProgress(0);
        return;
      }

      const distanceIntoView = viewportHeight - rect.top;
      const progress = clamp((distanceIntoView / (viewportHeight + totalHeight)) * 100);
      setLineProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [sortedExperiences.length]);

  const summaryReveal = useReveal();
  const experienceReveal = useReveal(0.15);
  const educationReveal = useReveal(0.2);
  const languagesReveal = useReveal(0.2);
  const stackReveal = useReveal(0.2);

  const currentDateLabel = useMemo(() => {
    return new Date().toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    }).replace(/\./g, "").toLocaleUpperCase();
  }, []);

  const experienceSummary = useMemo(() => {
    const ranges = (profile?.experiences ?? [])
      .map((exp) => extractPeriodRange(exp.period))
      .filter((range) => range.start > 0);

    if (ranges.length === 0) {
      return { label: "", years: 0 };
    }

    const earliestStart = Math.min(...ranges.map((r) => r.start));
    const now = Date.now();
    const totalYears = (now - earliestStart) / (1000 * 60 * 60 * 24 * 365.25);

    let proficiency = "Júnior";
    if (totalYears >= 10) {
      proficiency = "Especialista";
    } else if (totalYears >= 6) {
      proficiency = "Sênior";
    } else if (totalYears >= 3) {
      proficiency = "Pleno";
    }

    const formattedYears = totalYears >= 1 ? `${totalYears.toFixed(1)} anos` : `${Math.round(totalYears * 12)} meses`;
    return {
      label: `≈ ${formattedYears} de experiência · Nível ${proficiency}`,
      years: totalYears,
    };
  }, [profile?.experiences]);

  const revealBase = "transition-all duration-700 ease-out";
  const hiddenDown = "translate-y-6 opacity-0";
  const shown = "translate-y-0 opacity-100";

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800">
      <header className="mx-auto max-w-6xl px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex items-start gap-5">
            <div className="relative flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-[28px] border border-white bg-gradient-to-br from-indigo-100 via-white to-indigo-50 shadow-md ring-4 ring-indigo-100/70">
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
              {experienceSummary.label && (
                <p className="text-sm text-zinc-500 mt-2">{experienceSummary.label}</p>
              )}
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

      <section className="mx-auto max-w-6xl px-6 grid gap-6">
        {/* Summary */}
        <section
          ref={summaryReveal.ref}
          className={`rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm ${revealBase} ${summaryReveal.visible ? shown : hiddenDown}`}
        >
          <header className="flex items-center gap-3 pb-5 border-b border-zinc-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-indigo-600">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Resumo</h2>
              <p className="text-xs text-zinc-500">Perfil profissional e áreas de atuação</p>
            </div>
          </header>
          <p className="mt-5 text-sm leading-relaxed text-zinc-700 md:text-base">
            {profile.summary}
          </p>
        </section>

        <section
          ref={experienceReveal.ref}
          className={`rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm ${revealBase} ${experienceReveal.visible ? shown : hiddenDown}`}
        >
          <header className="flex items-center gap-3 pb-6 border-b border-zinc-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-indigo-600">
              <BriefcaseBusiness className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">Experiência profissional</h2>
              <p className="text-sm text-zinc-500">Projetos recentes, impacto e tecnologias chave</p>
            </div>
          </header>
          <div ref={timelineRef} className="relative mt-6">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-zinc-200" />
            <span
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-indigo-500 via-indigo-400 to-indigo-600 transition-all duration-500 ease-out"
              style={{ height: `${lineProgress}%` }}
            />
            <span className="pointer-events-none absolute left-1/2 -top-3 -translate-x-1/2 -translate-y-full inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
              <Calendar className="h-4 w-4" /> {currentDateLabel}
            </span>
            <ol className="grid gap-14">
              {sortedExperiences.map((exp, i) => (
                <TimelineItem key={exp.company + exp.period} exp={exp} side={i % 2 === 0 ? "left" : "right"} />
              ))}
            </ol>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section
            ref={educationReveal.ref}
            className={`rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm ${revealBase} ${educationReveal.visible ? shown : hiddenDown}`}
          >
            <header className="flex items-center gap-3 pb-5 border-b border-zinc-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-indigo-600">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Educação</h2>
                <p className="text-xs text-zinc-500">Formação acadêmica e programas recentes</p>
              </div>
            </header>
            <ul className="mt-5 flex flex-col gap-4">
              {profile.education.map((e) => (
                <li
                  key={e.course}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-zinc-900 md:text-base">{e.course}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {e.period}
                    </p>
                    <p className="text-sm text-zinc-600">{e.org}</p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium text-zinc-600">
                      <MapPin className="h-4 w-4" /> {e.location}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            ref={languagesReveal.ref}
            className={`rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm ${revealBase} ${languagesReveal.visible ? shown : hiddenDown}`}
          >
            <header className="flex items-center gap-3 pb-5 border-b border-zinc-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-indigo-600">
                <Languages className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Idiomas</h2>
                <p className="text-xs text-zinc-500">Proficiência em comunicação</p>
              </div>
            </header>
            <ul className="mt-5 flex flex-col gap-3">
              {profile.languages.map((l) => {
                const styles = languageMeta[l.level as keyof typeof languageMeta] ?? languageMeta.default;

                return (
                  <li
                    key={l.name}
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow"
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
          </section>

          <section
            ref={stackReveal.ref}
            className={`md:col-span-2 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm ${revealBase} ${stackReveal.visible ? shown : hiddenDown}`}
          >
            <header className="flex items-center gap-3 pb-5 border-b border-zinc-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-indigo-600">
                <Code2 className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Stack técnico</h2>
                <p className="text-xs text-zinc-500">Principais ecossistemas em que atuo</p>
              </div>
            </header>
            <ul className="mt-5 flex flex-col gap-3">
              {profile.techStacks?.map((stack) => {
                const Icon = stackIconMap[stack.area as keyof typeof stackIconMap] ?? Code2;

                return (
                  <li
                    key={stack.area}
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-indigo-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          {stack.area}
                        </span>
                        <p className="text-sm leading-snug text-zinc-700">
                          {stack.items.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-zinc-500">
        Última atualização: {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}
