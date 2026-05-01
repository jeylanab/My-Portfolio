import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useTheme } from "../../Utils/ThemeContext";
// Directly importing Lucide icons
import { Code2, Rocket, Users, Coffee } from "lucide-react";

const Stats = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Map your data labels to the imported icons
  const statsWithIcons = [
    { label: "Years Experience", value: 2, suffix: "+", icon: Code2 },
    { label: "Projects Completed", value: 15, suffix: "+", icon: Rocket },
    { label: "Happy Clients", value: 100, suffix: "%", icon: Users },
    { label: "Cups of Coffee", value: 850, suffix: "+", icon: Coffee },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section 
      ref={ref} 
      className={`py-24 relative overflow-hidden ${isDark ? "bg-[#0D1117]" : "bg-white"}`}
      style={{ perspective: "1200px" }}
    >
      {/* Cinematic Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 opacity-20 ${isDark ? "bg-[radial-gradient(circle_at_center,#00E6760a,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,#00E67605,transparent_70%)]"}`} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statsWithIcons.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -20px rgba(0, 230, 118, 0.3)"
                }}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 ${
                  isDark 
                  ? "bg-[#161B22]/50 border-white/5 hover:border-[#00E676]/40" 
                  : "bg-slate-50 border-slate-200 hover:border-[#00E676]/40"
                }`}
              >
                {/* Floating Icon with Glow */}
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 blur-xl bg-[#00E676]/20 scale-150 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon 
                    size={40} 
                    className="relative z-10 text-[#00E676] group-hover:rotate-[15deg] transition-transform duration-500 ease-out" 
                    strokeWidth={1.5}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-primary">
                    {inView ? <CountUp end={stat.value} duration={3} /> : "0"}
                    <span className="text-[#00E676] ml-0.5">{stat.suffix}</span>
                  </h3>
                  <p className={`text-xs uppercase tracking-[0.2em] font-bold ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {stat.label}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#00E676] group-hover:w-1/3 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;