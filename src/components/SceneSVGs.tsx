import { motion } from "framer-motion";

// Animated cloud SVG
export const Cloud = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 200 80"
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 1 }}
  >
    <path
      d="M30 60 Q30 40 50 40 Q50 20 80 20 Q110 20 120 35 Q130 25 150 30 Q175 35 170 50 Q180 55 175 65 Q170 75 150 70 L50 70 Q25 70 30 60Z"
      fill="currentColor"
      opacity="0.85"
    />
  </motion.svg>
);

// Flying bird with label - main navigation element
export const FlyingBirdLabel = ({
  label,
  onClick,
  className = "",
  delay = 0,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  delay?: number;
}) => (
  <motion.button
    onClick={onClick}
    className={`group flex flex-col items-center cursor-pointer ${className}`}
    animate={{
      y: [0, -12, 0, -6, 0],
      x: [0, 8, -4, 6, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Bird SVG */}
    <svg viewBox="0 0 80 40" className="w-16 md:w-20 h-8 md:h-10">
      {/* Body */}
      <ellipse cx="40" cy="24" rx="14" ry="7" fill="hsl(230, 30%, 18%)" fillOpacity="0.7" />
      {/* Left wing */}
      <motion.path
        d="M26 24 Q15 10 5 14 Q15 18 26 22Z"
        fill="hsl(230, 30%, 18%)"
        fillOpacity="0.6"
        animate={{
          d: [
            "M26 24 Q15 10 5 14 Q15 18 26 22Z",
            "M26 24 Q18 20 10 22 Q18 23 26 23Z",
            "M26 24 Q15 10 5 14 Q15 18 26 22Z",
          ],
        }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right wing */}
      <motion.path
        d="M54 24 Q65 10 75 14 Q65 18 54 22Z"
        fill="hsl(230, 30%, 18%)"
        fillOpacity="0.6"
        animate={{
          d: [
            "M54 24 Q65 10 75 14 Q65 18 54 22Z",
            "M54 24 Q62 20 70 22 Q62 23 54 23Z",
            "M54 24 Q65 10 75 14 Q65 18 54 22Z",
          ],
        }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Tail */}
      <path d="M26 24 Q20 28 15 32 Q22 28 26 26Z" fill="hsl(230, 30%, 18%)" fillOpacity="0.5" />
      {/* Eye */}
      <circle cx="50" cy="22" r="1.5" fill="hsl(40, 33%, 97%)" />
    </svg>
    {/* Label banner trailing behind */}
    <motion.div
      className="relative -mt-1"
      animate={{ rotate: [-1, 1, -1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="px-3 py-1 bg-paper-warm/90 border border-mountain-ink/20 rounded-sm shadow-sm font-mono-label text-mountain-ink group-hover:bg-sunset-gold/40 transition-colors duration-300 text-[9px] md:text-[10px]">
        {label}
      </div>
    </motion.div>
  </motion.button>
);

// Animated tree that sways
export const SwayingTree = ({ className = "", variant = "pine" }: { className?: string; variant?: "pine" | "oak" | "palm" }) => {
  if (variant === "pine") {
    return (
      <motion.svg
        viewBox="0 0 60 100"
        className={className}
        animate={{ rotate: [-1, 1.5, -0.5, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom center" }}
      >
        <rect x="27" y="60" width="6" height="40" fill="hsl(25, 40%, 35%)" />
        <path d="M30 5 L50 40 L10 40Z" fill="hsl(150, 35%, 30%)" />
        <path d="M30 15 L48 45 L12 45Z" fill="hsl(150, 30%, 35%)" />
        <path d="M30 25 L46 55 L14 55Z" fill="hsl(140, 28%, 38%)" />
      </motion.svg>
    );
  }
  if (variant === "palm") {
    return (
      <motion.svg
        viewBox="0 0 80 120"
        className={className}
        animate={{ rotate: [-2, 3, -1, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom center" }}
      >
        <path d="M38 40 Q36 70 40 120" stroke="hsl(25, 35%, 40%)" strokeWidth="5" fill="none" />
        <motion.path
          d="M40 40 Q60 20 80 25 Q60 30 40 42Z"
          fill="hsl(140, 40%, 35%)"
          animate={{ d: ["M40 40 Q60 20 80 25 Q60 30 40 42Z", "M40 40 Q62 22 82 28 Q62 32 40 42Z", "M40 40 Q60 20 80 25 Q60 30 40 42Z"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M40 40 Q20 20 0 25 Q20 30 40 42Z"
          fill="hsl(145, 38%, 33%)"
          animate={{ d: ["M40 40 Q20 20 0 25 Q20 30 40 42Z", "M40 40 Q18 18 -2 22 Q18 28 40 42Z", "M40 40 Q20 20 0 25 Q20 30 40 42Z"] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        <motion.path
          d="M40 38 Q55 10 70 5 Q55 15 40 40Z"
          fill="hsl(142, 36%, 30%)"
          animate={{ d: ["M40 38 Q55 10 70 5 Q55 15 40 40Z", "M40 38 Q57 12 72 8 Q57 17 40 40Z", "M40 38 Q55 10 70 5 Q55 15 40 40Z"] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.path
          d="M40 38 Q25 10 10 5 Q25 15 40 40Z"
          fill="hsl(148, 34%, 32%)"
          animate={{ d: ["M40 38 Q25 10 10 5 Q25 15 40 40Z", "M40 38 Q23 8 8 2 Q23 13 40 40Z", "M40 38 Q25 10 10 5 Q25 15 40 40Z"] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
      </motion.svg>
    );
  }
  // Oak
  return (
    <motion.svg
      viewBox="0 0 80 100"
      className={className}
      animate={{ rotate: [-0.5, 1, -0.5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "bottom center" }}
    >
      <rect x="35" y="55" width="10" height="45" fill="hsl(25, 35%, 30%)" />
      <ellipse cx="40" cy="40" rx="30" ry="28" fill="hsl(140, 30%, 32%)" />
      <ellipse cx="30" cy="35" rx="20" ry="18" fill="hsl(145, 28%, 36%)" />
      <ellipse cx="50" cy="38" rx="18" ry="16" fill="hsl(148, 26%, 34%)" />
    </motion.svg>
  );
};

// Animated waves
export const AnimatedWaves = ({ className = "", color = "hsl(195, 50%, 55%)" }: { className?: string; color?: string }) => (
  <div className={`${className} overflow-hidden`}>
    <motion.svg
      viewBox="0 0 1440 120"
      className="w-[200%] h-full"
      animate={{ x: [0, -720] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <path
        d="M0 60 Q180 20 360 60 T720 60 T1080 60 T1440 60 L1440 120 L0 120Z"
        fill={color}
        fillOpacity="0.4"
      />
      <path
        d="M0 70 Q180 40 360 70 T720 70 T1080 70 T1440 70 L1440 120 L0 120Z"
        fill={color}
        fillOpacity="0.3"
      />
    </motion.svg>
  </div>
);

// Sun that moves across the sky
export const MovingSun = ({ progress }: { progress: any }) => (
  <motion.div
    className="absolute w-16 h-16 md:w-24 md:h-24"
    style={{
      left: progress ? undefined : "10%",
      top: "8%",
    }}
  >
    <motion.div
      className="relative w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Sun glow */}
        <circle cx="50" cy="50" r="40" fill="hsl(45, 90%, 70%)" fillOpacity="0.3" />
        {/* Sun body */}
        <circle cx="50" cy="50" r="25" fill="hsl(45, 95%, 65%)" />
        <circle cx="50" cy="50" r="20" fill="hsl(40, 100%, 75%)" />
        {/* Rays */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <motion.line
            key={angle}
            x1={50 + Math.cos((angle * Math.PI) / 180) * 28}
            y1={50 + Math.sin((angle * Math.PI) / 180) * 28}
            x2={50 + Math.cos((angle * Math.PI) / 180) * 38}
            y2={50 + Math.sin((angle * Math.PI) / 180) * 38}
            stroke="hsl(45, 95%, 65%)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
          />
        ))}
      </svg>
    </motion.div>
  </motion.div>
);

// Floating leaf
export const FloatingLeaf = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 30 30"
    className={className}
    animate={{ y: [0, -10, 0], rotate: [0, 15, -10, 0], x: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <path d="M15 2 Q25 10 15 28 Q5 10 15 2Z" fill="hsl(150, 30%, 35%)" opacity="0.7" />
    <path d="M15 5 L15 25" stroke="hsl(150, 30%, 25%)" strokeWidth="0.5" opacity="0.5" />
  </motion.svg>
);

// Butterfly animation
export const Butterfly = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 40 30"
    className={className}
    animate={{
      x: [0, 50, -30, 80, 20, 0],
      y: [0, -20, 10, -30, -5, 0],
    }}
    transition={{ duration: 12, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <motion.path
      d="M20 15 Q10 5 5 10 Q0 15 10 18 Z"
      fill="hsl(25, 55%, 50%)"
      fillOpacity="0.6"
      animate={{ d: ["M20 15 Q10 5 5 10 Q0 15 10 18 Z", "M20 15 Q12 8 8 12 Q4 15 12 17 Z", "M20 15 Q10 5 5 10 Q0 15 10 18 Z"] }}
      transition={{ duration: 0.4, repeat: Infinity }}
    />
    <motion.path
      d="M20 15 Q30 5 35 10 Q40 15 30 18 Z"
      fill="hsl(45, 80%, 70%)"
      fillOpacity="0.6"
      animate={{ d: ["M20 15 Q30 5 35 10 Q40 15 30 18 Z", "M20 15 Q28 8 32 12 Q36 15 28 17 Z", "M20 15 Q30 5 35 10 Q40 15 30 18 Z"] }}
      transition={{ duration: 0.4, repeat: Infinity }}
    />
  </motion.svg>
);

// Small decorative bird (non-interactive)
export const SmallBird = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 20" className={className}>
    <path d="M0 10 Q10 0 20 10 Q30 0 40 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
