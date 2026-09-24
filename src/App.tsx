import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Furniture from "./pages/Furniture";
import ProductDetail from "./pages/ProductDetail";
import CustomFurniture from "./pages/CustomFurniture";
import InteriorDesign from "./pages/InteriorDesign";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

export default function App() {
  const [splashExiting, setSplashExiting] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setSplashExiting(true), 1500);
    const removeTimer = window.setTimeout(() => setSplashVisible(false), 1900);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!splashVisible) {
      document.body.style.overflow = "";
    }
  }, [splashVisible]);

  return (
    <>
      <div className={`site-shell${splashVisible ? " site-shell--loading" : ""}`}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="furniture" element={<Furniture />} />
              <Route path="furniture/:slug" element={<ProductDetail />} />
              <Route path="custom-furniture" element={<CustomFurniture />} />
              <Route path="interior-design" element={<InteriorDesign />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {splashVisible && <SplashScreen isExiting={splashExiting} />}
    </>
  );
}
