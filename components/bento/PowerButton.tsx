"use client";
import { motion } from "framer-motion";
import { Power, Plus } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";

interface PowerButtonProps {
  onPower: () => void;
}

export function PowerButton({ onPower }: PowerButtonProps) {
  const { playPowerOn } = useAudio();

  const handlePower = () => {
    playPowerOn();
    onPower();
  };

  return (
    <div className="relative flex flex-col items-center pt-32">
      {/* The Spring */}
      <motion.div 
        initial={{ y: -500 }} 
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center z-0 origin-bottom mb-[-120px]"
      >
        <svg width="40" height="400" viewBox="0 0 40 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3B5BCA] stroke-current">
          <path d="M20 0 L20 20 L35 30 L5 50 L35 70 L5 90 L35 110 L5 130 L35 150 L5 170 L35 190 L5 210 L35 230 L5 250 L35 270 L5 290 L35 310 L5 330 L35 350 L5 370 L20 385 L20 400" strokeWidth="8" strokeLinecap="round" strokeLinejoin="miter"/>
        </svg>
        <div className="w-8 h-8 bg-[#D4A017] rounded-md -mt-4 shadow-md z-0"></div>
      </motion.div>

      {/* Main Device Box */}
      <motion.div
        initial={{ y: -500, rotate: -3 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.1 }}
        className="w-[320px] md:w-[380px] bg-[#3B5BCA] rounded-3xl relative z-10 shadow-2xl pt-6 pb-8 px-6"
      >
         {/* Screws */}
         <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-[#2A4197] flex items-center justify-center opacity-60"><Plus size={14} className="text-[#3B5BCA]" /></div>
         <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#2A4197] flex items-center justify-center opacity-60"><Plus size={14} className="text-[#3B5BCA]" /></div>
         <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#2A4197] flex items-center justify-center opacity-60"><Plus size={14} className="text-[#3B5BCA]" /></div>
         <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-[#2A4197] flex items-center justify-center opacity-60"><Plus size={14} className="text-[#3B5BCA]" /></div>

         {/* Top Grill */}
         <div className="flex flex-col gap-1 items-center mb-6">
            <div className="flex gap-1">{[...Array(6)].map((_, i) => <div key={`t1-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#2A4197]"></div>)}</div>
            <div className="flex gap-1">{[...Array(6)].map((_, i) => <div key={`t2-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#2A4197]"></div>)}</div>
         </div>

         {/* Screen */}
         <div className="bg-[#1f1f1f] rounded-lg p-6 pb-10 min-h-[160px] relative overflow-hidden noise-overlay shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]">
            <h2 className="text-[#f1f1f1] text-3xl font-bold tracking-tight z-10 relative">I&apos;m Nithesh Reddy</h2>
            <p className="text-[#969696] text-[15px] font-medium mt-3 leading-relaxed z-10 relative pr-4">
              AI and Data Engineer, based in Australia.
            </p>
         </div>

         {/* Bottom section with Button and bubble */}
         <div className="relative mt-8 flex justify-center pt-2">
            
            {/* Speech Bubble */}
            <motion.div 
               animate={{ y: [0, -8, 0] }} 
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="absolute -top-[50px] right-6 md:right-10 w-[70px] h-[70px] bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-20 pointer-events-none flex items-center justify-center"
            >
               <span className="text-[#202024] font-black tracking-wide text-[17px] relative z-10 mt-0.5">CLICK</span>
               
               {/* Curved Comic Tail */}
               <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -bottom-[2px] -left-[4px] text-white fill-current rotate-[15deg] z-0 drop-shadow-md">
                 <path d="M24 0C24 0 16 12 0 24C12 22 24 0 24 0Z" />
               </svg>
            </motion.div>

            {/* Inset ring */}
            <div className="w-[100px] h-[100px] bg-[#2A4197] rounded-full flex items-center justify-center shadow-inner">
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95, y: 3 }}
                 onClick={handlePower}
                 className="w-[70px] h-[70px] bg-[#D4A017] rounded-full flex items-center justify-center shadow-[0_6px_0_0_#9c7611,0_10px_20px_rgba(0,0,0,0.5)] transition-all hover:shadow-[0_4px_0_0_#9c7611,0_8px_15px_rgba(0,0,0,0.4)] active:shadow-[0_0px_0_0_#9c7611,0_0px_0px_rgba(0,0,0,0)] flex-shrink-0"
               >
                 <Power size={28} className="text-[#bd8c11] stroke-[3px]" />
               </motion.button>
            </div>
         </div>

         {/* Bottom Grill */}
         <div className="flex flex-col gap-1 items-center mt-10 mb-2">
            <div className="flex gap-1">{[...Array(6)].map((_, i) => <div key={`b1-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#2A4197]"></div>)}</div>
            <div className="flex gap-1">{[...Array(6)].map((_, i) => <div key={`b2-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#2A4197]"></div>)}</div>
         </div>

      </motion.div>
    </div>
  );
}
