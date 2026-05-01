import { motion } from "framer-motion";
import { achievementsData } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";
import { 
  ExternalLink, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  Scroll, 
  Award 
} from "lucide-react";

// Mapping types to Lucide Components
const typeIcons = {
  certification: Scroll,
  bootcamp: GraduationCap,
  internship: Briefcase,
  award: Trophy,
};

const AchievementCard = ({ item, index, isDark }) => {
  // Select the icon based on type, fallback to Award icon
  const IconComponent = typeIcons[item.type] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`glass-card p-6 border relative overflow-hidden group transition-all duration-300 ${
        isDark ? "border-dark-border hover:border-primary/40" : "border-light-border hover:border-primary/40"
      }`}
    >
      {/* Gradient accent on hover */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(0,255,136,0.5), transparent)`,
          filter: "blur(20px)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Type badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r ${item.color} text-white`}
        >
          <IconComponent className="w-3 h-3" strokeWidth={3} />
          {item.type.toUpperCase()}
        </span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-primary transition-colors duration-200"
          aria-label="View credential"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Hero Icon (Replacing item.icon from constants) */}
      <div className={`mb-4 p-3 inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 ${isDark ? "text-primary" : "text-primary"}`}>
        <IconComponent size={32} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className={`font-display font-bold text-base mb-1 group-hover:text-primary transition-colors duration-200 ${isDark ? "text-white" : "text-slate-900"}`}>
        {item.title}
      </h3>
      <p className="font-mono text-xs text-primary mb-1">{item.issuer}</p>
      <p className={`font-mono text-[10px] mb-3 uppercase tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}>
        {item.date}
      </p>
      <p className={`font-body text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        {item.description}
      </p>
    </motion.div>
  );
};

const Achievements = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="achievements"
      className={`relative py-24 overflow-hidden ${isDark ? "bg-dark" : "bg-light-surface"}`}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-3"
          >
            // Recognition & Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-display text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            My <span className="gradient-text">Achievements</span>
          </motion.h2>
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} isDark={isDark} />
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-20 p-8 rounded-2xl border backdrop-blur-sm ${
            isDark ? "border-white/5 bg-white/5" : "border-slate-200 bg-white"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { count: "6", label: "Certifications", Icon: Scroll },
              { count: "2", label: "Internships", Icon: Briefcase },
              { count: "3", label: "Bootcamps", Icon: GraduationCap },
              { count: "1", label: "Hackathon Win", Icon: Trophy },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <s.Icon size={20} />
                </div>
                <p className="font-display text-3xl font-black text-primary leading-none mb-1">{s.count}</p>
                <p className={`font-mono text-[10px] uppercase tracking-widest ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;