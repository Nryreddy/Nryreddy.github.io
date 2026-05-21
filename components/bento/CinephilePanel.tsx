"use client";
import { Panel } from "@/components/ui/Panel";
import { useAudio } from "@/hooks/useAudio";
import { Magnetic } from "@/components/ui/Magnetic";
import { Clapperboard } from "lucide-react";

export function CinephilePanel() {
  const { playRedirect } = useAudio();

  return (
    <Panel className="flex flex-col p-5 bg-[#141419] border-none shadow-2xl relative overflow-hidden min-h-[160px] group transition-all duration-300">
      
      {/* Cinematic grid lines / Projector light glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff8000]/10 via-[#00e054]/5 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
      
      {/* Film strip edge style (sprocket holes) at the very top */}
      <div className="absolute top-0 inset-x-0 h-1.5 flex justify-between px-4 opacity-35 group-hover:opacity-60 transition-opacity">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white/30 rounded-[1px] border border-black/50" />
        ))}
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full gap-5 mt-1.5">
        
        {/* Header line with CINEPHILE badge and Letterboxd overlapping dots */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff8000] group-hover:rotate-12 transition-all duration-300">
              <Clapperboard size={28} />
            </div>
            
            <div>
              <p className="text-[10px] text-white/40 font-black tracking-widest uppercase">
                CINEPHILE
              </p>
            </div>
          </div>

          {/* Glowing overlapping Letterboxd dots */}
          <div className="flex -space-x-1.5 items-center bg-black/35 px-2 py-1 rounded-full border border-white/5 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#40bcf4] shadow-[0_0_6px_rgba(64,188,244,0.6)]" />
            <div className="w-2 h-2 rounded-full bg-[#00e054] shadow-[0_0_6px_rgba(0,224,84,0.6)]" />
            <div className="w-2 h-2 rounded-full bg-[#ff8000] shadow-[0_0_6px_rgba(255,128,0,0.6)]" />
          </div>
        </div>

        {/* Cinematic Slogan/Quote Section */}
        <div className="flex flex-col gap-1 pr-4">
          <p className="text-white/95 text-sm font-medium leading-relaxed italic border-l-2 border-[#ff8000]/60 pl-3">
            &ldquo;Some people breathe, I watch cinema.&rdquo;
          </p>
        </div>

        {/* Action Button: Styled as an Old Film Projector */}
        <div className="flex justify-end items-center mt-1">
          <Magnetic strength={0.25}>
            <a
              href="https://letterboxd.com/nry_a24ever/likes/films/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playRedirect}
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff8000] flex items-center justify-center text-white/70 hover:text-[#ff8000] hover:bg-[#ff8000]/10 transition-all duration-300 shadow-md group/btn relative right-3 -top-2"
              title="View Liked Films on Letterboxd"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="36" 
                height="36" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-6"
              >
                {/* Rear film reel */}
                <circle cx="7" cy="7" r="4" />
                <circle cx="7" cy="7" r="1.2" fill="currentColor" />
                <path d="M7 3v8M3 7h8" strokeWidth="1" opacity="0.4" />
                
                {/* Front film reel */}
                <circle cx="17" cy="7" r="4" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                <path d="M17 3v8M13 7h8" strokeWidth="1" opacity="0.4" />

                {/* Reel supporting arms */}
                <path d="M8.5 10l1.5 2" />
                <path d="M15.5 10l-1.5 2" />

                {/* Projector main body */}
                <rect x="5" y="12" width="12" height="7" rx="1.5" />
                
                {/* Glowing lens front part */}
                <path d="M17 14.5h2v2h-2z" />
                <path d="M19 13.5l4-2v7l-4-2" fill="currentColor" className="opacity-10 group-hover/btn:opacity-30 transition-opacity duration-300" strokeWidth="1" />

                {/* Projector stand legs */}
                <path d="M8 19l-1.5 3" />
                <path d="M14 19l1.5 3" />
              </svg>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Film strip edge style (sprocket holes) at the very bottom */}
      <div className="absolute bottom-0 inset-x-0 h-1.5 flex justify-between px-4 opacity-35 group-hover:opacity-60 transition-opacity">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white/30 rounded-[1px] border border-black/50" />
        ))}
      </div>
    </Panel>
  );
}
