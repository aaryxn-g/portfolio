"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";

// Fragments drawn from the portfolio's own established research facts and
// figures, not generic ML boilerplate. Kept factually accurate; the point is
// atmosphere, not a claim, so they stay far too faint to be read as data.
const NOTATION_FRAGMENTS: Array<{ text: string; top: string; left?: string; right?: string; rotate: number }> = [
  { text: "ROC-AUC 0.989 ± 0.004", top: "10%", left: "6%", rotate: -1.2 },
  { text: "shared entanglement", top: "27%", right: "7%", rotate: 0.8 },
  { text: "propagation-tree embedding", top: "45%", left: "4%", rotate: -0.6 },
  { text: "equalized odds", top: "62%", right: "6%", rotate: 1 },
  { text: "Dijkstra's algorithm", top: "78%", left: "7%", rotate: -1 },
  { text: "decoherence-aware routing", top: "93%", right: "9%", rotate: 0.6 },
];

/** Small asymmetric node cluster, upper-right of the page. */
const CLUSTER_A = {
  nodes: [
    { x: 40, y: 30 },
    { x: 100, y: 15 },
    { x: 150, y: 55 },
    { x: 170, y: 110 },
    { x: 110, y: 140 },
    { x: 55, y: 100 },
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 0],
    [0, 2],
  ],
};

/** Smaller cluster, lower-left of the page. */
const CLUSTER_B = {
  nodes: [
    { x: 20, y: 150 },
    { x: 70, y: 130 },
    { x: 110, y: 160 },
    { x: 150, y: 120 },
    { x: 90, y: 190 },
  ],
  edges: [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [0, 4],
  ],
  pulse: [1, 2] as [number, number],
};

function GraphCluster({ cluster }: { cluster: typeof CLUSTER_A & { pulse?: [number, number] } }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        {cluster.edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={cluster.nodes[a].x}
            y1={cluster.nodes[a].y}
            x2={cluster.nodes[b].x}
            y2={cluster.nodes[b].y}
          />
        ))}
      </g>

      {cluster.nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="2.5"
          className="bg-node"
          fill="currentColor"
          style={{ animationDelay: `${i * 1.1}s`, animationDuration: `${8 + (i % 3)}s` }}
        />
      ))}

      {cluster.pulse ? (
        <circle r="2" className="bg-pulse fill-accent">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path={`M ${cluster.nodes[cluster.pulse[0]].x},${cluster.nodes[cluster.pulse[0]].y} L ${cluster.nodes[cluster.pulse[1]].x},${cluster.nodes[cluster.pulse[1]].y}`}
          />
          <animate attributeName="opacity" values="0;0.6;0" dur="7s" repeatCount="indefinite" />
        </circle>
      ) : null}
    </svg>
  );
}

export default function BackgroundSystem() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Raw pointer position feeding a spring, so the light trails the cursor with
  // a slight physical lag rather than snapping to it every frame.
  const lightX = useMotionValue(0);
  const lightY = useMotionValue(0);
  const springX = useSpring(lightX, { stiffness: 40, damping: 22, mass: 0.6 });
  const springY = useSpring(lightY, { stiffness: 40, damping: 22, mass: 0.6 });
  const lightBackground = useMotionTemplate`radial-gradient(560px circle at ${springX}px ${springY}px, rgba(245, 245, 245, 0.05), rgba(245, 245, 245, 0.018) 32%, transparent 62%)`;

  // Starts invisible so there's no flash of light pinned at the top-left
  // corner before the pointer has actually moved; fades in on first move.
  const lightOpacity = useMotionValue(0);
  const springOpacity = useSpring(lightOpacity, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const parallax = parallaxRef.current;
    let frame: number | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      // Viewport-relative coordinates: the light is fixed, so it keeps
      // tracking the cursor while the page scrolls underneath it.
      lightX.set(event.clientX);
      lightY.set(event.clientY);
      lightOpacity.set(1);

      if (!parallax) return;
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;
        parallax.style.setProperty("--parallax-x", `${nx * 6}px`);
        parallax.style.setProperty("--parallax-y", `${ny * 6}px`);
      });
    };

    const handlePointerLeave = () => lightOpacity.set(0);

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [lightX, lightY, lightOpacity]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="fixed inset-0">
        <div className="bg-grid-layer absolute inset-0" />
        <motion.div
          className="bg-light-layer absolute inset-0"
          style={{ background: lightBackground, opacity: springOpacity }}
        />
      </div>

      <div ref={parallaxRef} className="bg-parallax-layer absolute inset-0">
        <div className="bg-graph absolute -right-16 top-[6%] h-[34vh] w-[34vh] opacity-[0.05] sm:h-[40vh] sm:w-[40vh]">
          <GraphCluster cluster={CLUSTER_A} />
        </div>
        <div className="bg-graph absolute -left-14 top-[54%] h-[26vh] w-[26vh] opacity-[0.045]">
          <GraphCluster cluster={CLUSTER_B} />
        </div>

        {NOTATION_FRAGMENTS.map((fragment) => (
          <span
            key={fragment.text}
            className="bg-code-fragment"
            style={{
              top: fragment.top,
              left: fragment.left,
              right: fragment.right,
              transform: `rotate(${fragment.rotate}deg)`,
            }}
          >
            {fragment.text}
          </span>
        ))}
      </div>
    </div>
  );
}
