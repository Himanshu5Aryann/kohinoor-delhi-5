import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { getProduct, products } from "../data/products";
import { waLink, waMessages } from "../data/business";

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/furniture" replace />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${product.name} | Kohinoor Furniture House`}
        description={product.description}
      />

      <div className="container-xl pt-28 pb-4 md:pt-36">
        <nav className="text-xs tracking-[0.08em] uppercase text-charcoal/45">
          <Link to="/furniture" className="hover:text-forest">
            Furniture
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal/70">{product.name}</span>
        </nav>
      </div>

      <section className="container-xl grid grid-cols-1 gap-14 py-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img src={product.images[activeImg]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.map((im, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`aspect-square overflow-hidden border-2 transition-colors ${
                  activeImg === i ? "border-gold" : "border-transparent"
                }`}
              >
                <img src={im} alt={`${product.name} view ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="label text-charcoal/40">{product.category}</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg font-medium text-gold">{product.priceLabel}</p>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">{product.longDescription}</p>

          <dl className="mt-10 space-y-5 border-t border-champagne/40 pt-8">
            <div className="grid grid-cols-3 gap-4">
              <dt className="text-sm text-charcoal/45">Dimensions</dt>
              <dd className="col-span-2 text-sm text-charcoal/75">{product.dimensions}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <dt className="text-sm text-charcoal/45">Materials</dt>
              <dd className="col-span-2 text-sm text-charcoal/75">{product.materials.join(", ")}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <dt className="text-sm text-charcoal/45">Finishes</dt>
              <dd className="col-span-2 text-sm text-charcoal/75">{product.finishes.join(", ")}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <dt className="text-sm text-charcoal/45">Colours</dt>
              <dd className="col-span-2 text-sm text-charcoal/75">{product.colors.join(", ")}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <dt className="text-sm text-charcoal/45">Customization</dt>
              <dd className="col-span-2 text-sm text-charcoal/75">{product.customization.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-champagne/40 pt-8 text-sm text-charcoal/60 sm:grid-cols-2">
            <p>
              <span className="font-medium text-charcoal/80">Manufacturing —</span> crafted in our own workshop
              with hand-finished detailing.
            </p>
            <p>
              <span className="font-medium text-charcoal/80">Delivery &amp; Installation —</span> coordinated
              across Delhi NCR upon confirmation of your order.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink(waMessages.product(product.name))}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Enquire on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline-dark">
              Request a Quote
            </Link>
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="border-t border-champagne/30 bg-ivory py-20 md:py-28">
        <div className="container-xl">
          <h2 className="font-serif text-3xl text-forest">You may also like</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} to={`/furniture/${p.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-forest">{p.name}</h3>
                <p className="text-sm text-gold">{p.priceLabel}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-14 z-30 flex gap-3 border-t border-champagne/40 bg-ivory p-3 md:hidden">
        <a href={waLink(waMessages.product(product.name))} target="_blank" rel="noreferrer" className="btn-primary flex-1 py-3 text-xs">
          WhatsApp
        </a>
        <Link to="/contact" className="btn-outline-dark flex-1 py-3 text-xs">
          Get Quote
        </Link>
      </div>
    </>
  );
}
