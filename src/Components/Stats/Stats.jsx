import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { statsData } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";

const Stats = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className={`py-16 relative overflow-hidden ${isDark ? "bg-dark-surface" : "bg-light-surface"}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.04), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`glass-card p-6 text-center border ${isDark ? "border-dark-border hover:border-primary/30" : "border-light-border hover:border-primary/30"} transition-all duration-300`}
            >
              <p className="font-display text-3xl md:text-4xl font-black text-primary mb-1">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={i * 0.1} />
                ) : (
                  "0"
                )}
                <span>{stat.suffix}</span>
              </p>
              <p className={`font-body text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
