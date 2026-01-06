import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import preview from "../../Assets/25.jpg"; // fallback image
import hpl from "../../Assets/hpl.png";
import hroofly from "../../Assets/hroofly.png";
import hsash from "../../Assets/hsash.png";
import hjoe from "../../Assets/hjoe.png";

export const projects = [
  {
    id: 1,
    category: "Full Stack (MERN)",
    title: "HPL Particle Estimator",
    description:
      "A dynamic web app for estimating HPL particle installation projects. Users can input project details and instantly get accurate cost breakdowns. Perfect for contractors and clients to plan budgets efficiently.",
    techStack: "React, Node.js, Express, MongoDB, Tailwind, Framer Motion",
    gif: hpl,
    liveLink: "https://custom-quote-alpha.vercel.app/", // Replace with live demo
    githubLink: "#",
  },
  {
    id: 2,
    category: "Frontend Tool",
    title: "HSash Window Refurbisher",
    description:
      "A user-friendly estimator for window refurbishment projects. Calculates labor, material, and overall cost dynamically, giving both professionals and homeowners instant, reliable quotes.",
    techStack: "React, Tailwind, Framer Motion",
    gif: hsash,
    liveLink: "https://sash-refurbish-quote.vercel.app/", // Replace with live demo
    githubLink: "#",
  },
  {
    id: 3,
    category: "Full Stack (MERN)",
    title: "JoeVibe eCommerce",
    description:
      "A sleek eCommerce platform featuring JWT-based authentication, role-based access, and a fully interactive product catalog. Designed for smooth shopping experiences and easy product management.",
    techStack: "React, Node.js, Express, MongoDB, Tailwind, JWT Auth",
    gif: hjoe,
    liveLink: "https://joevibe.vercel.app/", // Replace with live demo
    githubLink: "#",
  },
  {
    id: 5,
    category: "Frontend Tool",
    title: "Taily Pet Lovers",
    description:
      "A community platform for pet owners, vets, and adoption centers. Includes pet profiles, posts, and a service marketplace, connecting users with the right services and pet care advice.",
    techStack: "React, Node.js, Express, MongoDB, Tailwind, JWT Auth",
    gif: hroofly,
    liveLink: "https://taily-pets.vercel.app/", // Replace with live demo
    githubLink: "#",
  },
];

const ProjectList = () => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-6 py-28 flex flex-col gap-12 font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-4 text-[#2dda0a] tracking-tight">
        Featured Projects
      </h2>

      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`flex flex-col md:flex-row items-center border-t border-gray-800 pt-10 gap-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <div className="md:w-1/2 text-left space-y-3">
            <span className="text-lg px-3 py-1 rounded border border-green-500 text-green-400 font-medium tracking-wide">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold text-green-600">
              {project.title}
            </h3>
            <p className="dark:text-gray-300 text-md">{project.description}</p>
            <p className="text-gray-400 text-lg font-mono">
              {project.techStack}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white font-extrabold hover:text-green-400"
              >
                <FiExternalLink size={20} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white font-extrabold hover:text-green-400"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={project.gif}
              alt={project.title}
              className="rounded-lg w-full max-h-64 object-cover shadow-lg"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
