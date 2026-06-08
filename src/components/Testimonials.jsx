import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "NEUROLINK X completely transformed how I interact with information. Accessing the absolute global grid directly has expanded my design output 10-fold.",
      author: "Dr. Evelyn Vance",
      role: "Lead Neural Architect",
      sector: "SECTOR_09 // CORTEX_DEV",
      hologramColor: "#00D4FF"
    },
    {
      text: "The bio-mechanical responsiveness is unbelievable. Latency is non-existent; synthetic synaptic routing feels even more native than my original limb.",
      author: "Marcus Kane",
      role: "Cybernetic Operations Dir.",
      sector: "SECTOR_14 // KINETIC_SYS",
      hologramColor: "#8B5CF6"
    },
    {
      text: "Processing complex quantum simulation variables used to take days. Now, the local thinking array yields answers in microseconds. Truly humanity v2.0.",
      author: "Aria Chen",
      role: "Quantum Systems Engineer",
      sector: "SECTOR_01 // QUANTUM_LNK",
      hologramColor: "#22D3EE"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentPurple/20 to-transparent" />
      
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-accentBlue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accentPurple">EARLY ADOPTERS</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-white mt-3 glow-text-purple">
            Pioneer Telemetry
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-accentPurple to-accentBlue w-20 mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => {
            return (
              <motion.div
                key={rev.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-xl p-8 border border-white/5 hover:border-accentPurple/30 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
              >
                {/* Hologram Card background scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accentPurple/[0.02] pointer-events-none" />
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Quote className="w-12 h-12 text-white" />
                </div>

                <div className="relative z-10 flex-grow">
                  {/* Digital Testimonial text */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8 font-light select-none">
                    "{rev.text}"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 border-t border-white/5 pt-6 relative z-10">
                  
                  {/* Holographic Avatar Graphic */}
                  <div className="w-12 h-12 rounded-full border border-dashed flex items-center justify-center relative bg-slate-950"
                       style={{ borderColor: rev.hologramColor }}>
                    <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                      {/* Stylized Node Avatar SVG */}
                      <svg viewBox="0 0 100 100" className="w-6 h-6" style={{ color: rev.hologramColor }}>
                        <circle cx="50" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="6" />
                        <path d="M20,80 C20,60 30,50 50,50 C70,50 80,60 80,80" fill="none" stroke="currentColor" strokeWidth="6" />
                      </svg>
                    </div>
                    {/* Ring ping */}
                    <div className="absolute inset-0 rounded-full animate-pulse opacity-40" 
                         style={{ boxShadow: `0 0 8px ${rev.hologramColor}` }} />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="font-orbitron font-bold text-sm text-white tracking-wide">
                      {rev.author}
                    </span>
                    <span className="text-xs text-accentBlue font-mono uppercase tracking-wide">
                      {rev.role}
                    </span>
                    <span className="text-[9px] text-slate-500 font-mono mt-0.5">
                      {rev.sector}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
