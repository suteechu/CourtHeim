import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourtTypes from './components/CourtTypes';
import Features from './components/Features';
import Blueprints from './components/Blueprints';
import Specifications from './components/Specifications';
import BOQ from './components/BOQ';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-heim-gray">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CourtTypes />
        <Blueprints />
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
