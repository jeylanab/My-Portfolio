import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import profile from "../../Assets/pic.png";
import cv from "../../Assets/template.pdf";

/* ---------------- Animations ---------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ---------------- Config (Reusable for roles) ---------------- */
const hero = {
  name: "Jeylan Abdo",
  role: "Full-Stack Developer", // change role here
tagline:
  "I build fast, clean, and scalable web applications with a strong focus on performance, usability, and maintainable code.",
  badge: "MERN • React • UI/UX",
  socials: [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/jeylan-tesi-53a746257/" },
    { icon: FaTwitter, url: "https://x.com/jetu81" },
    { icon: FaGithub, url: "https://github.com/jeylanab/" },
    { icon: FaInstagram, url: "https://www.instagram.com/your-profile" },
  ],
};

export const Hero = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="
        relative min-h-screen
        flex items-center
        px-6 lg:px-16
        pt-24 lg:pt-28
      "
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* -------- LEFT CONTENT -------- */}
        <motion.div
          variants={fadeUp}
          className="text-center lg:text-left space-y-5"
        >
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
            {hero.name}
            <span className="block text-green-400 text-2xl sm:text-3xl xl:text-4xl font-medium mt-2">
              {hero.role}
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg">
            {hero.tagline}
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 pt-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="
                px-7 py-3 rounded-lg
                bg-green-500 hover:bg-green-600
                text-black font-semibold
                transition shadow-md
              "
            >
              Projects
            </motion.a>

            <motion.a
              href={cv}
              download
              whileHover={{ scale: 1.05 }}
              className="
                px-7 py-3 rounded-lg
                border border-green-400
                text-green-400 hover:bg-green-400 hover:text-black
                transition font-semibold
              "
            >
              CV
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-5 pt-4">
            {hero.socials.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-green-400 hover:scale-110 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* -------- RIGHT IMAGE -------- */}
        <motion.div
          variants={fadeUp}
          className="relative flex justify-center"
        >
          {/* Soft glow */}
          <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] bg-green-400/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <img
              src={profile}
              alt={hero.name}
              className="
                w-[240px] sm:w-[300px] lg:w-[360px]
                rounded-2xl shadow-xl
              "
            />

            {/* Badge */}
            <span
              className="
                absolute -bottom-3 left-1/2 -translate-x-1/2
                px-4 py-1 rounded-full
                text-xs bg-white dark:bg-slate-800
                text-gray-700 dark:text-white
                shadow-md
              "
            >
              {hero.badge}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
