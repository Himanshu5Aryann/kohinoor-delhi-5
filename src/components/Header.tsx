import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { business, waLink, waMessages } from "../data/business";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/furniture", label: "Furniture" },
  { to: "/interior-design", label: "Interior Design" },
  { to: "/custom-furniture", label: "Custom Furniture" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ivory/95 shadow-[0_1px_0_0_rgba(198,161,91,0.25)] backdrop-blur-md"
          : "border-b border-white/10 bg-white/8 backdrop-blur-[12px]"
      }`}
    >
      <div className="container-xl flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="group flex items-center gap-3 leading-none">
          <img
            src="/logohere.png"
            alt="Kohinoor Furniture House logo"
            className={`h-9 w-auto object-contain transition-all duration-500 md:h-11 ${solid ? "drop-shadow-[0_2px_8px_rgba(11,47,38,0.12)]" : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]"}`}
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-serif text-[1.1rem] tracking-[0.14em] transition-colors duration-500 md:text-[1.5rem] ${
                solid ? "text-forest" : "text-ivory"
              }`}
            >
              KOHINOOR
            </span>
            <span
              className={`mt-1 text-[7px] tracking-[0.34em] transition-colors duration-500 md:text-[8px] ${
                solid ? "text-gold" : "text-champagne"
              }`}
            >
              FURNITURE HOUSE
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 link-underline ${
                  solid ? "text-charcoal/80 hover:text-forest" : "text-ivory/90 hover:text-ivory"
                } ${isActive ? (solid ? "text-forest after:w-full" : "text-ivory after:w-full") : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={waLink(waMessages.consultation)}
            target="_blank"
            rel="noreferrer"
            className={`text-sm tracking-[0.08em] uppercase font-medium px-6 py-3 border transition-all duration-300 ${
              solid
                ? "border-forest text-forest hover:bg-forest hover:text-ivory"
                : "border-ivory/70 text-ivory hover:bg-ivory hover:text-forest"
            }`}
          >
            Enquire Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-gold lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <nav className="container-xl flex flex-col gap-1 pb-8 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="border-b border-champagne/30 py-4 text-sm tracking-[0.1em] uppercase text-charcoal/80"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
