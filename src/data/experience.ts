export interface ExperienceEntry {
  id: string;
  index: string;
  date?: string;
  role: string;
  organization: string;
  context?: string;
  bullets?: string[];
  image: {
    src: string;
    alt: string;
    tag: string;
    // Matches the source photo's actual display dimensions (post EXIF orientation).
    aspectRatio: string;
    scale?: number;
  };
}

export const EXPERIENCE_CONTENT = {
  sectionLabel: {
    index: "03",
    label: "Experience",
  },
  heading: ["Selected", "Experience"],
  entries: [
    {
      id: "bits",
      index: "01",
      date: "Feb 2025 — Present",
      role: "Professional Assistant, Computer Laboratory",
      organization: "BITS Pilani, Dubai Campus",
      bullets: [
        "Assist faculty in conducting C programming lab sessions and DBMS lab sessions using MySQL, ensuring a structured and efficient learning environment.",
        "Guide students through debugging, SQL query writing, and core programming concepts.",
        "Develop supplementary learning materials to improve student engagement and understanding.",
      ],
      image: {
        src: "/images/experience-bits.jpg",
        alt: "Aaryan Gupta assisting students at BITS Pilani, Dubai Campus Computer Laboratory",
        tag: "BITS / Lab",
        // Source file is stored sideways (4000 x 1868) with an EXIF rotate-90 tag;
        // the actual displayed image is portrait at 1868 x 4000.
        aspectRatio: "1868 / 4000",
      },
    },
    {
      id: "jio",
      index: "02",
      date: "Jun 2025 — Aug 2025",
      role: "Telecom Networking Intern",
      organization: "Reliance Jio Infocomm Limited, Chandigarh",
      bullets: [
        "Studied 4G/5G network architecture across access, core, and transport layers; gained working knowledge of MME, SGW, PGW, IMS, and key processes including user registration, attach, and mobility management.",
        "Explored voice technologies over LTE including VoLTE, VoLGA, CSFB, and SRVCC, along with their respective call flows.",
        "Worked on a network reliability benchmarking project, analyzing 3GPP cause codes to compare inter-operator call failures and identify optimization opportunities.",
      ],
      image: {
        src: "/images/experience-jio.jpg",
        alt: "Aaryan Gupta at Reliance Jio Infocomm Limited",
        tag: "Jio / Internship",
        aspectRatio: "720 / 1280",
        // Very slight zoom per request; frame already matches the source ratio exactly.
        scale: 1.06,
      },
    },
    {
      id: "orbitx",
      index: "03",
      date: "Oct 2024",
      role: "Exhibitor",
      organization: "OrbitX Technologies",
      context: "Future Blockchain Summit · GITEX Global",
      bullets: [
        "Pitched blockchain solutions at a tech expo, explaining crypto payment card integration with stablecoins to potential customers, collaborators, and investors.",
        "Gathered market insights to identify competitive positioning and use cases for blockchain products.",
      ],
      image: {
        src: "/images/experience-orbitx.jpg",
        alt: "Aaryan Gupta at the OrbitX Technologies exhibit, Future Blockchain Summit, GITEX GLOBAL 2024",
        tag: "OrbitX / Exhibit",
        aspectRatio: "729 / 1280",
      },
    },
  ],
} satisfies {
  sectionLabel: { index: string; label: string };
  heading: string[];
  entries: ExperienceEntry[];
};
