import { Link, useNavigate } from "react-router";
import { flushSync } from "react-dom";

export default function TransitionLink({ to, children, onClick, ...props }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (typeof document === "undefined" || !document.startViewTransition) return;

    e.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => navigate(to));
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
