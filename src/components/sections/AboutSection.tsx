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

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button 
          size="lg" 
          className="rounded-full px-8 h-12 bg-foreground text-background hover:opacity-90 font-bold transition-all duration-300 shadow-lg group text-sm" 
          asChild
        >
          <Link href="#projects">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
