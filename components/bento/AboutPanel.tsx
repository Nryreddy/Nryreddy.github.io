"use client";
import { Panel } from "@/components/ui/Panel";
import { Terminal } from "lucide-react";

const retroFont = { fontFamily: '"Retro-Lettering-Font", "Courier New", monospace' };

export function AboutPanel() {
  return (
    <Panel className="flex flex-col p-5 md:p-6 bg-[#111116] border-none shadow-2xl relative overflow-hidden">
      
      {/* Subtle CRT scanline overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.07)_50%,rgba(0,0,0,0.07))] bg-[length:100%_3px] z-0 opacity-60" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-[#fbbd23]/10 flex items-center justify-center border border-[#fbbd23]/20">
            <Terminal size={16} className="text-[#fbbd23]" />
          </div>
          <div>
            <p className="text-[10px] text-white/30 font-bold tracking-widest uppercase">SYS.PROFILE</p>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white/90">About Me</h2>
          </div>
        </div>

        {/* Retro terminal content block */}
        <div className="bg-[#0d0d10] rounded-xl border border-white/5 p-4 md:p-5 shadow-inner">
          {/* Prompt line */}
          <p className="text-[#fbbd23] text-xs font-bold mb-3 tracking-wider" style={retroFont}>
            <span className="opacity-60">$&gt;</span> bio --verbose
          </p>

          {/* Bio body */}
          <p className="text-white/75 text-sm leading-relaxed tracking-wide" style={retroFont}>
            I build AI that actually does stuff —{" "}
            <span className="text-white font-bold">not just demos</span>. 
            Think LLM agents that triage inboxes, voice assistants that talk to clinics, and 
            surveillance systems that alert your phone in under 3 seconds.
          </p>
          <p className="text-white/75 text-sm leading-relaxed tracking-wide mt-3" style={retroFont}>
            Fresh out of a{" "}
            <span className="text-[#fbbd23] font-bold">Master of AI</span> in Australia, 
            I&apos;ve shipped pipelines on AWS & Azure, designed agentic workflows from scratch, 
            and generally tried to make machines do the boring work so humans don&apos;t have to.
          </p>
          <p className="text-white/75 text-sm leading-relaxed tracking-wide mt-3" style={retroFont}>
            I care about real-world impact — clean APIs, reliable deployments, and AI that 
            actually holds up when it hits production.
          </p>

          {/* Blinking cursor */}
          <span className="inline-block w-2 h-4 bg-[#fbbd23] mt-3 ml-1 align-middle animate-pulse" />
        </div>
      </div>
    </Panel>
  );
}
