export default function LatamUSMap({ variant = "light", animated = true }) {
  const isDark = variant === "dark";

  const usHubs = [
    { id: "sf", x: 240, y: 160, label: "SAN FRANCISCO", sub: "Series-B fintech, AI infra" },
    { id: "aus", x: 600, y: 130, label: "AUSTIN", sub: "Climate-tech, devtools" },
    { id: "nyc", x: 960, y: 160, label: "NEW YORK", sub: "Enterprise SaaS, finance" },
  ];

  const latamHubs = [
    { id: "mx", x: 160, y: 600, label: "CDMX", country: "MX" },
    { id: "bog", x: 360, y: 640, label: "BOGOTÁ", country: "CO" },
    { id: "lim", x: 540, y: 620, label: "LIMA", country: "PE" },
    { id: "sao", x: 740, y: 650, label: "SÃO PAULO", country: "BR" },
    { id: "ba", x: 920, y: 620, label: "BUENOS AIRES", country: "AR" },
    { id: "scl", x: 1080, y: 640, label: "SANTIAGO", country: "CL" },
  ];

  const arcs = [
    { from: "ba", to: "sf" },
    { from: "sao", to: "nyc" },
    { from: "bog", to: "aus" },
    { from: "lim", to: "sf" },
    { from: "mx", to: "aus" },
    { from: "scl", to: "nyc" },
    { from: "sao", to: "aus" },
    { from: "ba", to: "nyc" },
  ];

  const find = (id) => [...usHubs, ...latamHubs].find((h) => h.id === id);

  const usDotFill = isDark ? "white" : "var(--navy-1000)";
  const latamDotFill = "var(--accent)";
  const usLabelColor = isDark ? "white" : "var(--navy-1000)";
  const latamLabelColor = isDark ? "rgba(255,255,255,0.9)" : "var(--navy-900)";
  const subLabelColor = isDark ? "rgba(255,255,255,0.55)" : "var(--navy-500)";
  const dividerColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.06)";
  const eyebrowColor = isDark ? "rgba(255,255,255,0.45)" : "var(--navy-500)";

  return (
    <svg
      viewBox="0 0 1200 760"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="arc-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.0" />
          <stop offset="20%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="80%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id="hub-glow">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g>
        <text
          x="60"
          y="78"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          fontWeight="500"
          letterSpacing="0.18em"
          fill={eyebrowColor}
        >
          ◇ U.S. — HIRING TEAMS
        </text>
        <line x1="60" y1="92" x2="1140" y2="92" stroke={dividerColor} strokeWidth="1" />
        <text
          x="60"
          y="730"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          fontWeight="500"
          letterSpacing="0.18em"
          fill={eyebrowColor}
        >
          ◇ LATIN AMERICA — ENGINEERS
        </text>
        <line x1="60" y1="716" x2="1140" y2="716" stroke={dividerColor} strokeWidth="1" />
      </g>

      {arcs.map((a, i) => {
        const f = find(a.from);
        const t = find(a.to);
        if (!f || !t) return null;
        const c1x = f.x;
        const c1y = (f.y + t.y) / 2 + 40;
        const c2x = t.x;
        const c2y = (f.y + t.y) / 2 - 40;
        const path = `M ${f.x} ${f.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${t.x} ${t.y}`;
        return (
          <g key={`${a.from}-${a.to}-${i}`}>
            <path
              d={path}
              stroke="url(#arc-grad)"
              strokeWidth="1.4"
              fill="none"
              strokeDasharray="3 5"
              style={{ animation: animated ? `arcDash ${5 + i * 0.4}s linear infinite` : "none" }}
              opacity="0.9"
            />
            {animated && (
              <circle r="3" fill="var(--accent)" opacity="0.95">
                <animateMotion dur={`${5.5 + i * 0.6}s`} repeatCount="indefinite" path={path} />
              </circle>
            )}
          </g>
        );
      })}

      {usHubs.map((h) => (
        <g key={h.id}>
          <circle cx={h.x} cy={h.y} r="28" fill="url(#hub-glow)" opacity="0.6" />
          <circle
            cx={h.x}
            cy={h.y}
            r="6"
            fill={usDotFill}
            stroke={isDark ? "var(--navy-1000)" : "white"}
            strokeWidth="2"
          />
          <text
            x={h.x}
            y={h.y - 22}
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontSize="22"
            fontWeight="600"
            letterSpacing="0.04em"
            fill={usLabelColor}
          >
            {h.label}
          </text>
          <text
            x={h.x}
            y={h.y + 28}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            letterSpacing="0.05em"
            fill={subLabelColor}
          >
            {h.sub}
          </text>
        </g>
      ))}

      {latamHubs.map((h) => (
        <g key={h.id}>
          <circle cx={h.x} cy={h.y} r="22" fill="url(#hub-glow)" />
          <circle
            cx={h.x}
            cy={h.y}
            r="5.5"
            fill={latamDotFill}
            stroke={isDark ? "var(--navy-1000)" : "white"}
            strokeWidth="1.8"
          />
          <text
            x={h.x}
            y={h.y + 28}
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontSize="15"
            fontWeight="500"
            letterSpacing="0.06em"
            fill={latamLabelColor}
          >
            {h.label}
          </text>
          <text
            x={h.x}
            y={h.y + 44}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="0.1em"
            fill={subLabelColor}
          >
            {h.country}
          </text>
        </g>
      ))}

      <g>
        <text
          x="600"
          y="380"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          letterSpacing="0.2em"
          fill={eyebrowColor}
        >
          ↑ FULL-TIME REMOTE · USD CONTRACTS · OVERLAPPING TIMEZONES ↑
        </text>
      </g>
    </svg>
  );
}
