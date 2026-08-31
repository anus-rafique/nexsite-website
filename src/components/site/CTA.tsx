import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import glow from "@/assets/cta-glow.jpg";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 lg:py-20">
      <img
        src={glow}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={700}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />
      <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.08]">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Let&apos;s create digital experiences that drive real results for your business.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="#work">
              <MagneticButton className="px-9 py-3.5">
                Explore Our Work
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
