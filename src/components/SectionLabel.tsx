interface SectionLabelProps {
  index: string;
  label: string;
  pulse?: boolean;
  className?: string;
}

export default function SectionLabel({ index, label, pulse = false, className }: SectionLabelProps) {
  return (
    <p className={`inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-muted ${className ?? ""}`}>
      <span>
        <span className="text-accent">{index}</span> / {label}
      </span>
      {pulse ? <span aria-hidden="true" className="signal-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> : null}
    </p>
  );
}
