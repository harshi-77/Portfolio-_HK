import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ChatMessage } from '../../types/portfolio';
import { sendMessage, suggestedQuestions } from '../../services/ceraService';

type OrbState = 'idle' | 'thinking' | 'responding';

interface CeraPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOrbStateChange: (state: OrbState) => void;
}

const WELCOME_MSG: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! I'm **CERA**, Harshith's AI portfolio assistant. Ask me anything about his projects, skills, education, or how to contact him.",
  timestamp: new Date(),
};

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === 'user';
  const content = msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-purple)] flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center text-[8px] text-white font-bold">
          C
        </div>
      )}
      <div
        className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm font-inter leading-relaxed ${
          isUser
            ? 'bg-[var(--accent)] text-white rounded-tr-sm'
            : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] rounded-tl-sm'
        }`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-purple)] flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center text-[8px] text-white font-bold">
        C
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[var(--surface)] border border-[var(--border)] flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.12 }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"
          />
        ))}
      </div>
    </div>
  );
}

export default function CeraPanel({ isOpen, onClose, onOrbStateChange }: CeraPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MSG]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isTyping) return;
    setInput('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: msg,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    onOrbStateChange('thinking');

    try {
      const reply = await sendMessage(msg);
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      onOrbStateChange('responding');
      setTimeout(() => onOrbStateChange('idle'), 2000);
    } catch {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, I couldn't process that. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
      onOrbStateChange('idle');
    } finally {
      setIsTyping(false);
    }
  };

  const showSuggestions = messages.length <= 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20, originX: 1, originY: 1 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl border border-[var(--border)] bg-[#0e0e18]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
          style={{ maxHeight: 'min(600px, 80vh)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-purple)] flex items-center justify-center text-[10px] text-white font-bold">
                C
              </div>
              <div>
                <p className="text-xs font-600 font-space text-white tracking-wider">CERA</p>
                <p className="text-[10px] text-[var(--text-muted)] font-inter">AI Portfolio Assistant</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-colors text-sm"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} msg={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          <AnimatePresence>
            {showSuggestions && !isTyping && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 pb-2"
              >
                <p className="text-[10px] text-[var(--text-muted)] font-inter mb-2 tracking-wider">SUGGESTED</p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedQuestions.slice(0, 4).map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-[10px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors font-inter"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-[var(--border)]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              placeholder="Ask about Harshith..."
              className="flex-1 bg-transparent text-sm text-[var(--text)] placeholder-[var(--text-muted)]/50 font-inter focus:outline-none"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white disabled:opacity-40 hover:bg-blue-500 transition-colors flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
