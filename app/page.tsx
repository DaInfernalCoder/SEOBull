import { Suspense } from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsBar from '../components/statsBar';
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Pricing from '../components/Pricing';
import FeaturesListicle from '../components/FeaturesListicle';
import CTA from '../components/CTA';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <StatsBar />
        <FeaturesListicle />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}