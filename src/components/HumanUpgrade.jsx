import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Activity, RefreshCw } from 'lucide-react';

export default function HumanUpgrade() {
  const [activeNode, setActiveNode] = useState(0); // 0: Cognitive, 1: Reaction, 2: Memory, 3: Stability
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const diagnostics = [
    {
      id: 0,
      name: "Cognitive Enhancement",
      value: 94,
      color: "from-accentBlue to-accentCyan",
      description: "Direct synaptic routing boosting processing bandwidth and parallel computation capacities.",
      nodeName: "Cerebral Cortex Link"
    },
    {
      id: 1,
      name: "Reaction Speed",
      value: 89,
      color: "from-accentCyan to-accentBlue",
      description: "Neuromuscular electrical amplification reducing physical latency to sub-millisecond ranges.",
      nodeName: "Motor Cortex Array"
    },
    {
      id: 2,
      name: "Memory Augmentation",
      value: 97,
      color: "from-accentPurple to-pink-500",
      description: "Quantum-entangled storage layer providing instant recall and data buffer capabilities.",
      nodeName: "Temporal Core Buffer"
    },
    {
      id: 3,
      name: "System Stability",
      value: 99.8,
      color: "from-emerald-400 to-accentCyan",
      description: "Autonomous biometric diagnostics preventing rejection spikes and neurological fatigue.",
      nodeName: "Spinal Transceiver Unit"
    }
  ];

  return (
    <section id="diagnostics" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#050816] overflow-hidden" ref={ref}>
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accentPurple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accentBlue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-accentPurple">SYSTEM CALIBRATION</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-white mt-3 glow-text-purple">
            Human Upgrade Diagnostics
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-accentPurple to-accentBlue w-24 mt-6" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: SVG Cyborg Interface */}
          <div className="lg:col-span-6 flex justify-center relative bg-slate-950/40 border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl glass-panel">
            <div className="absolute top-4 left-4 font-mono text-[10px] text-slate-500 tracking-wider flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-accentPurple animate-pulse" />
              <span>LIVE CORE DIAGNOSTICS</span>
            </div>

            {/* Sci-fi Cyborg Head and Nodes SVG */}
            <svg 
              viewBox="0 0 400 450" 
              className="w-full max-w-[340px] h-auto text-slate-800"
              style={{ filter: "drop-shadow(0px 0px 20px rgba(139, 92, 246, 0.1))" }}
            >
              {/* Futuristic Circle HUD Rings */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3, 6" className="text-slate-800" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20, 10" className="text-slate-800/60" />
              
              {/* Grid Lines */}
              <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5, 5" className="text-slate-800/40" />
              <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5, 5" className="text-slate-800/40" />

              {/* Holographic Wireframe Brain/Face Profile */}
              {/* Outer Shell head line */}
              <path 
                d="M 120 280 C 110 240, 110 160, 150 100 C 180 60, 220 60, 250 100 C 290 160, 290 240, 280 280 C 275 300, 250 340, 200 370 C 150 340, 125 300, 120 280 Z" 
                fill="none" 
                stroke="#1e293b" 
                strokeWidth="1.5" 
              />
              {/* Spine Link Lines */}
              <path d="M 200 370 L 200 430 M 190 380 L 190 430 M 210 380 L 210 430" fill="none" stroke="#1e293b" strokeWidth="1" />
              
              {/* Neural Connections paths (curved) */}
              {/* Path 1: Cerebral Link */}
              <path d="M 200 110 Q 150 120, 170 170" fill="none" stroke={activeNode === 0 ? "#00D4FF" : "#1e293b"} strokeWidth={activeNode === 0 ? "2" : "1"} className="transition-all duration-300" />
              {/* Path 2: Motor Array Link */}
              <path d="M 200 110 Q 250 120, 230 170" fill="none" stroke={activeNode === 1 ? "#00D4FF" : "#1e293b"} strokeWidth={activeNode === 1 ? "2" : "1"} className="transition-all duration-300" />
              {/* Path 3: Temporal Link */}
              <path d="M 200 220 Q 140 230, 200 300" fill="none" stroke={activeNode === 2 ? "#8B5CF6" : "#1e293b"} strokeWidth={activeNode === 2 ? "2" : "1"} className="transition-all duration-300" />
              {/* Path 4: Spinal Link */}
              <path d="M 200 300 Q 240 320, 200 370" fill="none" stroke={activeNode === 3 ? "#34d399" : "#1e293b"} strokeWidth={activeNode === 3 ? "2" : "1"} className="transition-all duration-300" />

              {/* Node 0: Cerebral (Top Center/Left) */}
              <g className="cursor-pointer" onClick={() => setActiveNode(0)}>
                <circle cx="170" cy="170" r="14" fill="#090d16" stroke={activeNode === 0 ? "#00D4FF" : "#334155"} strokeWidth="1.5" />
                <circle cx="170" cy="170" r="6" fill="#00D4FF" className={activeNode === 0 ? "animate-pulse" : ""} />
                {activeNode === 0 && <circle cx="170" cy="170" r="12" fill="none" stroke="#00D4FF" strokeWidth="0.5" className="animate-ping" />}
              </g>

              {/* Node 1: Motor (Top Center/Right) */}
              <g className="cursor-pointer" onClick={() => setActiveNode(1)}>
                <circle cx="230" cy="170" r="14" fill="#090d16" stroke={activeNode === 1 ? "#00D4FF" : "#334155"} strokeWidth="1.5" />
                <circle cx="230" cy="170" r="6" fill="#00D4FF" className={activeNode === 1 ? "animate-pulse" : ""} />
                {activeNode === 1 && <circle cx="230" cy="170" r="12" fill="none" stroke="#00D4FF" strokeWidth="0.5" className="animate-ping" />}
              </g>

              {/* Node 2: Temporal (Center) */}
              <g className="cursor-pointer" onClick={() => setActiveNode(2)}>
                <circle cx="200" cy="220" r="14" fill="#090d16" stroke={activeNode === 2 ? "#8B5CF6" : "#334155"} strokeWidth="1.5" />
                <circle cx="200" cy="220" r="6" fill="#8B5CF6" className={activeNode === 2 ? "animate-pulse" : ""} />
                {activeNode === 2 && <circle cx="200" cy="220" r="12" fill="none" stroke="#8B5CF6" strokeWidth="0.5" className="animate-ping" />}
              </g>

              {/* Node 3: Spinal (Base of skull) */}
              <g className="cursor-pointer" onClick={() => setActiveNode(3)}>
                <circle cx="200" cy="300" r="14" fill="#090d16" stroke={activeNode === 3 ? "#34d399" : "#334155"} strokeWidth="1.5" />
                <circle cx="200" cy="300" r="6" fill="#34d399" className={activeNode === 3 ? "animate-pulse" : ""} />
                {activeNode === 3 && <circle cx="200" cy="300" r="12" fill="none" stroke="#34d399" strokeWidth="0.5" className="animate-ping" />}
              </g>

              {/* Text Indicators */}
              <text x="170" y="145" textAnchor="middle" fill="#00D4FF" fontSize="9" fontFamily="monospace" opacity={activeNode === 0 ? 1 : 0.4} className="transition-opacity">01_CEREBRAL</text>
              <text x="235" y="145" textAnchor="middle" fill="#00D4FF" fontSize="9" fontFamily="monospace" opacity={activeNode === 1 ? 1 : 0.4} className="transition-opacity">02_MOTOR</text>
              <text x="200" y="248" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontFamily="monospace" opacity={activeNode === 2 ? 1 : 0.4} className="transition-opacity">03_TEMPORAL</text>
              <text x="200" y="328" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace" opacity={activeNode === 3 ? 1 : 0.4} className="transition-opacity">04_SPINAL_LINK</text>
            </svg>
          </div>

          {/* Right: Diagnostics Stats */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Dynamic Node Details Banner */}
            <div className="p-6 bg-slate-950/40 rounded-xl border border-white/5 backdrop-blur-md">
              <span className="text-[10px] font-mono text-accentBlue uppercase tracking-wider block mb-1">
                Selected Synaptic Node
              </span>
              <h3 className="font-orbitron font-extrabold text-xl text-white tracking-wide">
                {diagnostics[activeNode].nodeName}
              </h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {diagnostics[activeNode].description}
              </p>
            </div>

            {/* Diagnostic Bars */}
            <div className="flex flex-col space-y-8 pt-4">
              {diagnostics.map((diag) => {
                const isActive = activeNode === diag.id;
                return (
                  <div 
                    key={diag.id} 
                    className={`cursor-pointer group flex flex-col space-y-2.5 p-4 rounded-xl transition-all duration-300 border ${
                      isActive ? 'bg-slate-900/40 border-accentBlue/25 shadow-lg' : 'bg-transparent border-transparent'
                    }`}
                    onClick={() => setActiveNode(diag.id)}
                  >
                    <div className="flex justify-between items-baseline">
                      <span className={`text-base font-orbitron font-semibold tracking-wide transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {diag.name}
                      </span>
                      <div className="flex items-baseline space-x-0.5">
                        <span className={`font-orbitron font-extrabold text-2xl tracking-tight transition-colors ${
                          isActive ? 'text-accentBlue' : 'text-slate-400 group-hover:text-slate-350'
                        }`}>
                          {inView ? (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                            >
                              {diag.value}
                            </motion.span>
                          ) : "0"}
                        </span>
                        <span className="text-slate-500 font-mono text-sm">%</span>
                      </div>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full bg-slate-900 border border-white/5 h-3 rounded-full overflow-hidden p-0.5">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${diag.value}%` } : { width: "0%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${diag.color} relative`}
                      >
                        <div className="absolute top-0 right-0 w-1.5 h-full bg-white opacity-60 rounded-full animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
