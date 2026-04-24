import { ReactNode } from "react";

interface ParallaxProps {
  image: string;
  height?: string;
  children?: ReactNode;
  overlay?: boolean;
  className?: string;
}

export function Parallax({
  image,
  height = "min-h-[80vh]",
  children,
  overlay = true,
  className = "",
}: ParallaxProps) {
  return (
    <section
      className={`relative parallax-bg flex items-center justify-center ${height} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
          aria-hidden
        />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
