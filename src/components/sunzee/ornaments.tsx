// Decorative elements used throughout the design.
// Star/plus ornaments have been removed per user request; only gold gradient
// lines remain as subtle dividers.

export function Ornament({ className = "" }: { className?: string }) {
  return null;
}

export function SmallOrnament({ className = "" }: { className?: string }) {
  // Render an empty span so existing call sites that use it as a separator
  // between text items still get a small gap, without any visible shape.
  return <span className={className} aria-hidden="true" />;
}

export function DividerLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[var(--gold)]/60" />
      <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[var(--gold)]/60" />
    </div>
  );
}

export function PalmIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M32 60 V32" />
      <path d="M32 32 C 20 28, 12 18, 8 8 C 18 12, 28 18, 32 32" />
      <path d="M32 32 C 44 28, 52 18, 56 8 C 46 12, 36 18, 32 32" />
      <path d="M32 28 C 26 22, 20 18, 14 16 C 20 24, 26 28, 32 28" />
      <path d="M32 28 C 38 22, 44 18, 50 16 C 44 24, 38 28, 32 28" />
      <path d="M32 60 C 30 56, 28 54, 26 52" />
      <path d="M32 60 C 34 56, 36 54, 38 52" />
    </svg>
  );
}

export function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" />
      <circle cx="32" cy="32" r="22" opacity="0.4" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 56 C 8 30, 30 8, 56 8 C 56 34, 34 56, 8 56 Z" />
      <path d="M8 56 L 40 24" opacity="0.5" />
      <path d="M20 44 L 32 32" opacity="0.5" />
      <path d="M14 50 L 26 38" opacity="0.5" />
    </svg>
  );
}

export function WaveDivider({
  flip = false,
  className = "",
  color = "var(--cream)",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-none ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
        fill={color}
      >
        <path d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z" />
      </svg>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-medium tracking-[0.32em] uppercase text-[var(--gold-deep)]">
      <span className="h-px w-6 bg-[var(--gold)]" />
      {children}
      <span className="h-px w-6 bg-[var(--gold)]" />
    </div>
  );
}
