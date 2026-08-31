import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import zasprime from "@/assets/work-zasprime.png";
import elarawave from "@/assets/work-elarawave.png";
import noorrentacar from "@/assets/work-noorrentacar.png";
import zayyansalon from "@/assets/work-zayyansalon.png";
import aqualux from "@/assets/work-aqualux.png";
import aurelia from "@/assets/work-aurelia.png";

const projects = [
  {
    name: "ZAS Prime",
    cat: "Manufacturing",
    desc: "Corporate website for ZAS PRIME — a beverage & packaging manufacturer, home to ELARA WAVE products.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind", "Express"],
    status: "Completed",
    link: "https://zasprime.com/",
    img: zasprime,
  },
  {
    name: "Elara Wave",
    cat: "E-Commerce",
    desc: "Premium mineral & alkaline water delivery brand with online commerce, product catalog, custom branding, and beverage-only tracking.",
    tags: ["Next.js", "Node.js"],
    status: "Completed",
    link: "https://elarawave.com/",
    img: elarawave,
  },
  {
    name: "Noor Rent A Car",
    cat: "Hospitality",
    desc: "A car rental booking platform with listings, booking flow, and admin management. Users can browse available cars and view details like model, price, and features.",
    tags: ["React", "TypeScript", "Tailwind", "Stripe", "Node.js"],
    status: "Completed",
    link: "https://noorrentalcar.vercel.app/",
    img: noorrentacar,
  },
  {
    name: "Zayyan Salon",
    cat: "Beauty & Wellness",
    desc: "A premium salon website with booking, gallery, and reviews — elegant typography and a warm, upscale feel.",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    status: "Completed",
    link: "https://zayan-khaki.vercel.app/",
    img: zayyansalon,
  },
  {
    name: "Aqua Prime 2.0",
    cat: "E-Commerce",
    desc: "A premium spring water delivery platform with subscriptions, scheduling, and real-time order tracking.",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    status: "Completed",
    link: "https://aquaprimedemo.netlify.app/",
    img: aqualux,
  },
  {
    name: "Aurelia Perfumes",
    cat: "Luxury Retail",
    desc: "A luxury fragrance house with hand-curated collections — elegant typography, slow motion, and a deep saturated palette that feels like fine jewellery.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    status: "Completed",
    link: "https://aurelia-fragrances.vercel.app/",
    img: aurelia,
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium">
            Live websites, real businesses,{" "}
            <span className="text-gradient-violet">shipped.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A cross-section of recent projects across freight, manufacturing, luxury,
            hospitality and real estate.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet/35 hover:shadow-[0_30px_80px_-40px_var(--violet)]">
                <div className="relative aspect-video overflow-hidden bg-background">
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.cat}`}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="h-full w-full object-contain object-top opacity-90 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                  <span className="absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-[0.65rem] font-medium backdrop-blur-sm">
                    {p.cat}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-violet px-3 py-1 text-[0.65rem] font-medium text-primary-foreground">
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-6 py-5">
                  <h3 className="font-display text-base font-medium">{p.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a

                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-violet transition-colors duration-300 hover:text-electric"
                  >
                    Live
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                
              </div>
            </div>
            </Reveal>
          ))}
      </div>

      <Reveal delay={120} className="mt-14 flex justify-center">
        <MagneticButton variant="outline">
          View All Projects
          <ArrowUpRight className="h-4 w-4" />
        </MagneticButton>
      </Reveal>
    </div>
    </section >
  );
}