"use client";
import { Panel } from "@/components/ui/Panel";
import { useAudio } from "@/hooks/useAudio";
import { Magnetic } from "@/components/ui/Magnetic";

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export function SocialsPanel() {
  const { playRedirect, playDroplet } = useAudio();

  const socials = [
    { url: "mailto:nryreddy23@gmail.com", icon: <MailIcon />, bg: "bg-[#EA4335]/10", border: "border-[#EA4335]/20", hover: "hover:bg-[#EA4335] hover:text-white" },
    { url: "https://github.com/Nryreddy", icon: <GithubIcon />, bg: "bg-white/5", border: "border-white/10", hover: "hover:bg-white hover:text-black" },
    { url: "https://www.linkedin.com/in/nithesh-reddy-2903a91a9/", icon: <LinkedinIcon />, bg: "bg-[#0A66C2]/10", border: "border-[#0A66C2]/20", hover: "hover:bg-[#0A66C2] hover:text-white" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6 h-full">
      {socials.map((s, i) => (
        <Panel key={i} className="p-0 aspect-square group backdrop-blur-xl relative">
           <Magnetic strength={0.3} className="absolute inset-0 w-full h-full flex items-center justify-center z-20">
             <a
               href={s.url}
               target={s.url.startsWith("http") ? "_blank" : undefined}
               rel="noopener noreferrer"
               onClick={playRedirect}
               className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex items-center justify-center transition-all duration-300 ${s.bg} border ${s.border} ${s.hover}`}
             >
               {s.icon}
             </a>
           </Magnetic>
        </Panel>
      ))}
    </div>
  );
}
