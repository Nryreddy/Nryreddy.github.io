"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/bento/Sidebar";
import { PowerButton } from "@/components/bento/PowerButton";
import { SocialsPanel } from "@/components/bento/SocialsPanel";
import { PortfolioPanel } from "@/components/bento/PortfolioPanel";
import { ProjectsPanel } from "@/components/bento/ProjectsPanel";
import { SkillsPanel } from "@/components/bento/SkillsPanel";
import { EducationPanel } from "@/components/bento/EducationPanel";
import { ExperiencePanel } from "@/components/bento/ExperiencePanel";
import { AboutPanel } from "@/components/bento/AboutPanel";

export default function Home() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  return (
    <main className="min-h-screen bg-background dot-pattern p-4 md:p-8 flex items-start justify-center font-sans selection:bg-primary selection:text-white relative">
      <AnimatePresence mode="wait">
        {!isPoweredOn ? (
           <motion.div
             key="power"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
             className="absolute inset-0 z-50 flex items-center justify-center"
           >
             <PowerButton onPower={() => setIsPoweredOn(true)} />
           </motion.div>
        ) : (
           <motion.div
             key="dashboard"
             initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="w-full max-w-7xl mx-auto h-auto min-h-[85vh] z-10 pb-12 transition-all"
           >
             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto min-h-[85vh]">
               
               {/* LEFT COLUMN: SIDEBAR & PLAYGROUND */}
               <div className="col-span-1 md:col-span-4 h-max md:sticky md:top-8 flex flex-col gap-4 md:gap-6 z-20">
                 {/* Main Identity UI */}
                 <div className="h-max">
                    <Sidebar isPoweredOn={isPoweredOn} />
                 </div>
                 
                 {/* Side Projects Node */}
                 <div className="flex-1 min-h-[250px] shrink-0">
                    <ProjectsPanel />
                 </div>
               </div>

               {/* MAIN CONTENT AREA: Socials + Portfolio + Skills */}
               <div className="col-span-1 md:col-span-8 h-auto flex flex-col gap-4 md:gap-6 relative z-10">
                 
                 {/* Top Row: 3 standalone social panels */}
                 <div className="h-auto md:h-[110px] shrink-0 max-w-[400px]">
                   <SocialsPanel />
                 </div>

                 {/* About Me */}
                 <div className="flex-none w-full">
                   <AboutPanel />
                 </div>

                 {/* Middle block: Portfolio Main */}
                 <div className="flex-none min-h-[400px]">
                   <PortfolioPanel />
                 </div>

                 {/* Bottom block: The Gamified Skills Deck */}
                 <div className="flex-none w-full">
                    <SkillsPanel />
                 </div>

                 {/* Expansion Block: Education */}
                 <div className="flex-none w-full">
                    <EducationPanel />
                 </div>

                 {/* Expansion Block: Experience Retro Gadget */}
                 <div className="flex-none w-full">
                    <ExperiencePanel />
                 </div>

               </div>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
