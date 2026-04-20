"use client";
import { useState } from "react";
import { Panel } from "@/components/ui/Panel";
import { ArrowUpRight, Image as ImageIcon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";

export function PortfolioPanel() {
  const { playDroplet, playRedirect } = useAudio();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects = [
    { 
      id: 1, 
      title: "AI Email Triage System", 
      category: "OpenClaw Agent",
      link: "https://www.youtube.com/watch?v=kETHtwTJ6Cw",
      bullets: [
        "Built and deployed an AI-powered email triage system using OpenClaw to automatically classify, prioritise, and route incoming emails, reducing manual inbox processing time by ~75% and improving response consistency.",
        "Architected strict server security by deploying the AI agent on a VPS, secured remote access via VPN tunneling.",
        "Designed a sandboxed processing pipeline to reduce prompt injection risk and isolate untrusted email content before downstream actions, strengthening workflow safety for real-world use.",
        "Integrated Gmail, Notion, Sheets, and Calendar to automate lead capture, task logging, and meeting scheduling.",
        "Implemented priority tagging, duplicate detection, and structured logging to improve triage accuracy."
      ]
    },
    { 
      id: 2, 
      title: "Patient MemVault Agent", 
      category: "Clinical AI System",
      link: "https://www.linkedin.com/posts/nithesh-reddy-2903a91a9_aiengineering-llm-agents-ugcPost-7429731678517985280-9iEE",
      bullets: [
        "Built a stateful clinical AI system that transforms unstructured patient notes into a validated \"Current Truth\", reducing clinician chart review time from 2–3 minutes to under 10 seconds per query.",
        "Addressed context drift and hallucination risks by implementing extractor and memory agents with a clinician-in-the-loop Diff–Review–Commit workflow, ensuring 100% human validation before record updates and preventing outdated context from contaminating decisions.",
        "Integrated Mem0 as a semantic memory layer to replace raw chat-history prompting, enabling sub-second retrieval <300ms of patient data and improving response relevance by prioritizing structured facts."
      ]
    },
    { 
      id: 3, 
      title: "GuardianVision Alert", 
      category: "AI Incident Alerting System",
      link: "https://youtu.be/puxXXZ_KvLU",
      bullets: [
        "Designed and built a near real-time surveillance intelligence system that processes full-frame incident clips (±10s context), improving event understanding accuracy by ~40% compared to frame-only analysis.",
        "Implemented a multi-stage AI pipeline (clip preprocessing → vision-language reasoning → structured event classification), reducing false-positive alerts by ~50% through context-aware analysis.",
        "Developed a rule-based severity scoring and response engine (low/medium/high) that automated alert workflows, enabling real-time WhatsApp, Telegram and Email notifications (<3 seconds latency) for critical events.",
        "Strengthened system security by deploying the AI agent on a VPS with VPN-restricted access and designing a sandboxed processing pipeline to isolate untrusted inputs and mitigate prompt injection risks in downstream workflows."
      ]
    },
    { 
      id: 4, 
      title: "AWS BirdTag Platform", 
      category: "Computer Vision & AWS",
      link: "https://github.com/Nryreddy/aws-birdtag_platform",
      bullets: [
        "Built a serverless AI-powered bird detection system using YOLOv8, ONNX, AWS Lambda, S3, DynamoDB, ECR, CloudWatch, processing images and short videos without dedicated GPU infrastructure.",
        "Optimised model inference by exporting YOLOv8 to ONNX, reducing cold-start latency and enabling sub-second inference within Lambda resource constraints.",
        "Designed an event-driven architecture (S3 → Lambda → DynamoDB) to automatically detect species, store structured metadata, and generate JSON outputs, eliminating manual tagging workflows.",
        "Implemented structured logging and monitoring with CloudWatch, improving observability and ensuring reliable, repeatable inference execution under concurrent requests."
      ]
    },
    { 
      id: 5, 
      title: "MediRec Voice Agent", 
      category: "Voice Assistant",
      link: "https://github.com/Nryreddy/MediRec_Voice_Agent",
      bullets: [
        "Designed an agentic AI voice assistant to handle patient–clinic interactions, providing conversational query handling and summarised insights.",
        "Integrated n8n to orchestrate multi-step agent workflows for data retrieval, validation, and response generation, improving automation and response consistency.",
        "Focused on reliability and state handling to support healthcare-oriented conversational use cases."
      ]
    },
    { 
      id: 6, 
      title: "Skyways Data Ingestion", 
      category: "Cloud ETL Pipeline",
      link: "https://github.com/Nryreddy/Skyways_Data_Ingestion",
      bullets: [
        "Designed an automated cloud ETL pipeline to ingest daily flight data into an Amazon Redshift data warehouse for analytics and reporting.",
        "Implemented an event-driven ingestion flow using S3, EventBridge, Step Functions, with AWS Glue handling scalable data extraction, transformation, and loading.",
        "Improved data availability and pipeline reliability by eliminating manual ingestion steps and enabling scheduled, repeatable data processing."
      ]
    }
  ];

  const handleToggle = (id: number) => {
    playDroplet();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Panel className="flex flex-col p-4 md:p-5 gap-3 md:gap-4 bg-[#1e1e24] border-none shadow-2xl h-full min-h-[450px]">
      
      {/* Top Header Block */}
      <div className="flex items-center justify-between bg-[#151518] rounded-xl p-4 md:p-5 shadow-inner">
         <div className="flex items-center gap-4">
            <div className="text-[#fbbd23] bg-white/5 p-1 rounded-md border border-white/5">
               <ImageIcon size={20} strokeWidth={2.5} />
            </div>
            <h2 className="text-sm md:text-base font-black uppercase text-white tracking-[0.2em] relative top-[1px]">
               Portfolio
            </h2>
         </div>
         
         <div className="grid grid-cols-5 gap-[3px] opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
         </div>
      </div>

      <div className="flex-1 rounded-2xl bg-[#1d1d23] border-[6px] border-[#151518] shadow-inner relative overflow-hidden flex flex-col p-4 md:p-6">
         
         <div 
           className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay z-0" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
         ></div>

         <div className="relative z-10 flex flex-col gap-3 overflow-y-auto w-full h-full pr-1 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
           {projects.map((p) => {
             const isExpanded = expandedId === p.id;
             return (
               <motion.div 
                 layout
                 key={p.id} 
                 onClick={() => handleToggle(p.id)}
                 className={`w-full hover:bg-white/10 backdrop-blur-sm border transition-all cursor-pointer group shrink-0 overflow-hidden ${isExpanded ? 'bg-white/10 border-white/20 rounded-2xl shadow-lg' : 'bg-white/5 border-white/10 rounded-xl'}`}
               >
                 <div className={`flex items-center justify-between w-full ${isExpanded ? 'p-5' : 'p-4'}`}>
                   <div className="flex flex-col">
                     <motion.h3 layout className="text-lg md:text-xl font-bold text-white tracking-wide drop-shadow-sm">{p.title}</motion.h3>
                     <motion.p layout className="text-[10px] md:text-xs text-[#fbbd23] font-black tracking-widest uppercase mt-1 drop-shadow-md">{p.category}</motion.p>
                   </div>
                   
                   <div className="flex items-center gap-3">
                     <motion.div 
                        animate={{ rotate: isExpanded ? 180 : 0 }} 
                        transition={{ duration: 0.3 }}
                        className="text-white/40 group-hover:text-white transition-colors p-1"
                     >
                       <ChevronDown size={20} />
                     </motion.div>

                     <a 
                       href={p.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       onClick={(e) => { e.stopPropagation(); playRedirect(); }}
                       className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center group-hover:bg-[#fbbd23] transition-all border border-white/5 shadow-inner"
                     >
                        <ArrowUpRight size={18} className="text-white/70 group-hover:text-black transition-colors" />
                     </a>
                   </div>
                 </div>

                 <AnimatePresence>
                   {isExpanded && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3, ease: "easeInOut" }}
                       className="overflow-hidden px-5 pb-5"
                     >
                       <ul className="flex flex-col gap-3 border-t border-white/10 pt-4">
                         {p.bullets.map((bullet, idx) => (
                           <li key={idx} className="text-sm font-medium text-white/80 leading-relaxed tracking-wide flex items-start gap-3">
                             <span className="text-[#fbbd23] mt-0.5 shrink-0 select-none">▹</span>
                             <span>{bullet}</span>
                           </li>
                         ))}
                       </ul>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             );
           })}
         </div>

      </div>
    </Panel>
  );
}
