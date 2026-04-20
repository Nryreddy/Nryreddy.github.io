"use client";
import { Panel } from "@/components/ui/Panel";
import { Terminal } from "lucide-react";

const retroFont = { fontFamily: '"Retro-Lettering-Font", "Courier New", monospace' };

export function AboutPanel() {
  return (
    <Panel className="flex flex-col p-3 md:p-4 bg-[#111116] border-none shadow-2xl relative overflow-hidden">
      
      {/* Subtle CRT scanline overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.07)_50%,rgba(0,0,0,0.07))] bg-[length:100%_3px] z-0 opacity-60" />

      <div className="relative z-10 flex flex-col gap-2">
        {/* Header */}
        <div className="flex items-center gap-2 pb-2 border-b border-white/5">
          <div className="w-6 h-6 rounded-md bg-[#fbbd23]/10 flex items-center justify-center border border-[#fbbd23]/20">
            <Terminal size={12} className="text-[#fbbd23]" />
          </div>
          <div>
            <p className="text-[9px] text-white/30 font-bold tracking-widest uppercase leading-none">SYS.PROFILE</p>
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/90">About Me</h2>
          </div>
        </div>

        {/* Retro terminal content block */}
        <div className="bg-[#0d0d10] rounded-lg border border-white/5 p-3 shadow-inner">
          {/* Prompt line */}
          <p className="text-[#fbbd23] text-[10px] font-bold mb-1.5 tracking-wider" style={retroFont}>
            <span className="opacity-60">$&gt;</span> bio --verbose
          </p>

          {/* Bio body — merged to 2 tight lines */}
          <p className="text-white/75 text-xs leading-relaxed tracking-wide" style={retroFont}>
            I build AI that actually does stuff — <span className="text-white font-bold">not just demos</span>. 
            LLM agents, voice assistants, surveillance alerts in under 3s.
            Fresh out of a <span className="text-[#fbbd23] font-bold">Master of AI</span> in Australia, 
            shipping pipelines on AWS & Azure and agentic workflows from scratch.
          </p>
          <p className="text-white/75 text-xs leading-relaxed tracking-wide mt-1.5" style={retroFont}>
            I care about real-world impact — clean APIs, reliable deploys, AI that holds up in prod.
            <span className="inline-block w-1.5 h-3 bg-[#fbbd23] ml-1.5 align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </Panel>
  );
}
