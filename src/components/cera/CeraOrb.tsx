import { motion } from "framer-motion";

type OrbState = "idle" | "thinking" | "responding";

interface CeraOrbProps {
  onClick: () => void;
  orbState: OrbState;
  isOpen: boolean;
}

export default function CeraOrb({ onClick, orbState, isOpen }: CeraOrbProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring", stiffness: 200 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center focus:outline-none"
      title="Open CERA AI Assistant"
      aria-label="Open CERA AI Assistant"
    >
      {/* Outer glow ring */}
      <motion.div
        animate={
          isOpen
            ? { scale: 1, opacity: 0.6 }
            : orbState === "thinking"
              ? { scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }
              : { scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }
        }
        transition={
          isOpen
            ? { duration: 0.2 }
            : { duration: orbState === "thinking" ? 0.8 : 2.5, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute inset-0 rounded-full bg-[var(--accent)] blur-md"
      />

      {/* Main orb */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-purple)] flex items-center justify-center shadow-lg shadow-blue-900/40 border border-blue-400/30">
        {orbState === "thinking" ? (
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                className="w-1 h-1 rounded-full bg-white"
              />
            ))}
          </div>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
            <circle cx="9" cy="13" r="1" fill="white" stroke="none" />
            <circle cx="15" cy="13" r="1" fill="white" stroke="none" />
          </svg>
        )}
      </div>

      {/* Pulse for responding state */}
      {orbState === "responding" && (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-[var(--accent)]"
        />
      )}
    </motion.button>
  );
}
