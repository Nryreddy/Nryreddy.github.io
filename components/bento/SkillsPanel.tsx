"use client";
import { Panel } from "@/components/ui/Panel";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useAudio } from "@/hooks/useAudio";

const skillData = {
  "PROGRAMMING": ["Python", "SQL", "Cypher"],
  "AI SYSTEMS": ["LangGraph", "Langchain", "CrewAI", "OpenClaw", "n8n", "Amazon Bedrock", "Azure AI Foundry", "RAG"],
  "ML / NLP": ["Scikit-learn", "Pytorch", "CNNs", "LSTMs", "AWS SageMaker", "MLflow", "ONNX"],
  "DATA ENG": ["PostgreSQL", "MySQL", "Amazon S3", "DynamoDB", "Neo4j", "AWS Glue", "Redshift", "Vector DBs"],
  "API / WEB": ["FastAPI", "Pydantic", "Flask", "Streamlit", "RESTful API", "Async APIs", "React"],
  "DEVOPS": ["Docker", "Kubernetes", "Git", "GitHub Actions", "Amazon CloudWatch", "Langfuse"]
};

export function SkillsPanel() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillData>("AI SYSTEMS");
  const screenRef = useRef(null);
  const { playDroplet } = useAudio();

  const handleCategoryClick = (cat: keyof typeof skillData) => {
    if (activeCategory !== cat) {
       playDroplet();
       setActiveCategory(cat);
    }
  };

  return (
    <Panel className="p-4 md:p-6 bg-[#161619] shadow-2xl border-none col-span-1 md:col-span-8 overflow-hidden group">
       {/* Header */}
       <div className="flex items-center gap-3 mb-6 md:mb-8 opacity-80">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 shadow-inner">
            <Cpu size={20} className="text-[#3FA684]" />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/90">Skills</h2>
       </div>

       <div className="flex flex-col md:flex-row gap-4 md:gap-8 min-h-[500px]">
          {/* Left: Hardware Category Switches */}
          <div className="w-full md:w-[260px] flex flex-col gap-3 shrink-0 relative z-20">
             {(Object.keys(skillData) as Array<keyof typeof skillData>).map((cat) => (
                 <button
                   key={cat}
                   onClick={() => handleCategoryClick(cat)}
                   style={{ fontFamily: '"Courier New", monospace' }}
                   className={`relative px-4 py-3 text-left rounded-lg transition-all duration-150 font-black tracking-wider text-xs uppercase
                      ${activeCategory === cat
                         ? 'bg-[#3FA684]/20 border border-[#3FA684]/60 text-[#3FA684] shadow-[0_0_16px_rgba(63,166,132,0.25)] translate-y-[1px]'
                         : 'bg-white/[0.05] border border-white/15 text-white/70 hover:text-white hover:bg-white/[0.09] hover:border-white/30'}`}
                 >
                    {cat}
                    {activeCategory === cat && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3FA684] shadow-[0_0_8px_#3FA684] animate-pulse"></span>
                    )}
                 </button>
             ))}
          </div>

          {/* Right: Physics Display Screen */}
          <div 
             ref={screenRef}
             className="flex-1 bg-[#0c0c0e] rounded-3xl border-[6px] md:border-8 border-[#1a1a1f] shadow-[inset_0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col"
          >
             {/* CRT Scanlines */}
             <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.3))] bg-[length:100%_4px] z-10 opacity-70"></div>
             {/* Grain */}
             <div className="pointer-events-none absolute inset-0 opacity-[0.25] mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>



             {/* Interactive Physics Badges */}
             <div className="absolute inset-0 p-6 md:p-10 flex flex-wrap content-center justify-center gap-4 md:gap-5 z-20">
                 {skillData[activeCategory].map((skill, i) => (
                    <motion.div
                       key={`${activeCategory}-${skill}`}
                       drag
                       dragConstraints={screenRef}
                       dragElastic={0.4}
                       dragMomentum={true}
                       initial={{ opacity: 0, scale: 0, y: -60 }}
                       animate={{ opacity: 1, scale: 1, y: 0 }}
                       transition={{
                         type: "spring",
                         stiffness: 300,
                         damping: 18,
                         delay: i * 0.04
                       }}
                       whileDrag={{ scale: 1.12, zIndex: 50, cursor: "grabbing" }}
                       whileHover={{ scale: 1.06, borderColor: "rgba(63,166,132,0.5)" }}
                       className="cursor-grab active:cursor-grabbing px-4 py-2 md:px-5 md:py-2.5 bg-[#18181d] shadow-[0_6px_16px_rgba(0,0,0,0.5)] rounded-lg border border-white/8 flex items-center justify-center text-xs md:text-sm tracking-widest text-white/80 hover:text-white font-bold"
                       style={{ fontFamily: '"Courier New", monospace' }}
                    >
                       {skill}
                    </motion.div>
                 ))}
             </div>
             
             {/* Draggable hint */}
             <div className="absolute bottom-4 left-0 w-full text-center text-[10px] uppercase tracking-widest text-white/20 z-10 pointer-events-none font-bold">
                PHYSICS ACTIVE · GRAB TO DRAG
             </div>
          </div>
       </div>
    </Panel>
  );
}
