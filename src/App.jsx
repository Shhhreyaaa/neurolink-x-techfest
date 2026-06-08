import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreTechnologies from './components/CoreTechnologies';
import HumanUpgrade from './components/HumanUpgrade';
import EvolutionTimeline from './components/EvolutionTimeline';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FutureLabs from './components/FutureLabs';
import FinalCTA from './components/FinalCTA';
import { ShieldCheck, Terminal, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 font-inter selection:bg-accentBlue/30 selection:text-white scanlines">
      {/* Dynamic scanline overlay and custom cursor styling inside wrapper */}
      
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Core Section */}
      <Hero />

      {/* Core Technologies Cards */}
      <CoreTechnologies />

      {/* Interactive Diagnostic Progress Bars */}
      <HumanUpgrade />

      {/* Timeline of Evolution */}
      <EvolutionTimeline />

      {/* Count-Up Stats grid */}
      <Stats />

      {/* Hologram Testimonials cards */}
      <Testimonials />

      {/* Floating Lab modules */}
      <FutureLabs />

      {/* Interactive final CTA neural grid */}
      <FinalCTA />

      {/* Futuristic Cinematic Footer */}
      <footer className="relative bg-[#050816] border-t border-white/5 py-12 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
          
          {/* Copyright & Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-accentBlue" />
              <span className="font-orbitron font-extrabold text-sm tracking-widest text-white">
                NEUROLINK <span className="text-accentBlue text-shadow-blue">X</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono text-center md:text-left">
              &copy; 2090 NEUROLINK X CORPORATION. ALL COGNITIONS RESERVED.
            </p>
          </div>

          {/* System status display */}
          <div className="flex items-center space-x-6 text-[10px] font-mono text-slate-500">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>GRID_STABILITY: 100%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-accentCyan" />
              <span>SECURE PROTOCOL ACTIVE</span>
            </div>
          </div>

          {/* Fictional Disclaimer */}
          <div className="max-w-xs text-center md:text-right">
            <p className="text-[9px] text-slate-600 leading-normal uppercase">
              Disclaimer: Neurolink X is a fictional concept project created for cinematic demonstration. Cybernetic nodes and direct mental links are virtual assets.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
