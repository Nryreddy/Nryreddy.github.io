"use client";
import { Panel } from "@/components/ui/Panel";
import { Award } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";
import { Magnetic } from "@/components/ui/Magnetic";

export function ProjectsPanel() {
  const { playRedirect } = useAudio();
  
  const certs = [
    { 
      name: "AWS",
      bg: "bg-white", border: "border-white/30", 
      icon: "/aws_logo.png", 
      url: "https://www.credly.com/badges/e245dc95-41af-4758-9cf1-da13fab3cf12" 
    },
    { 
      name: "Neo4j",
      bg: "bg-[#018BFF]/10", border: "border-[#018BFF]/30", 
      icon: "https://cdn.simpleicons.org/neo4j/018BFF", 
      url: "https://graphacademy.neo4j.com/c/94221b5b-af60-42b7-a9c5-20f93b4159a9/" 
    },
    { 
      name: "Palantir",
      bg: "bg-white/5", border: "border-white/20", 
      icon: "https://cdn.simpleicons.org/palantir/ffffff", 
      url: "https://verify.skilljar.com/c/fr2h5ddmhgva" 
    },
    { 
      name: "DataCamp",
      bg: "bg-[#03EF62]/10", border: "border-[#03EF62]/30", 
      icon: "https://cdn.simpleicons.org/datacamp/03EF62", 
      url: "https://www.datacamp.com/certificate/DE0015998526067" 
    },
    { 
      name: "HackerRank",
      bg: "bg-[#2EC866]/10", border: "border-[#2EC866]/30", 
      icon: "https://cdn.simpleicons.org/hackerrank/2EC866", 
      url: "https://www.hackerrank.com/certificates/d46733b987b2" 
    },
    { 
      name: "Meta",
      bg: "bg-[#0668E1]/10", border: "border-[#0668E1]/30", 
      icon: "https://cdn.simpleicons.org/meta/0668E1", 
      url: "https://learn.deeplearning.ai/accomplishments/a84f3966-ecb4-4572-b8f4-cd1c1095f7d8?usp=sharing" 
    },
  ];

  return (
    <Panel className="flex flex-col h-full p-6 relative">
      <div className="flex items-center gap-3 pb-6 border-b border-white/5">
        <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white/50 border border-white/10 shadow-inner">
          <Award size={18} />
        </div>
        <div>
          <p className="text-xs text-white/40 font-bold tracking-wider">CERTIFICATIONS</p>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/90 mt-0.5">Achievements</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6 flex-1 place-content-center justify-items-center">
        {certs.map((cert, i) => (
          <Magnetic key={i} strength={0.3}>
             <a 
               href={cert.url}
               target="_blank"
               rel="noopener noreferrer"
               onClick={playRedirect}
               className={`w-14 h-14 md:w-[70px] md:h-[70px] flex items-center justify-center rounded-2xl ${cert.bg} shadow-md transition-transform hover:scale-110 border ${cert.border}`}
             >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={cert.icon} alt={cert.name} className="w-7 h-7 md:w-10 md:h-10 object-contain opacity-90 transition-opacity hover:opacity-100 drop-shadow-sm" />
             </a>
          </Magnetic>
        ))}
      </div>
    </Panel>
  );
}
