import { useEffect, useRef, useState } from "react";
import { Calendar, Building2, MapPin } from "lucide-react";
import { Details } from "./Details";

export type Experience = {
    role: string;
    company: string;
    location: string;
    period: string; // e.g., "2023–2025"
    bullets: ReadonlyArray<string>;
    stack?: string;
};

export function TimelineItem({ exp, side }: { exp: Experience; side: "left" | "right" }) {
    const [open, setOpen] = useState(false);
    const isLeft = side === "left";

    const dotRing = isLeft ? "ring-indigo-200" : "ring-indigo-300";
    const itemRef = useRef<HTMLLIElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible) return;
        const node = itemRef.current;
        if (!node || typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [visible]);

    const accentBarColor = (align: "left" | "right") => (align === "right" ? "bg-indigo-200" : "bg-indigo-300");

    const periodChip = (
        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
            <Calendar className="h-4 w-4 text-indigo-500" /> {exp.period}
        </span>
    );

    const renderCard = (align: "left" | "right") => (
        <div className="relative w-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow">
            <div className={`pointer-events-none absolute inset-x-5 top-0 h-1 rounded-full ${accentBarColor(align)}`} />
            <div className="space-y-4 pt-3">
                <header className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500">Cargo</span>
                        <h3 className="text-lg font-semibold text-zinc-900">{exp.role}</h3>
                    </div>
                    {periodChip}
                </header>

                <div className="grid gap-2 text-sm text-zinc-600">
                    <span className="flex items-center gap-2 text-zinc-500">
                        <Building2 className="h-4 w-4 text-indigo-500" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-2 text-zinc-500">
                        <MapPin className="h-4 w-4 text-indigo-500" /> {exp.location}
                    </span>
                </div>

                {exp.bullets.length > 0 && (
                    <p className="text-sm leading-relaxed text-zinc-600">
                        {exp.bullets[0]}
                        {exp.bullets.length > 1 ? "…" : ""}
                    </p>
                )}

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-100">
                    <span className="text-xs uppercase tracking-wide text-zinc-400">Detalhes do projeto</span>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.98] transition"
                        aria-expanded={open}
                    >
                        {open ? "Fechar" : "Ver mais"}
                        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 011.08 1.04l-4.25 4.32a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" /></svg>
                    </button>
                </div>

                <Details open={open} bullets={exp.bullets} stack={exp.stack} align={align} />
            </div>
        </div>
    );

    const entryAnimation = visible
        ? "translate-x-0 opacity-100"
        : isLeft
        ? "-translate-x-6 opacity-0"
        : "translate-x-6 opacity-0";

    return (
        <li ref={itemRef} className="relative">
            <span className={`absolute left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-indigo-500 ring-4 ${dotRing}`} />

            <div className={`grid items-start gap-10 md:grid-cols-2 transition-[transform,opacity] duration-700 ease-out ${entryAnimation}`}>
                {/* Lado esquerdo */}
                <div className={isLeft ? "md:pr-10 md:text-right" : "md:pr-10 md:text-right md:order-1 md:opacity-0 md:select-none"}>
                    {isLeft && (
                        <div className="flex justify-end">
                            <div className="w-full max-w-xl">
                                {renderCard("right")}
                            </div>
                        </div>
                    )}
                </div>

                {/* Lado direito */}
                <div className={isLeft ? "md:pl-10" : "md:pl-10 md:order-2"}>
                    {!isLeft && (
                        <div className="flex">
                            <div className="w-full max-w-xl">
                                {renderCard("left")}
                            </div>
                        </div>
                    )}

                    {/* Mobile (stacked) */}
                    <div className="md:hidden">
                        {renderCard("left")}
                    </div>
                </div>
            </div>
        </li>
    );
}
