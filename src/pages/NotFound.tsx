import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Kohinoor Furniture House" description="The page you are looking for could not be found." />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="label">404</p>
        <h1 className="mt-6 font-serif text-4xl text-forest md:text-5xl">This page could not be found.</h1>
        <p className="mt-4 max-w-md text-charcoal/60">
          The page you're looking for may have moved. Explore our furniture, interior design or portfolio.
        </p>
        <Link to="/" className="btn-outline-dark mt-8 inline-flex">
          Return Home
        </Link>
      </section>
    </>
  );
}
