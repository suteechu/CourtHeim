import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourtTypes from './components/CourtTypes';
import Features from './components/Features';
import Specifications from './components/Specifications';
import BOQ from './components/BOQ';

import Warranty from './components/Warranty';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-heim-gray">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CourtTypes />
        <Specifications />
        <BOQ />

        {/* <Warranty /> */}
        {/* <FAQ /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
