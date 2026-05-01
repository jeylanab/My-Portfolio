import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { journeyData } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";
import { 
  Zap, 
  Rocket, 
  Globe, 
  Award, 
  BookOpen, 
  Briefcase, 
  Star, 
  Heart 
} from "lucide-react";

const iconMap = {
  education: BookOpen,
  work: Briefcase,
  milestone: Star,
  life: Heart,
  zap: Zap,
  rocket: Rocket,
  globe: Globe,
  award: Award,
};

const typeColors = {
  life: "from-blue-500 to-cyan-500",
  education: "from-purple-500 to-pink-500",
  milestone: "from-primary to-emerald-400",
  work: "from-orange-500 to-yellow-400",
};

const typeLabels = {
  life: "Life",
  education: "Education",
  milestone: "Milestone",
  work: "Work",
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const SectionHeader = ({ subtitle, title, description, isDark }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className="text-center mb-16"
  >
    <motion.p variants={fadeInUp} className="section-subtitle">
      {subtitle}
    </motion.p>
    <motion.h2
      variants={fadeInUp}
      className={`section-title ${isDark ? "text-white" : "text-slate-900"}`}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        variants={fadeInUp}
        className={`max-w-2xl mx-auto font-body text-base ${isDark ? "text-slate-400" : "text-slate-500"}`}
      >
        {description}
      </motion.p>
    )}
  </motion.div>
);

const TimelineItem = ({ item, index, isDark }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;
  const IconComponent = iconMap[item.icon?.toLowerCase()] || iconMap[item.type] || Star;

  return (
    <div ref={ref} className="relative flex items-center gap-0 md:gap-8 mb-12">
      {/* Desktop Card */}
      <div className={`hidden md:flex flex-1 ${isLeft ? "justify-end" : "justify-start order-last"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          whileHover={{ y: -5, scale: 1.02 }}
          className={`glass-card p-6 max-w-sm w-full border ${
            isDark ? "border-dark-border" : "border-light-border"
          } hover:border-primary/30 transition-shadow hover:shadow-glow-sm group cursor-default`}
        >
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold mb-3 bg-gradient-to-r ${typeColors[item.type]} text-white bg-opacity-20`}>
            <motion.div 
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-1.5 h-1.5 rounded-full bg-white`} 
            />
            {typeLabels[item.type]}
          </div>

          <h3 className={`font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
            {item.title}
          </h3>
          <p className="font-mono text-xs text-primary mb-2">{item.subtitle}</p>
          <p className={`font-body text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Central Node */}
      <div className="relative flex flex-col items-center z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, type: "spring", stiffness: 200, delay: 0.1 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 border-primary/50 shadow-glow-sm text-primary relative overflow-hidden`}
          style={{
            background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.05))",
          }}
        >
          {/* Internal Pulse Effect */}
          <motion.div 
             animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
             transition={{ repeat: Infinity, duration: 3 }}
             className="absolute inset-0 bg-primary/20"
          />
          <IconComponent className="w-6 h-6 relative z-10" />
        </motion.div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="font-mono text-xs text-primary mt-2 font-semibold tracking-wide"
        >
          {item.year}
        </motion.span>
      </div>

      {/* Mobile Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`md:hidden glass-card p-5 flex-1 border ${
          isDark ? "border-dark-border" : "border-light-border"
        }`}
      >
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold mb-3 bg-gradient-to-r ${typeColors[item.type]} text-white`}>
          {typeLabels[item.type]}
        </div>
        <h3 className={`font-display font-bold text-base mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
          {item.title}
        </h3>
        <p className="font-mono text-xs text-primary mb-2">{item.subtitle}</p>
        <p className={`font-body text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {item.description}
        </p>
      </motion.div>

      <div className={`hidden md:block flex-1 ${isLeft ? "order-last" : ""}`} />
    </div>
  );
};

const About = () => {
  const { isDark } = useTheme();

  const statsData = [
    { label: "Years Coding", value: "3+", Icon: Zap },
    { label: "Projects Built", value: "20+", Icon: Rocket },
    { label: "Countries Lived", value: "2", Icon: Globe },
    { label: "Certifications", value: "6", Icon: Award },
  ];

  return (
    <section id="about" className={`relative py-24 overflow-hidden ${isDark ? "bg-dark" : "bg-light-surface"}`}>
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader
          subtitle="// My Story"
          title={<>My <span className="gradient-text">Journey</span></>}
          description="From the highlands of Ethiopia to the tech hubs of India — here's how my story unfolded."
          isDark={isDark}
        />

        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-7 md:left-1/2 top-0 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(0,255,136,0.4) 20%, rgba(0,255,136,0.4) 80%, transparent)",
            }}
          />

          {journeyData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} isDark={isDark} />
          ))}
        </div>

        {/* Stats Grid with Staggered entry */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                transition: { type: "spring", stiffness: 300 } 
              }}
              className={`glass-card p-6 text-center border flex flex-col items-center ${
                isDark ? "border-dark-border" : "border-light-border"
              } hover:border-primary/30 transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Card Background Shine */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              
              <div className="p-3 mb-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <stat.Icon className="w-7 h-7" />
              </div>
              <p className="font-display text-2xl font-black text-primary mb-1">{stat.value}</p>
              <p className={`font-body text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;