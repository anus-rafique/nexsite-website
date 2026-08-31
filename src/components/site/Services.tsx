import { Code2, LayoutGrid, ShoppingBag, PenTool, Megaphone, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import mobileAppImg from "@/assets/service-mobile-app.png";
import webDesignImg from "@/assets/service-web-design.png";
import animationImg from "@/assets/service-3d-animation.png";
import seoImg from "@/assets/service-seo.png";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "We build seamless Android and iOS apps tailored to your goals — from utility apps to business platforms.",
    variant: "a",
    image: mobileAppImg,
    imageSize: "w-[34%] sm:w-[30%]",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    body: "Fast, secure and scalable websites and eCommerce platforms that reflect your brand and drive conversions.",
    variant: "b",
    image: webDesignImg,
    imageSize: "w-[54%] sm:w-[50%]",
  },
  {
    icon: LayoutGrid,
    title: "Web Applications",
    body: "Powerful web apps engineered to solve real business problems at scale.",
    variant: "a",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    body: "Distinct visual identities — logos, guidelines and assets that make your brand memorable.",
    variant: "b",
  },
  {
    icon: Megaphone,
    title: "SEO & Digital Marketing",
    body: "Proven strategies to boost visibility on search engines and turn traffic into real results.",
    variant: "a",
    image: seoImg,
    imageSize: "w-[38%] sm:w-[34%]",
  },
  {
    icon: ShoppingBag,
    title: "3D Animation",
    body: "Our top 3D artists bring ideas to life — product visualizations, renders and promotional animations.",
    variant: "b",
    image: animationImg,
    imageSize: "w-[54%] sm:w-[50%] !-right-4 sm:!-right-6",
  },
];

const variantClasses: Record<string, string> = {
  a: "bg-gradient-to-br from-[var(--electric)] to-[var(--violet)] text-white",
  b: "bg-gradient-to-br from-[#0B1B3A] to-[#0A1128] border border-[var(--violet)]/30 text-white",
};

function ServiceCard({ s, className = "" }: { s: (typeof services)[number]; className?: string }) {
  return (
    <article className={`group relative ${className}`}>
      {/* Colored background layer, clipped to rounded corners */}
      <div
        className={`absolute inset-0 overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-1.5 ${variantClasses[s.variant]}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-8 z-10 h-auto w-40 max-w-none object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:-right-8 sm:-top-10 sm:w-56"
        />
      </div>

      {/* Text content, sits above the background */}
      <div className="relative flex min-h-[240px] items-center py-8 pl-7 pr-4">
        <div className={s.image ? "w-1/2" : "w-full"}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-black/15 backdrop-blur-sm">
            <s.icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <h3 className="mt-6 font-display text-lg font-semibold text-white">
            {s.title}
          </h3>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-white/80">
            {s.body}
          </p>
        </div>
      </div>

      {/* Image — sits outside the clipped background so it can overflow the card */}
      {s.image && (
        <img
          src={s.image}
          alt=""
          aria-hidden
          className={`pointer-events-none absolute right-2 top-1/2 z-10 -translate-y-1/2 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 sm:right-3 ${s.imageSize}`}
        />
      )}
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium">
            Services
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {/* Row 1 */}
          <div className="grid gap-5 sm:grid-cols-5">
            <Reveal className="sm:col-span-3">
              <ServiceCard s={services[0]} className="h-full" />
            </Reveal>
            <Reveal delay={90} className="sm:col-span-2">
              <ServiceCard s={services[1]} className="h-full" />
            </Reveal>
          </div>

          {/* Row 2 */}
          <div className="grid gap-5 sm:grid-cols-4">
            <Reveal delay={120} className="sm:col-span-1">
              <ServiceCard s={services[2]} className="h-full" />
            </Reveal>
            <Reveal
              delay={180}
              className="glass-panel flex flex-col items-center justify-center rounded-2xl p-8 text-center sm:col-span-2"
            >
              <h3 className="font-display text-2xl font-semibold">Our Services</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                End-to-end digital solutions, tailored to your business goals and audience.
              </p>
            </Reveal>
            <Reveal delay={240} className="sm:col-span-1">
              <ServiceCard s={services[3]} className="h-full" />
            </Reveal>
          </div>

          {/* Row 3 */}
          <div className="grid gap-5 sm:grid-cols-5">
            <Reveal delay={270} className="sm:col-span-3">
              <ServiceCard s={services[4]} className="h-full" />
            </Reveal>
            <Reveal delay={330} className="sm:col-span-2">
              <ServiceCard s={services[5]} className="h-full" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}