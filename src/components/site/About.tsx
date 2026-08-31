import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import aboutLaptop from "@/assets/about-laptop.png";
import aboutTechBg from "@/assets/about-tech-bg.jpg";

const points = [
  {
    title: "Excellence First:",
    text: "We never settle for \"good enough.\" Quality is built into everything we do.",
  },
  {
    title: "Client-Centric Mindset:",
    text: "Your success is our top priority.",
  },
  {
    title: "Innovation Always:",
    text: "We thrive on challenges and stay ahead of the curve by integrating the latest technologies.",
  },
  {
    title: "Transparency & Trust:",
    text: "We believe in clear communication and honest relationships.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] max-w-full -translate-x-1/2 -translate-y-1/2 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, color-mix(in oklab, var(--electric) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-border bg-card/40 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          {/* Left: text */}
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium leading-tight">
              We are NexSite, Built on Craft and Real Results
            </h2>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p.title} className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-gradient-violet">{p.title}</span>{" "}
                  {p.text}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Support That Cares: We don&apos;t just deliver projects, we support you through
              your growth journey.
            </p>

            <Button className="mt-8" size="lg">
              Explore
            </Button>
          </Reveal>

          {/* Right: images + stat badge */}
          <Reveal delay={120}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none">
              <img
                src={aboutLaptop}
                alt="NexSite website preview"
                className="absolute left-0 top-0 h-[62%] w-[62%] rounded-2xl border border-border object-cover shadow-[var(--glow-violet)]"
              />
              <img
                src={aboutTechBg}
                alt="Digital technology background"
                className="absolute right-0 top-[8%] h-[62%] w-[55%] rounded-2xl border border-border object-cover"
              />

              <div
                className="absolute bottom-0 right-[6%] w-[62%] rounded-2xl p-5 text-white shadow-[var(--glow-violet)] sm:p-6"
                style={{
                  background:
                    "linear-gradient(135deg, var(--electric), var(--violet) 60%)",
                }}
              >
                <p className="font-display text-4xl font-bold leading-none sm:text-5xl">90%</p>
                <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                  Our clients rate their experience with NexSite as &quot;very good&quot; or
                  &quot;excellent&quot;*
                </p>
                <p className="mt-3 text-[10px] text-white/70">*Client survey 2024</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}