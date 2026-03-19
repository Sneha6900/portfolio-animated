import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Butterfly } from "./SceneSVGs";
import gardenBg from "@/assets/garden-bg.png";

interface GardenModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const GardenModal = ({ isOpen, onClose, title, children }: GardenModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 backdrop-blur-md"
            style={{ backgroundColor: "hsla(230, 30%, 18%, 0.5)" }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {/* Garden background */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img src={gardenBg} alt="" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/95 via-paper-base/90 to-paper-warm/95" />
            </div>

            {/* Floating butterflies */}
            <Butterfly className="absolute top-8 right-16 w-8 h-6 z-10" delay={0} />
            <Butterfly className="absolute top-20 left-12 w-6 h-5 z-10" delay={2} />
            <Butterfly className="absolute bottom-16 right-8 w-7 h-5 z-10" delay={4} />

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-mountain-ink/10 hover:bg-mountain-ink/20 transition-colors"
              >
                <X className="w-4 h-4 text-mountain-ink" />
              </button>

              {/* Title with floral border */}
              <div className="mb-6 pb-4 border-b border-forest-light/30">
                <motion.h2
                  className="font-display text-3xl md:text-4xl italic text-mountain-ink"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {title}
                </motion.h2>
                {/* Decorative vine */}
                <motion.svg
                  viewBox="0 0 300 20"
                  className="w-48 h-4 mt-2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <motion.path
                    d="M0 10 Q30 0 60 10 T120 10 T180 10 T240 10 T300 10"
                    fill="none"
                    stroke="hsl(150, 30%, 45%)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 1.5 }}
                  />
                  {[30, 90, 150, 210, 270].map((x, i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={i % 2 === 0 ? 5 : 15}
                      r="2.5"
                      fill={i % 2 === 0 ? "hsl(25, 55%, 50%)" : "hsl(45, 80%, 70%)"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                    />
                  ))}
                </motion.svg>
              </div>

              {/* Content body */}
              <motion.div
                className="space-y-4 text-mountain-ink/80 font-body leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {children}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GardenModal;
