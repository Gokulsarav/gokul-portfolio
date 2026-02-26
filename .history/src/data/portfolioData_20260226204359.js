export const personalInfo = {
  name: "Gokul",
  roles: ["Software Developer"],
  tagline:
    "with 2 years of experience working in product-driven environments and real-time systems",
  phone: "+91 96297 88892",
  location: "Erode, Tamil Nadu, India",
  bio: "I'm a passionate Full Stack Developer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and thoughtful design.",
  resumeLink: "#",
  socialLinks: {
    github: "https://github.com/Gokulsarav",
    linkedin: "https://www.linkedin.com/in/gokulsaravanan/",
    twitter: "#",
    instagram: "#",
  },
  email: "gokul.slj@gmail.com",
};

export const aboutData = {
  description: [
    "Hello! I'm Gokul, a passionate developer who loves building things for the web. My journey in web development started back in college when I built my first website — and I've been hooked ever since.",
    "I specialize in creating responsive, performant, and accessible web applications using modern technologies. I believe in writing clean, maintainable code and constantly learning new tools and frameworks.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or reading about the latest trends in tech. I'm always looking for new challenges and opportunities to grow.",
  ],
  stats: [
    { label: "Years Experience", value: "2" },
    { label: "Projects Completed", value: "3+" },
    { label: "Technologies", value: "10+" },
    { label: "Code Commits", value: "1000+" },
  ],
};

export const experienceData = [
  {
    id: 1,
    role: "Software Developer",
    company: "Real Tech GPS Pvt Ltd",
    link: "https://www.realtechgps.com/",
    location: "Erode, Tamil Nadu",
    duration: "Feb 2025 – Present",
    description: [
      "Developed and maintained scalable React.js components for real-time dashboards and administrative panels.",
      "Integrated RESTful APIs from Spring Boot backend using Axios and React Query for optimized data fetching and caching.",
      "Implemented real-time features using WebSocket-based communication for live system updates.",
      "Enhanced UI performance and cross-device responsiveness through optimized component design.",
    ],
    technologies: [
      "Java Script",
      "React js",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "GIT",
      "Docker",
      "Nginx",
    ],
  },
  {
    id: 2,
    role: "Java Full Stack Developer",
    company: "J3 Soft Solutions Pvt Ltd",
    link: "https://j3soft.com/",
    location: "Bangalore, Karnataka",
    duration: "Mar 2024 – Jan 2025",
    description: [
      "Assisted in the development and implementation of full stack applications using Java, Spring Boot, React.js, and SQL.",
      "Created reusable component libraries that reduced development time by 25%.",
      "Integrated RESTful APIs and managed application state with Redux.",
      "Collaborated with cross-functional teams to deliver product features in agile development environments.",
    ],
    technologies: [
      "React",
      "Redux",
      "Spring Boot",
      "REST APIs",
      "Git",
      "Maven",
      "Postman",
      "Jenkins",
      "Docker",
      "Nginx",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication Engineering",
    institution: "Velalar College of Engineering and Technology",
    location: "Erode, Tamil Nadu",
    duration: "2020 – 2024",
    grade: "CGPA: 8.87/10",
    description:
      "Specialized in Software Engineering with a focus on web technologies and data structures.",
  },
  {
    id: 2,
    degree: "Higher Secondary (XII)",
    field: "Computer Science",
    institution: "Government Boys Higher Secondary School",
    location: "Modakkurichi, Tamil Nadu",
    duration: "2019 – 2020",
    grade: "Percentage: 62%",
    description:
      "Focused on Mathematics, Physics, and Computer Science with distinction.",
  },
  {
    id: 3,
    degree: "Secondary School (X)",
    field: "General",
    institution: "Government Boys Higher Secondary School",
    location: "Modakkurichi, Tamil Nadu",
    duration: "2017 - 2018",
    grade: "Percentage: 76%",
    description:
      "Completed secondary education with a strong foundation in sciences and mathematics.",
  },
];

export const skillsData = {
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 82 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 88 },
        { name: "Spring Boot", level: 85 },
        { name: "JPA", level: 82 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL", level: 86 },
        { name: "Firebase", level: 78 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 82 },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", level: 85 },
        { name: "React Query", level: 84 },
      ],
    },
    {
      title: "Real-Time & Communication",
      skills: [
        { name: "MQTT", level: 82 },
        { name: "WebSocket", level: 84 },
        { name: "Google Maps API", level: 80 },
      ],
    },
    {
      title: "Version Control & Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Liquibase", level: 78 },
        { name: "ClickUp", level: 82 },
        { name: "Jira", level: 85 },
      ],
    },
    {
      title: "UI Frameworks & Styling",
      skills: [
        { name: "Bootstrap", level: 86 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "Tamil (Native)", level: 100 },
        { name: "English", level: 85 },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "iAWS - Automatic Weighing System",
    description:
      "Led frontend development of an automated weighing system, delivering real-time dashboards and integrated reporting modules for accurate tracking and operational monitoring.",
    image: "📊",
    technologies: ["JavaScript", "Bootstrap", "J-Query", "PHP", "SQL"],
    category: "Frontend",
    live: "http://dev.igps.io/aws_admin/Client/Corporation_Map.php",
    featured: true,
  },
  {
    id: 2,
    title: "iChlorine – Real-Time Chlorine Monitoring Platform",
    description:
      "Developed a scalable React (Vite) SPA for real-time chlorine monitoring, integrating REST APIs, React Query for server-state management, and interactive maps (Google Maps, Leaflet) for site and device tracking.",
    image: "🧪",
    technologies: [
      "React.js",
      "React Query",
      "Google Maps",
      "Spring Boot",
      "PostgreSQL",
    ],
    category: "Frontend",
    live: "https://ichlorine-web.rtsiot.com/login",
    featured: true,
  },
  {
    id: 3,
    title: "iSafe - Secure Home Management",
    description:
      "Built a scalable IoT-based home monitoring system with real-time MQTT telemetry, role-based access control, device-sensor mapping, and dynamic reporting dashboards for operational visibility.",
    image: "🔏",
    technologies: ["React.js", "Tailwind CSS", "Websocket", "MQTT"],
    category: "IoT- MQTT",
    featured: true,
  },
  {
    id: 4,
    title: "Insurance Policy Management System",
    description:
      "Developed a full-featured insurance policy management web application with secure REST APIs, dynamic validated forms, searchable and paginated data tables, policy activation/deactivation controls, and optimized PostgreSQL queries using indexing for improved performance.",
    image: "📑",
    technologies: [
      "React.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Spring Boot",
      "JPA",
      "PostgreSQL",
    ],
    category: "Fullstack",
    featured: false,
  },
  {
    id: 5,
    title: "Ai-Chat-Bot",
    description:
      "Built a responsive AI chat application powered by the Gemini API, implementing efficient API integration, smooth UI animations, and real-time conversational handling for high-performance user interactions.",
    image: "🤖",
    technologies: ["React.js", "Gemini API"],
    category: "AI/ML",
    live: "https://ai-chat-bot-omega-ten.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "CRUD Application",
    description:
      "Developed a full-stack CRUD application with RESTful APIs, Prisma ORM for type-safe database operations, input validation, structured error handling, and a scalable modular architecture.",
    image: "📚",
    technologies: ["Java", "Spring Boot", "Hibernet", "REST APIs"],
    category: "Backend",
    featured: false,
  },
];
