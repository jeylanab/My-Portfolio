import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../../constants/index";
import { useTheme } from "../../Utils/ThemeContext";
import { ExternalLink, Github, Star } from "lucide-react";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const ProjectCard = ({ project, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`glass-card overflow-hidden border ${
      isDark ? "border-dark-border" : "border-light-border"
    } hover:border-primary/40 transition-all duration-300 group relative`}
  >
    {/* Featured badge */}
    {project.featured && (
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-primary/90 text-dark text-xs font-mono font-bold px-2 py-1 rounded-md">
        <Star className="w-3 h-3 fill-current" /> Featured
      </div>
    )}

    {/* Image area */}
    <div className="relative h-48 overflow-hidden">
      {/* Placeholder image with gradient */}
      <div
        className="w-full h-full flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, #0f0f1a, #141420)`,
        }}
      >
        <div className="text-center">
          <div className="text-5xl mb-2">
            {project.category === "Frontend" ? "🎨" : project.category === "Backend" ? "⚙️" : "🚀"}
          </div>
          <p className="font-mono text-xs text-primary/40 tracking-wider">[ PROJECT IMAGE ]</p>
        </div>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 project-card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="flex gap-3">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 bg-primary text-dark text-xs font-mono font-bold px-3 py-2 rounded-lg"
          >
            <ExternalLink className="w-3 h-3" /> Live Demo
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 bg-dark-surface/90 text-white text-xs font-mono font-bold px-3 py-2 rounded-lg border border-white/10"
          >
            <Github className="w-3 h-3" /> GitHub
          </motion.a>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Category + year */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-primary/70 tracking-widest uppercase">
          {project.category}
        </span>
        <span className={`font-mono text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          {project.year}
        </span>
      </div>

      <h3 className={`font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-200 ${isDark ? "text-white" : "text-slate-900"}`}>
        {project.title}
      </h3>

      <p className={`font-body text-sm leading-relaxed mb-4 line-clamp-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className={`font-mono text-xs px-2 py-1 rounded-md ${
              isDark
                ? "bg-dark-muted text-slate-400 border border-dark-border"
                : "bg-light-surface text-slate-500 border border-light-border"
            }`}
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="font-mono text-xs text-primary/70 px-2 py-1">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className={`relative py-24 overflow-hidden ${isDark ? "bg-dark" : "bg-light-surface"}`}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            // What I've Built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`section-title ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl font-body font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-dark shadow-glow-sm"
                  : isDark
                  ? "glass-card border border-dark-border text-slate-400 hover:text-primary hover:border-primary/30"
                  : "bg-light-surface border border-light-border text-slate-500 hover:text-primary"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 text-xs opacity-60">
                  ({projectsData.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} isDark={isDark} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/yourusername`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
