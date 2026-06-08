import React, { useState } from 'react';
import { Menu, X, ShieldAlert, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Core Tech', href: '#core-tech' },
    { name: 'Diagnostics', href: '#diagnostics' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Labs', href: '#labs' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 py-4 px-6 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <Cpu className="w-6 h-6 text-accentBlue group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-orbitron font-extrabold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-accentBlue">
            NEUROLINK <span className="text-accentBlue glow-text-blue">X</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-accentBlue tracking-wide uppercase transition-colors duration-250 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accentBlue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1 px-3 py-1 bg-accentBlue/10 border border-accentBlue/20 rounded-full text-xs text-accentBlue font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accentBlue animate-pulse" />
            <span>v2.0-STABLE</span>
          </div>
          <a
            href="#cta"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-semibold text-white rounded-md group bg-gradient-to-br from-accentBlue to-accentPurple group-hover:from-accentBlue group-hover:to-accentPurple hover:text-white focus:ring-2 focus:outline-none focus:ring-accentBlue/30 transition-all duration-300"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#050816] rounded-md group-hover:bg-opacity-0">
              Request Early Access
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-accentBlue focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel-neon border-t border-accentBlue/10 p-6 flex flex-col space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-200 hover:text-accentBlue tracking-wider font-orbitron uppercase text-base"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-accentBlue">
              <span className="w-1.5 h-1.5 rounded-full bg-accentBlue animate-pulse" />
              <span>SYS CORE ACTIVE: 99.8%</span>
            </div>
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-gradient-to-r from-accentBlue to-accentPurple text-white rounded font-orbitron font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Request Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
