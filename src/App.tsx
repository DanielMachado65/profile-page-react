import { Card } from "./Card";
import { profile } from "./global";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-800">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg text-zinc-600 mt-1">{profile.title}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-3">
            {profile.contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm hover:shadow transition"
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <span className="i-lucide-link-2 hidden" />
                {c.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 grid gap-6">
        <Card title="Resumo">
          <p className="leading-relaxed">{profile.summary}</p>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Educação">
            <ul className="space-y-4">
              {profile.education.map((e) => (
                <li key={e.course} className="">
                  <p className="font-medium">{e.course}</p>
                  <p className="text-sm text-zinc-600">{e.org}</p>
                  <p className="text-xs text-zinc-500">
                    {e.location} • {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

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

          <Card title="Links">
            <ul className="space-y-2">
              {profile.contacts
                .filter((c) => c.href.startsWith("http"))
                .map((c) => (
                  <li key={c.href}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
            </ul>
          </Card>
        </div>

        <Card title="Experiência">
          <ol className="space-y-8">
            {profile.experiences.map((exp) => (
              <li key={exp.company + exp.period}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-zinc-500">
                    {exp.company} • {exp.location} • {exp.period}
                  </p>
                </div>
                <ul className="mt-3 ml-5 list-disc space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {exp.stack && (
                  <p className="mt-3 text-sm text-zinc-600">
                    <span className="font-medium">Stack/Infra:</span>{" "}
                    {exp.stack}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Card>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-zinc-500">
        Última atualização: {new Date().toLocaleDateString()}
      </footer>
    </main>
  );
}
