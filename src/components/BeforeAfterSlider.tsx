import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "",
}: Props) {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) setWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, ratio)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] md:aspect-[16/10] w-full select-none overflow-hidden ${className}`}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt="After transformation"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        loading="lazy"
      />
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before transformation"
          className="h-full max-w-none object-cover"
          style={{ width: width || "100%" }}
          draggable={false}
          loading="lazy"
        />
      </div>

      <span className="absolute left-4 top-4 label bg-forest/80 px-3 py-1.5 text-champagne backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 label bg-forest/80 px-3 py-1.5 text-champagne backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-ivory"
        style={{ left: `${pos}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-ivory text-forest shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 6L2 12L8 18" />
            <path d="M16 6L22 12L16 18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
