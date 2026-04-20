"use client";
import { Panel } from "@/components/ui/Panel";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";

export function EducationPanel() {
  const { playDroplet } = useAudio();

  const education = [
    {
      school: "Monash University",
      degree: "Master of Artificial Intelligence",
      location: "Australia",
      date: "Feb 2024 — Dec 2025",
    },
    {
      school: "Visvesvaraya Technological University",
      degree: "Bachelor of Computer Science Engineering",
      location: "India",
      date: "Aug 2019 — Aug 2023",
    }
  ];

  return (
    <Panel className="p-5 md:p-8 flex flex-col bg-[#161619] shadow-2xl border-none">
      <div className="flex items-center gap-3 mb-6 md:mb-8 opacity-80">
         <div className="p-2 bg-white/5 rounded-lg border border-white/10 shadow-inner">
           <GraduationCap size={20} className="text-[#4B6BFB]" />
         </div>
         <h2 className="text-sm font-bold uppercase tracking-widest text-white/90">Education</h2>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        {education.map((edu, i) => (
           <div 
             key={i} 
             onMouseEnter={playDroplet}
             className="group relative flex flex-col md:flex-row justify-between items-start md:items-center bg-[#1e1e24] hover:bg-[#25252b] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all shadow-[inset_0_-2px_10px_rgba(0,0,0,0.4)] overflow-hidden cursor-default"
           >
              {/* Subtle noise decoration */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
              
              <div className="relative z-10">
                 <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-md group-hover:text-[#4B6BFB] transition-colors">{edu.school}</h3>
                 <p className={`mt-1.5 drop-shadow-sm uppercase ${edu.degree.includes("Master") ? 'text-[#fbbd23] font-black tracking-widest text-sm drop-shadow-[0_0_8px_rgba(251,189,35,0.4)]' : 'text-white/60 font-bold tracking-[0.15em] text-xs'}`}>{edu.degree}</p>
              </div>

              <div className="relative z-10 flex flex-col items-start md:items-end mt-4 md:mt-0 gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-2.5 text-white/80 text-sm font-bold tracking-wider">
                   <MapPin size={14} className="text-white/40" />
                   <span>{edu.location}</span>
                 </div>
                 <div className="flex items-center gap-2.5 text-white/50 text-[10px] md:text-xs font-black tracking-widest uppercase bg-black/20 px-3 py-1.5 rounded-md border border-white/5">
                   <CalendarDays size={14} className="text-[#4B6BFB]/70" />
                   <span>{edu.date}</span>
                 </div>
              </div>
           </div>
        ))}
      </div>
    </Panel>
  );
}
