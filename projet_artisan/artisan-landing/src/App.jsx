import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Artisans from './components/Artisans';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-soft-pink to-beige">
      <Navbar />
      <Hero />
      <Categories />
      <Artisans />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
