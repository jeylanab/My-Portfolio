// ============================================================
// 📁 DATA FILE — JEYLAN ABDO TESI (REAL DATA)
// ============================================================

// ─────────────────────────────────────────────
// 👤 PERSONAL INFO
// ─────────────────────────────────────────────
export const personalInfo = {
  name: "Jeylan A.",
  tagline: "Full Stack Developer",
roles: [
  "Web Apps",
  "Digital Solutions",
  "UI/UX",
  "Business Tools",
  "Scalable Systems",
],
  email: "jeylantesi@gmail.com",
  phone: "+251924423956",
  location: "Addis Ababa, Ethiopia",
  bio: `Motivated and adaptable Computer Science graduate with 2+ years of hands-on experience in full-stack web development, UI/UX design, and modern application architecture. 
  I specialize in building scalable, responsive applications using the Modern Tools and frontend frameworks like React and Vue. 
  I focus on clean code, performance, and user-centered design to deliver real-world solutions.`,
  shortBio: "Building scalable digital products with modern web technologies.",
  resumeLink: "",
  profileImage: "../../Public/pp.png",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "",
    instagram: "",
    youtube: "",
  },
};

// ─────────────────────────────────────────────
// 🛣️ JOURNEY / TIMELINE
// ─────────────────────────────────────────────
export const journeyData = [
  {
    id: 1,
    year: "2000s",
    title: "Born in Ethiopia 🇪🇹",
    subtitle: "Addis Ababa",
    description:
      "Born and raised in Addis Ababa, Ethiopia. Developed early curiosity for technology and problem solving.",
    icon: "🌍",
    type: "life",
  },
  {
    id: 2,
    year: "2010–2021",
    title: "School Education",
    subtitle: "Primary & Secondary",
    description:
      "Completed primary and secondary education with strong focus on mathematics and analytical thinking.",
    icon: "📚",
    type: "education",
  },
  {
    id: 3,
    year: "2022–2025",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Maharishi Markandeshwar University, India",
    description:
      "Graduated with solid foundation in software engineering, data structures, and full-stack development.",
    icon: "🎓",
    type: "education",
  },
  {
    id: 4,
    year: "2023–2024",
    title: "Frontend Developer Intern",
    subtitle: "Mirage Media Group (Remote)",
    description:
      "Built and optimized responsive web applications using React and Vue. Improved performance by 30% and enhanced user engagement.",
    icon: "💼",
    type: "work",
  },
  {
    id: 5,
    year: "2024",
    title: "Bootcamp Experience",
    subtitle: "edX Frontend Development",
    description:
      "Learned advanced frontend concepts including TypeScript, testing, debugging, and real-world workflows.",
    icon: "⚡",
    type: "milestone",
  },
  {
    id: 6,
    year: "2024–2025",
    title: "Full Stack Project — Roofly",
    subtitle: "Real Estate Platform",
    description:
      "Built a scalable real estate platform using Vue, Nuxt.js, MongoDB with authentication and Google Maps integration.",
    icon: "🚀",
    type: "work",
  },
  {
    id: 7,
    year: "2025",
    title: "Technophilia Achievement",
    subtitle: "2nd Place Winner",
    description:
      "Secured second place in Technophilia competition showcasing innovation and technical problem-solving.",
    icon: "🏆",
    type: "achievement",
  },
];

// ─────────────────────────────────────────────
// 🛠️ SKILLS
// ─────────────────────────────────────────────
export const skillsData = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Vue.js", level: 85, icon: "🟩" },
    { name: "Nuxt.js", level: 80, icon: "▲" },
    { name: "JavaScript (ES6+)", level: 88, icon: "🟨" },
    { name: "TypeScript", level: 75, icon: "🔷" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "HTML5 & CSS3", level: 95, icon: "🌐" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 83, icon: "🔌" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "MySQL", level: 75, icon: "🐬" },
    { name: "REST APIs", level: 90, icon: "🔗" },
    { name: "JWT Authentication", level: 85, icon: "🔐" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "🐙" },
    { name: "Docker", level: 65, icon: "🐳" },
    { name: "Figma", level: 85, icon: "🎨" },
    { name: "Adobe XD", level: 80, icon: "🧩" },
    { name: "Firebase", level: 75, icon: "🔥" },
    { name: "Jira", level: 70, icon: "📋" },
  ],
};

// ─────────────────────────────────────────────
// 📂 UPDATED PROJECTS (6 RECENT)
// ─────────────────────────────────────────────
export const projectsData = [
  {
    id: 1,
    title: "Olens Store — Digital Retail",
    description:
      "A high-performance digital storefront developed for the Addis Ababa market, focusing on seamless product discovery and a robust MERN-based infrastructure.",
    image: "/assets/images/projects/olenstore.png",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://olenstore.vercel.app/",
    githubLink: "https://github.com/jeylanab/olens-store",
    featured: true,
    category: "Full Stack",
    year: "2025",
  },
  {
    id: 2,
    title: "Taily-Pets — Pet Care Platform",
    description:
      "A community-focused pet care platform with intuitive features for pet enthusiasts, built using modern frontend technologies and real-time backend integration.",
    image: "/assets/images/projects/tailypets.png",
    techStack: ["React", "Firebase", "TypeScript", "Framer Motion"],
    liveLink: "https://taily-pets.vercel.app/",
    githubLink: "https://github.com/jeylanab/Taily-Pets",
    featured: true,
    category: "Full Stack",
    year: "2025",
  },
  {
    id: 3,
    title: "Theo Rallis — Success Consulting",
    description:
      "A high-conversion professional platform created for a Cyprus-based consultant, emphasizing premium typography and elegant UI for relationship success services.",
    image: "/assets/images/projects/theorallis.png",
    techStack: ["React", "TypeScript", "Responsive Design", "CSS3"],
    liveLink: "https://theo-rallis.vercel.app/",
    githubLink: "https://github.com/jeylanab/Theo-Rallis",
    featured: true,
    category: "Frontend",
    year: "2025",
  },
  {
    id: 4,
    title: "AstroClean UK — Booking System",
    description:
      "A streamlined booking management system for a UK-based service business, featuring complex data property handling and a responsive user interface.",
    image: "/assets/images/projects/astroclean.png",
    techStack: ["React", "TypeScript", "Node.js", "Cloud DevOps"],
    liveLink: "https://astrocleanuk.vercel.app/",
    githubLink: "https://github.com/jeylanab/astroClean",
    featured: true,
    category: "Full Stack",
    year: "2025",
  },
  {
    id: 5,
    title: "One-Frame — Quote Platform",
    description:
      "An interactive quote generation and summary platform designed for precision and clarity in service-based business transactions.",
    image: "/assets/images/projects/oneframe.png",
    techStack: ["React", "Node.js", "Framer Motion", "UI/UX"],
    liveLink: "https://one-frame.vercel.app/",
    githubLink: "https://github.com/jeylanab/ONE-FRAME",
    featured: true,
    category: "Frontend",
    year: "2025",
  },
  {
    id: 6,
    title: "Olens Studio — Web Agency",
    description:
      "A cinematic web agency portfolio that showcases creative storytelling through advanced animations and modern design architecture.",
    image: "/assets/images/projects/olensstudio.png",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "UI/UX"],
    liveLink: "https://olens-ruddy.vercel.app/",
    githubLink: "https://github.com/jeylanab/Olens",
    featured: true,
    category: "Frontend",
    year: "2025",
  },
];
// ─────────────────────────────────────────────
// 🏆 ACHIEVEMENTS
// ─────────────────────────────────────────────
export const achievementsData = [
  {
    id: 1,
    type: "award",
    title: "Technophilia Competition — 2nd Place",
    issuer: "University Event",
    date: "2025",
    description:
      "Won second place demonstrating strong technical and problem-solving skills.",
    icon: "🥈",
    link: "",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    type: "certification",
    title: "Frontend Development Bootcamp",
    issuer: "edX",
    date: "2024",
    description:
      "Completed professional frontend development training with real-world projects.",
    icon: "🎓",
    link: "",
    color: "from-blue-500 to-purple-600",
  },
];

// ─────────────────────────────────────────────
// 📊 STATS
// ─────────────────────────────────────────────
export const statsData = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Technologies Used", value: 15, suffix: "+" },
];

// ─────────────────────────────────────────────
// 🔧 SERVICES
// ─────────────────────────────────────────────
export const servicesData = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "Building scalable web applications using MERN and modern technologies.",
    icon: "🖥️",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Creating responsive and highly interactive user interfaces using React and Vue.",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive and modern user experiences using Figma and Adobe XD.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Developing and integrating REST APIs with secure authentication systems.",
    icon: "🔗",
  },
];