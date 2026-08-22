"use client";

import { useEffect, useRef } from "react";

const CODE_FRAGMENTS: Array<{ text: string; top: string; left?: string; right?: string; rotate: number; delay: number }> = [
  { text: "const agent = initializeNetwork(...)", top: "8%", left: "6%", rotate: -1.5, delay: 0 },
  { text: "quantumState.prepare()", top: "24%", right: "8%", rotate: 1, delay: 2 },
  { text: "graph.propagate()", top: "46%", left: "4%", rotate: 0.5, delay: 4 },
  { text: "model.fit(dataset)", top: "63%", right: "5%", rotate: -1, delay: 1 },
  { text: "attention(...)", top: "79%", left: "8%", rotate: 1.5, delay: 3 },
  { text: "route.optimize()", top: "93%", right: "10%", rotate: -0.5, delay: 5 },
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
  pulses: [
    [0, 1],
    [3, 4],
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
  pulses: [[1, 2]],
};

function GraphCluster({ cluster }: { cluster: typeof CLUSTER_A }) {
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
          style={{ animationDelay: `${i * 0.9}s`, animationDuration: `${6 + (i % 3)}s` }}
        />
      ))}

      {cluster.pulses.map(([a, b]) => (
        <circle key={`pulse-${a}-${b}`} r="2" className="bg-pulse fill-accent">
          <animateMotion
            dur={`${5 + a}s`}
            repeatCount="indefinite"
            path={`M ${cluster.nodes[a].x},${cluster.nodes[a].y} L ${cluster.nodes[b].x},${cluster.nodes[b].y}`}
          />
          <animate attributeName="opacity" values="0;0.8;0" dur={`${5 + a}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export default function BackgroundSystem() {
  const glowRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarsePointer) return;

    const glow = glowRef.current;
    const parallax = parallaxRef.current;
    if (!glow || !parallax) return;

    let frame: number | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.setProperty("--glow-x", `${event.clientX}px`);
        glow.style.setProperty("--glow-y", `${event.clientY}px`);
        glow.style.setProperty("--glow-opacity", "1");

        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;
        parallax.style.setProperty("--parallax-x", `${nx * 10}px`);
        parallax.style.setProperty("--parallax-y", `${ny * 10}px`);
      });
    };

    const handlePointerLeave = () => {
      glow.style.setProperty("--glow-opacity", "0");
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div ref={glowRef} className="fixed inset-0">
        <div className="bg-grid-layer absolute inset-0" />
        <div className="bg-cursor-glow absolute inset-0" />
      </div>

      <div ref={parallaxRef} className="bg-parallax-layer absolute inset-0">
        <div className="bg-graph absolute -right-16 top-[6%] h-[36vh] w-[36vh] opacity-[0.06] sm:h-[42vh] sm:w-[42vh]">
          <GraphCluster cluster={CLUSTER_A} />
        </div>
        <div className="bg-graph absolute -left-14 top-[54%] h-[28vh] w-[28vh] opacity-[0.05]">
          <GraphCluster cluster={CLUSTER_B} />
        </div>
        <div className="bg-graph absolute -right-10 top-[86%] h-[24vh] w-[24vh] opacity-[0.045]">
          <GraphCluster cluster={CLUSTER_B} />
        </div>

        {CODE_FRAGMENTS.map((fragment) => (
          <span
            key={fragment.text}
            className="bg-code-fragment"
            style={{
              top: fragment.top,
              left: fragment.left,
              right: fragment.right,
              transform: `rotate(${fragment.rotate}deg)`,
              animationDelay: `${fragment.delay}s`,
            }}
          >
            {fragment.text}
          </span>
        ))}
      </div>
    </div>
  );
}
