"use client";

import { MapPin, Briefcase, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export function AboutSection() {
  return (
    <section className="space-y-10">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
        </span>
        <span className="text-sm font-medium">
          Available for opportunities
        </span>
      </div>

      {/* Headline */}
      <div className="space-y-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          {profileData.headline}
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
          {profileData.role}
        </p>
      </div>

      {/* Intro paragraph */}
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        {profileData.intro}
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-secondary border border-border">
            <MapPin className="h-4 w-4" />
          </div>
          <span className="font-medium">{profileData.location}</span>
        </div>
        
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-secondary border border-border">
            <Briefcase className="h-4 w-4" />
          </div>
          <span className="font-medium">{profileData.experience}</span>
        </div>
        
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-secondary border border-border">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="font-medium">{profileData.projectCount}</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <Button size="lg" className="gap-2 group" asChild>
          <Link href="#projects">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="#contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </section>
  );
}
