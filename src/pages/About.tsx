import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { business, waLink, waMessages } from "../data/business";

export default function About() {
  return (
    <>
      <SEO
        title="About Kohinoor Furniture House | Since 2008"
        description="Kohinoor Furniture House was established in 2008 in Chhatarpur, New Delhi — bespoke furniture, custom manufacturing and interior design."
      />

      <section className="relative flex h-[65vh] min-h-[440px] items-end overflow-hidden bg-charcoal text-ivory">
        <img src={img.workshop6} alt="Kohinoor Furniture House workshop" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">ABOUT US</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">
            Crafted with experience. Built with purpose.
          </h1>
        </div>
      </section>

      <section className="container-xl py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mt-6 text-base leading-relaxed text-charcoal/70">
            <strong>Since 2008 | 18+ Years of Experience | 5.0★ Google Rating</strong>
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            Looking for the <strong>best furniture shop in Delhi</strong> for your home, office, or commercial space? <strong>Kohinoor Furniture House</strong>, located at <strong>F5WJ+7R, New Delhi, Delhi</strong>, has been serving customers since <strong>2008</strong>, offering stylish, functional, and durable furniture for different interior requirements.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">
            With <strong>18+ years of experience</strong> in the furniture industry and a <strong>5.0★ Google Rating</strong>, Kohinoor Furniture House is a trusted local destination for customers searching for quality furniture in <strong>South Delhi and nearby areas</strong>. Whether you are furnishing a new home, renovating your existing interiors, upgrading your office, or simply looking for a new furniture piece, our store offers a convenient place to explore different furniture options.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <div>
            <h3 className="font-serif text-3xl text-forest">Quality Furniture for Modern Homes</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Furniture plays an important role in the appearance, comfort, and functionality of any home. The right sofa can make your living room more welcoming, a comfortable bed can transform your bedroom, and a well-designed dining table can become the centre of family gatherings.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              At <strong>Kohinoor Furniture House</strong>, customers can explore furniture designed to combine <strong>comfort, functionality, style, and everyday usability</strong>. Our focus is on helping customers find furniture that suits their available space, interior design, lifestyle, and requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether your home has a <strong>modern, contemporary, traditional, minimalist, or luxury interior</strong>, selecting the right furniture can make a significant difference to the overall appearance of your space.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture for Every Room</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Every room has different requirements, and furniture should be selected according to the purpose and available space. Kohinoor Furniture House provides furniture solutions for different residential and commercial requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Customers can explore options for:
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-charcoal/70">
              <li>Living room furniture</li>
              <li>Bedroom furniture</li>
              <li>Dining room furniture</li>
              <li>Home furniture</li>
              <li>Office furniture</li>
              <li>Tables and seating</li>
              <li>Storage furniture</li>
              <li>Modern furniture</li>
              <li>Contemporary furniture</li>
              <li>Functional furniture for homes and workspaces</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether you need furniture for a single room or are furnishing an entire property, visiting a furniture store allows you to understand the size, design, finish, comfort, and overall appearance of different options before making a decision.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Best Furniture Shop in Delhi for Your Furniture Needs</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              When people search for the <strong>best furniture shop in Delhi</strong>, they often look for a combination of quality, design, experience, customer service, variety, and convenience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Kohinoor Furniture House brings together <strong>18+ years of industry experience</strong>, a <strong>5.0★ Google Rating</strong>, and a convenient South Delhi location. Customers can visit the store to explore furniture options and discuss their requirements in person.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Instead of choosing furniture only by looking at photographs online, visiting a physical furniture store allows you to evaluate the actual proportions, appearance, finish, and comfort of the furniture.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              If you are searching for a <strong>best furniture shop in Delhi</strong>, a <strong>furniture store in South Delhi</strong>, or a reliable local furniture destination near your area, Kohinoor Furniture House is worth exploring.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Serving South Delhi and Nearby Areas</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Kohinoor Furniture House serves customers from several prominent areas across South Delhi and surrounding neighbourhoods.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Our service areas include:
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-charcoal/70">
              <li>Mehrauli</li>
              <li>Sultanpur</li>
              <li>Saket</li>
              <li>Vasant Kunj</li>
              <li>Malviya Nagar</li>
              <li>Hauz Khas</li>
              <li>Vasant Vihar</li>
              <li>R.K. Puram</li>
              <li>Greater Kailash (GK)</li>
              <li>Nehru Place</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Customers from these areas can visit Kohinoor Furniture House when looking for furniture for their homes, apartments, offices, and other spaces.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Shop Near Mehrauli</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              If you are searching for a <strong>furniture shop near Mehrauli</strong>, Kohinoor Furniture House provides a convenient option for exploring furniture for different rooms and interior requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Mehrauli and its surrounding areas have a wide variety of residential properties, including apartments, independent homes, and larger residences. Each type of property can require different furniture sizes and designs. Visiting the store can help customers explore options according to their available space.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Store Near Sultanpur</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Customers from <strong>Sultanpur</strong> and nearby neighbourhoods can also visit Kohinoor Furniture House for their furniture requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether you are furnishing a new property, replacing old furniture, or upgrading your interiors, you can explore different furniture options and discuss your requirements with the team.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Shop in Saket</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              <strong>Saket</strong> is one of the prominent residential and commercial areas of South Delhi. Customers searching for a <strong>furniture shop near Saket</strong> can visit Kohinoor Furniture House to explore furniture for modern homes, apartments, offices, and other spaces.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              From individual furniture pieces to requirements for multiple rooms, customers can select furniture based on their preferred style, available space, and functionality.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Near Vasant Kunj</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              For customers searching for <strong>furniture near Vasant Kunj</strong>, Kohinoor Furniture House provides a local destination for exploring different furniture designs and options.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether you are moving into a new apartment or renovating your existing home, choosing furniture that fits your room dimensions and complements your interior design is important.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Shop Near Malviya Nagar</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Customers from <strong>Malviya Nagar</strong> can visit Kohinoor Furniture House when looking for furniture for their homes or workspaces.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Modern homes often require furniture that provides both visual appeal and practical functionality. From seating and tables to bedroom and storage requirements, customers can explore furniture options based on their specific needs.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Near Hauz Khas and Vasant Vihar</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Kohinoor Furniture House also serves customers from <strong>Hauz Khas</strong> and <strong>Vasant Vihar</strong>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              These South Delhi neighbourhoods include a mix of apartments, independent homes, offices, and commercial spaces. Customers looking for furniture can visit the store to explore options suitable for different types of interiors.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Near R.K. Puram</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              For customers in <strong>R.K. Puram</strong>, Kohinoor Furniture House offers another convenient option when searching for furniture in South Delhi.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether you need furniture for a bedroom, living room, dining area, office, or another space, visiting the store allows you to explore available designs and determine what works best for your requirements.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture Near Greater Kailash and Nehru Place</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Customers from <strong>Greater Kailash (GK)</strong> and <strong>Nehru Place</strong> can also visit Kohinoor Furniture House for their furniture requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              From residential furniture to options suitable for offices and commercial environments, customers can explore different furniture solutions according to their interior requirements.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Why Choose Kohinoor Furniture House?</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded border border-champagne/40 bg-ivory p-5">
                <h4 className="font-serif text-2xl text-forest">18+ Years of Experience</h4>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">Kohinoor Furniture House has been serving customers since <strong>2008</strong>, providing more than <strong>18 years of experience</strong> in the furniture industry.</p>
              </div>
              <div className="rounded border border-champagne/40 bg-ivory p-5">
                <h4 className="font-serif text-2xl text-forest">5.0★ Google Rating</h4>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">With a <strong>5.0★ Google Rating</strong>, Kohinoor Furniture House has received positive feedback from customers who have visited and purchased from the store.</p>
              </div>
              <div className="rounded border border-champagne/40 bg-ivory p-5">
                <h4 className="font-serif text-2xl text-forest">Quality and Style</h4>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">Furniture should not only look good but also work well within your space. Kohinoor Furniture House focuses on furniture that combines <strong>design, comfort, functionality, and everyday usability</strong>.</p>
              </div>
              <div className="rounded border border-champagne/40 bg-ivory p-5">
                <h4 className="font-serif text-2xl text-forest">Convenient South Delhi Location</h4>
                <p className="mt-3 text-base leading-relaxed text-charcoal/70">Located at <strong>F5WJ+7R, New Delhi, Delhi</strong>, the store is accessible to customers from <strong>Mehrauli, Sultanpur, Saket, Vasant Kunj, Malviya Nagar, Hauz Khas, Vasant Vihar, R.K. Puram, Greater Kailash, and Nehru Place</strong>.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Furniture for Homes, Apartments and Offices</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether you are furnishing your first home, moving into a new apartment, renovating your existing property, or upgrading an office, furniture selection is an important part of creating a comfortable and functional environment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              The right furniture should complement the dimensions of your space while matching your preferred interior style. Customers can consider factors such as room size, furniture dimensions, colour, design, comfort, functionality, and overall interior theme before making a purchase.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Kohinoor Furniture House provides customers with the opportunity to explore furniture options in person and discuss their requirements before selecting suitable pieces.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Your Local Furniture Destination in South Delhi</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              When searching for furniture online, customers often use terms such as <strong>best furniture shop in Delhi</strong>, <strong>best furniture store in South Delhi</strong>, <strong>furniture shop near me</strong>, <strong>furniture store near Mehrauli</strong>, <strong>furniture near Saket</strong>, and <strong>furniture shop near Vasant Kunj</strong>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Kohinoor Furniture House is positioned to serve customers searching for furniture across these South Delhi locations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              If you have recently moved to <strong>Saket, Vasant Kunj, Malviya Nagar, Mehrauli, Sultanpur, Hauz Khas, Vasant Vihar, R.K. Puram, Greater Kailash, or Nehru Place</strong>, you can visit Kohinoor Furniture House to explore furniture options for your home or workspace.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Seeing furniture in person can help you understand its actual size, design, finish, proportions, and comfort. This can be particularly useful when furnishing a new property or replacing multiple furniture pieces.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Find Furniture That Fits Your Space</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Choosing furniture is an important decision because furniture can influence both the appearance and usability of a room. A good furniture choice should fit the available space while also matching your lifestyle and interior preferences.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Whether you are looking for a new sofa, bedroom furniture, dining furniture, office furniture, storage solutions, or other furniture requirements, Kohinoor Furniture House provides a local destination where you can explore available options.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              With <strong>18+ years of experience since 2008</strong>, a <strong>5.0★ Google Rating</strong>, and a convenient South Delhi location, Kohinoor Furniture House continues to serve customers looking for furniture for their homes and workspaces.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-forest">Visit Kohinoor Furniture House</h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              If you are looking for the <strong>best furniture shop in Delhi</strong>, searching for a <strong>furniture store in South Delhi</strong>, or need a <strong>furniture shop near Mehrauli, Sultanpur, Saket, Vasant Kunj, Malviya Nagar, Hauz Khas, Vasant Vihar, R.K. Puram, Greater Kailash, or Nehru Place</strong>, visit Kohinoor Furniture House.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              <strong>Kohinoor Furniture House</strong>
            </p>
            <p className="mt-2 text-base leading-relaxed text-charcoal/70">
              <strong>F5WJ+7R, New Delhi, Delhi</strong>
            </p>
            <p className="mt-2 text-base leading-relaxed text-charcoal/70">
              <strong>Since 2008 | 18+ Years of Experience | 5.0★ Google Rating</strong>
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              Explore furniture designed to bring together <strong>comfort, functionality, quality, and style</strong> for your home or workspace.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container-xl grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 md:py-28">
        <Reveal>
          <p className="label">OUR STORY</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">
            Since 2008, Kohinoor Furniture House has been creating furniture with purpose.
          </h2>
          <p className="mt-6 max-w-xl text-charcoal/70">
            Kohinoor Furniture House has been serving customers in New Delhi and South Delhi since 2008.
            With 18+ years of experience, we design and craft furniture for homes, offices and commercial
            spaces with attention to quality, comfort, functionality and style. Our approach is practical and
            personal — creating pieces that suit the way people live and work every day.
          </p>
          <p className="mt-4 max-w-xl text-charcoal/70">
            From bespoke furniture and storage solutions to complete interior planning, we focus on lasting
            quality and thoughtful design. Our reputation is supported by a 5.0★ Google Rating and a
            showroom location in South Delhi that makes it easy for clients to explore ideas and discuss
            project requirements.
          </p>
          <Link to="/furniture" className="btn-gold-outline mt-8 inline-flex">
            Explore Our Furniture
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="aspect-[4/5] overflow-hidden">
          <img src={img.workshop4} alt="Craftsman at work" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
      </section>

      {/* SINCE 2008 TIMELINE */}
      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="container-xl flex flex-col items-center text-center">
          <Reveal>
            <span className="about-stat-value font-serif text-8xl md:text-9xl">2008</span>
            <p className="about-stat-label label mt-4">SINCE</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-14 max-w-2xl border-t border-ivory/15 pt-10">
            <h3 className="font-serif text-2xl">Kohinoor Furniture House established.</h3>
            <p className="mt-4 text-ivory/70">
              What began as a dedicated furniture and carpentry workshop in Chhatarpur has grown into a
              trusted name for bespoke furniture and interior design in the area — built one project,
              and one relationship, at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="container-xl grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 md:py-28">
        <Reveal className="order-2 aspect-[4/5] overflow-hidden lg:order-1">
          <img src={img.workshop2} alt="Craftsman polishing furniture" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="label">EXPERIENCE</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">
            {business.yearsExperience}+ years shaping spaces.
          </h2>
          <p className="mt-6 max-w-lg text-charcoal/70">
            Since 2008, our team has worked across furniture manufacturing, carpentry and interior
            design — developing an eye for detail that comes only with years of hands-on craftsmanship.
          </p>
        </Reveal>
      </section>

      {/* TEAM */}
      <section className="bg-emerald py-24 text-ivory md:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label">TEAM</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15]">Craftsmen, designers, installers.</h2>
            <p className="mt-6 max-w-lg text-ivory/70">
              Our team brings together design, carpentry and installation expertise under one roof —
              so every project is managed from the first sketch to the final finishing touch.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="aspect-[4/3] overflow-hidden">
            <img src={img.workshop5} alt="Kohinoor Furniture House team at work" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="container-xl grid grid-cols-1 gap-6 py-24 md:grid-cols-3 md:py-28">
        <Reveal className="md:col-span-2 aspect-[16/10] overflow-hidden">
          <img src={img.workshop1} alt="Kohinoor manufacturing workshop" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">WORKSHOP &amp; MANUFACTURING</p>
          <h3 className="mt-4 font-serif text-2xl text-forest">Where every piece comes to life.</h3>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            Our workshop handles cutting, joinery, assembly, polishing and finishing in-house, allowing
            us to maintain quality control at every stage of production.
          </p>
        </Reveal>
      </section>

      {/* QUALITY & MATERIALS */}
      <section className="bg-ivory border-y border-champagne/30 py-24 md:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label">QUALITY &amp; MATERIALS</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">
              Materials chosen with intent.
            </h2>
            <p className="mt-6 max-w-lg text-charcoal/70">
              We work with wood, steel, PVC and iron — selecting the right material for each project
              based on durability, application and the finish our clients are looking for.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden">
              <img src={img.woodTexture1} alt="Wood texture" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={img.marbleTexture1} alt="Marble texture" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container-xl py-20 text-center md:py-24">
        <Reveal>
          <p className="label">CERTIFICATIONS &amp; CREDENTIALS</p>
          <p className="mt-4 text-charcoal/50">Information to be added.</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-center text-ivory">
        <div className="container-xl">
          <h2 className="font-serif text-4xl md:text-5xl">Let's build something together.</h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-outline">
              Book a Free Consultation
            </Link>
            <a href={waLink(waMessages.general)} target="_blank" rel="noreferrer" className="btn-primary bg-gold border-gold text-forest hover:bg-transparent hover:text-ivory">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
