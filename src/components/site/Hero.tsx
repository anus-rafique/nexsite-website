import { ArrowUpRight, } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import crystal from "@/assets/hero-crystal-nobg.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 lg:pt-28"
    >
      <div className="grid-bg animate-drift pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_75%)]" />
      <div
        aria-hidden
        className="animate-pulse-soft pointer-events-none absolute -left-40 top-24 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--electric) 28%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10">
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_12px_var(--violet)]" />
              <span className="eyebrow !text-muted-foreground">
                Digital Studio — Est. 2019
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.6rem,7vw,4.6rem)] font-medium leading-[1.03]">
              We Build
              <br />
              <span className="text-gradient-violet">Digital Experiences</span>
              <br />
              That Drive Results
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
              NexSite is a creative web development studio focused on building
              high-performance websites, web apps and digital products for
              forward-thinking brands.
            </p>
          </Reveal>

          <Reveal delay={240}>
  <div className="mt-10 flex flex-wrap items-center gap-5">
    <a href="#work">
      <MagneticButton>
        Explore Our Work
        <ArrowUpRight className="h-4 w-4" />
      </MagneticButton>
    </a>
  </div>
</Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <div
              aria-hidden
              className="absolute inset-6 rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--violet) 40%, transparent), transparent 68%)",
              }}
            />
            <img
              src={crystal}
              alt="Abstract glowing crystal representing NexSite digital craft"
              width={1200}
              height={1200}
              className="animate-float-slow relative h-full w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
