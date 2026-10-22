import {
  PersonalInfo,
  Project,
  SkillCategory,
  EducationItem,
  CertificationItem,
  AchievementItem,
  LeadershipItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "MANISH K",
  headline: "Building Intelligent Systems. Engineering Scalable Solutions.",
  subheadline:
    "I'm a Computer Science and Engineering student passionate about AI engineering, backend systems, computer vision, and building production-ready applications that solve real-world problems.",
  email: "km3063030@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  statusBadge: "Open to Software Engineering & AI/ML Opportunities",
  // Configurable URLs - update with actual URLs when available
  githubUrl: "https://github.com/manish-k",
  linkedinUrl: "https://linkedin.com/in/manish-k",
  resumeUrl: "/Manish_K_Resume.pdf",
  aboutText: [
    "I'm Manish K, a Computer Science and Engineering student at SRM Institute of Science and Technology, Chennai, with a strong interest in artificial intelligence, scalable backend architecture, computer vision, and cloud technologies.",
    "I enjoy designing and building intelligent applications that combine AI models, efficient APIs, databases, and modern software engineering practices.",
    "My projects span AI-powered email intelligence, retrieval-augmented generation (RAG), computer vision, and automated toll collection. I focus on building reliable systems with an emphasis on performance, scalability, and practical impact.",
  ],
  stats: [
    { label: "GPA", value: "9.48", sublabel: "out of 10.0" },
    { label: "Degree", value: "B.Tech", sublabel: "Computer Science Engineering" },
    { label: "Institution", value: "SRMIST", sublabel: "Chennai, India" },
    { label: "Focus Areas", value: "AI & Backend", sublabel: "RAG & Computer Vision" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code",
    description: "Core languages for systems, algorithms, and applications",
    skills: ["Python", "C++", "C", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks and Libraries",
    icon: "Layers",
    description: "Modern frameworks for web backends, UI, and scientific computing",
    skills: [
      "FastAPI",
      "Flask",
      "React",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    title: "AI and Intelligent Systems",
    icon: "Brain",
    description: "Generative AI, agentic architectures, and computer vision pipelines",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Semantic Search",
      "AI Agents",
      "Computer Vision",
      "Edge AI",
      "Image Processing",
      "LangChain",
      "LangGraph",
      "Gemini",
      "ChromaDB",
      "PostgreSQL",
      "YOLO",
      "Tesseract OCR",
    ],
  },
  {
    title: "Backend and Systems",
    icon: "Server",
    description: "Architecture, asynchronous pipelines, and high-performance services",
    skills: [
      "REST APIs",
      "Distributed Systems",
      "Data Structures and Algorithms",
      "Real-Time Processing",
      "Database Management Systems",
      "System Architecture",
    ],
  },
  {
    title: "Cloud and Development Tools",
    icon: "Cloud",
    description: "Cloud infrastructure, containerization, and automated CI/CD",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Docker",
      "Git and GitHub",
      "Linux",
      "GitHub Actions",
      "GitHub Container Registry (GHCR)",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "enterprise-rag-agent",
    title: "Enterprise RAG Knowledge Intelligence Agent",
    category: "Generative AI | RAG | Agentic Systems",
    subtitle: "AI-Powered Enterprise Knowledge Assistant with Graph-Based Memory",
    description:
      "An AI-powered enterprise knowledge assistant that enables users to query company documents and retrieve relevant information through natural-language conversations.",
    contributions: [
      "Built an AI-powered knowledge assistant using Python, FastAPI, Gemini, and LangChain to answer questions from company documents.",
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline using ChromaDB, embeddings, and semantic search to retrieve relevant information from PDFs.",
      "Developed an agentic workflow using LangGraph and PostgreSQL to support AI-driven responses and persistent conversation memory.",
      "Containerized the application using Docker and implemented CI/CD with GitHub Actions for automated testing and Docker image publishing to GitHub Container Registry (GHCR).",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Gemini",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "GHCR",
    ],
    featured: true,
    githubUrl: "https://github.com/manish-k/enterprise-rag-knowledge-agent",
    liveUrl: "#enterprise-rag-agent",
    demoType: "rag",
  },
  {
    id: "mailmind-email-intelligence",
    title: "MailMind — AI-Powered Email Intelligence System",
    category: "Artificial Intelligence | Backend Engineering | Multi-Agent Systems",
    subtitle: "Scalable Multi-Agent Email Classification & Prioritization Engine",
    description:
      "An AI-powered email intelligence system designed to classify and prioritize emails while supporting automated response generation.",
    contributions: [
      "Engineered a scalable multi-agent AI system for email classification, prioritization, and automated response generation using large language models.",
      "Designed a distributed backend architecture using FastAPI and message queuing for asynchronous task processing, achieving a reported 10x throughput improvement.",
      "Built RESTful APIs with role-based access control, request validation, and error handling.",
      "Implemented a backend workflow for processing emails using LLMs, storing required information in a database, and returning structured JSON responses.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LLMs",
      "REST APIs",
      "Message Queues",
      "Databases",
    ],
    featured: false,
    githubUrl: "https://github.com/manish-k/mailmind-email-intelligence",
    liveUrl: "#mailmind-email-intelligence",
    demoType: "mailmind",
  },
  {
    id: "anpr-toll-collection",
    title: "Automatic Number Plate Recognition (ANPR) System for Toll Collection",
    category: "Computer Vision | AI | Automation",
    subtitle: "Real-Time Vehicle & License Plate Detection Pipeline",
    description:
      "An automated toll collection system that identifies vehicles and extracts license plate characters through a computer vision pipeline.",
    contributions: [
      "Designed an end-to-end computer vision pipeline for real-time vehicle and license plate detection using YOLO, targeting latency below 100 ms.",
      "Developed image preprocessing algorithms to improve plate visibility under varying lighting conditions.",
      "Integrated Tesseract OCR for license plate character extraction.",
      "Integrated an SQL/Firebase backend for vehicle verification and automated toll processing.",
    ],
    technologies: [
      "Python",
      "YOLO",
      "Computer Vision",
      "Image Processing",
      "Tesseract OCR",
      "SQL",
      "Firebase",
    ],
    featured: false,
    githubUrl: "https://github.com/manish-k/anpr-toll-collection",
    liveUrl: "#anpr-toll-collection",
    demoType: "anpr",
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    gpa: "9.48 / 10.0",
    highlights: [
      "Specialization in Artificial Intelligence, Scalable Backend Systems, and Computer Vision",
      "Consistent high academic standing across all semesters",
      "Active participant in technical symposiums, hackathons, and research initiatives",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "Oracle Cloud Infrastructure Certified Data Science Professional",
    issuer: "Oracle",
    category: "cloud",
  },
  {
    name: "Oracle Cloud Infrastructure Certified Cloud Architect",
    issuer: "Oracle",
    category: "cloud",
  },
  {
    name: "Samsung Innovation Campus Program — Coding and Programming",
    issuer: "Samsung",
    category: "programming",
  },
  {
    name: "Certificate of Merit in eLSI: Basics of Embedded Systems and Robotics",
    issuer: "e-Yantra / eLSI",
    category: "academic",
  },
  {
    name: "NPTEL: Machine Learning",
    issuer: "NPTEL / IIT",
    category: "academic",
  },
  {
    name: "NPTEL: Database Management Systems",
    issuer: "NPTEL / IIT",
    category: "academic",
  },
  {
    name: "NPTEL: Java Programming",
    issuer: "NPTEL / IIT",
    category: "programming",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "1st Prize — Industrial IoT",
    event: "Technex'25",
    organization: "IIT BHU Varanasi",
    award: "First Place Winner",
  },
  {
    title: "1st Prize — Workshop Hackathon",
    event: "Technex'24 Workshop",
    organization: "SRMIST",
    award: "First Place Winner",
  },
];

export const leadershipExperiences: LeadershipItem[] = [
  {
    role: "Student Coordinator — ARC Labs Collaboration",
    organization: "SRMIST",
    period: "February 2026",
    description: [
      "Mentored peers alongside industry experts during a two-day intensive program focused on Internet of Robotic Things (IoRT) and MIT App Inventor.",
    ],
  },
  {
    role: "Event Volunteer — Robofest 1.0",
    organization: "SRMIST",
    period: "September 2025",
    description: [
      "Coordinated technical arrangements and helped ensure smooth execution of competitions during the annual technical festival.",
    ],
  },
];
