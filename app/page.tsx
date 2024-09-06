import { Suspense } from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Pricing from '../components/Pricing';
import FeaturesListicle from '../components/FeaturesListicle';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <FeaturesListicle />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}