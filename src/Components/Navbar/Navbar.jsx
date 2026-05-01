import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "../../Utils/ThemeContext";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 backdrop-blur-xl border-b border-primary/10"
            : "py-5"
        }`}
        style={{
          background: scrolled
            ? isDark
              ? "rgba(10,10,15,0.9)"
              : "rgba(248,250,252,0.9)"
            : "transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            whileHover={{ scale: 1.05 }}
            className="font-display text-xl font-bold flex items-center gap-2"
          >
            <Code2 className="w-6 h-6 text-primary" />
            <span className={isDark ? "text-white" : "text-dark"}>
              &lt;<span className="text-primary">DB</span>/&gt;
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const section = href.replace("#", "");
              const isActive = activeSection === section;
              return (
                <li key={href}>
                  <motion.a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    whileHover={{ y: -1 }}
                    className={`relative px-4 py-2 font-body font-semibold text-sm tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : isDark
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        style={{ boxShadow: "0 0 6px #00ff88" }}
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors duration-200 ${
                isDark
                  ? "border-dark-border text-slate-400 hover:text-primary hover:border-primary/30"
                  : "border-light-border text-slate-500 hover:text-primary"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            {/* Hire me button — desktop */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block btn-primary text-xs"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 right-0 z-40 w-72 flex flex-col pt-24 px-8 pb-8 ${
              isDark ? "bg-dark-card" : "bg-white"
            } border-l ${isDark ? "border-dark-border" : "border-light-border"} shadow-2xl`}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    className={`block py-3 px-4 rounded-lg font-body font-semibold text-lg tracking-wide transition-all duration-200 ${
                      activeSection === href.replace("#", "")
                        ? "text-primary bg-primary/10"
                        : isDark
                        ? "text-slate-300 hover:text-primary hover:bg-primary/5"
                        : "text-slate-600 hover:text-primary"
                    }`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="btn-primary block text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
