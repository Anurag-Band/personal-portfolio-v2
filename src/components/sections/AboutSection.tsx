"use client";

import { MapPin, Briefcase, Rocket, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export function AboutSection() {
  return (
    <section className="space-y-8 py-8">
      <div className="space-y-4">
        {/* Sub-headline */}
        <p className="text-muted-foreground/80 font-medium italic tracking-wide text-xs md:text-sm">
          {profileData.role.split('|')[0].trim()}
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
          {profileData.headline.split(' ').slice(0, 2).join(' ')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">
            {profileData.headline.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Intro paragraph */}
        <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-2xl">
          {profileData.intro}
        </p>
      </div>

      {/* Key Benefits / Tech Focus */}
      <div className="space-y-3">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
          Core Expertise
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "AI Orchestration", color: "blue" },
            { label: "High Throughput", color: "emerald" },
            { label: "RAG Engine", color: "orange" },
            { label: "Cloud Native", color: "purple" }
          ].map((benefit) => (
            <div 
              key={benefit.label}
              className={`px-3 py-1 rounded-full text-[10px] font-bold border backdrop-blur-sm transition-all duration-300
                ${benefit.color === 'blue' ? 'bg-blue-500/5 border-blue-500/20 text-blue-400 shadow-sm' : ''}
                ${benefit.color === 'emerald' ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400 shadow-sm' : ''}
                ${benefit.color === 'orange' ? 'bg-orange-500/5 border-orange-500/20 text-orange-400 shadow-sm' : ''}
                ${benefit.color === 'purple' ? 'bg-purple-500/5 border-purple-500/20 text-purple-400 shadow-sm' : ''}
              `}
            >
              {benefit.label}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button 
          size="lg" 
          className="rounded-full px-6 h-11 bg-white text-black hover:bg-white/90 font-bold transition-all duration-300 shadow-lg group text-sm" 
          asChild
        >
          <Link href="#contact">
            Start Project
            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button 
          variant="ghost" 
          className="group text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1.5 text-sm" 
          asChild
        >
          <Link href="#projects">
            View Works
            <ArrowUpRight className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
