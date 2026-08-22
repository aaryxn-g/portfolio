export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectEntry {
  id: string;
  index: string;
  title: string;
  category: string;
  tier: "featured" | "supporting";
  date?: string;
  context?: string;
  description?: string;
  tagline?: string[];
  bullets?: string[];
  metric?: ProjectMetric;
  benchmarks?: ProjectMetric[];
  technologies?: string[];
  link?: string;
  /** Widens the image column within the featured card for extra visual prominence. */
  imageProminence?: "large";
  image: {
    src: string;
    alt: string;
    caption: string;
    // Matches the source image's actual pixel dimensions.
    aspectRatio: string;
    fit?: "cover" | "contain";
  };
}

// TODO: replace with the real PropNet project/demo URL once confirmed.
export const PROJECT_LINK_PLACEHOLDER =
  "https://github.com/REPLACE_WITH_PROPNET_PROJECT_LINK";

export const PROJECTS_CONTENT = {
  sectionLabel: {
    index: "04",
    label: "Projects",
  },
  heading: ["Selected", "Work"],
  projects: [
    {
      id: "quantum-mas",
      index: "01",
      title: "Quantum Multi-Agent Systems Research",
      category: "Research",
      tier: "featured",
      date: "2025 — Present",
      context: "Lab Research, BITS Pilani Dubai · Supervisor: Dr. Elakkiya Rajasekar",
      tagline: ["Cross-Layer Quantum", "Agent Coordination"],
      description:
        "A lab research project studying how existing quantum-networking and distributed multi-agent approaches break down once agents need to coordinate through shared entanglement. The work combines ideas across both fields into a single cross-layer architecture, formulates scheduling constraints and a decoherence-aware routing layer to make that coordination reliable, and evaluates the resulting approach against standard baselines.",
      bullets: [
        "Co-developed a cross-layer quantum network architecture for distributed AI agents coordinating via shared quantum entanglement, with a focus on hardware-aware resource scheduling.",
        "Built formal scheduling constraints to prevent simultaneous destructive measurements and designed a routing layer that prunes network paths before qubit decoherence.",
        "Delivered up to 4× improvement in coordination correctness in environments where standard baselines collapsed entirely.",
      ],
      metric: { label: "Coordination Correctness", value: "4× Improvement" },
      technologies: ["Quantum Networking", "Distributed AI", "Resource Scheduling", "Routing"],
      image: {
        src: "/images/project-quantum.jpg",
        alt: "Quantum Multi-Agent Systems architecture diagram",
        caption: "Quantum / Multi-Agent",
        aspectRatio: "893 / 445",
        fit: "contain",
      },
    },
    {
      id: "demographic-fairness",
      index: "02",
      title: "Demographic Fairness in Face Recognition Systems",
      category: "Research",
      tier: "featured",
      date: "Jul 2025 — Jan 2026",
      context: "Lab Research, BITS Pilani Dubai · Supervisor: Prof. Shivang Agarwal",
      tagline: ["Fairness-Aware", "Face Recognition"],
      bullets: [
        "Investigated racial bias in face recognition models using the UTKFace dataset; identified per-group accuracy gaps of up to 68% between majority and minority classes.",
        "Designed a fairness-aware training pipeline combining balanced sampling, constrained optimization for equalized odds, and a minimum accuracy guardrail.",
        "Reduced demographic accuracy disparity by approximately 33.8%, improved overall accuracy by 38.9%, and achieved up to 131% performance lift for underrepresented groups.",
      ],
      technologies: ["Machine Learning", "Fairness in AI", "Face Recognition", "Optimization"],
      image: {
        src: "/images/project-fairness.jpg",
        alt: "Demographic Fairness project flowchart",
        caption: "Fairness / Balance",
        aspectRatio: "1280 / 871",
        fit: "contain",
      },
    },
    {
      id: "propnet",
      index: "03",
      title: "PropNet: Graph-Based Misinformation Detection",
      category: "Research",
      tier: "featured",
      date: "Jan 2026 — Apr 2026",
      tagline: ["Graph-Based", "Misinformation Detection"],
      bullets: [
        "Co-built a hybrid Graph Attention Network that classifies news as real or fake from social-media propagation structure rather than article text, fusing GAT-based propagation-tree embeddings with 7 hand-crafted structural motif features via a learned attention gate.",
        "Achieved ROC-AUC of 0.989 ± 0.004 on the 5-seed pooled UPFD benchmark, beating text-only BERT (0.973) and graph-only (0.725) baselines; shipped an interactive Flask + D3 web demo for live inference on held-out test graphs.",
      ],
      metric: { label: "ROC-AUC", value: "0.989 ± 0.004" },
      benchmarks: [
        { label: "BERT", value: "0.973" },
        { label: "Graph Baseline", value: "0.725" },
      ],
      technologies: ["Graph Neural Networks", "GAT", "NLP", "Flask", "D3"],
      link: PROJECT_LINK_PLACEHOLDER,
      imageProminence: "large",
      image: {
        src: "/images/project-propnet.jpg",
        alt: "PropNet graph-based misinformation detection training and validation charts",
        caption: "Graph / Propagation",
        aspectRatio: "1087 / 408",
        fit: "contain",
      },
    },
    {
      id: "malware-traffic",
      index: "04",
      title: "Malware Traffic Classification",
      category: "Technical",
      tier: "supporting",
      date: "Sep 2025 — Dec 2025",
      bullets: [
        "Built an ML pipeline to classify benign and malicious network traffic using CICIDS 2017, CICIDS 2018, and Mendeley datasets; trained and evaluated Random Forest, XGBoost, and SVM models.",
        "Implemented data preprocessing with cleaning, scaling, and feature selection for improved model performance across classification metrics.",
      ],
      technologies: ["Machine Learning", "Network Security", "Random Forest", "XGBoost", "SVM"],
      image: {
        src: "/images/project-malware.jpg",
        alt: "Malware Traffic Classification report visual",
        caption: "Traffic / Classification",
        aspectRatio: "623 / 851",
        fit: "contain",
      },
    },
    {
      id: "tokyo-metro",
      index: "05",
      title: "Optimizing Urban Mobility: Pathfinding in Tokyo Metro Network",
      category: "Software Engineering",
      tier: "supporting",
      date: "Sep 2024 — Nov 2024",
      bullets: [
        "Built a Java Swing metro navigation app using Dijkstra's Algorithm for shortest-path computation with a real-time GUI; achieved up to 30% faster processing than A* and Bellman-Ford.",
      ],
      technologies: ["Java", "Dijkstra's Algorithm", "Graph Algorithms", "GUI Development"],
      image: {
        src: "/images/project-metro.jpg",
        alt: "Tokyo Metro Navigation application visual",
        caption: "Metro / Routing",
        aspectRatio: "785 / 630",
        fit: "contain",
      },
    },
  ],
} satisfies {
  sectionLabel: { index: string; label: string };
  heading: string[];
  projects: ProjectEntry[];
};
