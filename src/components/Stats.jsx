import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Database, Shield, Zap } from 'lucide-react';

function CountUp({ end, duration = 2, decimals = 0, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const val = progress * end;
      setCount(val);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsData = [
    {
      label: "Connected Users",
      endValue: 12.4,
      decimals: 1,
      suffix: "M+",
      icon: Users,
      color: "text-accentBlue"
    },
    {
      label: "Data Processed Daily",
      endValue: 450,
      decimals: 0,
      suffix: "TB",
      icon: Database,
      color: "text-accentCyan"
    },
    {
      label: "AI Accuracy",
      endValue: 99.94,
      decimals: 2,
      suffix: "%",
      icon: Shield,
      color: "text-accentPurple"
    },
    {
      label: "Average Latency",
      endValue: 0.003,
      decimals: 3,
      suffix: "s",
      icon: Zap,
      color: "text-accentBlue"
    }
  ];

  return (
    <section className="relative py-20 bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accentBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="glass-panel p-6 sm:p-8 rounded-xl border border-white/5 flex flex-col items-center text-center shadow-lg hover:border-accentBlue/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-6">
                  <Icon className={`w-5 h-5 ${stat.color} animate-pulse`} />
                </div>
                <div className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-2">
                  <CountUp 
                    end={stat.endValue} 
                    decimals={stat.decimals} 
                    suffix={stat.suffix}
                  />
                </div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
