import { Search, Compass, Rocket, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", icon: Search, title: "Discovery", body: "We dig into your goals, audience, and challenges to map the opportunity." },
  { n: "02", icon: Compass, title: "Strategy", body: "A tailored growth plan with channels, budgets, and KPIs defined." },
  { n: "03", icon: Rocket, title: "Execution", body: "Campaigns, creatives, and automations go live — fast and aligned." },
  { n: "04", icon: LineChart, title: "Optimization", body: "Continuous testing and scaling based on real performance data." },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
        <Reveal>
          <span className="eyebrow-pill">Our Process</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.05]">
            A proven path from <span className="text-electric">idea to</span>{" "}
            <span className="text-gradient-violet">impact</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {/* connecting line - desktop only */}
          <div className="absolute top-8 left-0 right-0 hidden h-px bg-border md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} className="flex flex-col items-center gap-4">
              <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-border bg-background text-electric">
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-display text-xs font-semibold tracking-[0.2em] text-electric">{s.n}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}