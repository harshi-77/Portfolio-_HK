export async function sendMessage(_message?: string): Promise<string> {
  throw new Error("CERA webhook calls are handled by the active route server function.");
}

export const suggestedQuestions = [
  "Tell me about Harshith's projects",
  "What are his technical skills?",
  "What certifications does he have?",
  "How can I contact Harshith?",
  "Tell me about the FarmLink project",
  "What hackathons has he won?",
];
