import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { img } from "../data/media";

type ProjectCategory = "Living Rooms" | "Bedrooms" | "Kitchens" | "Offices" | "Full-home Projects";

type Project = {
  name: string;
  category: ProjectCategory;
  location: string;
  scope: string;
  image: string;
};

const projects: Project[] = [
  { name: "Chhatarpur Residence", category: "Living Rooms", location: "Chhatarpur, Delhi", scope: "Living room design & furniture", image: "/interior_2_08.png" },
  { name: "Vasant Kunj Apartment", category: "Bedrooms", location: "Vasant Kunj, Delhi", scope: "Master bedroom & storage", image: "/interior_2_07.png" },
  { name: "Saket Family Home", category: "Bedrooms", location: "Saket, Delhi", scope: "Bedroom interiors & wardrobes", image: "/interior_08.png" },
  { name: "South Delhi Penthouse", category: "Full-home Projects", location: "South Delhi", scope: "Complete home interior", image: "/tvvv.png" },
];

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Living Rooms",
  "Bedrooms",
  "Kitchens",
  "Offices",
  "Full-home Projects",
];

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <SEO
        title="Luxury Interior & Furniture Projects | Kohinoor Furniture House"
        description="Explore residential and commercial furniture and interior design projects by Kohinoor Furniture House across Delhi NCR."
      />

      <section className="relative flex h-[65vh] min-h-[440px] items-end overflow-hidden bg-charcoal text-ivory">
        <img src="/interior_2_08.png" alt="Kohinoor Furniture House portfolio" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">PORTFOLIO</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">
            Spaces we've brought to life.
          </h1>
        </div>
      </section>

      <section className="container-xl py-20 md:py-24">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-[8px] border px-5 py-2.5 text-xs tracking-[0.08em] uppercase transition-all duration-300 ${
                active === c
                  ? "border-gold bg-gold text-forest shadow-[0_10px_20px_rgba(198,161,91,0.2)]"
                  : "border-gold/60 bg-transparent text-charcoal/70 hover:border-gold hover:bg-gold/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>*]:mb-8">
          {filtered.map((p) => (
            <Reveal key={p.name}>
              <button onClick={() => setLightbox(p)} className="group block w-full text-left">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <span className="label text-charcoal/40">{p.category}</span>
                  <h3 className="mt-2 font-serif text-xl text-forest">{p.name}</h3>
                  <p className="mt-1 text-sm text-charcoal/55">{p.location} · {p.scope}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-ivory border-y border-champagne/30 py-24 md:py-28">
        <div className="container-xl">
          <Reveal>
            <p className="label">BEFORE &amp; AFTER</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
              Drag to see the transformation.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <BeforeAfterSlider before={img.emptyRoom2} after={img.kitchen1} />
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 text-ivory/70 hover:text-ivory"
            onClick={() => setLightbox(null)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.name} className="max-h-[75vh] w-full object-contain" />
            <div className="mt-4 text-center text-ivory">
              <h3 className="font-serif text-2xl">{lightbox.name}</h3>
              <p className="mt-1 text-sm text-ivory/60">
                {lightbox.category} · {lightbox.location} · {lightbox.scope}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
