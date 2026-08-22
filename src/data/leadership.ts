export interface LeadershipEntry {
  id: string;
  index: string;
  role: string;
  organization: string;
  date: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
    tag: string;
    // Optional: overrides the default frame ratio when the source dimensions are known.
    // Left unset when the existing frame should be preserved as-is.
    aspectRatio?: string;
    scale?: number;
  };
}

export interface EarlierRole {
  id: string;
  role: string;
  organization: string;
  date: string;
}

export interface AchievementEntry {
  id: string;
  index: string;
  placement: string;
  competition: string;
  date: string;
  context?: string[];
  description: string;
  image: {
    src: string;
    alt: string;
    tag: string;
    // Matches the source image's actual pixel dimensions.
    aspectRatio: string;
  };
}

export const LEADERSHIP_CONTENT = {
  sectionLabel: {
    index: "05",
    label: "Leadership & Achievements",
  },
  heading: ["Beyond", "The build"],
  currentLeadershipLabel: "Current Leadership",
  currentLeadership: [
    {
      id: "mad-president",
      index: "01",
      role: "President",
      organization: "The M.A.D Club, BITS Pilani Dubai Campus",
      date: "Jun 2026 — Present",
      bullets: [
        "Provide strategic vision and leadership to align the club with its core mission; oversee the executive board and guide officer performance and team collaboration.",
        "Serve as the primary representative for high-level institutional and external partnerships; drive major initiatives and strategic decisions to maximize club impact.",
      ],
      image: {
        src: "/images/leadership-mad.jpg",
        alt: "Aaryan Gupta, President of The M.A.D Club, BITS Pilani Dubai Campus",
        tag: "M.A.D. / President",
        // Matches the source photo's actual 1280 x 960 (4:3) pixel dimensions.
        aspectRatio: "4 / 3",
      },
    },
    {
      id: "acm-secretary-general",
      index: "02",
      role: "Secretary General",
      organization: "ACM BPDC",
      date: "Jun 2026 — Present",
      bullets: [
        "Coordinate cross-functional operations across the Community, Events, Marketing, and Creative squads, providing administrative support for smooth technical event execution.",
        "Foster clear internal communication across the chapter and maintain monthly reports, project documentation, and operational records to track progress.",
      ],
      image: {
        src: "/images/leadership-acm.jpg",
        alt: "Aaryan Gupta, Secretary General of ACM BPDC",
        tag: "ACM / Leadership",
        // Frame intentionally left as the existing default; only zoomed in slightly per request.
        scale: 1.1,
      },
    },
  ],
  earlierRolesLabel: "Earlier Roles",
  earlierRoles: [
    {
      id: "mad-vp",
      role: "Vice President",
      organization: "The M.A.D Club BPDC",
      date: "Jul 2025 — Jun 2026",
    },
    {
      id: "acm-marketing-secretary",
      role: "Marketing Secretary",
      organization: "ACM · BITS Pilani Dubai",
      date: "Jun 2025 — Jun 2026",
    },
    {
      id: "ecell-pr-sponsorship",
      role: "Head of PR and Sponsorship",
      organization: "E-Cell BPDC",
      date: "Jun 2025 — Jun 2026",
    },
    {
      id: "mad-general-secretary",
      role: "General Secretary",
      organization: "M.A.D Club BPDC",
      date: "Jul 2024 — Jun 2025",
    },
    {
      id: "acm-marketing-executive",
      role: "Marketing Executive",
      organization: "ACM BPDC",
      date: "Jun 2024 — Jun 2025",
    },
    {
      id: "bits-sponsorship-executive",
      role: "Sponsorship Executive",
      organization: "BITS Pilani Dubai Campus",
      date: "Oct 2023 — Sep 2024",
    },
  ],
  achievementsLabel: "Achievements",
  achievements: [
    {
      id: "net-zero-thrive",
      index: "01",
      placement: "2nd Place",
      competition: "Net Zero Thrive 4th Sustainability Intercollege Championship",
      date: "Apr 2026",
      context: ["SP Jain School of Global Management", "UAE-Wide"],
      description:
        "Co-developed an AI-Optimized PCM Retrofit System combining PCM-enhanced interior boards for passive thermal storage with AI-driven AC control and sensor-based cooling predictions. Competed against university teams across the UAE, delivering a solution targeting measurable reductions in peak cooling demand and energy waste.",
      image: {
        src: "/images/achievement-netzero.jpg",
        alt: "Net Zero Thrive 4th Sustainability Intercollege Championship, 2nd place",
        tag: "Net Zero / Thrive",
        aspectRatio: "1060 / 591",
      },
    },
    {
      id: "alibaba-cloud-hackathon",
      index: "02",
      placement: "3rd Place",
      competition: "Alibaba Cloud AI Hackathon UAE",
      date: "Oct 2025",
      description:
        "Built Synthia Studio, a multimodal AI platform focused on both creating and repurposing content across text, images, videos, and presentations, transforming existing material into new formats rather than only generating from scratch.",
      image: {
        src: "/images/achievement-alibaba.jpg",
        alt: "Alibaba Cloud AI Hackathon UAE, 3rd place",
        tag: "Alibaba / Cloud",
        aspectRatio: "1280 / 853",
      },
    },
    {
      id: "ieee-sustainathon",
      index: "03",
      placement: "1st Place",
      competition: "IEEE BPDC Sustainathon 2025",
      date: "Sep 2025",
      description:
        "Developed AI Bioacoustics Monitoring, a software prototype using AI to detect wildlife species through sound analysis with interactive ecosystem health visualization.",
      image: {
        src: "/images/achievement-ieee.jpg",
        alt: "IEEE BPDC Sustainathon 2025, 1st place",
        tag: "IEEE / Sustainathon",
        aspectRatio: "1 / 1",
      },
    },
    {
      id: "spandan",
      index: "04",
      placement: "1st Place",
      competition: "SPANDAN 2025 Case Study Competition",
      date: "Apr 2025",
      description:
        "Developed two AI-driven FMCG product concepts, Prakriti, a face mist, and Ananda, a millet bar, with full marketing strategies that blended AI tools with traditional wellness knowledge.",
      image: {
        src: "/images/achievement-spandan.jpg",
        alt: "SPANDAN 2025 Case Study Competition, 1st place",
        tag: "SPANDAN / 2025",
        aspectRatio: "2 / 1",
      },
    },
  ],
} satisfies {
  sectionLabel: { index: string; label: string };
  heading: string[];
  currentLeadershipLabel: string;
  currentLeadership: LeadershipEntry[];
  earlierRolesLabel: string;
  earlierRoles: EarlierRole[];
  achievementsLabel: string;
  achievements: AchievementEntry[];
};
