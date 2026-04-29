import { useCallback, useState } from "react";

export function useAccordion(initialOpen = -1) {
  const [open, setOpen] = useState(initialOpen);
  const toggle = useCallback((i) => setOpen((prev) => (prev === i ? -1 : i)), []);
  return { open, toggle };
}
