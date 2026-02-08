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
      <Card className="w-full relative overflow-hidden bg-card/40 backdrop-blur-xl border-white/10 shadow-2xl transition-all duration-300 hover:shadow-primary/5 group/card">
        {/* Subtle Decorative Background Gradient */}
        <div className="absolute -top-24 -right-24 h-48 w-48 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-primary/10 blur-[100px] rounded-full" />
        
        <div className="relative flex flex-col items-center space-y-4 p-5">
          {/* Profile Image with Decorative Ring */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <Avatar className="h-28 w-28 border-4 border-background relative ring-4 ring-primary/5">
              <AvatarImage src={profileData.image} alt={profileData.name} className="object-cover" />
              <AvatarFallback className="text-2xl font-black bg-gradient-to-br from-secondary to-background text-primary">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {/* Status Badge */}
            <div className="absolute bottom-1.5 right-1.5 h-5 w-5 rounded-full bg-background border-4 border-background flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Name & Username */}
          <div className="text-center space-y-1">
            <h2 className="text-xl font-black tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              {profileData.name}
            </h2>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/30">
              {profileData.username}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex w-full flex-col gap-1.5">
            {displayLinks.map((link) => {
              const Icon = iconMap[link.name as keyof typeof iconMap];
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  className="w-full justify-between gap-3 h-10 px-4 relative group overflow-hidden border-white/5 bg-white/[0.02] hover:bg-primary/[0.05] hover:border-primary/20 transition-all duration-300"
                  asChild
                >
                  <Link
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="flex items-center gap-3 relative z-10">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/80 group-hover:bg-primary/20 transition-colors">
                        {Icon && <Icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />}
                      </div>
                      <span className="font-semibold tracking-wide text-sm">{link.name}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all relative z-10" />
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </Link>
                </Button>
              );
            })}
          </div>
          
          {/* Footer Info maybe? */}
          <p className="text-[10px] text-muted-foreground/40 font-medium uppercase tracking-[0.2em]">
            Available for opportunities
          </p>
        </div>
      </Card>
    </div>
  );
}
