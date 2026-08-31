import { Reveal } from "./Reveal";

const quotes = [
  {
    quote:
      "NexSite transformed our idea into a powerful digital product. Their attention to detail and professionalism is unmatched.",
    name: "Sarah Johnson",
    role: "CEO, Vanta Store",
  },
  {
    quote:
      "They delivered beyond our expectations. The team is creative, technical and genuinely invested in the outcome.",
    name: "Ali Raza",
    role: "Founder, Orbit",
  },
];

export function Testimonials() {
  return (
    <section id="blog" className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 110}>
              <figure className="glass-panel relative h-full rounded-xl p-8 transition-all duration-500 hover:border-violet/35 hover:shadow-[0_24px_70px_-40px_var(--violet)]">
                <span
                  aria-hidden
                  className="font-display text-6xl leading-none text-violet/35"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-4 text-[0.95rem] leading-relaxed text-foreground/85">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-display text-sm">{q.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
