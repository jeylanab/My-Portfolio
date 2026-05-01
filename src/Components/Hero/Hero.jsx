import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../../constants/index";
import { Download, ArrowRight, Github, Linkedin, Twitter, Zap, Rocket } from "lucide-react";
import { useTheme } from "../../Utils/ThemeContext";
import pp from "../../asset/ppp.png";

// Animated floating particles
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${80 + i * 40}px`,
          height: `${80 + i * 40}px`,
          left: `${10 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
          background: `radial-gradient(circle, rgba(0,255,136,${0.06 - i * 0.008}) 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, i % 2 === 0 ? 20 : -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6 + i * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.8,
        }}
      />
    ))}
  </div>
);

// Grid lines animated
const GridLines = () => (
  <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
);

// Glowing center radial
const HeroGlow = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.08) 0%, transparent 70%)",
    }}
  />
);

// Social icons row configuration
const socialLinks = [
  { href: personalInfo.socialLinks.github, Icon: Github, label: "GitHub" },
  { href: personalInfo.socialLinks.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: personalInfo.socialLinks.twitter, Icon: Twitter, label: "Twitter" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- START: New Animated Profile Picture Component ---
const AnimatedProfilePicture = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05 }} // Interactive scale on hover
      className="flex-shrink-0 relative cursor-pointer"
    >
      {/* 1. Main dynamic outer glowing pulse (highly visible) */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 0 2px rgba(0,255,136,0.2), 0 0 40px rgba(0,255,136,0.1), 0 0 80px rgba(0,255,136,0.05)", // Base pulse
            "0 0 0 4px rgba(0,255,136,0.4), 0 0 60px rgba(0,255,136,0.3), 0 0 120px rgba(0,255,136,0.2)", // Maximum pulse
            "0 0 0 2px rgba(0,255,136,0.2), 0 0 40px rgba(0,255,136,0.1), 0 0 80px rgba(0,255,136,0.05)", // Return to base
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* 2. Interactive hover glow intensifying */}
      <motion.div
        className="absolute -inset-2 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 0 50px rgba(0,255,136,0.6), 0 0 100px rgba(0,255,136,0.4)",
        }}
      />

      {/* 3. Main container with background and refined border */}
      <div
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-primary/30"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #0f0f1a 0%, #141420 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        {/* Animated border gradient (enhanced visibility) */}
        <motion.div
          className="absolute -inset-1 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,255,136,0.8), transparent, rgba(0,255,136,0.6), transparent)",
            backgroundSize: "300% 300%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* 4. The portrait image - clean and high-visibility */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <img src={pp} alt="Profile" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* 5. Refined floating badge: experience (Updated to use Lucide React Zap icon) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute -bottom-4 -left-6 glass-card px-3 py-2 flex items-center gap-3 border border-primary/20 shadow-glow-sm"
      >
        <div className="p-1.5 rounded-full bg-primary/10 text-primary">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-primary">3+ Years</p>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-tighter">Experience</p>
        </div>
      </motion.div>

      {/* 6. Refined floating badge: projects (Updated to use Lucide React Rocket icon) */}
      <motion.div
        animate={{ y: [0, 12, 0] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute -top-4 -right-6 glass-card px-3 py-2 flex items-center gap-3 border border-primary/20 shadow-glow-sm"
      >
        <div className="p-1.5 rounded-full bg-primary/10 text-primary">
          <Rocket className="w-4 h-4" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-primary">20+</p>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-tighter">Projects</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
// --- END: New Animated Profile Picture Component ---

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "bg-[#0f0f1a]" : "bg-light-surface"
      }`}
    >
      {/* Background layers */}
      <GridLines />
      <HeroGlow />
      <FloatingOrbs />

      {/* Scan line overlay */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-20" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Greeting badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
            <span
              className="font-mono text-sm tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary"
            >
              Available for hire
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className={`font-display font-black leading-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text block sm:inline">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            className="font-body text-xl md:text-2xl mb-6 h-10 flex items-center justify-center lg:justify-start gap-2"
          >
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>I build</span>{" "}
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
              className="text-primary font-semibold"
            />
          </motion.div>

          {/* Short bio */}
          <motion.p
            variants={itemVariants}
            className={`font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {personalInfo.shortBio} Full Stack developer specializing in the{" "}
            <span className="text-primary font-semibold">MERN stack</span>,
            passionate about building impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group"
            >
              View My Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href={personalInfo.resumeLink}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-3 justify-center lg:justify-start">
            {socialLinks.map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3, color: "#00ff88" }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                  isDark
                    ? "border-white/10 text-slate-400 hover:border-primary/40 hover:bg-primary/5"
                    : "border-slate-200 text-slate-500 hover:text-primary"
                }`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Avatar section (REPLACED with AnimatedProfilePicture) */}
        <AnimatedProfilePicture isDark={isDark} />
      </div>

      {/* Mouse-style scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-3 rounded-full bg-primary/70" />
        </motion.div>
        <span className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;