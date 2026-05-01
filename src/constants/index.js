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
  "Software",
  "Web Apps",
  "Mobile Apps",
  "UI/UX",
  "Business Tools",
  "Scalable Systems",
],
  email: "jeylantesi@gmail.com",
  phone: "+251924423956",
  location: "Addis Ababa, Ethiopia",
  bio: `Motivated and adaptable Computer Science graduate with 2+ years of hands-on experience in full-stack web development, UI/UX design, and modern application architecture. 
  I specialize in building scalable, responsive applications using the MERN stack and modern frontend frameworks like React and Vue. 
  I focus on clean code, performance, and user-centered design to deliver real-world solutions.`,
  shortBio: "Building scalable digital products with modern web technologies.",
  resumeLink: "/resume.pdf",
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
// 📂 PROJECTS
// ─────────────────────────────────────────────
export const projectsData = [
  {
    id: 1,
    title: "Roofly — Real Estate Platform",
    description:
      "A scalable real estate web application for property renting and selling with authentication and map-based search.",
    image: "/assets/images/projects/roofly.png",
    techStack: ["Vue", "Nuxt.js", "MongoDB", "Firebase", "Google Maps API"],
    liveLink: "",
    githubLink: "",
    featured: true,
    category: "Full Stack",
    year: "2025",
  },
  {
    id: 2,
    title: "On The Roof — Business Platform",
    description:
      "Client management and order system with Stripe integration, admin dashboard, and automated email workflows.",
    image: "/assets/images/projects/ontheroof.png",
    techStack: ["React", "Node.js", "Stripe", "Email Automation"],
    liveLink: "https://on-the-roof.vercel.app/",
    githubLink: "",
    featured: true,
    category: "Full Stack",
    year: "2025",
  },
  {
    id: 3,
    title: "OlenStore — E-commerce Platform",
    description:
      "Modern digital e-commerce store with product management and responsive UI.",
    image: "/assets/images/projects/olenstore.png",
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "https://olenstore.vercel.app/",
    githubLink: "",
    featured: true,
    category: "Full Stack",
    year: "2025",
  },
  {
    id: 4,
    title: "Flora Restaurant App",
    description:
      "Restaurant web app with dynamic UI and modern ordering interface.",
    image: "/assets/images/projects/flora.png",
    techStack: ["React", "UI/UX Design"],
    liveLink: "https://flora-virid.vercel.app/",
    githubLink: "",
    featured: false,
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