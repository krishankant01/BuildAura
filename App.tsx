import React from 'react';
import { DataProvider } from './context/DataContext';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AdminControls } from './components/AdminControls';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0f172a]/70 border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-cyan-400">
          BuildAura
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/20 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Aether Portfolio. Built with React & Tailwind.</p>
    </footer>
  );
};

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-[#0f172a] text-white selection:bg-red-500/30">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <AdminControls />
      </div>
    </DataProvider>
  );
}

export default App;