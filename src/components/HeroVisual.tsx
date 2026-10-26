const asks = [
  { y: 70, text: "“Which suppliers…?”" },
  { y: 180, text: "“Is this data right?”" },
  { y: 290, text: "“Can AI help here?”" },
];
const outputs = [
  { y: 46, text: "AI use case" },
  { y: 134, text: "Acceptance criteria" },
  { y: 226, text: "Validated data" },
  { y: 314, text: "Trusted report" },
];

const CX = 240;
const CY = 180;

/** Decorative "translation layer": business asks → buildable outputs. */
export function HeroVisual() {
  return (
    <div className="relative rounded-[28px] border border-line bg-card/90 p-4 shadow-[0_30px_80px_-40px_rgb(22_48_43/0.45)] sm:p-6">
      <div className="mb-3 flex items-center justify-between font-mono text-[0.7rem] text-ink-soft">
        <span>translation_layer</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-forest/[0.06] px-2.5 py-1">
          <span className="relative flex h-2 w-2">
            <span className="pulse absolute inset-0 rounded-full bg-clay-soft" />
          </span>
          in production since 2017
        </span>
      </div>

      <svg viewBox="0 0 480 360" className="h-auto w-full" role="img" aria-labelledby="hv-title hv-desc">
        <title id="hv-title">From business questions to buildable outputs</title>
        <desc id="hv-desc">
          Three business questions flow into a central translation point and come out as an AI use case, acceptance
          criteria, validated data and a trusted report.
        </desc>
        <defs>
          <linearGradient id="hv-glow" x1="0" x2="1">
            <stop offset="0" stopColor="#E07A4F" />
            <stop offset="1" stopColor="#16302B" />
          </linearGradient>
          <radialGradient id="hv-core">
            <stop offset="0" stopColor="#1f413a" />
            <stop offset="1" stopColor="#16302B" />
          </radialGradient>
        </defs>

        {/* faint grid */}
        <g stroke="#d9d0bf" strokeWidth="0.6" opacity="0.6">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="360" />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 60} x2="480" y2={i * 60} />
          ))}
        </g>

        {asks.map((a, i) => {
          const d = `M168 ${a.y} C 200 ${a.y}, 188 ${CY}, ${CX - 36} ${CY}`;
          return (
            <g key={a.text}>
              <path d={d} fill="none" stroke="#d9d0bf" strokeWidth="2" />
              <path d={d} fill="none" stroke="#E07A4F" strokeWidth="2" className="flow" opacity="0.9" />
              <g className="rise" style={{ ["--d" as string]: `${300 + i * 120}ms` }}>
                <rect x="4" y={a.y - 18} width="164" height="36" rx="18" fill="#f4efe6" stroke="#d9d0bf" />
                <text x="86" y={a.y + 5} textAnchor="middle" fontSize="13" fill="#4a5552" fontFamily="Instrument Sans">
                  {a.text}
                </text>
              </g>
            </g>
          );
        })}

        {outputs.map((o, i) => {
          const d = `M${CX + 36} ${CY} C 292 ${CY}, 284 ${o.y}, 312 ${o.y}`;
          return (
            <g key={o.text}>
              <path d={d} fill="none" stroke="url(#hv-glow)" strokeWidth="2" className="draw" style={{ ["--d" as string]: `${700 + i * 120}ms` }} />
              <g className="rise" style={{ ["--d" as string]: `${1100 + i * 120}ms` }}>
                <rect x="312" y={o.y - 18} width="164" height="36" rx="10" fill="#16302B" />
                <circle cx="330" cy={o.y} r="4" fill="#f0d48a" />
                <text x="344" y={o.y + 5} fontSize="13" fill="#f4efe6" fontFamily="Instrument Sans" fontWeight="600">
                  {o.text}
                </text>
              </g>
            </g>
          );
        })}

        <circle cx={CX} cy={CY} r="52" fill="none" stroke="#9fb8aa" strokeDasharray="3 7" strokeWidth="1.5" className="spin-slow" />
        <circle cx={CX} cy={CY} r="36" fill="url(#hv-core)" />
        <text x={CX} y={CY + 8} textAnchor="middle" fontSize="24" fontStyle="italic" fill="#f4efe6" fontFamily="Fraunces">
          Ak
        </text>
      </svg>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[0.7rem] text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-clay-soft" /> business asks
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-forest" /> things teams can build
        </span>
      </div>
    </div>
  );
}
