"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        <p className="text-sm text-muted-foreground">
          Technologies I work with daily
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div 
            key={category.title} 
            className="space-y-4 p-4 rounded-xl bg-secondary/50 border border-border"
          >
            {/* Category Title */}
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {category.title}
            </h3>

            {/* Skills as compact badges */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="text-xs px-3 py-1.5 font-normal bg-background border border-border cursor-default"
                >
                  <span className="mr-1.5">{skill.icon}</span>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
