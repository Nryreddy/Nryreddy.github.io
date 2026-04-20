"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface PanelProps extends HTMLMotionProps<"div"> {
  className?: string;
  glass?: boolean;
}

export function Panel({ className, glass = false, children, onMouseMove, onMouseLeave, ...props }: PanelProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (onMouseMove) onMouseMove(e);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={(e) => {
        setIsHovering(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
      className={cn(
        "rounded-3xl border border-white/5 overflow-hidden relative group",
        glass ? "glass-panel" : "bg-card",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 h-full w-full">{children as React.ReactNode}</div>
    </motion.div>
  );
}
