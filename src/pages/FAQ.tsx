import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";

const faqs = [
  {
    q: "Do you provide custom furniture?",
    a: "Yes. Custom furniture can be designed according to your dimensions, materials, finishes and specific requirements — from a single piece to a full room.",
  },
  {
    q: "What is the starting price?",
    a: "Pricing depends on design, size, material, finish and level of customization. We recommend a consultation so we can provide an accurate, tailored quote for your project.",
  },
  {
    q: "How long does manufacturing take?",
    a: "Production time depends on the complexity of the project and the materials used. Timelines are discussed and confirmed during the design and quotation stage.",
  },
  {
    q: "Do you provide installation?",
    a: "Yes, professional installation is available as part of our furniture and interior projects, coordinated with our team once manufacturing is complete.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Chhatarpur, New Delhi and primarily serve clients across Delhi NCR. Please get in touch to confirm feasibility for your specific location.",
  },
  {
    q: "Do you provide 3D designs?",
    a: "Yes, 2D/3D design is part of our interior design service, allowing you to visualize your space before manufacturing and installation begin.",
  },
  {
    q: "Can I choose materials and finishes?",
    a: "Yes. You can choose from a range of materials — including wood, steel, PVC and iron — along with finishes, colours and hardware to match your preferences.",
  },
  {
    q: "Can I request a custom quote?",
    a: "Yes, every project is quoted individually based on your design, materials and requirements. Reach out to us to request a custom quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Kohinoor Furniture House"
        description="Answers to common questions about custom furniture, pricing, manufacturing timelines, installation and interior design services at Kohinoor Furniture House."
      />

      <section className="relative flex h-[45vh] min-h-[320px] items-end overflow-hidden bg-charcoal text-ivory">
        <img src={img.workshop3} alt="Kohinoor Furniture House" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/40" />
        <div className="container-xl relative z-10 pb-14 pt-28">
          <p className="label text-champagne">FAQ</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="container-xl max-w-3xl py-20 md:py-28">
        <div className="divide-y divide-champagne/30 border-y border-champagne/30">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="font-serif text-xl text-forest pr-6">{f.q}</span>
                <span className={`shrink-0 text-2xl text-gold transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl text-charcoal/65">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-charcoal/60">Still have a question about your project?</p>
          <Link to="/contact" className="btn-outline-dark mt-6 inline-flex">
            Request a Quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}
