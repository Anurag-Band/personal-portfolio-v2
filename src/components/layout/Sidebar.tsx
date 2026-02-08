"use client";

import { Calendar, FileText, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profileData } from "@/data/profile";

// Icon mapping for social links
const iconMap = {
  Github,
  LinkedIn: Linkedin,
  Twitter,
  Resume: FileText,
  Meeting: Calendar,
};

export function Sidebar() {
  // Filter to show only key links
  const displayLinks = profileData.socialLinks.filter((link) =>
    ["Github", "LinkedIn", "Twitter", "Resume", "Meeting"].includes(link.name),
  );

  return (

    <div className="flex h-full items-start justify-center py-4 px-4 lg:px-6 animate-in fade-in slide-in-from-left-8 duration-700 ease-out">
      <Card className="w-full relative overflow-hidden bg-[#0a0a0a] border-white/5 shadow-2xl transition-all duration-300 group/card rounded-[32px]">
        {/* Subtle Decorative Background Gradient */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
        
        <div className="relative flex flex-col items-center space-y-5 pt-8 pb-6 px-5">
          {/* Profile Image with Decorative Ring */}
          <div className="relative">
            <div className="h-24 w-24 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden bg-black">
              <Avatar className="h-18 w-18 relative z-10">
                <AvatarImage src={profileData.image} alt={profileData.name} className="object-cover" />
                <AvatarFallback className="text-2xl font-black bg-secondary text-primary">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-30" />
            </div>
            {/* Country Badge */}
            <div className="absolute bottom-1 right-1 h-6 w-9 rounded-md bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[10px] shadow-lg">
              🇮🇳
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              {profileData.name}
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              {profileData.role.split('|')[0].trim()} & FULL STACK DEVELOPER
            </p>
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-medium text-muted-foreground/80">
              Building @ {profileData.name.split(' ')[0]} Labs
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 w-full py-4 border-y border-white/5 gap-2">
            <div className="text-center">
              <p className="text-[9px] uppercase font-black tracking-widest text-muted-foreground/50">Exp</p>
              <p className="text-base font-bold text-white leading-tight">{profileData.experience.split('+')[0]}+</p>
            </div>
            <div className="text-center border-x border-white/5">
              <p className="text-[9px] uppercase font-black tracking-widest text-muted-foreground/50">Done</p>
              <p className="text-base font-bold text-white leading-tight">{profileData.projectCount.split('+')[0]}+</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] uppercase font-black tracking-widest text-muted-foreground/50">Clients</p>
              <p className="text-base font-bold text-white leading-tight">10+</p>
            </div>
          </div>

          {/* Social Icons at Bottom */}
          <div className="flex items-center justify-center gap-3 pt-2">
            {displayLinks.filter(l => !["Resume", "Meeting"].includes(l.name)).map((link) => {
              const Icon = iconMap[link.name as keyof typeof iconMap];
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-xl bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 hover:text-primary text-muted-foreground transition-all duration-300 group/icon"
                  asChild
                >
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    {Icon && <Icon className="h-4 w-4 transition-transform group-hover/icon:scale-110" />}
                  </Link>
                </Button>
              );
            })}
          </div>
          
          {/* Action Links (Resume/Meeting) */}
          <div className="flex w-full gap-2 pt-2">
            {displayLinks.filter(l => ["Resume", "Meeting"].includes(l.name)).map((link) => {
               const Icon = iconMap[link.name as keyof typeof iconMap];
               return (
                 <Button
                   key={link.name}
                   variant="outline"
                   className="flex-1 h-9 text-[10px] font-bold uppercase tracking-wider border-white/5 bg-white/5 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                   asChild
                 >
                   <Link href={link.url} target="_blank">
                     {Icon && <Icon className="mr-2 h-3 w-3" />}
                     {link.name}
                   </Link>
                 </Button>
               );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
