import React from 'react';
import { useData } from '../context/DataContext';
import { GlassCard } from './GlassCard';
import { Code2, Server, Layout, Terminal } from 'lucide-react';

export const Skills = () => {
  const { skills } = useData();

  const getIcon = (category: string) => {
    switch(category) {
      case 'Frontend': return <Layout size={20} className="text-cyan-400" />;
      case 'Backend': return <Server size={20} className="text-purple-400" />;
      case 'Design': return <Code2 size={20} className="text-pink-400" />;
      default: return <Terminal size={20} className="text-emerald-400" />;
    }
  };

  const categories = ['Frontend', 'Backend', 'Design', 'Tools','Languages'];

  return (
    <section className="py-20 relative z-10" id="skills">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, idx) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <GlassCard 
  key={category}
  delay={idx * 0.1}
  hoverEffect={true}
  className="
    relative group overflow-hidden

    bg-white/5
    border border-white/10
    rounded-[15px]
    backdrop-blur-md

    transition-all duration-300 ease-linear
    group-hover:-translate-y-[5px]
    group-hover:bg-white/10
    group-hover:border-white/20
    group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
  "
>

  {/* ✨ SAME GLASS SHINE EFFECT */}
  <div
    className="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      group-hover:translate-x-full
      transition-transform duration-700 ease-out
      z-20

      before:content-['']
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-transparent
      before:via-white/20 before:to-transparent
      before:skew-x-[20deg]
    "
  ></div>

  {/* CONTENT */}
  <div className="relative z-10 p-6">

    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-white/5 rounded-lg border border-white/10">
        {getIcon(category)}
      </div>
      <h3 className="text-xl font-semibold text-white">{category}</h3>
    </div>

    <div className="space-y-5">
      {categorySkills.map((skill) => (
        <div key={skill.id}>
          <div className="flex justify-between mb-2">
            <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
            <span className="text-slate-400 text-xs">{skill.level}%</span>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-black/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>

        </div>
      ))}
    </div>

  </div>

</GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};