"use client";

import { ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workData } from "@/data/work";

export function WorkSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Experience</h2>
        <span className="text-sm text-muted-foreground">
          {workData.length} companies
        </span>
      </div>

      <div className="space-y-6">
        {workData.map((experience, index) => (
          <Card
            key={experience.company}
            className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-muted border flex-shrink-0">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-contain p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>

                <div>
                  <Link
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <h3 className="text-lg font-bold">{experience.company}</h3>
                    <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {experience.from} – {experience.to}
                  </p>
                </div>
              </div>

              {/* Current Badge */}
              {experience.to === "Present" && (
                <Badge
                  variant="secondary"
                  className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                >
                  Current
                </Badge>
              )}
            </div>

            {/* Projects */}
            <div className="space-y-6">
              {experience.projects.map((project, projectIndex) => (
                <div
                  key={`${project.name}-${projectIndex}`}
                  className={`${
                    projectIndex > 0
                      ? "pt-6 border-t border-dashed"
                      : ""
                  }`}
                >
                  {/* Project Name */}
                  <div className="flex items-start gap-2 mb-3">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <h4 className="text-base font-semibold">{project.name}</h4>
                  </div>

                  {/* Objective */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 pl-7">
                    {project.objective}
                  </p>

                  {/* Work Done */}
                  {project.workDone.length > 0 && (
                    <ul className="space-y-2 pl-7">
                      {project.workDone.map((item, itemIndex) => (
                        <li
                          key={`work-${itemIndex}`}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
