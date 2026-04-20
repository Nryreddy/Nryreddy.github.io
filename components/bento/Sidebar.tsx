"use client";
import { useState, useEffect } from "react";



interface SidebarProps {
  isPoweredOn: boolean;
}

export function Sidebar({ isPoweredOn }: SidebarProps) {
  const [showStatic, setShowStatic] = useState(false);

  useEffect(() => {
    if (isPoweredOn) {
      // Estimate 5 full loops taking roughly 10 seconds total
      const timer = setTimeout(() => setShowStatic(true), 10000);
      return () => clearTimeout(timer);
    } else {
      setShowStatic(false);
    }
  }, [isPoweredOn]);

  return (
    <div className="w-full h-full bg-[#1e3489] rounded-3xl p-6 flex flex-col relative z-10 shadow-2xl overflow-hidden border border-white/10">
      
      {/* Header section */}
      <div className="flex justify-between items-center z-10">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center font-black pb-0.5 shadow-inner">
               <span className="text-white text-sm" style={{ transform: "rotate(-10deg)" }}>N</span>
            </div>
            <h2 className="text-[#f1f1f1] text-2xl z-10" style={{ fontFamily: '"Mileast", "Playfair Display", serif', letterSpacing: "1px" }}>Nithesh Reddy</h2>
         </div>
         {/* Dot grid decoration */}
         <div className="grid grid-cols-3 gap-1 opactiy-50">
            {[...Array(6)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>)}
         </div>
      </div>

      {/* Profile Display Screen */}
      <div className="mt-6 flex-1 min-h-[220px] max-h-[300px] relative bg-[#1c1c1c] rounded-2xl flex items-center justify-center noise-overlay overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.6)] border border-white/5">
        <div className={`transition-opacity duration-1000 w-full h-full absolute inset-0 ${isPoweredOn ? "opacity-100" : "opacity-20"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={showStatic ? "/images/character.png" : "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRqeHllZjM4aG9wYXR5aHlzcGx4eGdvdnZiaTB4YnpxM29nZjZyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TiDuxe6yNQit3Sk7m9/giphy.gif"} 
            alt="Profile Avatar" 
            className="w-full h-full object-cover transition-all duration-700" 
          />
        </div>
        {/* Slanted Glare inside screen */}
        <div className="absolute top-0 left-0 w-full h-[150%] bg-white/5 pointer-events-none transform -skew-x-[25deg] -translate-y-10 translate-x-[40%] z-10"></div>
        {/* Scanlines */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.15))] bg-[length:100%_4px] z-10"></div>
      </div>

    </div>
  );
}
