export default function ScrollProgress() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-border"
    >
      <div className="scroll-progress-bar h-full w-full bg-accent" />
    </div>
  );
}
