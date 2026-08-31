import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const quick = ["Home", "Services", "Work", "About"];
const services = [
  "Web Development",
  "Web Applications",
  "E-Commerce",
  "UI/UX Design",
  "Branding",
];
const socials = [Facebook, Twitter, Instagram, Linkedin];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
<div className="mx-auto grid max-w-[1280px] justify-items-center gap-12 px-6 py-16 text-center sm:grid-cols-3 sm:text-left lg:px-10">
        <div>
  <div className="flex items-center gap-2">
            <img src={logo} alt="NexSite" className="h-8 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-[0.83rem] leading-relaxed text-muted-foreground">
            Crafting digital experiences that make an impact for forward-thinking brands.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-violet/50 hover:text-violet"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-[0.83rem] text-muted-foreground">
            {quick.map((l) => (
              <li key={l}>
                <a href="#home" className="transition-colors hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm">Services</h3>
          <ul className="mt-5 space-y-3 text-[0.83rem] text-muted-foreground">
            {services.map((l) => (
              <li key={l}>
                <a href="#services" className="transition-colors hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground lg:px-10">
        © 2026 NexSite. All rights reserved.
      </div>
    </footer>
  );
}
