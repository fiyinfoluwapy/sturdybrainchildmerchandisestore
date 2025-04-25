// src/app/page.js

import Herosection from "./components/herosection";
import FeaturesSection from "./components/about";
import { FeaturedProducts } from "./components/featuredproducts";

export const metadata = {
  title: "Brainchild Merch",
  description: "Boldly designed for the fearless",
};

export default function HomePage() {
  return (
    <>
      <Herosection />
      <FeaturesSection />
      <FeaturedProducts />
    </>
  );
}
