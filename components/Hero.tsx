import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";

import { Github, Linkedin, Twitter, MapPin, Mail } from "lucide-react";

export const Hero = () => {
  const { user } = useData();
  const [showName, setShowName] = useState(true);
  const [index, setIndex] = useState(0);

// Combine name + all titles into one rotating list
const rotatingTexts = [user.name, ...(user.titles || [])];

// Auto switch text every 2 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % rotatingTexts.length);
  }, 2000);

  return () => clearInterval(interval);
}, [rotatingTexts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 4000); // flips every 2 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-500/10 rounded-full border border-red-500/20">
              Available for Hire
            </div>
            {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400">{user.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-6">{user.title}</h2> */}
            {/* <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight flex gap-2">
              
              Hello, I'm
              
              <AnimatePresence mode="wait">
                <motion.span
                  key={showName ? "name" : "title"}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400 inline-block"
                >
                  {showName ? user.name : user.title}
                </motion.span>
              </AnimatePresence>
            </h1> */}
            <div className="flex items-center gap-3 text-5xl md:text-6xl font-bold tracking-tight">
              {/* FIXED PART */}
              <span className="text-white">I am</span>

              {/* FLIPPER */}
              {/* <div className="h-[50px] md:h-[60px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={showName ? "name" : "title"}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.9 }}
                    className="block text-red-500"
                  >
                    {showName ? user.name : user.title}
                  </motion.span>
                </AnimatePresence>
              </div> */}
              <div className="h-[50px] md:h-[60px] overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.span
      key={index}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="block text-red-500"
    >
      {rotatingTexts[index]}
    </motion.span>
  </AnimatePresence>
</div>
            </div>
            <br></br>
            <span className="text-white text-5xl font-bold">Welcome to My Portfolio 👋</span>
            <br></br>
            <br></br>
            <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {user.about}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <MapPin size={16} className="text-red-400" />
                <span className="text-sm">{user.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Mail size={16} className="text-red-400" />
                <span className="text-sm">{user.email}</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-6">
              {/* GITHUB */}
              <a
                href={user.socials.github}
                target="_blank"
                rel="noreferrer"
                className="
      relative group
      w-12 h-12
      flex items-center justify-center
      rounded-full
      bg-white/5
      border border-white/20
      backdrop-blur-md
      shadow-[0_0_10px_rgba(255,255,255,0.05)]
      overflow-hidden
      text-white

      transition-all duration-300 ease-linear
      hover:bg-white/10
      hover:border-white/40
      hover:-translate-y-[4px]
      hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
    "
              >
                {/* ✨ Shine Effect */}
                <div
                  className="
        pointer-events-none absolute inset-0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform duration-700 ease-out
        before:content-['']
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent
        before:via-white/25 before:to-transparent
        before:skew-x-[20deg]
      "
                ></div>

                <Github size={20} />
              </a>

              {/* LINKEDIN */}
              <a
                href={user.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
      relative group
      w-12 h-12
      flex items-center justify-center
      rounded-full
      bg-white/5
      border border-white/20
      backdrop-blur-md
      shadow-[0_0_10px_rgba(255,255,255,0.05)]
      overflow-hidden
      text-white

      transition-all duration-300 ease-linear
      hover:bg-white/10
      hover:border-white/40
      hover:-translate-y-[4px]
      hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
    "
              >
                <div
                  className="
        pointer-events-none absolute inset-0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform duration-700 ease-out
        before:content-['']
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent
        before:via-white/25 before:to-transparent
        before:skew-x-[20deg]
      "
                ></div>

                <Linkedin size={20} />
              </a>

              {/* TWITTER */}
              <a
                href={user.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="
      relative group
      w-12 h-12
      flex items-center justify-center
      rounded-full
      bg-white/5
      border border-white/20
      backdrop-blur-md
      shadow-[0_0_10px_rgba(255,255,255,0.05)]
      overflow-hidden
      text-white

      transition-all duration-300 ease-linear
      hover:bg-white/10
      hover:border-white/40
      hover:-translate-y-[4px]
      hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
    "
              >
                <div
                  className="
        pointer-events-none absolute inset-0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform duration-700 ease-out
        before:content-['']
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent
        before:via-white/25 before:to-transparent
        before:skew-x-[20deg]
      "
                ></div>

                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex justify-center items-center"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#0a0a0a,#1b1b1b)] rounded-full"></div>

            {/* Hover Glow as in your CSS */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-all duration-500
                  hover:opacity-70 hover:shadow-[0_0_30px_rgba(146,150,255,0.5),0_0_60px_rgba(255,255,255,0.2)]"
            ></div>

            {/* Main Image */}
            <img
              src={user.avatar}
              alt={user.name}
              className="
  relative w-full h-full object-cover rounded-full 
  border-[3px] border-[#555]
  shadow-[0_0_35px_rgba(255,255,255,0.15)]
  transition-all duration-500 ease-linear

  hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.05)]
  hover:border-white

  hover:bg-[rgba(255,255,255,0.12)]

 hover:shadow-[0_0_35px_10px_rgba(150,170,255,0.45)]
"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
