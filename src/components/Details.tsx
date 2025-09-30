export function Details({ open, bullets, stack, align = "left" }: { open: boolean; bullets: string[]; stack?: string; align?: "left" | "right" }) {
    return (
        <div
            className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ${open ? "max-h-[600px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}`}
        >
            <ul className={`mt-3 ${align === "right" ? "md:ml-0 md:mr-5" : "ml-5"} list-disc space-y-2`}>
                {bullets.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                ))}
            </ul>
            {stack && (
                <p className="mt-3 text-sm text-zinc-600"><span className="font-medium">Stack/Infra:</span> {stack}</p>
            )}
        </div>
    );
}