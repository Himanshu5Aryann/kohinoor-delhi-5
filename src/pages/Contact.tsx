import { useState, type FormEvent } from "react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { business, telLink, waLink, waMessages } from "../data/business";

const projectTypes = [
  "Bespoke Furniture",
  "Custom Furniture",
  "Modular Kitchen",
  "Wardrobe / Storage",
  "Complete Home Interior",
  "Office Interior",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: projectTypes[0],
    budget: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Kohinoor Furniture House | Furniture Store in South Delhi"
        description="Contact Kohinoor Furniture House in New Delhi for bespoke furniture, custom wardrobes, home interiors and design consultations in South Delhi."
      />

      <section className="relative flex h-[55vh] min-h-[380px] items-end overflow-hidden bg-charcoal text-ivory">
        <img
          src="https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt="Kohinoor Furniture House"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">CONTACT</p>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.1] md:text-6xl">
            Let's create something beautiful.
          </h1>
        </div>
      </section>

      <section className="container-xl grid grid-cols-1 gap-16 py-20 lg:grid-cols-5 lg:gap-12 md:py-28">
        {/* CONTACT INFO */}
        <Reveal className="lg:col-span-2">
          <div className="space-y-10">
            <div>
              <p className="label">CALL</p>
              <a href={telLink()} className="link-underline mt-3 block font-serif text-2xl text-forest">
                {business.phone}
              </a>
            </div>
            <div>
              <p className="label">WHATSAPP</p>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-3 inline-flex"
              >
                Enquire on WhatsApp
              </a>
            </div>
            <div>
              <p className="label">ADDRESS</p>
              <p className="mt-3 max-w-xs text-charcoal/70">
                {business.address.line1}
                <br />
                {business.address.line2}
                <br />
                {business.address.line3}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="btn-gold-outline">
                Google Maps
              </a>
              <a href={business.justdialUrl} target="_blank" rel="noreferrer" className="btn-gold-outline">
                Find us on Justdial
              </a>
              <a href={business.facebookUrl} target="_blank" rel="noreferrer" className="link-underline text-sm text-charcoal/60">
                Facebook
              </a>
            </div>
          </div>
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.1} className="lg:col-span-3">
          {submitted ? (
            <div className="border border-champagne/50 p-10 text-center">
              <h3 className="font-serif text-2xl text-forest">Thank you. Your enquiry has been received.</h3>
              <p className="mt-4 text-charcoal/60">
                Our team will get back to you shortly to discuss your project.
              </p>
              <p className="mt-2 text-charcoal/60">Prefer a faster response? Continue on WhatsApp.</p>
              <a href={waLink(waMessages.general)} target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-flex">
                Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="mb-2 font-serif text-3xl text-forest">Book a Free Consultation</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label mb-2 block">Name *</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label mb-2 block">Phone *</label>
                  <input
                    id="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="label mb-2 block">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="label mb-2 block">Project Type *</label>
                  <select
                    id="projectType"
                    required
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="budget" className="label mb-2 block">Approximate Budget</label>
                  <input
                    id="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    placeholder="Optional"
                    className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="label mb-2 block">Location</label>
                  <input
                    id="location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="Optional"
                    className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="label mb-2 block">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-champagne/50 bg-transparent px-4 py-3 text-sm focus:border-forest focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Request Consultation
              </button>
            </form>
          )}
        </Reveal>
      </section>

      <section className="border-t border-champagne/30">
        <iframe
          title="Kohinoor Furniture House Location Map"
          src="https://www.google.com/maps?q=Kohinoor+Furniture+House+Chhatarpur+Delhi&output=embed"
          className="h-[420px] w-full"
          loading="lazy"
          style={{ filter: 'none' }}
        />
      </section>
    </>
  );
}
