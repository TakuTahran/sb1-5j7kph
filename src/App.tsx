import React from 'react';
import { Hero } from './components/Hero';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white">
      <Hero />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default App;