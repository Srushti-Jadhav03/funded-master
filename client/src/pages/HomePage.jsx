import React from 'react';
import Hero from '../components/Hero';
import TradingAssets from '../components/TradingAssets';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import WhyUs from '../components/WhyUs';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { CTABanner } from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TradingAssets />
      <HowItWorks />
      <Pricing />
      <WhyUs />
      <Calculator />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
