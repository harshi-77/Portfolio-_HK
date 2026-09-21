const responses: Array<{ keywords: string[]; reply: string }> = [
  {
    keywords: ['who', 'harshith', 'about', 'introduce'],
    reply:
      "Harshith Kumar is an AI & Data Science student passionate about building intelligent systems. He specializes in machine learning, computer vision, and NLP, with hands-on experience building real-world AI applications from medical imaging to agricultural technology.",
  },
  {
    keywords: ['skill', 'tech', 'technology', 'language', 'know', 'proficient'],
    reply:
      "Harshith is proficient in Python, Java, C++, and JavaScript. On the AI/ML side, he works with PyTorch, TensorFlow, and Scikit-learn. For web development, he uses React, FastAPI, and Flask. He also has experience with databases like Supabase, MongoDB, and Firebase.",
  },
  {
    keywords: ['project', 'built', 'work', 'portfolio'],
    reply:
      "Harshith has built 5 notable projects: an AI Medical Imaging Analysis system, a Multi-Modal Content Authenticity Detector, FarmLink (an agricultural AI platform), a Smart Email Triage system, and an AI-powered Grievance Management System. Each solves a real-world problem using machine learning.",
  },
  {
    keywords: ['medical', 'imaging', 'healthcare', 'hospital'],
    reply:
      "The AI Medical Imaging Analysis project uses deep learning (CNNs + Transformers) to help radiologists detect anomalies in medical scans. It achieved 94.2% classification accuracy and includes Grad-CAM visualizations for explainability. Built with PyTorch and FastAPI.",
  },
  {
    keywords: ['farm', 'agricult', 'crop', 'farmer'],
    reply:
      "FarmLink is an agricultural AI platform that provides crop disease detection via phone camera, yield prediction, and market intelligence. It was piloted with 500+ farmers and achieved approximately 25% reduction in crop losses. Built with TensorFlow, React, and Supabase.",
  },
  {
    keywords: ['email', 'triage', 'productivity'],
    reply:
      "The Smart Email Triage system uses NLP to classify, prioritize, and draft responses for emails. It integrates with Gmail and Outlook, saves users ~1.5 hours/day, and achieved 93% classification accuracy.",
  },
  {
    keywords: ['grievance', 'government', 'public'],
    reply:
      "The AI Grievance System automatically classifies and routes public complaints to the correct government department with 89% accuracy, reducing manual processing time by 60%. Built with Flask, Transformers, and MongoDB.",
  },
  {
    keywords: ['deepfake', 'authentic', 'detection', 'fake', 'content'],
    reply:
      "The Multi-Modal AI Content Authenticity Detection system identifies AI-generated and manipulated content across text, image, and audio. It achieved 91% detection accuracy and runs with sub-200ms inference latency.",
  },
  {
    keywords: ['education', 'college', 'degree', 'study', 'university'],
    reply:
      "Harshith is pursuing a B.Tech in Computer Science with a specialization in AI & Data Science. He has also completed certifications including the Deep Learning Specialization, Google ML Certificate, and NLP Specialization from DeepLearning.AI.",
  },
  {
    keywords: ['certif', 'course', 'credential'],
    reply:
      "Harshith has earned certifications in Deep Learning (DeepLearning.AI), Machine Learning (Google), NLP (DeepLearning.AI), and AWS Cloud Practitioner. He continuously upskills through structured learning and hands-on projects.",
  },
  {
    keywords: ['achievement', 'award', 'hackathon', 'win'],
    reply:
      "Harshith finished in the top 5 at a national hackathon with an AI grievance system, earned an Academic Excellence Award, successfully deployed FarmLink with 500+ farmers, and is on the Dean's List every semester.",
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'connect'],
    reply:
      "You can reach Harshith via email at harshithkumar@example.com, connect on LinkedIn at linkedin.com/in/harshithkumar, or check his GitHub at github.com/harshithkumar. He's open to internships, collaborations, and interesting projects!",
  },
  {
    keywords: ['github', 'repository', 'code', 'open source'],
    reply:
      "Harshith's GitHub (github.com/harshithkumar) hosts all his major projects with detailed READMEs. He's also contributed to open source ML tooling projects and publishes educational AI content.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greet'],
    reply:
      "Hi there! I'm CERA, Harshith's AI portfolio assistant. I can tell you about his projects, skills, education, achievements, or how to contact him. What would you like to know?",
  },
  {
    keywords: ['python', 'pytorch', 'tensorflow'],
    reply:
      "Python is Harshith's primary language for AI/ML work. He uses PyTorch for deep learning research and model training, TensorFlow/Keras for deployment-oriented projects, and is well-versed in the broader Python data science ecosystem (NumPy, Pandas, Matplotlib).",
  },
];

const fallbackResponses = [
  "That's a great question! Harshith's portfolio covers AI, data science, and full-stack development. Feel free to ask about his specific projects, skills, or how to contact him.",
  "I'm not sure about that specifically, but I can tell you about Harshith's projects in medical AI, agricultural technology, content authenticity detection, email automation, and government tech. What interests you?",
  "I'd recommend checking the relevant section of the portfolio for that! Or ask me about Harshith's skills, projects, education, or achievements.",
];

function simulateDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendMessage(message: string): Promise<string> {
  await simulateDelay(800 + Math.random() * 600);

  const lower = message.toLowerCase();

  for (const { keywords, reply } of responses) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return reply;
    }
  }

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)] ?? fallbackResponses[0] ?? "Please ask me about Harshith's projects or skills.";
}

export const suggestedQuestions = [
  "Tell me about Harshith's projects",
  "What are his technical skills?",
  "What certifications does he have?",
  "How can I contact Harshith?",
  "Tell me about the FarmLink project",
  "What hackathons has he won?",
];
