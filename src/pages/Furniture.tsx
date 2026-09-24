import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { categories, products } from "../data/products";
import { img } from "../data/media";
import { waLink, waMessages } from "../data/business";

const furnitureTypes = [
  "Door",
  "Dining Table",
  "Designer Furniture",
  "Kids Furniture",
  "Modular Furniture",
  "Window",
  "Cupboard",
  "Computer Table",
  "Sofa",
];

export default function Furniture() {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <SEO
        title="Custom & Designer Furniture in Delhi | Kohinoor Furniture House"
        description="Bespoke sofas, beds, dining tables, wardrobes and more — thoughtfully designed and expertly crafted for your space in Delhi NCR."
      />

      {/* HERO */}
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden bg-charcoal text-ivory">
        <img src="/sofffa.png" alt="Bespoke furniture by Kohinoor Furniture House" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">FURNITURE</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">
            Bespoke furniture made for your space.
          </h1>
          <p className="mt-6 max-w-xl text-ivory/75">Thoughtfully designed. Expertly crafted. Uniquely yours.</p>
        </div>
      </section>

      {/* FURNITURE TYPES STRIP */}
      <section className="border-b border-champagne/30 bg-ivory py-8">
        <div className="container-xl flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="label text-charcoal/40">WE CRAFT:</span>
          {furnitureTypes.map((t) => (
            <span key={t} className="text-sm text-charcoal/60">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CATEGORY FILTER + GRID */}
      <section className="container-xl py-20 md:py-28">
        <div className="flex flex-wrap gap-3">
          {["All", ...categories].map((c) => (
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

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="group">
                <Link to={`/furniture/${p.slug}`} className="block overflow-hidden">
                  <div className="product-card-image relative aspect-[4/5]">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="product-card-image__img h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      style={{ filter: "none", opacity: 1, mixBlendMode: "normal", background: "transparent" }}
                    />
                  </div>
                </Link>
                <div className="mt-5">
                  <span className="label text-charcoal/40">{p.category}</span>
                  <Link to={`/furniture/${p.slug}`}>
                    <h3 className="mt-2 font-serif text-2xl text-forest">{p.name}</h3>
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gold">{p.priceLabel}</span>
                    <Link to={`/furniture/${p.slug}`} className="link-underline text-xs tracking-[0.08em] uppercase text-forest">
                      View Details
                    </Link>
                  </div>
                  <a
                    href={waLink(waMessages.product(p.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center border border-champagne/50 py-3 text-xs tracking-[0.08em] uppercase text-charcoal/70 transition-colors duration-300 hover:border-forest hover:text-forest"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-center text-ivory">
        <div className="container-xl">
          <h2 className="font-serif text-3xl md:text-4xl">Can't find exactly what you're picturing?</h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/70">
            Every piece can be tailored to your dimensions, material and finish preferences.
          </p>
          <Link to="/custom-furniture" className="btn-outline mt-8 inline-flex">
            Explore Custom Furniture
          </Link>
        </div>
      </section>
    </>
  );
}
