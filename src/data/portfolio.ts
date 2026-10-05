import type {
  PersonalInfo,
  SkillCategory,
  Project,
  TimelineEntry,
  Certification,
  Achievement,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "HARSHITH KUMAR D H",
  title: "Full-Stack Developer & AI/DS Student",
  subtitle: "Building intelligent systems using React, Python, and Machine Learning.",
  description:
    "B.E. Artificial Intelligence & Data Science student seeking Full-Stack Developer opportunities, with hands-on experience building web applications using React, Python, FastAPI, and machine-learning integrations. Experienced in developing project prototypes with a focus on practical problem solving.",
  email: "harshith63633@gmail.com",
  github: "https://github.com/harshi-77",
  linkedin: "https://linkedin.com/in/harshith-kumar-316a93339",
  resumeUrl: "/resume.pdf",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    category: "AI / Data Science",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "NLP" },
      { name: "Data Analysis" },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React" },
      { name: "Vite" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "FastAPI" },
      { name: "Flask" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Docker" },
      { name: "Jupyter" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "disha-route-planning",
    title: "DISHA - Route Planning Platform",
    shortDescription: "Intelligent mobility and route planning platform for dynamic optimization.",
    description:
      "Full-stack project for intelligent mobility and dynamic route planning, currently being developed in a team of 6 to optimize travel operations.",
    problem:
      "Inefficient route planning in mobility systems causes delays, wasted fuel, and high operating costs.",
    solution:
      "Developing a full-stack platform that incorporates dynamic route-planning and optimization algorithms to reduce travel time overhead.",
    role: "Full-stack development: contributed across frontend (React/Tailwind) and partial backend (FastAPI/Supabase).",
    keyFeatures: [
      "Dynamic route optimization and planning",
      "Real-time tracking and database management",
      "Interactive user dashboard for mobility operations",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI", "Supabase", "PostgreSQL"],
    architecture: [
      { id: "ui", label: "React Frontend", type: "input", connections: ["api"] },
      { id: "api", label: "FastAPI Backend", type: "process", connections: ["db"] },
      { id: "db", label: "Supabase PostgreSQL", type: "storage", connections: [] },
    ],
    results: [
      "Currently under development with a team of 6",
      "Established core frontend and backend infrastructure",
    ],
    futureImprovements: ["Integrate live traffic data API", "Deploy mobile app version"],
    githubUrl: "https://github.com/harshi-77",
    tags: ["Full-Stack", "React", "FastAPI", "Supabase"],
    gradient: "from-blue-600/20 to-cyan-600/10",
  },
  {
    id: "ai-medical-imaging",
    title: "AI Medical Imaging Diagnostics",
    shortDescription: "End-to-end medical application for analyzing X-rays, MRIs, and CT scans.",
    description:
      "A comprehensive AI-powered dashboard that analyzes medical imaging data, detecting abnormalities with confidence scores and clinical guidance to assist healthcare providers.",
    problem:
      "High volume of medical scans can lead to diagnostic fatigue and delays in critical care reporting.",
    solution:
      "Built a multi-stage deep learning pipeline supporting X-ray/MRI/CT uploads that detects anomalies, generates PDF reports, and provides an end-to-end clinician dashboard.",
    role: "Full-Stack Developer (Team of 3) - implemented AI models and integrated frontend-backend systems.",
    keyFeatures: [
      "Multi-modal scan support (X-ray, MRI, CT)",
      "Abnormality detection with confidence & severity outputs",
      "PDF clinical reporting engine",
      "Secure clinician dashboard with authentication",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Supabase",
      "PyTorch",
      "TensorFlow",
      "EfficientNet-B0",
      "ResNet18",
      "MobileNetV2",
    ],
    architecture: [
      { id: "input", label: "Scans Upload", type: "input", connections: ["api"] },
      { id: "api", label: "FastAPI Backend", type: "process", connections: ["model", "db"] },
      { id: "model", label: "ResNet/EfficientNet", type: "process", connections: ["api"] },
      { id: "db", label: "Supabase", type: "storage", connections: [] },
    ],
    results: [
      "Completed project for SJC Institute of Technology Hackathon",
      "Successfully integrated 3 distinct CNN architectures",
    ],
    futureImprovements: [
      "3D volumetric analysis for CT scans",
      "HIPAA compliant cloud storage integration",
    ],
    githubUrl: "https://github.com/harshi-77",
    tags: ["Deep Learning", "Computer Vision", "Healthcare"],
    gradient: "from-red-600/20 to-rose-600/10",
  },
  {
    id: "smart-email-triage",
    title: "Smart Email Triage Tool",
    shortDescription:
      "Intelligent email management using NLP to categorize and prioritize incoming messages.",
    description:
      "An intelligent email application built for a hackathon that utilizes NLP and machine learning to categorize, prioritize, and manage high-volume incoming emails.",
    problem:
      "Professionals spend hours manually sorting and prioritizing emails, missing critical communications.",
    solution:
      "Developed a classification pipeline that analyzes email text using NLP, automatically tags urgency, and integrates across the full stack from database to frontend dashboard.",
    role: "Contributed across frontend, backend, database, NLP/ML email classification, API integration, and testing.",
    keyFeatures: [
      "NLP-based email categorization and prioritization",
      "Authentication and secure access",
      "Interactive email management dashboard",
    ],
    techStack: ["Python", "NLP", "Machine Learning", "API Integration"],
    architecture: [
      { id: "email", label: "Email API", type: "input", connections: ["backend"] },
      { id: "backend", label: "Backend API", type: "process", connections: ["nlp", "db"] },
      { id: "nlp", label: "NLP Classifier", type: "process", connections: ["backend"] },
      { id: "db", label: "Database", type: "storage", connections: [] },
    ],
    results: ["Successfully delivered working prototype for Hackathon", "Certificate Received"],
    futureImprovements: ["Auto-drafting response feature", "Integration with Gmail/Outlook OAuth"],
    githubUrl: "https://github.com/harshi-77",
    tags: ["NLP", "Machine Learning", "Hackathon"],
    gradient: "from-orange-600/20 to-amber-600/10",
  },
  {
    id: "indian-cattle-recognition",
    title: "Indian Cattle & Buffalo Breed Recognition",
    shortDescription: "Computer vision application for identifying regional cattle breeds.",
    description:
      "A computer-vision web application that identifies cattle and buffalo breeds from images and provides contextual breed information and related details.",
    problem:
      "Farmers and agricultural workers often lack easy tools for identifying and validating specific cattle breeds visually.",
    solution:
      "Trained a computer vision model using MobileNetV2 architecture wrapped in a full-stack platform to process uploaded images and identify variants.",
    role: "Full-Stack Developer (Team of 3)",
    keyFeatures: [
      "Image upload and real-time processing",
      "MobileNetV2-powered classification",
      "Breed information database integration",
    ],
    techStack: ["Python", "Machine Learning", "Computer Vision", "MobileNetV2"],
    architecture: [
      { id: "ui", label: "Dashboard Upload", type: "input", connections: ["cv"] },
      { id: "cv", label: "MobileNetV2 Model", type: "process", connections: ["db"] },
      { id: "db", label: "Breed Info DB", type: "storage", connections: [] },
    ],
    results: [
      "Successfully completed prototype platform",
      "Accurate identification across primary regional breeds",
    ],
    futureImprovements: ["Mobile application release", "Expand dataset for rare breeds"],
    githubUrl: "https://github.com/harshi-77",
    tags: ["Computer Vision", "Machine Learning", "MobileNetV2"],
    gradient: "from-purple-600/20 to-pink-600/10",
  },
  {
    id: "stock-market-analysis",
    title: "Stock Market Analysis & Prediction",
    shortDescription: "Analysis and prediction engine for financial stock data.",
    description:
      "A college mini project focusing on analyzing historical stock market data and predicting future trends using machine learning techniques and IoT simulation.",
    problem:
      "Financial data is highly volatile and difficult to analyze manually for predictive insights.",
    solution:
      "Developed an analytics engine utilizing Python and R to process stock data streams and apply ML models for future movement projections.",
    role: "Developer on a college mini project (Presidency University Certificate).",
    keyFeatures: [
      "Historical data processing",
      "Predictive ML model implementation",
      "IoT data simulation integration",
    ],
    techStack: ["Python", "R", "Machine Learning", "Web Development"],
    architecture: [
      { id: "data", label: "Stock APIs", type: "input", connections: ["analysis"] },
      { id: "analysis", label: "Python/R Analytics", type: "process", connections: ["ml"] },
      { id: "ml", label: "Prediction Model", type: "process", connections: ["ui"] },
      { id: "ui", label: "Web Dashboard", type: "output", connections: [] },
    ],
    results: ["Fully completed college-level project", "Earned Presidency University Certificate"],
    futureImprovements: [
      "Live trading simulator integration",
      "Sentiment analysis from financial news",
    ],
    githubUrl: "https://github.com/harshi-77",
    tags: ["Data Analysis", "Finance", "R", "Python"],
    gradient: "from-green-600/20 to-emerald-600/10",
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    id: "edu-1",
    date: "2024 — Expected 2028",
    title: "B.E. Artificial Intelligence & Data Science",
    subtitle: "Sapthagiri NPS University | 5th Semester",
    description:
      "B.E. student pursuing specialization in ML, Deep Learning, and Full-Stack Development. Current CGPA: 7.4.",
    type: "education",
    tags: ["AI", "Data Science", "Computer Science"],
  },
  {
    id: "edu-2",
    date: "2024",
    title: "Pre-University Course (PUC)",
    subtitle: "Siddhaganga PU College",
    description: "Completed Pre-University Education with a score of 86%.",
    type: "education",
    tags: ["Science"],
  },
  {
    id: "edu-3",
    date: "2022",
    title: "Secondary School (SSLC)",
    subtitle: "BMN Public School",
    description: "Completed Secondary Education with a score of 80%.",
    type: "education",
    tags: ["General"],
  },
  {
    id: "project-1",
    date: "Ongoing",
    title: "DISHA - Route Planning Platform",
    subtitle: "Intelligent Mobility System",
    description:
      "Contributing as a Full-Stack developer for intelligent mobility using React, Vite, FastAPI, and Supabase.",
    type: "project",
    tags: ["React", "FastAPI", "Supabase"],
  },
  {
    id: "hack-1",
    date: "2024",
    title: "Smart Email Triage Tool",
    subtitle: "Hackathon Project",
    description:
      "Developed an intelligent email triage application using NLP and machine learning for email prioritization and drafting.",
    type: "hackathon",
    tags: ["NLP", "FastAPI", "React"],
  },
  {
    id: "project-2",
    date: "2024",
    title: "AI Medical Imaging Diagnostics",
    subtitle: "SJC Institute of Technology Hackathon",
    description:
      "End-to-end medical imaging app for X-ray/MRI anomaly detection using PyTorch, TensorFlow, and React.",
    type: "project",
    tags: ["Computer Vision", "PyTorch", "Medical AI"],
  },
  {
    id: "learn-1",
    date: "2025 - 2026",
    title: "Continuous Certifications",
    subtitle: "Infosys Springboard & Cisco",
    description:
      "Completed certifications in Advanced Excel, OpenAI GPT Models, Python Visualization, and CyberOps.",
    type: "learning",
    tags: ["Learning", "CyberSecurity", "GPT"],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Advanced Excel Training 2019",
    organization: "Infosys Springboard",
    date: "2026",
    credentialId: "INF-EXCEL-2026",
    credentialUrl: "https://springboard.infosys.com",
    description:
      "Comprehensive training in advanced Excel functionality including data manipulation and pivot tables.",
    skills: ["Microsoft Excel", "Data Analysis"],
  },
  {
    id: "cert-2",
    title: "Introduction to OpenAI GPT Models",
    organization: "Infosys Springboard",
    date: "2026",
    credentialId: "INF-GPT-2026",
    credentialUrl: "https://springboard.infosys.com",
    description:
      "Understanding large language models, prompting techniques, and integration basics.",
    skills: ["OpenAI", "GPT", "Prompt Engineering"],
  },
  {
    id: "cert-3",
    title: "Data Visualisation with Python",
    organization: "Infosys Springboard",
    date: "2026",
    credentialId: "INF-DATAV-2026",
    credentialUrl: "https://springboard.infosys.com",
    description:
      "Training in visualizing complex data sets programmatically using Python libraries.",
    skills: ["Python", "Data Visualization", "Matplotlib"],
  },
  {
    id: "cert-4",
    title: "CyberOps Associate",
    organization: "Cisco Networking Academy",
    date: "2025",
    credentialId: "CISCO-CYBER-2025",
    credentialUrl: "https://netacad.com",
    description: "Fundamental knowledge in cybersecurity operations and threat hunting.",
    skills: ["Cybersecurity", "Networking", "Security Ops"],
  },
  {
    id: "cert-5",
    title: "Introduction to Microcontrollers & Coding",
    organization: "Infosys Springboard (Centrada)",
    date: "2026",
    credentialId: "INF-MICRO-2026",
    credentialUrl: "https://springboard.infosys.com",
    description: "Hardware integration and programming with microcontrollers.",
    skills: ["Microcontrollers", "IoT", "Hardware"],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "SJC Institute Hackathon",
    description:
      "Built an end-to-end AI Medical Diagnostics application using deep learning in a team of 3.",
    date: "2023",
    category: "Competition",
    impact: "Completed working prototype",
  },
  {
    id: "ach-2",
    title: "Smart Email Triage completion",
    description:
      "Developed an intelligent email triage application using NLP achieving completion certification.",
    date: "2024",
    category: "Competition",
    impact: "Certificate Received",
  },
  {
    id: "ach-3",
    title: "SIH 2026 - FarmLink AI",
    description:
      "Contributed research and presentation work addressing farmer-to-buyer platforms for problem statement SIH26033.",
    date: "2026",
    category: "Research",
    impact: "Certificate Received",
  },
  {
    id: "ach-4",
    title: "Stock Market Analysis Certification",
    description: "Completed a developer mini-project for stock market predictive analysis.",
    date: "2024",
    category: "Academic",
    impact: "Presidency University Certificate",
  },
];
