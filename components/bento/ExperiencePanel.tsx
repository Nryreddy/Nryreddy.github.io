"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";
import { TerminalSquare, ChevronRight } from "lucide-react";

export function ExperiencePanel() {
  const { playDroplet } = useAudio();
  const [activeIdx, setActiveIdx] = useState(0);

  const jobs = [
    {
      id: "CH_01",
      system: "HAL_MAINFRAME",
      company: "Hindustan Aeronautics Limited",
      role: "Software Engineer Intern",
      location: "Bengaluru, India",
      date: "Sep 2022 — Nov 2022",
      bullets: [
        "> Developed cockpit analytics features for real-time aircraft system monitoring, supporting earlier identification of component issues and contributing to more proactive maintenance planning.",
        "> Prepared training datasets by cleaning and integrating multiple years of historical maintenance records with high-frequency sensor data, improving data consistency and readiness for predictive modeling.",
        "> Trained and evaluated machine learning models for failure prediction, achieving a 12% improvement in predictive accuracy compared to baseline approaches."
      ]
    },
    {
      id: "CH_02",
      system: "INEURON_CORE",
      company: "iNeuron.ai",
      role: "Machine Learning Intern",
      location: "Bengaluru, India",
      date: "Dec 2021 — Apr 2022",
      bullets: [
        "> Spearheaded a Credit Card Default Prediction project, focusing on robust data pre-processing and feature engineering to improve model performance and stability.",
        "> Applied exploratory data analysis (EDA) and visualisation (Seaborn, Matplotlib) to understand class imbalance, key drivers of default, and guide feature selection.",
        "> Implemented and tuned supervised learning models in Python (Scikit-learn), improving model stability and generalisation across validation sets."
      ]
    }
  ];

  const handleSwap = (idx: number) => {
    if (activeIdx !== idx) {
      playDroplet();
      setActiveIdx(idx);
    }
  };

  const currentJob = jobs[activeIdx];

  const screenVariants: Variants = {
    hidden: { opacity: 0, filter: "brightness(3) saturate(0) blur(5px)", scale: 0.98 },
    show: { 
        opacity: 1, 
        filter: "brightness(1) saturate(1) blur(0px)", 
        scale: 1,
        transition: { duration: 0.2, staggerChildren: 0.15 } 
    },
    exit: { opacity: 0, scale: 0.99, filter: "brightness(0) blur(10px)", transition: { duration: 0.1 } }
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.2 } }
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#1b1b1e] rounded-md border-[6px] border-[#111113] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group p-2 md:p-3 gap-2 md:gap-3">
      
      {/* Gadget Rivets */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#333] shadow-inner"></div>
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#333] shadow-inner"></div>
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#333] shadow-inner"></div>
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#333] shadow-inner"></div>

      {/* Left Column: Physical Channel Selectors */}
      <div className="w-full md:w-[220px] bg-[#141416] border-2 border-[#1c1c1f] rounded flex flex-col shrink-0 p-3 md:p-4 shadow-inner">
         <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
            <TerminalSquare size={16} className="text-[#ffb000]" />
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffb000]">Tech_Logs</h2>
         </div>

         <div className="flex flex-col gap-3">
            {jobs.map((job, idx) => (
               <button
                 key={job.id}
                 onClick={() => handleSwap(idx)}
                 className={`relative w-full text-left py-3 px-4 flex flex-col transition-all duration-100 border-l-[3px]
                   ${activeIdx === idx 
                      ? 'bg-[#1e1e22] border-[#ffb000] shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] translate-y-[2px]' 
                      : 'bg-[#222226] border-[#333] hover:bg-[#2a2a2f] shadow-[0_4px_0_0_#111] hover:translate-y-[1px] hover:shadow-[0_3px_0_0_#111]'
                   }`}
               >
                 <span className={`text-[10px] font-black uppercase tracking-widest ${activeIdx === idx ? 'text-[#ffb000]' : 'text-white/40'}`}>
                    {job.id}
                 </span>
                 <span className={`text-xs font-bold mt-1 ${activeIdx === idx ? 'text-white' : 'text-white/60'}`}>
                    {job.company}
                 </span>
                 
                 {activeIdx === idx && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ffb000] shadow-[0_0_8px_#ffb000]"></span>
                 )}
               </button>
            ))}
         </div>
      </div>

      {/* Right Column: Deep Inset Phosphor Screen */}
      <div className="flex-1 bg-[#0a0805] rounded border-[8px] border-[#151518] shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden flex flex-col font-mono p-5 md:p-8 min-h-[400px]">
         
         {/* Amber Phosphor Glow Overlay */}
         <div className="pointer-events-none absolute inset-0 bg-[#ffb000]/[0.02] z-10"></div>
         {/* Tight CRT Scanlines */}
         <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.4))] bg-[length:100%_3px] z-20 opacity-80 mix-blend-overlay"></div>
         
         <AnimatePresence mode="wait">
            <motion.div
               key={activeIdx}
               variants={screenVariants}
               initial="hidden"
               animate="show"
               exit="exit"
               className="relative z-30 flex flex-col h-full text-[#ffb000] drop-shadow-[0_0_5px_rgba(255,176,0,0.6)]"
            >
               {/* Terminal Output Header */}
               <motion.div variants={lineVariants} className="flex flex-col border-b border-[#ffb000]/20 pb-4 mb-6">
                  <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70 mb-1">
                     SYSTEM.CONNECT({currentJob.system})
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                     {currentJob.role}
                  </h3>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs font-bold uppercase tracking-widest opacity-80 mt-2">
                     <span className="text-white/70">AT {currentJob.company}</span>
                     <span>[{currentJob.date}] // {currentJob.location}</span>
                  </div>
               </motion.div>

               {/* Terminal Bullets Output */}
               <div className="flex flex-col gap-4">
                  {currentJob.bullets.map((bullet, i) => (
                     <motion.div 
                        key={i} 
                        variants={lineVariants}
                        className="flex items-start gap-3"
                     >
                        <ChevronRight size={16} className="mt-0.5 shrink-0 opacity-80" />
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium opacity-90 tracking-wide text-[#ffb000]">
                           {bullet.slice(2)} 
                        </p>
                     </motion.div>
                  ))}
               </div>
               
               {/* Blinking cursor */}
               <motion.div 
                  variants={lineVariants}
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-3 h-5 bg-[#ffb000] shadow-[0_0_8px_#ffb000] mt-6 ml-2" 
               />
               
            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}
