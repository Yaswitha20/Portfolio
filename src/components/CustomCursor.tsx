import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const handleMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);

    let frame: number;
    const animateRing = () => {
      ring.x += (pos.x - ring.x) * 0.15;
      ring.y += (pos.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      frame = requestAnimationFrame(animateRing);
    };
    frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/50 z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CustomCursor;
