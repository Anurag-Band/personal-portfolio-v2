"use client";

import { profileData } from "@/data/profile";

export function AboutSection() {
  return (
    <section className="space-y-6">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        {profileData.headline}
      </h1>

      {/* Role with highlight */}
      <h2 className="text-xl md:text-2xl font-semibold">{profileData.role}</h2>

      {/* Intro paragraph */}
      <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
        {profileData.intro}
      </p>

      {/* Stats - Inline without cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
        {/* Location */}
        <div>
          <p className="text-xl font-bold">{profileData.location}</p>
          <p className="text-sm text-muted-foreground">Location</p>
        </div>

        {/* Experience */}
        <div>
          <p className="text-xl font-bold">{profileData.experience}</p>
          <p className="text-sm text-muted-foreground">Experience</p>
        </div>

        {/* Projects Count */}
        <div>
          <p className="text-xl font-bold">{profileData.projectCount}</p>
          <p className="text-sm text-muted-foreground">Projects</p>
        </div>
      </div>
    </section>
  );
}
