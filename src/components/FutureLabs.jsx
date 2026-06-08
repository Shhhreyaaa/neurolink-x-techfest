import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, EyeOff, Radio, ShieldCheck, UserCheck } from 'lucide-react';

export default function FutureLabs() {
  const labs = [
    {
      title: "Brain Mapping",
      description: "Creating high-fidelity digital twins of synaptic pathways, motor maps, and neural configurations to enable seamless consciousness uploads.",
      icon: BrainCircuit,
      color: "border-accentBlue/25 hover:border-accentBlue/50",
      glowColor: "shadow-[0_0_20px_rgba(0,212,255,0.06)]",
      floatClass: "animate-bob-1"
    },
    {
      title: "AI Consciousness",
      description: "Engineering self-aware algorithmic entities optimized to run concurrently alongside biological minds without cognitive friction.",
      icon: Radio,
      color: "border-accentPurple/25 hover:border-accentPurple/50",
      glowColor: "shadow-[0_0_20px_rgba(139,92,246,0.06)]",
      floatClass: "animate-bob-2"
    },
    {
      title: "Quantum Processing",
      description: "Shrinking qubits to operating levels compatible with human temperature constraints, unlocking infinite simulation capacities.",
      icon: BrainCircuit, // or generic
      color: "border-accentCyan/25 hover:border-accentCyan/50",
      glowColor: "shadow-[0_0_20px_rgba(34,211,238,0.06)]",
      floatClass: "animate-bob-3"
    },
    {
      title: "Neural Security",
      description: "Enforcing absolute firewalls across mental endpoints to protect hosts against remote intrusion, node hijack, and sensory interference.",
      icon: ShieldCheck,
      color: "border-emerald-500/25 hover:border-emerald-500/50",
      glowColor: "shadow-[0_0_20px_rgba(52,211,153,0.06)]",
      floatClass: "animate-bob-1"
    },
    {
      title: "Human Augmentation",
      description: "Developing artificial muscle fiber overlays and synthetic joints to break physical limits and exceed normal human kinetics.",
      icon: UserCheck,
      color: "border-accentBlue/25 hover:border-accentBlue/50",
      glowColor: "shadow-[0_0_20px_rgba(0,212,255,0.06)]",
      floatClass: "animate-bob-2"
    }
  ];

  return (
    <section id="labs" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0B1020] overflow-hidden">
      {/* Bobbing animation css inject */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bob-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bob-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes bob-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .animate-bob-1 { animation: bob-1 4s ease-in-out infinite; }
        .animate-bob-2 { animation: bob-2 5s ease-in-out infinite; }
        .animate-bob-3 { animation: bob-3 6s ease-in-out infinite; }
      `}} />

      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentBlue/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentBlue/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentBlue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accentBlue">RESEARCH SUBORDINATES</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-white mt-3 glow-text-blue">
            Future Labs
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-accentBlue to-accentPurple w-20 mx-auto mt-6" />
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab, index) => {
            const Icon = lab.icon;
            return (
              <div
                key={lab.title}
                className={`glass-panel rounded-xl p-8 border ${lab.color} ${lab.glowColor} ${lab.floatClass} transition-colors duration-300 hover:bg-slate-900/60`}
              >
                {/* Lab Title and Icon */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-accentBlue">
                    <Icon className="w-5 h-5 animate-pulse" />
                  </div>
                  <h3 className="font-orbitron font-extrabold text-lg sm:text-xl text-white tracking-wide">
                    {lab.title}
                  </h3>
                </div>

                {/* Lab Desc */}
                <p className="text-slate-400 text-sm leading-relaxed font-normal text-left">
                  {lab.description}
                </p>
                
                {/* Tech tag */}
                <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>FACILITY: LAB_0{index + 1}</span>
                  <span className="text-accentBlue tracking-widest">ACTIVE_RESEARCH</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
