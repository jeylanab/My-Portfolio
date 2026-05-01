import { motion } from "framer-motion";
import { personalInfo } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";
import { Github, Linkedin, Twitter, Heart, Code2, ArrowUp } from "lucide-react";

const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={`relative py-12 overflow-hidden border-t ${
        isDark ? "border-dark-border bg-dark-card" : "border-light-border bg-light"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-display text-xl font-bold"
          >
            <Code2 className="w-5 h-5 text-primary" />
            <span className={isDark ? "text-white" : "text-dark"}>
              &lt;<span className="text-primary">DB</span>/&gt;
            </span>
          </motion.div>

          {/* Center text */}
          <p className={`font-body text-sm flex items-center gap-1.5 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            </motion.span>{" "}
            by{" "}
            <span className="text-primary font-semibold">{personalInfo.name}</span>
            {" "}— © {year}
          </p>

          {/* Right: Social + back to top */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: personalInfo.socialLinks.github },
              { Icon: Linkedin, href: personalInfo.socialLinks.linkedin },
              { Icon: Twitter, href: personalInfo.socialLinks.twitter },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                  isDark
                    ? "border-dark-border text-slate-500 hover:text-primary hover:border-primary/30"
                    : "border-light-border text-slate-400 hover:text-primary"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-primary/30 text-primary ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        {/* Bottom thin line with tech stack note */}
        <div className={`mt-8 pt-6 border-t text-center ${isDark ? "border-dark-border" : "border-light-border"}`}>
          <p className={`font-mono text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
            Built with{" "}
            {["React.js", "Vite", "Tailwind CSS", "Framer Motion"].map((tech, i, arr) => (
              <span key={tech}>
                <span className="text-primary/60">{tech}</span>
                {i < arr.length - 1 && <span className="mx-1">·</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
