import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexSite — Digital Experiences That Drive Results" },
      {
        name: "description",
        content:
          "NexSite is a creative web development studio building high-performance websites, web apps and digital products for forward-thinking brands.",
      },
      { property: "og:title", content: "NexSite — Creative Web Development Studio" },
      {
        property: "og:description",
        content:
          "Websites, web applications, e-commerce and UI/UX design crafted for brands that want results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="noise relative min-h-screen overflow-x-clip bg-background">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
