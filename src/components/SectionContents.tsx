import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export const AboutContent = () => (
  <div>
    <p className="text-base leading-relaxed">{portfolioData.about.text}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {portfolioData.languages.map((lang) => (
        <span key={lang} className="px-3 py-1 rounded-full bg-river-teal/10 text-river-teal font-mono-label">
          {lang}
        </span>
      ))}
    </div>
  </div>
);

export const SkillsContent = () => (
  <div className="space-y-5">
    {portfolioData.skills.categories.map((cat) => (
      <motion.div key={cat.title} {...fadeInUp}>
        <h3 className="font-display text-xl italic text-terracotta mb-2">{cat.title}</h3>
        <div className="flex flex-wrap gap-2">
          {cat.items.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-md bg-forest-green/10 text-forest-green font-body text-sm border border-forest-green/20"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

export const ExperienceContent = () => (
  <div className="space-y-4">
    {portfolioData.experience.map((exp) => (
      <div key={exp.title} className="border-l-2 border-terracotta/40 pl-4">
        <h3 className="font-display text-xl italic text-mountain-ink">{exp.title}</h3>
        <p className="font-mono-label text-river-teal">{exp.company}</p>
        <p className="mt-2 text-sm">{exp.description}</p>
      </div>
    ))}
  </div>
);

export const CertificationsContent = () => (
  <div className="space-y-3">
    {portfolioData.certifications.map((cert) => (
      <div key={cert.title} className="p-4 rounded-md bg-sunset-gold/10 border border-sunset-gold/20">
        <h3 className="font-display text-lg italic text-mountain-ink">{cert.title}</h3>
        <p className="text-sm mt-1">{cert.description}</p>
      </div>
    ))}
  </div>
);

export const ProjectsContent = () => (
  <div className="grid gap-4">
    {portfolioData.projects.map((proj) => (
      <motion.div
        key={proj.title}
        className="p-4 rounded-md bg-ocean-light/10 border border-ocean-light/20"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h3 className="font-display text-lg italic text-mountain-ink">{proj.title}</h3>
        <span className="font-mono-label text-ocean-mid text-[10px]">{proj.tech}</span>
        <p className="text-sm mt-1">{proj.description}</p>
      </motion.div>
    ))}
  </div>
);

export const EducationContent = () => (
  <div className="space-y-4">
    {portfolioData.education.map((edu, i) => (
      <div key={i} className="flex gap-3 items-start">
        <div className="w-3 h-3 rounded-full bg-terracotta/60 mt-1.5 flex-shrink-0" />
        <div>
          <h3 className="font-display text-lg italic text-mountain-ink">{edu.degree}</h3>
          <p className="text-sm text-mountain-mid">{edu.institution}</p>
          <span className="font-mono-label text-forest-green">{edu.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export const InterestsContent = () => (
  <div className="flex flex-wrap gap-3">
    {portfolioData.interests.map((interest) => (
      <motion.span
        key={interest}
        className="px-4 py-2 rounded-full bg-terracotta/10 text-terracotta border border-terracotta/20 font-body text-sm"
        whileHover={{ scale: 1.08, backgroundColor: "hsla(25, 55%, 50%, 0.2)" }}
      >
        {interest}
      </motion.span>
    ))}
  </div>
);

export const ContactContent = () => (
  <div className="space-y-4">
    <p className="text-base">I'd love to connect! Feel free to reach out through any of the channels below.</p>
    <div className="space-y-3">
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="flex items-center gap-3 p-3 rounded-md bg-river-teal/10 border border-river-teal/20 hover:bg-river-teal/20 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-river-teal" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13L2 4" />
        </svg>
        <span className="font-body text-sm text-mountain-ink">{portfolioData.contact.email}</span>
      </a>
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-md bg-ocean-mid/10 border border-ocean-mid/20 hover:bg-ocean-mid/20 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-ocean-mid" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span className="font-body text-sm text-mountain-ink">LinkedIn Profile</span>
      </a>
    </div>
  </div>
);
