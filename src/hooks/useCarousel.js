import { useCallback, useEffect, useState } from "react";

export function useCarousel(itemCount, intervalMs = 5000) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % itemCount);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, itemCount, intervalMs]);

  const goTo = useCallback((i) => setActive(i), []);
  const next = useCallback(() => setActive((i) => (i + 1) % itemCount), [itemCount]);
  const prev = useCallback(() => setActive((i) => (i - 1 + itemCount) % itemCount), [itemCount]);

  return { active, paused, setPaused, goTo, next, prev };
}
