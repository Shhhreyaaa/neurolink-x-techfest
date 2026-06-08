import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2, User, Mail, ChevronRight, X, Cpu } from 'lucide-react';

export default function FinalCTA() {
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', sector: 'Neural Connectivity' });
  const [pioneerToken, setPioneerToken] = useState('');

  // 1. Neural Network Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = [];
    const particleCount = 70;
    const connectionDistance = 120;
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.28;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Generate unique pioneer token
    const tokenNum = Math.floor(10000 + Math.random() * 90000);
    setPioneerToken(`#PIONEER-${tokenNum}-X`);
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', sector: 'Neural Connectivity' });
    setFormSubmitted(false);
    setShowModal(false);
  };

  return (
    <section id="cta" className="relative min-h-[90vh] flex items-center justify-center py-24 px-6 md:px-12 bg-[#050816] overflow-hidden">
      {/* Interactive Neural Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-80 pointer-events-auto" />

      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accentBlue/25 to-transparent pointer-events-none" />

      {/* Glowing core lights */}
      <div className="absolute w-[500px] h-[500px] bg-accentBlue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-accentPurple/10 border border-accentPurple/30 rounded-full px-4 py-1.5 mb-8 text-xs text-accentPurple font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.1)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Genesis Node Integration</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-8"
        >
          The Next Stage Of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue via-accentCyan to-accentPurple glow-text-blue">
            Human Evolution
          </span> <br />
          Begins Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mx-auto mb-12"
        >
          Join the first generation of enhanced intelligence. Merge your biology with the computational absolute.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pointer-events-auto"
        >
          <button
            onClick={() => setShowModal(true)}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold font-orbitron tracking-wider text-white rounded-md group bg-gradient-to-br from-accentBlue via-accentCyan to-accentPurple group-hover:from-accentBlue group-hover:to-accentPurple focus:ring-4 focus:outline-none focus:ring-accentBlue/30 hover:scale-105 transition-all duration-300"
          >
            <span className="relative px-8 py-5 transition-all ease-in duration-75 bg-[#050816] rounded-md group-hover:bg-opacity-0">
              Become An Early Pioneer
            </span>
          </button>
        </motion.div>
      </div>

      {/* Pioneer Request Registration Modal */}
      <AnimatePresence>
        {showModal && (
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
              className="w-full max-w-md glass-panel-neon rounded-xl overflow-hidden border border-accentBlue/40 shadow-[0_0_50px_rgba(0,212,255,0.25)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-accentBlue/20">
                <div className="flex items-center space-x-2 text-accentBlue">
                  <Cpu className="w-5 h-5" />
                  <span className="font-orbitron font-bold tracking-wider text-xs">PIONEER APPLICATION PORTAL</span>
                </div>
                <button
                  onClick={resetForm}
                  className="text-slate-400 hover:text-white transition-colors p-1 bg-slate-800/50 hover:bg-slate-800 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Content */}
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="p-6 flex flex-col space-y-5 text-left bg-slate-950/95">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">Pioneer Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-md py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue font-inter"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">Cortex ID (Email)</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        required
                        type="email"
                        placeholder="john@cortex.net"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700/60 rounded-md py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue font-inter"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">Desired Upgrade Sector</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/60 rounded-md py-3 px-4 text-sm text-white focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue font-orbitron"
                    >
                      <option value="Neural Connectivity">Neural Connectivity</option>
                      <option value="Synthetic Vision">Synthetic Vision</option>
                      <option value="Bio-Mechanical Systems">Bio-Mechanical Systems</option>
                      <option value="Quantum Intelligence">Quantum Intelligence</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-accentBlue to-accentPurple text-white rounded font-orbitron font-semibold tracking-wide text-sm flex items-center justify-center space-x-1.5 hover:opacity-90 transition-opacity mt-4"
                  >
                    <span>Initialize Upgrade Link</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success Screen */
                <div className="p-8 bg-slate-950/95 text-center flex flex-col items-center space-y-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-orbitron font-extrabold text-xl text-white">CONNECTION ESTABLISHED</h3>
                    <p className="text-slate-400 text-xs font-mono">
                      Cortex link successfully reserved for {formData.name}
                    </p>
                  </div>

                  {/* High Tech Token display */}
                  <div className="w-full p-4 bg-slate-900 border border-emerald-500/20 rounded-md font-mono text-center">
                    <span className="text-[10px] text-slate-500 block mb-1">REGISTRY TOKEN</span>
                    <span className="text-emerald-400 font-extrabold text-base tracking-wider glow-text-blue" style={{ textShadow: "0 0 8px rgba(16,185,129,0.3)" }}>
                      {pioneerToken}
                    </span>
                  </div>

                  <div className="text-[10px] text-left border-t border-slate-800 pt-4 w-full text-slate-500 font-mono space-y-1">
                    <div className="flex items-center space-x-1.5 text-accentBlue">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>SECURE LOG: PIONEER_REGISTRATION_SUCCESS</span>
                    </div>
                    <span>SYSTEM CORE WILL ALERT CORRESPONDING COGNITIVE FREQUENCY.</span>
                  </div>

                  <button
                    onClick={resetForm}
                    className="w-full py-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded font-orbitron text-xs tracking-wider transition-colors"
                  >
                    Acknowledge & Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
