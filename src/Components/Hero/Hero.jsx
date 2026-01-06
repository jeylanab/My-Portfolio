import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import profile from "../../Assets/pic.png";
import cv from "../../Assets/template.pdf";

/* ---------------- Animations ---------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const hero = {
  name: "Jeylan Abdo",
  role: "Frontend Developer // UI Designer",
  tagline: "I build fast, clean, and scalable web applications with a strong focus on performance, usability, and maintainable code.",
  badge: "Vanilla • React • UI/UX",
  socials: [
    { icon: FaInstagram, url: "#" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/jeylan-tesi-53a746257/" },
    { icon: FaGithub, url: "https://github.com/jeylanab/" },
    { icon: FaTwitter, url: "https://x.com/jetu81" },
  ],
};

export const Hero = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 py-12"
    >
      {/* Background Decorative Blurs - Larger for more space usage */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-100/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/20 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        {/* -------- UPPER CONTENT: IMAGE & BADGES -------- */}
        <div className="relative w-full flex justify-center items-center mb-16">
          
          {/* Vertical Socials - Left Side */}
          <motion.div 
            variants={fadeUp}
            className="absolute left-0 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-10"
          >
            {hero.socials.map(({ icon: Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-500 transition-colors duration-300">
                <Icon size={22} />
              </a>
            ))}
          </motion.div>

          {/* Main Portrait Container */}
          <motion.div variants={fadeUp} className="relative group">
            {/* Arched Backdrop */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-t-full -z-10 translate-y-6 scale-[1.05]" />
            
            {/* Image with Blurry Bottom Mask */}
            <div className="relative overflow-hidden rounded-t-full" style={{ 
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}>
              <img
                src={profile}
                alt={hero.name}
                className="w-[280px] md:w-[420px] grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
              />
            </div>

            {/* Come On Let's Talk - Right Side */}
            <div className="absolute -top-6 -right-12 md:-right-20 w-32 h-32 md:w-44 md:h-44 hidden sm:block">
               <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[8px] uppercase font-bold fill-slate-400 tracking-[1.5px]">
                     <textPath xlinkHref="#circlePath">COME ON LET'S TALK • COME ON LET'S TALK • </textPath>
                  </text>
               </svg>
            </div>

            {/* The Green Squiggle Overlay */}
            <svg className="absolute -inset-12 w-[calc(100%+96px)] h-[calc(100%+96px)] pointer-events-none opacity-50" viewBox="0 0 400 500">
               <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                d="M70,400 C100,450 350,400 370,180 C390,50 150,20 80,150"
                fill="transparent"
                stroke="#4ade80"
                strokeWidth="1"
                strokeLinecap="round"
               />
            </svg>
          </motion.div>
        </div>

        {/* -------- LOWER CONTENT: TEXT & ACTIONS -------- */}
        <motion.div variants={fadeUp} className="text-center space-y-6 w-full max-w-4xl">
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">
            {hero.name}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="text-sm md:text-base font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">
              {hero.role}
            </p>
            <div className="hidden md:block w-12 h-[1px] bg-slate-300" />
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm italic">
              {hero.tagline}
            </p>
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-center gap-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-2xl transition-all"
            >
              Explore Projects
            </motion.a>
            
            <a href={cv} download className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Download CV 
              <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Tech Badge - Fixed at bottom */}
        <motion.div variants={fadeUp} className="mt-16 px-6 py-2 border border-slate-200 dark:border-slate-800 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
           <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 tracking-[0.2em] uppercase">
            {hero.badge}
           </span>
        </motion.div>

      </div>
    </motion.section>
  );
};