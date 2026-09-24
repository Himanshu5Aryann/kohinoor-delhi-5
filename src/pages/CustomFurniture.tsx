import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { waLink, waMessages } from "../data/business";

const steps = [
  { n: "01", title: "Consultation", desc: "We understand your space, requirements, lifestyle and budget." },
  { n: "02", title: "Design", desc: "A design direction is developed around your preferences." },
  { n: "03", title: "Material Selection", desc: "Choose wood, steel, PVC, iron, finish, colour and hardware." },
  { n: "04", title: "Manufacturing", desc: "Your piece is crafted in our workshop with precision joinery." },
  { n: "05", title: "Installation", desc: "Professional delivery, installation and final finishing." },
];

const customizations = [
  "Design", "Size", "Dimensions", "Material", "Wood", "Steel", "PVC", "Iron", "Finish", "Color", "Hardware", "Storage configuration",
];

export default function CustomFurniture() {
  return (
    <>
      <SEO
        title="Bespoke Custom Furniture in Delhi | Kohinoor Furniture House"
        description="Made-to-order furniture designed around your dimensions, materials and finishes. Consultation, design, manufacturing and installation in Delhi NCR."
      />

      <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-charcoal text-ivory">
        <img src={img.workshop3} alt="Craftsman working on bespoke custom furniture" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">CUSTOM FURNITURE</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">Your idea. Our craft.</h1>
          <p className="mt-6 max-w-xl text-ivory/75">
            Made-to-order furniture, designed around your space and crafted to your exact specification.
          </p>
        </div>
      </section>

      {/* CUSTOMIZATION OPTIONS */}
      <section className="container-xl py-20 md:py-28">
        <Reveal>
          <p className="label">FULLY CUSTOMIZABLE</p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
            Every detail, designed around you.
          </h2>
          <p className="mt-6 max-w-xl text-charcoal/70">
            From the overall design down to the smallest hardware detail, our clients can customize
            every aspect of a made-to-order piece.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {customizations.map((c) => (
            <span key={c} className="border border-champagne/50 px-5 py-2.5 text-xs tracking-[0.08em] uppercase text-charcoal/65">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-emerald py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">OUR PROCESS</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">
              A considered five-step process.
            </h2>
          </Reveal>
          <div className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-6">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-ivory/20 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-emerald font-serif text-lg text-gold">
                  {s.n}
                </div>
                <h3 className="mt-6 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/65">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP VISUAL */}
      <section className="container-xl py-24 md:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal className="md:col-span-2 aspect-[16/10] overflow-hidden">
            <img src={img.workshop5} alt="Kohinoor manufacturing workshop" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="aspect-[16/10] overflow-hidden md:aspect-auto">
            <img src={img.workshop6} alt="Craftsman finishing custom furniture" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-center text-ivory">
        <div className="container-xl">
          <h2 className="font-serif text-4xl md:text-5xl">Ready to bring your idea to life?</h2>
          <p className="mx-auto mt-6 max-w-xl text-ivory/70">
            Share your requirements and our design team will get back to you with a tailored quote.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-gold-outline">
              Get a Custom Quote
            </Link>
            <a href={waLink(waMessages.custom)} target="_blank" rel="noreferrer" className="btn-primary bg-gold border-gold text-forest hover:bg-transparent hover:text-ivory">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
