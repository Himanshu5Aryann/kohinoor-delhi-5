import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { waLink, waMessages } from "../data/business";

const process = [
  { n: "01", title: "Consultation", desc: "Understand the space, requirements, lifestyle and budget." },
  { n: "02", title: "Concept", desc: "Develop the design direction." },
  { n: "03", title: "2D / 3D Design", desc: "Visualize the proposed space." },
  { n: "04", title: "Material Selection", desc: "Choose finishes, materials, hardware and colors." },
  { n: "05", title: "Manufacturing", desc: "Craft furniture and components." },
  { n: "06", title: "Installation", desc: "Professional installation and final finishing." },
];

export default function InteriorDesign() {
  return (
    <>
      <SEO
        title="Interior Design & Modular Kitchens in Delhi | Kohinoor Furniture House"
        description="Residential and commercial interior design — modular kitchens, bedrooms, living rooms, offices and complete home interiors in Chhatarpur, Delhi."
      />

      <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-charcoal text-ivory">
        <img
          src="/ChatGPT%20Image%20Sep%2021,%202026,%2002_26_55%20PM.png"
          alt="Interiors designed by Kohinoor Furniture House"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "none", opacity: 1, mixBlendMode: "normal", backgroundBlendMode: "normal" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">INTERIOR DESIGN</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">Interiors designed around you.</h1>
        </div>
      </section>

      {/* RESIDENTIAL — large image left */}
      <section className="container-xl grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 md:py-28">
        <Reveal className="aspect-[4/5] overflow-hidden">
          <img
            src="/ChatGPT%20Image%20Sep%2021,%202026,%2002_30_11%20PM.png"
            alt="Residential interior design"
            className="h-full w-full object-cover"
            loading="lazy"
            style={{ filter: "none", opacity: 1, mixBlendMode: "normal", backgroundBlendMode: "normal" }}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">RESIDENTIAL INTERIORS</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">Living spaces, tailored to you.</h2>
          <p className="mt-6 max-w-md text-charcoal/70">
            From individual rooms to full apartments and villas, we design residential interiors that
            reflect how you actually live — balancing aesthetics, function and comfort.
          </p>
        </Reveal>
      </section>

      {/* MODULAR KITCHEN — full width */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img src={img.kitchen2} alt="Modular kitchen design" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="container-xl relative z-10 flex h-full items-center">
          <Reveal className="max-w-lg text-ivory">
            <p className="label text-champagne">MODULAR KITCHEN</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15]">Functional, elegant, built around your workflow.</h2>
            <p className="mt-6 text-ivory/75">
              Every modular kitchen is planned around storage, appliances and the way you cook —
              finished with premium countertops and cabinetry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BEDROOM + LIVING — offset grid */}
      <section className="container-xl py-24 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal className="group relative aspect-[4/5] overflow-hidden">
            <img src={img.bedroom2} alt="Bedroom design" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-ivory">
              <p className="label text-champagne">BEDROOM DESIGN</p>
              <h3 className="mt-3 font-serif text-2xl">Calm, restful, personal.</h3>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="group relative mt-0 aspect-[4/5] overflow-hidden md:mt-14">
            <img
              src="/ChatGPT%20Image%20Sep%2021,%202026,%2002_34_01%20PM.png"
              alt="Living room design"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              style={{ filter: "none", opacity: 1, mixBlendMode: "normal", backgroundBlendMode: "normal" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-ivory">
              <p className="label text-champagne">LIVING ROOM DESIGN</p>
              <h3 className="mt-3 font-serif text-2xl">A space built for gathering.</h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFICE INTERIORS */}
      <section className="bg-emerald py-24 text-ivory md:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label">OFFICE INTERIORS</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15]">Sophisticated, functional workspaces.</h2>
            <p className="mt-6 max-w-md text-ivory/70">
              We design corporate and home offices that balance professionalism with comfort —
              from executive cabins to open workstations.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="aspect-[4/3] overflow-hidden">
            <img src={img.office3} alt="Office interior design" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* 2D/3D + COMPLETE HOME */}
      <section className="container-xl grid grid-cols-1 gap-6 py-24 md:grid-cols-3 md:py-28">
        {[
          { title: "2D / 3D Design", desc: "Visualize your space before execution begins.", image: img.office1 },
          { title: "Complete Home Interior", desc: "Concept, design, manufacturing and installation, end to end.", image: img.livingRoom6 },
          { title: "Kitchen & Storage", desc: "Wardrobes, kitchens and storage designed as one system.", image: img.wardrobe1 },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className="group relative aspect-[4/5] overflow-hidden">
            <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-charcoal/40" />
            <div className="absolute bottom-0 left-0 p-6 text-ivory">
              <h3 className="font-serif text-xl">{c.title}</h3>
              <p className="mt-2 text-xs text-ivory/70">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">THE PROCESS</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">
              From first idea to final installation.
            </h2>
          </Reveal>
          <div className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-ivory/15 md:block" />
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold font-serif text-lg text-gold">
                  {s.n}
                </div>
                <h3 className="mt-6 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/65">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container-xl">
          <h2 className="font-serif text-4xl text-forest md:text-5xl">Let's design your interior.</h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-outline-dark">
              Book a Free Consultation
            </Link>
            <a href={waLink(waMessages.interior)} target="_blank" rel="noreferrer" className="btn-primary">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
