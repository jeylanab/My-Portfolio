import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        // Accelerate near the end
        return prev + (prev < 80 ? 2 : 4);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glowing orb */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.6) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl font-bold"
        >
          <span className="text-white">&lt;</span>
          <span className="gradient-text">DEV</span>
          <span className="text-white">/&gt;</span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-64 h-1 bg-dark-border rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${count}%`,
              background: "linear-gradient(90deg, #00ff88, #00d4ff)",
              boxShadow: "0 0 10px rgba(0,255,136,0.7)",
            }}
          />
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-primary text-lg"
        >
          {count.toFixed(0)}%
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          className="font-mono text-xs text-primary/50 tracking-widest uppercase"
        >
          Initializing Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
