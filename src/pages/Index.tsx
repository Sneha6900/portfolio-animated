import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import mountainsBg from "@/assets/mountains-bg.png";
import riverBg from "@/assets/river-bg.png";
import oceanBg from "@/assets/ocean-bg.png";
import profileImg from "@/assets/profile.jpeg.png";
import { Cloud, FlyingBirdLabel, SmallBird, AnimatedWaves, FloatingLeaf, Butterfly } from "@/components/SceneSVGs";
import GardenModal from "@/components/GardenModal";
import {
  AboutContent,
  SkillsContent,
  ExperienceContent,
  CertificationsContent,
  ProjectsContent,
  EducationContent,
  InterestsContent,
  ContactContent,
} from "@/components/SectionContents";
import { portfolioData } from "@/data/portfolioData";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

type SectionKey = "about" | "skills" | "experience" | "certifications" | "projects" | "education" | "interests" | "contact" | null;

const sectionTitles: Record<Exclude<SectionKey, null>, string> = {
  about: "About Me",
  skills: "Skills",
  experience: "Experience",
  certifications: "Certifications",
  projects: "Projects",
  education: "Education",
  interests: "Interests & Hobbies",
  contact: "Message in a Bottle",
};

const sectionComponents: Record<Exclude<SectionKey, null>, React.FC> = {
  about: AboutContent,
  skills: SkillsContent,
  experience: ExperienceContent,
  certifications: CertificationsContent,
  projects: ProjectsContent,
  education: EducationContent,
  interests: InterestsContent,
  contact: ContactContent,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });

  // Sky gradient - continuous day to sunset
  const skyBg = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 1],
    [
      "linear-gradient(180deg, hsl(205, 60%, 90%) 0%, hsl(200, 50%, 82%) 100%)",
      "linear-gradient(180deg, hsl(200, 55%, 85%) 0%, hsl(195, 45%, 75%) 100%)",
      "linear-gradient(180deg, hsl(28, 70%, 78%) 0%, hsl(35, 80%, 72%) 100%)",
      "linear-gradient(180deg, hsl(25, 85%, 68%) 0%, hsl(15, 75%, 55%) 100%)",
    ]
  );

  // Sun moving across the sky
  const sunLeft = useTransform(smoothProgress, [0, 1], ["10%", "78%"]);
  const sunTop = useTransform(smoothProgress, [0, 0.3, 0.5, 0.8, 1], ["5%", "3%", "7%", "14%", "22%"]);
  const sunScale = useTransform(smoothProgress, [0, 0.7, 1], [1, 1.1, 1.5]);
  const sunColor = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["hsl(50, 95%, 70%)", "hsl(40, 95%, 65%)", "hsl(20, 90%, 55%)"]
  );

  // Layer parallax - images overlap and blend into each other
  const mountainY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  const riverY = useTransform(smoothProgress, [0, 1], ["80%", "-20%"]);
  const oceanY = useTransform(smoothProgress, [0, 1], ["160%", "0%"]);

  // Cross-fade between layers for smooth blending
  const mountainOpacity = useTransform(smoothProgress, [0, 0.35, 0.55], [1, 1, 0.3]);
  const riverOpacity = useTransform(smoothProgress, [0.15, 0.3, 0.6, 0.75], [0, 1, 1, 0.3]);
  const oceanOpacity = useTransform(smoothProgress, [0.5, 0.7, 1], [0, 1, 1]);

  // Hero
  const heroOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.12], ["0%", "-20%"]);

  // Bird nav zones
  const mountainBirdsOpacity = useTransform(smoothProgress, [0.08, 0.15, 0.35, 0.45], [0, 1, 1, 0]);
  const riverBirdsOpacity = useTransform(smoothProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const oceanBirdsOpacity = useTransform(smoothProgress, [0.65, 0.78, 1], [0, 1, 1]);

  const openSection = (key: SectionKey) => setActiveSection(key);
  const closeSection = () => setActiveSection(null);
  const ContentComponent = activeSection ? sectionComponents[activeSection] : null;

  return (
    <>
      <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
        <div className="fixed inset-0 overflow-hidden">
          {/* Animated sky */}
          <motion.div className="absolute inset-0" style={{ background: skyBg }} />

          {/* Moving Sun */}
          <motion.div
            className="absolute z-[5]"
            style={{ left: sunLeft, top: sunTop, scale: sunScale }}
          >
            <motion.div
              className="relative w-14 h-14 md:w-20 md:h-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <circle cx="50" cy="50" r="40" fill="hsl(45, 90%, 70%)" fillOpacity="0.25" />
                <motion.circle cx="50" cy="50" r="22" style={{ fill: sunColor }} />
                <circle cx="50" cy="50" r="18" fill="hsl(45, 100%, 82%)" fillOpacity="0.7" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <motion.line
                    key={angle}
                    x1={50 + Math.cos((angle * Math.PI) / 180) * 26}
                    y1={50 + Math.sin((angle * Math.PI) / 180) * 26}
                    x2={50 + Math.cos((angle * Math.PI) / 180) * 35}
                    y2={50 + Math.sin((angle * Math.PI) / 180) * 35}
                    stroke="hsl(45, 95%, 72%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: angle / 360 }}
                  />
                ))}
              </svg>
            </motion.div>
          </motion.div>

          {/* Drifting clouds */}
          <Cloud className="absolute top-[8%] w-32 md:w-48 text-paper-base/60 animate-drift z-[6]" />
          <Cloud className="absolute top-[15%] w-24 md:w-36 text-paper-base/50 animate-drift-slow z-[6]" delay={5} />
          <Cloud className="absolute top-[5%] right-0 w-28 md:w-40 text-paper-base/40 animate-drift z-[6]" delay={10} />

          {/* Small decorative birds */}
          <div className="absolute top-[12%] text-mountain-ink/30 animate-bird-fly z-[7]">
            <SmallBird className="w-6 h-3" />
          </div>
          <div className="absolute top-[18%] text-mountain-ink/20 animate-bird-fly z-[7]" style={{ animationDelay: "4s" }}>
            <SmallBird className="w-5 h-2.5" />
          </div>
          <div className="absolute top-[9%] text-mountain-ink/15 animate-bird-fly z-[7]" style={{ animationDelay: "8s" }}>
            <SmallBird className="w-4 h-2" />
          </div>

          {/* Mountains layer (realistic image) */}
          <motion.div
            className="absolute inset-0"
            style={{ y: mountainY, opacity: mountainOpacity }}
          >
            <img src={mountainsBg} alt="Mountain landscape" className="w-full h-full object-cover" />
          </motion.div>

          {/* Floating leaves over mountains */}
          <motion.div style={{ opacity: mountainOpacity }} className="absolute inset-0 pointer-events-none z-[8]">
            <FloatingLeaf className="absolute top-[40%] left-[15%] w-5 h-5" delay={0} />
            <FloatingLeaf className="absolute top-[55%] right-[20%] w-4 h-4" delay={2} />
            <FloatingLeaf className="absolute top-[45%] left-[60%] w-6 h-6" delay={4} />
          </motion.div>

          {/* River layer (realistic image) */}
          <motion.div
            className="absolute inset-0"
            style={{ y: riverY, opacity: riverOpacity }}
          >
            <img src={riverBg} alt="River valley" className="w-full h-full object-cover" />
            {/* Subtle animated water shimmer overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none overflow-hidden">
              <AnimatedWaves className="h-full opacity-20" color="hsl(195, 50%, 70%)" />
            </div>
          </motion.div>

          {/* Ocean layer (realistic image) */}
          <motion.div
            className="absolute inset-0"
            style={{ y: oceanY, opacity: oceanOpacity }}
          >
            <img src={oceanBg} alt="Ocean sunset" className="w-full h-full object-cover" />
            {/* Animated wave overlays on ocean */}
            <div className="absolute bottom-[15%] left-0 right-0 h-20 pointer-events-none overflow-hidden">
              <AnimatedWaves className="h-full opacity-25" color="hsl(200, 50%, 65%)" />
            </div>
            <div className="absolute bottom-[8%] left-0 right-0 h-16 pointer-events-none overflow-hidden">
              <AnimatedWaves className="h-full opacity-20" color="hsl(195, 45%, 55%)" />
            </div>
          </motion.div>

          {/* ===== HERO ===== */}
          <motion.div
            className="absolute inset-0 flex items-center pointer-events-none z-10"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <div className="flex w-full max-w-6xl mx-auto px-6 md:px-12 items-center justify-between">
              {/* Left captions */}
              <div className="flex flex-col items-start text-left max-w-lg">
                <motion.p
                  className="font-mono-label text-mountain-mid/70 mb-3 tracking-widest"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  WELCOME TO THE JOURNEY OF
                </motion.p>
                <motion.h1
                  className="font-display text-4xl md:text-6xl lg:text-7xl italic text-mountain-ink drop-shadow-sm"
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                >
                  {portfolioData.hero.name}
                </motion.h1>
                <motion.p
                  className="font-display text-base md:text-xl italic text-mountain-mid mt-3"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 1 }}
                >
                  {portfolioData.hero.tagline}
                </motion.p>
                <motion.p
                  className="font-body text-sm md:text-base text-mountain-mid/70 mt-3 leading-relaxed"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1 }}
                >
                  Robotics Engineering Student • Aspiring Frontend Developer
                </motion.p>
                <motion.div
                  className="mt-6 flex items-center gap-2 text-mountain-light/60"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 animate-float" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                  <span className="font-mono-label text-xs">scroll to explore</span>
                </motion.div>
              </div>

              {/* Right - profile pic */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="relative">
                  <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-paper-warm/80 shadow-2xl">
                    <img src={profileImg} alt="Sneha Shree Das" className="w-full h-full object-cover object-top" />
                  </div>
                  <motion.div
                    className="absolute -inset-3 rounded-full border-2 border-sunset-gold/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ===== FLYING BIRD NAVIGATION ===== */}

          {/* MOUNTAIN ZONE */}
          <motion.div className="absolute inset-0 pointer-events-none z-20" style={{ opacity: mountainBirdsOpacity }}>
            <div className="absolute bottom-[28%] left-[8%] md:left-[12%] pointer-events-auto">
              <FlyingBirdLabel label="ABOUT" onClick={() => openSection("about")} delay={0} />
            </div>
            <div className="absolute bottom-[38%] right-[10%] md:right-[18%] pointer-events-auto">
              <FlyingBirdLabel label="SKILLS" onClick={() => openSection("skills")} delay={1} />
            </div>
          </motion.div>

          {/* RIVER ZONE */}
          <motion.div className="absolute inset-0 pointer-events-none z-20" style={{ opacity: riverBirdsOpacity }}>
            <div className="absolute top-[20%] left-[6%] md:left-[10%] pointer-events-auto">
              <FlyingBirdLabel label="EXPERIENCE" onClick={() => openSection("experience")} delay={0} />
            </div>
            <div className="absolute top-[15%] right-[8%] md:right-[15%] pointer-events-auto">
              <FlyingBirdLabel label="CERTIFICATIONS" onClick={() => openSection("certifications")} delay={0.5} />
            </div>
            <div className="absolute bottom-[30%] left-[20%] md:left-[30%] pointer-events-auto">
              <FlyingBirdLabel label="PROJECTS" onClick={() => openSection("projects")} delay={1} />
            </div>
            <div className="absolute bottom-[25%] right-[15%] md:right-[25%] pointer-events-auto">
              <FlyingBirdLabel label="EDUCATION" onClick={() => openSection("education")} delay={1.5} />
            </div>
          </motion.div>

          {/* OCEAN ZONE */}
          <motion.div className="absolute inset-0 pointer-events-none z-20" style={{ opacity: oceanBirdsOpacity }}>
            <div className="absolute top-[30%] left-[10%] md:left-[15%] pointer-events-auto">
              <FlyingBirdLabel label="INTERESTS" onClick={() => openSection("interests")} delay={0} />
            </div>
            <div className="absolute top-[45%] right-[10%] md:right-[20%] pointer-events-auto">
              <FlyingBirdLabel label="CONTACT" onClick={() => openSection("contact")} delay={0.8} />
            </div>
            <div className="absolute bottom-[10%] left-0 right-0 text-center pointer-events-none">
              <p className="font-display text-2xl md:text-4xl italic text-paper-base/80 drop-shadow-lg">
                Thank you for the journey.
              </p>
            </div>
          </motion.div>

          {/* Scroll progress */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 bg-terracotta/60 origin-left z-40"
            style={{ scaleX: smoothProgress }}
          />
        </div>
      </div>

      <GardenModal
        isOpen={activeSection !== null}
        onClose={closeSection}
        title={activeSection ? sectionTitles[activeSection] : ""}
      >
        {ContentComponent && <ContentComponent />}
      </GardenModal>

      {/* Dropdown menu in top-right corner */}
      <div className="fixed top-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-4 py-2 rounded-md bg-mountain-ink text-paper-base shadow-lg hover:bg-mountain-mid transition">Sections</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.entries(sectionTitles).map(([key, title]) => (
              <DropdownMenuItem key={key} onClick={() => openSection(key as SectionKey)}>
                {title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Index;
