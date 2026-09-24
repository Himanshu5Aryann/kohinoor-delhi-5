import { useEffect } from "react";
import { business } from "../data/business";

type SEOProps = {
  title: string;
  description: string;
  structuredData?: Record<string, unknown>;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description, structuredData }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");

    const scriptId = "ld-json-page";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(
      structuredData ?? {
        "@context": "https://schema.org",
        "@type": "FurnitureStore",
        name: business.name,
        image: "",
        telephone: business.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "G-84, near Sohan Rai Public School, Birla A1 Society, Ram Colony, Block G",
          addressLocality: "Chhatarpur",
          addressRegion: "New Delhi",
          postalCode: "110074",
          addressCountry: "IN",
        },
        areaServed: "South Delhi",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: business.rating,
          reviewCount: business.reviewCount,
        },
        url: business.mapsUrl,
      },
    );

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [title, description, structuredData]);

  return null;
}
