"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      {skillsData.map((category) => (
        <div key={category.title} className="space-y-3">
          {/* Category Icon and Title */}
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground text-background">
              <span className="text-xs font-bold">
                {category.title === "Languages"
                  ? "💻"
                  : category.title === "Frameworks & Libraries"
                    ? "⚡"
                    : category.title === "Databases"
                      ? "🗄️"
                      : category.title === "Tools"
                        ? "🔧"
                        : "🤖"}
              </span>
            </div>
            <h3 className="text-sm font-semibold">{category.title}</h3>
          </div>

          {/* Skills as compact badges */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="text-xs px-3 py-1 font-normal hover:bg-secondary/80 transition-colors"
              >
                <span className="mr-1.5">{skill.icon}</span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
