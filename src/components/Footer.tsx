import { Link } from "react-router-dom";
import { business, waLink, waMessages } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="container-xl grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl tracking-[0.15em]">KOHINOOR</span>
            <span className="mt-1 text-[10px] tracking-[0.45em] text-gold">FURNITURE HOUSE</span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
            Bespoke Furniture &amp; Interior Design. Designed for your space, crafted for your lifestyle — since 2008.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Kohinoor Furniture House on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold/80 bg-forest/40 text-gold transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/md3674irfan?stkn=MXZwYXZpcXlzMnJraw%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="Md Irfan (@md3674irfan) • Instagram photos and videos"
              title="Md Irfan (@md3674irfan) • Instagram photos and videos"
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold/80 bg-forest/40 text-gold transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.13a1.13 1.13 0 1 1-1.13 1.13 1.13 1.13 0 0 1 1.13-1.13Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@mdirfan9668?si=5v22GikTJvwtXOi3"
              target="_blank"
              rel="noreferrer"
              aria-label="Md Irfan on YouTube"
              title="Md Irfan on YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold/80 bg-forest/40 text-gold transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 12c0-1.2-.1-2.4-.3-3.5-.2-1.1-.9-2-2-2.4C19.6 5.5 16.9 5 12 5s-7.6.5-9.2 1.1c-1.1.4-1.8 1.3-2 2.4C.6 9.6.5 10.8.5 12c0 1.2.1 2.4.3 3.5.2 1.1.9 2 2 2.4C4.4 18.5 7.1 19 12 19s7.6-.5 9.2-1.1c1.1-.4 1.8-1.3 2-2.4.2-1.1.3-2.3.3-3.5Zm-13.6 2.8V9.2l6.1 2.8-6.1 2.8Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="label mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            {[
              ["Home", "/"],
              ["Furniture", "/furniture"],
              ["Interior Design", "/interior-design"],
              ["Custom Furniture", "/custom-furniture"],
              ["Portfolio", "/portfolio"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["FAQ", "/faq"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="link-underline hover:text-ivory">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            {["Sofas", "Beds", "Dining Tables", "Wardrobes", "TV Units", "Modular Kitchens", "Complete Home Interiors", "Office Interiors"].map(
              (s) => (
                <li key={s}>{s}</li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="label mb-6">Visit Us</h4>
          <p className="text-sm leading-relaxed text-ivory/75">
            {business.address.line1}
            <br />
            {business.address.line2}
            <br />
            {business.address.line3}
          </p>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm link-underline"
          >
            Enquire on WhatsApp
          </a>
          <div className="mt-4 flex flex-col gap-2 text-sm text-champagne/80">
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="link-underline w-fit">
              View on Google Maps
            </a>
            <a href={business.justdialUrl} target="_blank" rel="noreferrer" className="link-underline w-fit">
              Find us on Justdial
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-xl flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 md:flex-row">
          <p>© 2026 Kohinoor Furniture House. All Rights Reserved.</p>
          <div className="flex flex-col items-center text-center md:items-end">
            <p>Built and designed by Himanshu Aryann</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
