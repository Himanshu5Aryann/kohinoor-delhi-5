export const business = {
  name: "Kohinoor Furniture House",
  tagline: "Bespoke Furniture & Interior Design",
  phone: "+91 88026 67860",
  phoneRaw: "918802667860",
  since: 2008,
  yearsExperience: new Date().getFullYear() - 2008,
  address: {
    line1: "G-84, near Sohan Rai Public School,",
    line2: "Birla A1 Society, Ram Colony, Block G,",
    line3: "Chhatarpur, New Delhi, Delhi 110074, India",
    full: "G-84, near Sohan Rai Public School, Birla A1 Society, Ram Colony, Block G, Chhatarpur, New Delhi, Delhi 110074, India",
  },
  mapsUrl: "https://maps.app.goo.gl/iD9TNHMMTfYyRhna9",
  justdialUrl: "https://jsdl.in/DT-238AW8KY",
  facebookUrl: "https://www.facebook.com/share/p/19KWBZGdZZ/",
  rating: 5.0,
  reviewCount: 86,
};

export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${business.phoneRaw}?text=${text}`;
}

export const waMessages = {
  general:
    "Hi Kohinoor Furniture House, I would like to enquire about your furniture and interior design services.",
  furniture:
    "Hi Kohinoor Furniture House, I would like to enquire about custom furniture.",
  interior:
    "Hi Kohinoor Furniture House, I would like to discuss an interior design project.",
  custom:
    "Hi Kohinoor Furniture House, I would like a custom quote for a made-to-order piece.",
  product: (name: string) =>
    `Hi Kohinoor Furniture House, I would like to enquire about the ${name}.`,
  consultation:
    "Hi Kohinoor Furniture House, I would like to book a free consultation.",
};

export function telLink() {
  return `tel:${business.phone.replace(/\s+/g, "")}`;
}
