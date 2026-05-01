import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #00ff88, #00cc6a)",
            boxShadow: "0 0 20px rgba(0,255,136,0.5)",
          }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 text-dark" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
