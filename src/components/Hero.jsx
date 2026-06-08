import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Wifi, Play, X, Terminal, CheckCircle2 } from 'lucide-react';
import AICore3D from './AICore3D';

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);
  const [demoLogs, setDemoLogs] = useState([]);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "[SYS] INITIALIZING NEURAL CONNECTION MODULE...",
    "[SYS] ESTABLISHING QUANTUM SYMPATHETIC LINK...",
    "[SYS] SYNCING CORTECS CONTEXT: STAGE 1 COMPLETE",
    "[BIO] MONITORING NEUROTRANSMITTER DISCHARGE...",
    "[BIO] NOREPINEPHRINE ACCELERATION: 12.4%",
    "[AI]  INTEGRATING COGNITIVE AUGMENTATION LAYER...",
    "[AI]  BANDWIDTH CALIBRATED AT 10.4 GB/s",
    "[SYS] COMPATIBILITY RATING: 99.98% - SECURE",
    "[SYS] STABILITY COEFFICIENT: OPTIMAL",
    "[SYS] WELCOME TO NEUROLINK X. HUMAN V2.0 IS LIVE."
  ];

  useEffect(() => {
    if (showDemo) {
      setDemoLogs([]);
      setLogIndex(0);
    }
  }, [showDemo]);

  useEffect(() => {
    if (showDemo && logIndex < logs.length) {
      const timer = setTimeout(() => {
        setDemoLogs((prev) => [...prev, logs[logIndex]]);
        setLogIndex(logIndex + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showDemo, logIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 bg-[#050816]">
      {/* 3D Canvas Background */}
      <AICore3D />

      {/* Cyber Grid Background Layer */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/30 pointer-events-none" />

      {/* Radial Gradient for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentPurple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accentBlue/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-120px)]">
        
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left pointer-events-auto mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accentBlue/10 to-accentPurple/10 border border-accentBlue/30 rounded-full px-4 py-1.5 w-fit mb-6 text-xs text-accentBlue font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(0,212,255,0.1)]"
          >
            <Cpu className="w-4.5 h-4.5 animate-spin-slow" />
            <span>Human Upgrade Portal Active</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
          >
            Humanity Has Reached <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue via-accentCyan to-accentPurple glow-text-blue">
              Version 2.0
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-350 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-300 max-w-xl mb-10"
          >
            Neural interfaces, synthetic cognition, and adaptive cybernetic systems engineered to redefine human potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <a
              href="#cta"
              className="text-center bg-gradient-to-r from-accentBlue to-accentPurple hover:opacity-95 text-white font-orbitron font-bold tracking-wider px-8 py-4 rounded-md shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request Early Access
            </a>
            <button
              onClick={() => setShowDemo(true)}
              className="flex items-center justify-center space-x-2 bg-slate-900/60 border border-slate-700/80 text-white font-orbitron font-semibold tracking-wide px-8 py-4 rounded-md hover:bg-slate-800/80 transition-all duration-300 hover:border-accentBlue/50"
            >
              <Play className="w-4 h-4 text-accentBlue fill-accentBlue" />
              <span>Watch Demonstration</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-6 border-t border-slate-800/60 pt-8"
          >
            <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm">
              <CheckCircle2 className="w-4.5 h-4.5 text-accentBlue" />
              <span>Neural Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm">
              <ShieldCheck className="w-4.5 h-4.5 text-accentCyan" />
              <span>Quantum Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm">
              <Wifi className="w-4.5 h-4.5 text-accentPurple" />
              <span>Global Grid Ready</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating HUD Panels (Visualizer overlay) */}
        <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center pointer-events-none">
          
          {/* Top Left HUD: Neural Sync */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-4 sm:top-12 left-4 glass-panel-neon px-4 py-3 rounded-lg flex flex-col space-y-1 text-left min-w-[140px] pointer-events-auto select-none"
          >
            <span className="text-[10px] uppercase font-mono text-accentBlue tracking-widest">Neural Sync</span>
            <div className="flex items-baseline space-x-1">
              <span className="font-orbitron font-extrabold text-2xl text-white">98.7%</span>
              <span className="text-emerald-400 text-[10px] font-mono">▲ +0.2</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-accentBlue h-full rounded-full w-[98.7%] animate-pulse" />
            </div>
          </motion.div>

          {/* Top Right HUD: Response Time */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-12 sm:top-24 right-4 glass-panel px-4 py-3 rounded-lg flex flex-col space-y-1 text-left min-w-[140px] pointer-events-auto select-none"
          >
            <span className="text-[10px] uppercase font-mono text-slate-400 tracking-widest">Latency</span>
            <div className="flex items-baseline space-x-1">
              <span className="font-orbitron font-extrabold text-2xl text-white">0.003s</span>
            </div>
            <div className="flex items-center space-x-1 font-mono text-[9px] text-accentBlue">
              <span className="w-1.5 h-1.5 rounded-full bg-accentBlue animate-ping" />
              <span>QUANTUM BEAM</span>
            </div>
          </motion.div>

          {/* Bottom Left HUD: AI Accuracy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-16 sm:bottom-28 left-8 glass-panel px-4 py-3 rounded-lg flex flex-col space-y-1 text-left min-w-[140px] pointer-events-auto select-none"
          >
            <span className="text-[10px] uppercase font-mono text-slate-400 tracking-widest">AI Accuracy</span>
            <div className="flex items-baseline space-x-1">
              <span className="font-orbitron font-extrabold text-2xl text-white">99.94%</span>
            </div>
            <span className="text-[9px] font-mono text-accentPurple">COGNITION V2</span>
          </motion.div>

          {/* Bottom Right HUD: Connected Minds */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute bottom-8 sm:bottom-16 right-8 glass-panel-violet px-4 py-3 rounded-lg flex flex-col space-y-1 text-left min-w-[140px] pointer-events-auto select-none"
          >
            <span className="text-[10px] uppercase font-mono text-accentPurple tracking-widest">Connected</span>
            <div className="flex items-baseline space-x-1">
              <span className="font-orbitron font-extrabold text-2xl text-white">12.4M</span>
            </div>
            <div className="flex items-center space-x-1 font-mono text-[9px] text-accentPurple">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPurple animate-pulse" />
              <span>ACTIVE SYNAPSE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simulated Demonstration HUD Modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-3xl glass-panel-neon rounded-xl overflow-hidden border border-accentBlue/40 shadow-[0_0_50px_rgba(0,212,255,0.25)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-accentBlue/20">
                <div className="flex items-center space-x-2 text-accentBlue">
                  <Terminal className="w-5 h-5 animate-pulse" />
                  <span className="font-orbitron font-bold tracking-wider text-sm">NEURAL DIAGNOSTIC SIMULATION</span>
                </div>
                <button
                  onClick={() => setShowDemo(false)}
                  className="text-slate-400 hover:text-white transition-colors p-1 bg-slate-800/50 hover:bg-slate-800 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: High-tech terminal outputs */}
              <div className="p-6 bg-slate-950/95 font-mono text-sm h-[320px] overflow-y-auto flex flex-col space-y-2 select-text">
                {demoLogs.map((log, index) => {
                  let colorClass = "text-slate-350";
                  if (log.startsWith("[SYS]")) colorClass = "text-accentBlue";
                  if (log.startsWith("[BIO]")) colorClass = "text-accentPurple";
                  if (log.startsWith("[AI]")) colorClass = "text-accentCyan";
                  if (log.includes("STABLE") || log.includes("LIVE")) colorClass = "text-emerald-400 font-bold";

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${colorClass}`}
                    >
                      {log}
                    </motion.div>
                  );
                })}
                {logIndex < logs.length && (
                  <div className="flex items-center space-x-1.5 text-accentBlue">
                    <span className="w-2 h-3.5 bg-accentBlue animate-flicker" />
                    <span className="text-xs italic opacity-60">Calibrating...</span>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-slate-900/90 border-t border-accentBlue/10 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>SECTOR: 0xFF91 // SECURITY: QUANTUM</span>
                <span className="text-accentBlue">STATUS: SECURE_CONNECTION</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
