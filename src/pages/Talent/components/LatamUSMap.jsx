import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const NAVY = [0.07, 0.09, 0.14];
const BLUE = [0.13, 0.48, 1];

const CITIES = [
  {
    id: "sf",
    name: "San Francisco",
    code: "SF",
    group: "us",
    lat: 37.77,
    lon: -122.41,
    color: NAVY,
  },
  { id: "aus", name: "Austin", code: "AUS", group: "us", lat: 30.27, lon: -97.74, color: NAVY },
  { id: "nyc", name: "New York", code: "NYC", group: "us", lat: 40.71, lon: -74.01, color: NAVY },
  { id: "mx", name: "CDMX", code: "MX", group: "latam", lat: 19.43, lon: -99.13, color: BLUE },
  { id: "co", name: "Bogotá", code: "CO", group: "latam", lat: 4.71, lon: -74.07, color: BLUE },
  { id: "pe", name: "Lima", code: "PE", group: "latam", lat: -12.05, lon: -77.04, color: BLUE },
  {
    id: "br",
    name: "São Paulo",
    code: "BR",
    group: "latam",
    lat: -23.55,
    lon: -46.63,
    color: BLUE,
  },
  {
    id: "ar",
    name: "Buenos Aires",
    code: "AR",
    group: "latam",
    lat: -34.6,
    lon: -58.38,
    color: BLUE,
  },
  {
    id: "cl",
    name: "Santiago",
    code: "CL",
    group: "latam",
    lat: -33.45,
    lon: -70.67,
    color: BLUE,
  },
];

const MARKERS = CITIES.map((c) => ({
  location: [c.lat, c.lon],
  size: 0.025,
  id: c.id,
  color: c.color,
}));

const SF = [37.77, -122.41];
const AUS = [30.27, -97.74];
const NYC = [40.71, -74.01];
const ARCS = [
  { from: [-34.6, -58.38], to: SF, id: "ba-sf" },
  { from: [-23.55, -46.63], to: NYC, id: "sao-nyc" },
  { from: [4.71, -74.07], to: AUS, id: "bog-aus" },
  { from: [-12.05, -77.04], to: SF, id: "lim-sf" },
  { from: [19.43, -99.13], to: AUS, id: "mx-aus" },
  { from: [-33.45, -70.67], to: NYC, id: "scl-nyc" },
  { from: [-23.55, -46.63], to: AUS, id: "sao-aus" },
  { from: [-34.6, -58.38], to: NYC, id: "ba-nyc" },
];

const INIT_PHI = 0.16;
const INIT_THETA = 0.15;

function locationToAngles(lat, lon) {
  return [Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
}

function shortestPathPhi(target, current) {
  let p = target;
  while (p - current > Math.PI) p -= 2 * Math.PI;
  while (p - current < -Math.PI) p += 2 * Math.PI;
  return p;
}

const ANCHOR_RULES = CITIES.map(
  (c) => `
[data-cobe-anchor="${c.id}"] {
  position-anchor: --cobe-${c.id};
  opacity: var(--cobe-visible-${c.id}, 0);
  filter: blur(calc((1 - var(--cobe-visible-${c.id}, 0)) * 4px));
}`,
).join("\n");

export default function LatamUSMap() {
  const canvasRef = useRef(null);
  const targetPhiRef = useRef(INIT_PHI);
  const targetThetaRef = useRef(INIT_THETA);
  const currentPhiRef = useRef(INIT_PHI);
  const currentThetaRef = useRef(INIT_THETA);
  const pointerInteractingRef = useRef(null);
  const pointerStartPhiRef = useRef(0);
  const pointerStartThetaRef = useRef(0);

  const THETA_MAX = Math.PI / 2 - 0.05;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let width = 0;
    let rafId = 0;
    let globe = null;
    let alive = true;
    let labelEls = [];
    let tick = null;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const measure = () => {
      if (canvas) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", measure);

    const start = () => {
      if (!alive) return;
      measure();
      if (width === 0) {
        rafId = requestAnimationFrame(start);
        return;
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width,
        height: width,
        phi: currentPhiRef.current,
        theta: currentThetaRef.current,
        dark: 0,
        diffuse: 0.2,
        mapSamples: 31000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: BLUE,
        glowColor: [1, 1, 1],
        markers: MARKERS,
        arcs: ARCS,
        arcColor: BLUE,
        arcWidth: 0.5,
        arcHeight: 0.4,
      });

      const wrapper = canvas.parentElement;
      if (wrapper) {
        for (const c of CITIES) {
          const el = document.createElement("div");
          el.className = `lus-label lus-label--${c.group}`;
          el.dataset.cobeAnchor = c.id;
          el.textContent = c.code;
          el.setAttribute("aria-hidden", "true");
          wrapper.appendChild(el);
          labelEls.push(el);
        }
      }

      tick = () => {
        if (!alive) return;
        const distPhi = targetPhiRef.current - currentPhiRef.current;
        const distTheta = targetThetaRef.current - currentThetaRef.current;
        currentPhiRef.current += distPhi * 0.08;
        currentThetaRef.current += distTheta * 0.08;
        globe.update({
          phi: currentPhiRef.current,
          theta: currentThetaRef.current,
          width,
          height: width,
        });
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      requestAnimationFrame(() => {
        if (alive && canvas) canvas.style.opacity = "1";
      });
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (alive && rafId === 0) {
        rafId = requestAnimationFrame(tick || start);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    start();

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      labelEls.forEach((el) => el.remove());
      labelEls = [];
      if (globe) globe.destroy();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const focusCity = (city) => {
    const [p, t] = locationToAngles(city.lat, city.lon);
    targetPhiRef.current = shortestPathPhi(p, currentPhiRef.current);
    targetThetaRef.current = t;
  };

  return (
    <div className="lus-wrap">
      <style>{ANCHOR_RULES}</style>
      <div
        className="lus-stage"
        onPointerDown={(e) => {
          pointerInteractingRef.current = { x: e.clientX, y: e.clientY };
          pointerStartPhiRef.current = targetPhiRef.current;
          pointerStartThetaRef.current = targetThetaRef.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteractingRef.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteractingRef.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteractingRef.current !== null) {
            const dx = (e.clientX - pointerInteractingRef.current.x) / 200;
            const dy = (e.clientY - pointerInteractingRef.current.y) / 200;
            targetPhiRef.current = pointerStartPhiRef.current + dx;
            targetThetaRef.current = Math.max(
              -THETA_MAX,
              Math.min(THETA_MAX, pointerStartThetaRef.current + dy),
            );
          }
        }}
      >
        <canvas
          ref={canvasRef}
          className="lus-canvas"
          aria-label="Globe of LATAM and U.S. cities Nexton operates between"
        />
      </div>
      <ul className="lus-legend">
        {CITIES.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`lus-legend-item lus-${c.group}`}
              onClick={() => focusCity(c)}
            >
              <span className="lus-legend-dot" />
              <span className="lus-legend-name">{c.name}</span>
              <span className="lus-legend-code mono">{c.code}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
