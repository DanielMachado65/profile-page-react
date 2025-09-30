import { useState } from "react";
import { Calendar } from "lucide-react";
import { Details } from "./Details";

export type Experience = {
    role: string;
    company: string;
    location: string;
    period: string; // e.g., "2023–2025"
    bullets: string[];
    stack?: string;
};

export function TimelineItem({ exp, side }: { exp: Experience; side: "left" | "right" }) {
    const [open, setOpen] = useState(false);
    const isLeft = side === "left";

    const dotRing = isLeft ? "ring-blue-200" : "ring-emerald-200";

    return (
        <li className="relative">
            <span className={`absolute left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-zinc-600 ring-4 ${dotRing}`} />

            <div className="grid md:grid-cols-2 items-start gap-10">
                {/* Lado esquerdo */}
                <div className={isLeft ? "md:pr-10 md:text-right" : "md:pr-10 md:text-right md:order-1 md:opacity-0 md:select-none"}>
                    {isLeft && (
                        <div className="flex items-center justify-end gap-4">
                            <div className={`relative inline-block max-w-xl rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md`}>
                                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${isLeft ? "bg-blue-200" : "bg-emerald-200"}`} />

                                <div className="flex items-start justify-between md:justify-start md:gap-4">
                                    <div>
                                        <h3 className="text-lg font-extrabold tracking-tight">{exp.role}</h3>
                                        <p className="mt-0.5 text-sm text-zinc-500">{exp.company} • {exp.location}</p>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-zinc-500 md:hidden">
                                        <Calendar className="h-4 w-4" /> {exp.period}
                                    </span>
                                </div>

                                <div className="mt-3 flex justify-end">
                                    <button
                                        onClick={() => setOpen((v) => !v)}
                                        className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.98] transition"
                                        aria-expanded={open}
                                    >
                                        {open ? "Ver menos" : "Ver mais"}
                                        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 011.08 1.04l-4.25 4.32a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" /></svg>
                                    </button>
                                </div>

                                <Details open={open} bullets={exp.bullets} stack={exp.stack} align="right" />
                            </div>
                            <span className="hidden md:flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
                                <Calendar className="h-4 w-4" /> {exp.period}
                            </span>
                        </div>
                    )}
                </div>

                {/* Lado direito */}
                <div className={isLeft ? "md:pl-10" : "md:pl-10 md:order-2"}>
                    {!isLeft && (
                        <div className="flex items-center gap-4">
                            <span className="hidden md:flex items-center gap-2 text-xs text-zinc-500 whitespace-nowrap">
                                <Calendar className="h-4 w-4" /> {exp.period}
                            </span>
                            <div className={`relative max-w-xl rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md`}>
                                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${isLeft ? "bg-blue-200" : "bg-emerald-200"}`} />

                                <div className="flex items-start justify-between md:justify-start md:gap-4">
                                    <div>
                                        <h3 className="text-lg font-extrabold tracking-tight">{exp.role}</h3>
                                        <p className="mt-0.5 text-sm text-zinc-500">{exp.company} • {exp.location}</p>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-zinc-500 md:hidden">
                                        <Calendar className="h-4 w-4" /> {exp.period}
                                    </span>
                                </div>

                                <div className="mt-3 flex justify-center">
                                    <button
                                        onClick={() => setOpen((v) => !v)}
                                        className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.98] transition"
                                        aria-expanded={open}
                                    >
                                        {open ? "Ver menos" : "Ver mais"}
                                        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 011.08 1.04l-4.25 4.32a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" /></svg>
                                    </button>
                                </div>

                                <Details open={open} bullets={exp.bullets} stack={exp.stack} align="left" />
                            </div>
                        </div>
                    )}

                    {/* Mobile (stacked) */}
                    <div className="md:hidden">
                        <div className={`mt-1 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-extrabold tracking-tight">{exp.role}</h3>
                                    <p className="mt-0.5 text-sm text-zinc-500">{exp.company} • {exp.location}</p>
                                </div>
                                <span className="flex items-center gap-1 text-xs text-zinc-500">
                                    <Calendar className="h-4 w-4" /> {exp.period}
                                </span>
                            </div>
                            {/* <MobileDetails bullets={exp.bullets} stack={exp.stack} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
