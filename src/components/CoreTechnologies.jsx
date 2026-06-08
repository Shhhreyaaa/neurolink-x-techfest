import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Activity, Binary } from 'lucide-react';

export default function CoreTechnologies() {
  const technologies = [
    {
      title: "Neural Interface",
      description: "Direct brain-to-computer communication with adaptive learning mechanisms that optimize neural path routing in real time.",
      icon: Brain,
      color: "from-accentBlue to-accentCyan",
      shadowColor: "rgba(0, 212, 255, 0.15)",
      borderColor: "hover:border-accentBlue/40"
    },
    {
      title: "Synthetic Vision",
      description: "Augmented perception powered by machine intelligence. Project contextual data, thermal grids, and spectrums directly onto the visual cortex.",
      icon: Eye,
      color: "from-accentCyan to-accentBlue",
      shadowColor: "rgba(34, 211, 238, 0.15)",
      borderColor: "hover:border-accentCyan/40"
    },
    {
      title: "Bio-Mechanical Systems",
      description: "AI-assisted prosthetics and muscular overlays providing enhanced force multipliers, kinetic dampening, and millisecond responsiveness.",
      icon: Activity,
      color: "from-accentPurple to-pink-500",
      shadowColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "hover:border-accentPurple/40"
    },
    {
      title: "Quantum Intelligence",
      description: "Next-generation reasoning architecture that utilizes localized quantum superposition to simulate and solve variables instantly.",
      icon: Binary,
      color: "from-accentBlue to-accentPurple",
      shadowColor: "rgba(0, 212, 255, 0.15)",
      borderColor: "hover:border-accentBlue/40"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="core-tech" className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0B1020] overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentBlue/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentPurple/15 to-transparent" />
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accentBlue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-accentBlue"
          >
            INTEGRATED CAPABILITIES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-orbitron font-extrabold text-3xl md:text-5xl text-white mt-3 glow-text-blue"
          >
            Core Technologies
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-accentBlue to-accentPurple mx-auto mt-6"
          />
        </div>

        {/* Technologies Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {technologies.map((tech, i) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`group glass-panel rounded-xl p-8 transition-all duration-300 border border-white/5 ${tech.borderColor} flex flex-col justify-between`}
                style={{
                  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`
                }}
              >
                <div>
                  {/* Icon Block with glow */}
                  <div className="relative w-14 h-14 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-800 mb-8 overflow-hidden group-hover:border-accentBlue/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <IconComponent className="w-6 h-6 text-slate-350 text-white group-hover:text-accentBlue group-hover:scale-110 transition-all duration-350" />
                    <div className="absolute inset-0 rounded-lg group-hover:shadow-[0_0_15px_rgba(0,212,255,0.25)] pointer-events-none transition-shadow" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-orbitron font-bold text-xl md:text-2xl text-white mb-4 tracking-wide group-hover:text-accentBlue transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    {tech.description}
                  </p>
                </div>

                {/* Cyber decorative line */}
                <div className="w-full bg-slate-800/40 h-[1px] relative overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full w-0 bg-gradient-to-r ${tech.color} group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
