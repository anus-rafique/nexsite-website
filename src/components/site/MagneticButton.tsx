import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  strength?: number;
  onClick?: () => void;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-display text-sm tracking-wide transition-[transform,box-shadow,background-color,border-color] duration-300 will-change-transform";

const variants: Record<string, string> = {
  primary:
    "bg-primary px-7 py-3 text-primary-foreground shadow-[0_0_0_0_transparent] hover:shadow-[0_10px_50px_-12px_var(--violet)]",
  outline:
    "border border-border px-7 py-3 text-foreground hover:border-[color-mix(in_oklab,var(--violet)_60%,transparent)] hover:bg-[color-mix(in_oklab,var(--violet)_10%,transparent)]",
  ghost: "px-4 py-2 text-muted-foreground hover:text-foreground",
};

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  strength = 0.35,
  onClick,
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      type="button"
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
