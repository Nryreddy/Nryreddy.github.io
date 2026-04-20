"use client";
import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/5 bg-black/40 py-2 w-full flex">
      <motion.div
        className="flex gap-4 min-w-[200%] font-mono text-xs tracking-widest text-[#48BB95] uppercase opacity-80"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        <span>{text} • {text} • {text} • {text} • </span>
        <span>{text} • {text} • {text} • {text} • </span>
      </motion.div>
    </div>
  );
}
