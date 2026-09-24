import { telLink, waLink, waMessages } from "../data/business";

export default function FloatingContact() {
  return (
    <div
      className="fixed right-5 z-40 flex flex-col gap-3 md:bottom-8 md:right-8"
      style={{ bottom: "max(20px, env(safe-area-inset-bottom))" }}
    >
      <a
        href={telLink()}
        aria-label="Call Kohinoor Furniture House"
        title="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-[8px] border border-gold/80 bg-forest/90 text-gold shadow-[0_12px_26px_rgba(11,47,38,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-forest"
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      </a>
      <a
        href={waLink(waMessages.general)}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
        title="Enquire on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-[8px] border border-gold/80 bg-[#25D366] text-white shadow-[0_12px_26px_rgba(11,47,38,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.42-1.36a9.86 9.86 0 0 0 4.62 1.16h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.38 1.32-1.92 1.4-.49.07-1.1.1-1.78-.11a17 17 0 0 1-1.62-.6c-2.86-1.24-4.72-4.12-4.86-4.31-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
        </svg>
      </a>
    </div>
  );
}
