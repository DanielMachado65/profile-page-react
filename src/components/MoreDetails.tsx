import { useState } from "react";

export function MobileDetails({ bullets, stack }: { bullets: string[]; stack?: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="mt-3 flex justify-center">
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.98] transition"
                >
                    {open ? "Ver menos" : "Ver mais"}
                    <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11l3.71-3.77a.75.75 0 011.08 1.04l-4.25 4.32a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ${open ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}`}>
                <ul className="mt-3 ml-5 list-disc space-y-2">
                    {bullets.map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
                {stack && (
                    <p className="mt-3 text-sm text-zinc-600"><span className="font-medium">Stack/Infra:</span> {stack}</p>
                )}
            </div>
        </div>
    );
}