"use client";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { ReactNode } from "react";
import { useAudio } from "@/hooks/useAudio";

interface LockedOverlayProps {
  isLocked: boolean;
  onUnlock?: () => void;
  children: ReactNode;
}

export function LockedOverlay({ isLocked, onUnlock, children }: LockedOverlayProps) {
  const { playDroplet } = useAudio();

  const handleUnlock = () => {
    playDroplet();
    if (onUnlock) onUnlock();
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl group">
      {children}
      {isLocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-locked-stripes backdrop-blur-[2px] cursor-pointer"
          onClick={handleUnlock}
        >
          <div className="bg-black/50 p-4 rounded-full text-white/50 group-hover:text-white transition-colors duration-300">
            <Lock className="w-8 h-8" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
