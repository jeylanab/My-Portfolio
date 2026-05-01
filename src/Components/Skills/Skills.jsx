import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";
import { 
  Layout, 
  Cpu, 
  Settings, 
  Terminal, 
  Layers, 
  Database, 
  Globe, 
  Smartphone,
  Code2,
  Box,
  Cloud
} from "lucide-react";

// Mapping the category keys to Lucide Components
const categories = [
  { key: "frontend", label: "Frontend", icon: Layout },
  { key: "backend", label: "Backend", icon: Cpu },
  { key: "tools", label: "Tools & DevOps", icon: Settings },
];

// Mapping individual skill names to icons (Optional but much cleaner)
// If a skill name isn't here, it will fallback to Code2
const skillIconMap = {
  "React": Layers,
  "Next.js": Globe,
  "Node.js": Terminal,
  "Express": Settings,
  "MongoDB": Database,
  "Firebase": Cloud,
  "Tailwind": Layout,
  "Redux": Box,
  "React Native": Smartphone,
  "TypeScript": Code2,
};

const SkillBar = ({ skill, index, isDark }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Choose the icon: check the map first, otherwise use a generic code icon
  const IconComponent = skillIconMap[skill.name] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`glass-card p-4 border ${isDark ? "border-white/5" : "border-slate-200"} hover:border-primary/40 transition-all duration-300 group`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <IconComponent size={18} strokeWidth={2} />
          </div>
          <span className={`font-body font-bold text-sm ${isDark ? "text-slate-200" : "text-slate-800"}`}>
            {skill.name}
          </span>
        </div>
        <span className="font-mono text-[10px] text-primary font-bold tracking-tighter">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, #00ff88, #00d4ff)`,
            boxShadow: "0 0 12px rgba(0,255,136,0.3)",
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState("frontend");

  return (
    <section
      id="skills"
      className={`relative py-24 overflow-hidden ${isDark ? "bg-dark" : "bg-light-surface"}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-primary text-xs tracking-[0.4em] uppercase mb-4"
          >
            // Technical Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-display text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                active === key
                  ? "bg-primary text-dark shadow-glow-sm scale-105"
                  : isDark
                  ? "glass-card border border-white/5 text-slate-500 hover:text-primary hover:border-primary/30"
                  : "bg-white border border-slate-200 text-slate-500 hover:text-primary shadow-sm"
              }`}
            >
              <Icon size={16} strokeWidth={active === key ? 3 : 2} />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillsData[active].map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} isDark={isDark} />
          ))}
        </motion.div>

        {/* Familiar technologies strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-primary/10"
        >
          <p className={`text-center font-mono text-[10px] mb-6 tracking-[0.3em] uppercase ${isDark ? "text-slate-600" : "text-slate-400"}`}>
            Also Proficient In
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["MySQL", "Redis", "AWS S3", "Cloudinary", "SASS", "Three.js", "Prisma", "Jest", "CI/CD", "Nginx", "REST", "GraphQL"].map((tech) => (
              <span
                key={tech}
                className={`font-mono text-[11px] px-4 py-2 rounded-lg border transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5 ${
                  isDark
                    ? "border-white/5 text-slate-500"
                    : "border-slate-200 text-slate-400 bg-white shadow-sm"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;