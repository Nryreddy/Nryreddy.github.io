"use client";
import { Panel } from "@/components/ui/Panel";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { useAudio } from "@/hooks/useAudio";

export function AudioToggle() {
  const [muted, setMuted] = useState(false);
  const { playDroplet } = useAudio();

  const handleToggle = () => {
    setMuted(!muted);
    // Real implementation would mute global context. Just playing the droplet for now if turning on.
    if (muted) playDroplet();
  };

  return (
    <Panel className="aspect-square flex items-center justify-center p-0 backdrop-blur-xl group">
       <Magnetic strength={0.4} className="w-full h-full flex items-center justify-center relative z-20">
          <button 
            onClick={handleToggle}
            className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full transition-all duration-300 flex items-center justify-center border shadow-lg
              ${muted ? 'bg-black/50 border-white/5 text-white/50 hover:bg-black/80' : 'bg-primary border-[#1e3489] text-white hover:bg-[#2542a1]'}`}
          >
             {muted ? <VolumeX size={24} /> : <Volume2 size={28} className="animate-pulse" />}
          </button>
       </Magnetic>
    </Panel>
  );
}
