import type {
  PersonalInfo,
  SkillCategory,
  Project,
  TimelineEntry,
  Certification,
  Achievement,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'HARSHITH KUMAR',
  title: 'AI & DATA Science Student',
  subtitle: 'Building intelligent systems at the intersection of AI, data, and software.',
  description:
    'Passionate about machine learning, computer vision, and building real-world AI applications that solve meaningful problems. Currently pursuing expertise in deep learning and multimodal AI systems.',
  email: 'harshithkumar@example.com',
  github: 'https://github.com/harshithkumar',
  linkedin: 'https://linkedin.com/in/harshithkumar',
  resumeUrl: '/resume.pdf',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'AI / Data Science',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Computer Vision' },
      { name: 'NLP' },
      { name: 'Data Analysis' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Scikit-learn' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React' },
      { name: 'Vite' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'FastAPI' },
      { name: 'Flask' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'Supabase' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'Docker' },
      { name: 'Jupyter' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'ai-medical-imaging',
    title: 'AI Medical Imaging Analysis',
    shortDescription:
      'Deep learning system for automated detection and classification of medical anomalies in radiological images.',
    description:
      'A comprehensive AI-powered platform that leverages convolutional neural networks and transformer architectures to analyze medical imaging data, assisting radiologists in early detection of diseases.',
    problem:
      'Radiologists face an overwhelming volume of medical scans daily, leading to diagnostic fatigue and potential missed anomalies. Early detection is critical for patient outcomes.',
    solution:
      'Built a multi-stage deep learning pipeline that preprocesses DICOM images, detects regions of interest using object detection, and classifies anomalies with confidence scoring. Includes an explainability module using Grad-CAM.',
    role: 'Led model architecture design, implemented the training pipeline, and built the FastAPI backend with React frontend for radiologist interaction.',
    keyFeatures: [
      'Automated anomaly detection with bounding box localization',
      'Grad-CAM visual explanations for model decisions',
      'DICOM image preprocessing pipeline',
      'Real-time inference API with sub-second response',
      'Confidence calibration for reliable uncertainty quantification',
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'React', 'OpenCV', 'MONAI', 'Docker'],
    architecture: [
      { id: 'input', label: 'DICOM Input', type: 'input', connections: ['preprocess'] },
      { id: 'preprocess', label: 'Preprocessing', type: 'process', connections: ['model'] },
      { id: 'model', label: 'CNN Model', type: 'process', connections: ['explainer', 'output'] },
      { id: 'explainer', label: 'Grad-CAM', type: 'process', connections: ['output'] },
      { id: 'output', label: 'Results', type: 'output', connections: [] },
      { id: 'storage', label: 'Results DB', type: 'storage', connections: ['output'] },
    ],
    results: [
      '94.2% classification accuracy on test dataset',
      'Reduced radiologist review time by ~40%',
      'Successfully processed 10,000+ medical images',
    ],
    futureImprovements: [
      '3D volumetric analysis for CT scans',
      'Multi-modal fusion with patient history',
      'Federated learning for privacy-preserving training',
    ],
    githubUrl: 'https://github.com/harshithkumar/ai-medical-imaging',
    tags: ['Deep Learning', 'Computer Vision', 'Healthcare', 'FastAPI'],
    gradient: 'from-blue-600/20 to-cyan-600/10',
  },
  {
    id: 'multimodal-authenticity',
    title: 'Multi-Modal AI Content Authenticity Detection',
    shortDescription:
      'System to detect AI-generated and manipulated content across text, images, and audio modalities.',
    description:
      'A multimodal detection system that analyzes digital content across text, image, and audio domains to identify AI-generated or manipulated media, combating misinformation.',
    problem:
      'The proliferation of deepfakes and AI-generated content poses significant threats to information integrity and public trust.',
    solution:
      'Designed an ensemble approach combining specialized detectors for each modality, with a fusion layer that aggregates signals for a unified authenticity score.',
    role: 'Designed the multimodal fusion architecture, implemented the image and text detection modules, and built the evaluation framework.',
    keyFeatures: [
      'Cross-modal consistency analysis',
      'Frequency domain analysis for image artifacts',
      'LLM-based text authenticity scoring',
      'Real-time streaming detection API',
      'Detailed provenance report generation',
    ],
    techStack: ['Python', 'PyTorch', 'Transformers', 'OpenCV', 'FastAPI', 'React'],
    architecture: [
      { id: 'input', label: 'Content Input', type: 'input', connections: ['router'] },
      { id: 'router', label: 'Modality Router', type: 'process', connections: ['text', 'image', 'audio'] },
      { id: 'text', label: 'Text Detector', type: 'process', connections: ['fusion'] },
      { id: 'image', label: 'Image Detector', type: 'process', connections: ['fusion'] },
      { id: 'audio', label: 'Audio Detector', type: 'process', connections: ['fusion'] },
      { id: 'fusion', label: 'Fusion Layer', type: 'process', connections: ['output'] },
      { id: 'output', label: 'Authenticity Score', type: 'output', connections: [] },
    ],
    results: [
      '91% detection accuracy across modalities',
      'Sub-200ms inference latency',
      'Tested against state-of-the-art generative models',
    ],
    futureImprovements: [
      'Video temporal analysis',
      'Adversarial robustness improvements',
      'Browser extension for real-time detection',
    ],
    githubUrl: 'https://github.com/harshithkumar/multimodal-authenticity',
    tags: ['Multimodal AI', 'Security', 'NLP', 'Computer Vision'],
    gradient: 'from-purple-600/20 to-pink-600/10',
  },
  {
    id: 'farmlink',
    title: 'FarmLink — Agricultural AI Platform',
    shortDescription:
      'AI-powered platform connecting farmers with resources, crop disease detection, and market intelligence.',
    description:
      'An end-to-end agricultural technology platform that uses computer vision for crop disease detection, ML for yield prediction, and data analytics for market intelligence to empower small-scale farmers.',
    problem:
      'Small-scale farmers lack access to timely agricultural expertise, leading to crop losses and poor market decisions.',
    solution:
      'Built a mobile-first platform with offline capability that provides disease detection via phone camera, personalized crop recommendations, and real-time market price integration.',
    role: 'Full-stack development, ML model training for disease detection, and database architecture design.',
    keyFeatures: [
      'Real-time crop disease detection via camera',
      'Yield prediction based on historical and weather data',
      'Farmer-to-buyer marketplace',
      'Multilingual support',
      'Offline-first mobile experience',
    ],
    techStack: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Supabase', 'Firebase'],
    architecture: [
      { id: 'mobile', label: 'Mobile App', type: 'input', connections: ['api'] },
      { id: 'api', label: 'FastAPI Backend', type: 'process', connections: ['cv', 'ml', 'db'] },
      { id: 'cv', label: 'CV Disease Detector', type: 'process', connections: ['api'] },
      { id: 'ml', label: 'Yield Predictor', type: 'process', connections: ['api'] },
      { id: 'db', label: 'Supabase DB', type: 'storage', connections: ['api'] },
      { id: 'output', label: 'Farmer Dashboard', type: 'output', connections: [] },
    ],
    results: [
      '88% disease detection accuracy',
      'Onboarded 500+ farmers in pilot',
      'Reduced crop loss by estimated 25% in pilot group',
    ],
    futureImprovements: [
      'Drone-based aerial crop monitoring',
      'IoT sensor integration',
      'Credit scoring for farmers',
    ],
    githubUrl: 'https://github.com/harshithkumar/farmlink',
    tags: ['AgriTech', 'Computer Vision', 'Full-Stack', 'React'],
    gradient: 'from-green-600/20 to-emerald-600/10',
  },
  {
    id: 'smart-email-triage',
    title: 'Smart Email Triage',
    shortDescription:
      'AI-powered email prioritization and auto-response system using NLP and large language models.',
    description:
      'An intelligent email management system that classifies, prioritizes, and drafts responses using fine-tuned NLP models, reducing email overload for professionals.',
    problem:
      'Professionals spend an average of 2.5 hours daily on email. Important messages get buried in the noise.',
    solution:
      'Built a classification pipeline that categorizes emails by urgency and topic, drafts context-aware responses using an LLM, and integrates with Gmail/Outlook APIs.',
    role: 'Designed the NLP pipeline, fine-tuned the classification model, and built the email integration layer.',
    keyFeatures: [
      'Multi-label email classification',
      'Urgency scoring and intelligent prioritization',
      'LLM-powered draft response generation',
      'Gmail and Outlook integration',
      'User feedback loop for continuous improvement',
    ],
    techStack: ['Python', 'Transformers', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI API'],
    architecture: [
      { id: 'email', label: 'Email Input', type: 'input', connections: ['nlp'] },
      { id: 'nlp', label: 'NLP Classifier', type: 'process', connections: ['priority', 'drafter'] },
      { id: 'priority', label: 'Priority Scorer', type: 'process', connections: ['dashboard'] },
      { id: 'drafter', label: 'LLM Drafter', type: 'process', connections: ['dashboard'] },
      { id: 'dashboard', label: 'User Dashboard', type: 'output', connections: ['db'] },
      { id: 'db', label: 'Email Store', type: 'storage', connections: [] },
    ],
    results: [
      '93% classification accuracy',
      'Saves ~1.5 hours/day per user in testing',
      'Draft acceptance rate of 67%',
    ],
    futureImprovements: [
      'Calendar integration for smart scheduling',
      'Thread summarization',
      'Sentiment-aware response tone adjustment',
    ],
    githubUrl: 'https://github.com/harshithkumar/smart-email-triage',
    tags: ['NLP', 'LLM', 'Productivity', 'Python'],
    gradient: 'from-orange-600/20 to-amber-600/10',
  },
  {
    id: 'ai-grievance-system',
    title: 'AI Powered Grievance System',
    shortDescription:
      'Automated public grievance routing and resolution system using NLP classification and workflow automation.',
    description:
      'An intelligent grievance management platform for government and institutional use that automatically classifies complaints, routes them to appropriate departments, and tracks resolution.',
    problem:
      'Public grievance systems are plagued by manual processing, misrouting, and lack of transparency leading to citizen frustration and delayed resolutions.',
    solution:
      'Built an NLP-based classification engine that routes grievances to the correct department with confidence scores, tracks status, and sends automated updates to citizens.',
    role: 'Led the NLP system design, built the routing engine, and designed the admin dashboard.',
    keyFeatures: [
      'Automatic department routing with confidence scores',
      'Multilingual grievance support',
      'Real-time status tracking for citizens',
      'Analytics dashboard for administrators',
      'Escalation triggers for unresolved cases',
    ],
    techStack: ['Python', 'Transformers', 'Flask', 'React', 'MongoDB', 'Redis'],
    architecture: [
      { id: 'input', label: 'Citizen Portal', type: 'input', connections: ['nlp'] },
      { id: 'nlp', label: 'NLP Classifier', type: 'process', connections: ['router'] },
      { id: 'router', label: 'Department Router', type: 'process', connections: ['dept', 'db'] },
      { id: 'dept', label: 'Department Portal', type: 'output', connections: ['db'] },
      { id: 'db', label: 'MongoDB', type: 'storage', connections: ['tracker'] },
      { id: 'tracker', label: 'Status Tracker', type: 'output', connections: [] },
    ],
    results: [
      '89% routing accuracy',
      '60% reduction in manual processing time',
      'Average resolution time reduced by 3 days',
    ],
    futureImprovements: [
      'Voice-based grievance submission',
      'Predictive resolution timeline',
      'Integration with government APIs',
    ],
    githubUrl: 'https://github.com/harshithkumar/ai-grievance-system',
    tags: ['NLP', 'GovTech', 'Flask', 'MongoDB'],
    gradient: 'from-red-600/20 to-rose-600/10',
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'edu-1',
    date: '2022 — Present',
    title: 'B.Tech in Computer Science',
    subtitle: 'Specialization in AI & Data Science',
    description:
      'Pursuing a Bachelor of Technology with a focus on machine learning, deep learning, and intelligent systems. Maintaining strong academic performance while working on real-world projects.',
    type: 'education',
    tags: ['AI', 'Data Science', 'Computer Science'],
  },
  {
    id: 'learn-1',
    date: '2023',
    title: 'Deep Learning Specialization',
    subtitle: 'Self-directed Learning Journey',
    description:
      'Completed Andrew Ng\'s Deep Learning Specialization and supplemented with hands-on projects in computer vision and NLP.',
    type: 'learning',
    tags: ['Deep Learning', 'Neural Networks', 'PyTorch'],
  },
  {
    id: 'project-1',
    date: '2023',
    title: 'First Major ML Project',
    subtitle: 'AI Medical Imaging Analysis',
    description:
      'Developed a deep learning system for medical image analysis, achieving strong accuracy benchmarks and gaining hands-on experience with production ML pipelines.',
    type: 'project',
    tags: ['Computer Vision', 'Healthcare AI'],
  },
  {
    id: 'hack-1',
    date: '2023',
    title: 'National Hackathon — Top 5',
    subtitle: 'Smart India Hackathon',
    description:
      'Led a team of 5 to build an AI-powered grievance system for public administration, finishing in the top 5 nationally.',
    type: 'hackathon',
    tags: ['NLP', 'GovTech', 'Team Leadership'],
  },
  {
    id: 'project-2',
    date: '2024',
    title: 'FarmLink Agricultural Platform',
    subtitle: 'Social Impact AI Project',
    description:
      'Built a full-stack AI platform helping small-scale farmers with disease detection and market intelligence. Piloted with 500+ farmers.',
    type: 'project',
    tags: ['AgriTech', 'Full-Stack', 'Impact'],
  },
  {
    id: 'learn-2',
    date: '2024',
    title: 'Multimodal AI Research',
    subtitle: 'Content Authenticity & Deepfake Detection',
    description:
      'Independently researched and implemented multimodal detection systems for AI-generated content, contributing to the fight against misinformation.',
    type: 'learning',
    tags: ['Multimodal AI', 'Research', 'Security'],
  },
  {
    id: 'achieve-1',
    date: '2024',
    title: 'Open Source Contributions',
    subtitle: 'ML Tooling & Community',
    description:
      'Made contributions to open source ML projects and published research findings, growing community engagement.',
    type: 'achievement',
    tags: ['Open Source', 'Community'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Deep Learning Specialization',
    organization: 'Coursera / DeepLearning.AI',
    date: 'November 2023',
    credentialId: 'XXXX-XXXX',
    credentialUrl: '#',
    description:
      'Five-course specialization covering neural networks, improving deep neural networks, structuring ML projects, CNNs, and sequence models.',
    skills: ['Neural Networks', 'CNN', 'RNN', 'Python', 'TensorFlow'],
  },
  {
    id: 'cert-2',
    title: 'Machine Learning Professional Certificate',
    organization: 'Google / Coursera',
    date: 'August 2023',
    credentialId: 'XXXX-XXXX',
    credentialUrl: '#',
    description:
      'Comprehensive machine learning certification covering supervised, unsupervised, and reinforcement learning with practical implementations.',
    skills: ['Machine Learning', 'Scikit-learn', 'Python', 'Data Analysis'],
  },
  {
    id: 'cert-3',
    title: 'Natural Language Processing Specialization',
    organization: 'Coursera / DeepLearning.AI',
    date: 'March 2024',
    credentialId: 'XXXX-XXXX',
    credentialUrl: '#',
    description:
      'Specialized training in NLP including attention mechanisms, transformers, named entity recognition, and question answering systems.',
    skills: ['NLP', 'Transformers', 'Attention Mechanisms', 'BERT'],
  },
  {
    id: 'cert-4',
    title: 'AWS Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'June 2024',
    credentialId: 'XXXX-XXXX',
    credentialUrl: '#',
    description:
      'Foundation-level AWS certification covering cloud concepts, core services, security, architecture, and pricing.',
    skills: ['Cloud Computing', 'AWS', 'Architecture', 'Security'],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'National Hackathon — Top 5',
    description:
      'Led a 5-member team to finish in the top 5 at a national-level hackathon with an AI-powered government grievance management system.',
    date: '2023',
    category: 'Competition',
    impact: 'Top 5 out of 200+ teams nationally',
  },
  {
    id: 'ach-2',
    title: 'Academic Excellence Award',
    description:
      'Recognized for outstanding academic performance and contribution to the department\'s AI research initiatives.',
    date: '2023',
    category: 'Academic',
    impact: 'Top 5% of cohort',
  },
  {
    id: 'ach-3',
    title: 'FarmLink Pilot Success',
    description:
      'Successfully deployed the FarmLink platform with 500+ real farmers, achieving measurable crop loss reduction in the pilot group.',
    date: '2024',
    category: 'Project Impact',
    impact: '~25% crop loss reduction in pilot',
  },
  {
    id: 'ach-4',
    title: 'Open Source Contributor',
    description:
      'Contributed to ML tooling projects and published educational content on AI concepts reaching hundreds of learners.',
    date: '2024',
    category: 'Community',
    impact: '10+ accepted PRs, 500+ learners reached',
  },
  {
    id: 'ach-5',
    title: 'Dean\'s List',
    description:
      'Consistently maintained GPA above the threshold for Dean\'s List recognition throughout the academic year.',
    date: '2022 — Present',
    category: 'Academic',
    impact: "Dean's List every semester",
  },
];
