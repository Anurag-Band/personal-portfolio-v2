"use client";

import { MapPin, Briefcase, Rocket } from "lucide-react";
import { profileData } from "@/data/profile";

export function AboutSection() {
  return (
    <section className="space-y-8">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
          Available for opportunities
        </span>
      </div>

      {/* Headline with gradient */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text">
            {profileData.headline}
          </span>
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          {profileData.role}
        </p>
      </div>

      {/* Intro paragraph */}
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        {profileData.intro}
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap items-center gap-6 pt-2">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{profileData.location}</span>
        </div>
        
        <div className="hidden sm:block h-4 w-px bg-border" />
        
        <div className="flex items-center gap-2 text-sm">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{profileData.experience}</span>
        </div>
        
        <div className="hidden sm:block h-4 w-px bg-border" />
        
        <div className="flex items-center gap-2 text-sm">
          <Rocket className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{profileData.projectCount}</span>
        </div>
      </div>
    </section>
  );
}
