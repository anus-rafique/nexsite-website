import { useEffect, useState, useRef } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleTalkClick = () => {
    setShowToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 2500);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-border bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-2">
  <img src={logo} alt="NexSite" className="h-9 w-auto shrink-0" />
</a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-[0.82rem] text-muted-foreground">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative inline-block py-1 transition-colors duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-violet after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <MagneticButton
            className="px-6 py-2.5 text-[0.8rem]"
            strength={0.25}
            onClick={handleTalkClick}
          >
            Let&apos;s Talk
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-display text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                handleTalkClick();
              }}
              className="block w-full rounded-full bg-primary px-6 py-3 text-center font-display text-sm text-primary-foreground"
            >
              Let&apos;s Talk
            </button>
          </li>
        </ul>
            </div>

      <div
        className={`pointer-events-none fixed inset-x-0 bottom-8 z-[60] flex justify-center px-6 transition-all duration-300 ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="rounded-full border border-border bg-background/95 px-5 py-3 text-sm text-foreground shadow-[0_10px_40px_-10px_var(--violet)] backdrop-blur-xl">
          Coming soon — we&apos;re setting this up! 🚀
        </div>
      </div>
    </header>
  );
}
