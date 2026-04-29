import { useCallback, useState } from "react";

export function useFormState(initialData) {
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = useCallback(
    (key) => (e) => setData((prev) => ({ ...prev, [key]: e.target.value })),
    [],
  );

  const submit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  const reset = useCallback(() => {
    setData(initialData);
    setSubmitted(false);
  }, [initialData]);

  return { data, submitted, update, submit, reset };
}
