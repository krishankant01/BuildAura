import React from 'react';
import { useData } from '../context/DataContext';
import { GlassCard } from './GlassCard';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const { projects } = useData();

  return (
    <section className="py-20 bg-black/20" id="projects">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400">A selection of my recent contributions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard 
  key={project.id}
  delay={index * 0.1}
  hoverEffect={true}
  className="
    relative flex flex-col h-full group overflow-hidden !p-0
    bg-white/5 border border-white/10 rounded-[15px] backdrop-blur-md
    transition-all duration-300 ease-linear
    group-hover:-translate-y-[5px]
    group-hover:bg-white/10
    group-hover:border-white/20
    group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
  "
>

  {/* ✨ GLASS SHINE EFFECT */}
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

  {/* ==== YOUR ORIGINAL CONTENT (UNTOUCHED) ==== */}

  <div className="relative h-48 overflow-hidden">
    <div className="absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition-colors z-10"></div>
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
  </div>
  
  <div className="p-6 flex flex-col flex-1 relative z-10">
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
      {project.title}
    </h3>

    <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map(tag => (
        <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-red-200 rounded border border-white/5">
          {tag}
        </span>
      ))}
    </div>

    <a 
      href={project.link}
      className="inline-flex items-center justify-center w-full py-3 bg-white/5 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-all border border-white/10 hover:border-red-500 group"
    >
      View Project 
      <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/>
    </a>
  </div>

</GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};