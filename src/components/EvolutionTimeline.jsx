import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EvolutionTimeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineData = [
    {
      year: "2035",
      title: "Neural Connectivity",
      description: "Initial bio-compatible interface bridges established, allowing basic synapse-to-data transfers and low-latency motor link feedback.",
      tag: "PHASE 01"
    },
    {
      year: "2050",
      title: "Synthetic Cognition",
      description: "Introduction of synthetic reasoning layers functioning in parallel with natural cortical regions to accelerate calculation capacity.",
      tag: "PHASE 02"
    },
    {
      year: "2065",
      title: "Human-AI Symbiosis",
      description: "Bidirectional telemetry arrays linking localized cybernetic augmentations to cloud quantum intelligence processing nodes.",
      tag: "PHASE 03"
    },
    {
      year: "2080",
      title: "Global Neural Grid",
      description: "Decentralized neural mesh networks enabling direct subconscious data communication between verified human endpoints.",
      tag: "PHASE 04"
    },
    {
      year: "2090",
      title: "Version 2.0",
      description: "The ultimate synthesis. Standardized cybernetic overlays merging human consciousness directly into the absolute global computing sphere.",
      tag: "V2.0 STABLE"
    }
  ];

  return (
    <section id="timeline" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0B1020] overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentBlue/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentPurple/25 to-transparent" />
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-accentBlue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accentBlue">ROADMAP TO ASCENSION</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-white mt-3 glow-text-blue">
            Evolution of Intelligence
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-accentBlue to-accentPurple w-20 mx-auto mt-6" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/80 md:border-l-0 md:flex md:flex-col md:items-center pl-6 md:pl-0">
          
          {/* Central Vertical Progress Line (Desktop) */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-slate-800 md:left-1/2 hidden md:block" />
          <motion.div 
            initial={{ height: "0%" }}
            animate={inView ? { height: "100%" } : { height: "0%" }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute left-[23px] top-0 w-[2px] bg-gradient-to-b from-accentBlue via-accentCyan to-accentPurple md:left-[calc(50%-1px)] hidden md:block shadow-[0_0_10px_rgba(0,212,255,0.4)]"
          />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.year} 
                className={`mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center w-full relative ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute -left-[32px] md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-slate-950 border-2 border-accentBlue shadow-[0_0_10px_rgba(0,212,255,0.6)] flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accentBlue animate-ping" />
                  </motion.div>
                </div>

                {/* Timeline Panel Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -60 : 60 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`w-full md:w-[45%] glass-panel rounded-xl border border-white/5 hover:border-accentBlue/30 p-6 md:p-8 transition-colors duration-300 relative ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className={`flex flex-col mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="flex items-center space-x-2.5">
                      <span className="font-mono text-xs font-semibold tracking-wider text-accentBlue px-2.5 py-1 bg-accentBlue/10 rounded border border-accentBlue/25">
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex items-baseline space-x-2 mt-3">
                      <span className="font-orbitron font-extrabold text-3xl md:text-4xl text-white">
                        {item.year}
                      </span>
                      <span className="text-slate-500 font-mono text-sm">/</span>
                      <span className="font-orbitron font-bold text-lg text-accentCyan">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>

                {/* Horizontal connection line for desktop */}
                <div className={`absolute top-1/2 w-[5%] bg-slate-800/60 h-[1px] hidden md:block z-0 ${
                  isEven ? 'left-[45%]' : 'right-[45%]'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
