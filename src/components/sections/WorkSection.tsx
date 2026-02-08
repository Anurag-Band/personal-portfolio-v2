"use client";

import { ExternalLink, ChevronRight, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workData } from "@/data/work";

export function WorkSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Experience</h2>
          <p className="text-sm text-muted-foreground">
            My professional journey
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {workData.map((experience) => (
          <Card
            key={experience.company}
            className="card-hover overflow-hidden"
          >
            <div className="p-6">
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-secondary border border-border flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain p-2.5"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    {/* Fallback icon */}
                    <Building2 className="h-6 w-6 text-muted-foreground/50 absolute" />
                  </div>

                  <div className="space-y-1">
                    <Link
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
                    >
                      <h3 className="text-xl font-bold">{experience.company}</h3>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {experience.from} – {experience.to}
                    </p>
                  </div>
                </div>

                {/* Current Badge */}
                {experience.to === "Present" && (
                  <Badge variant="secondary" className="border border-border">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                    </span>
                    Current
                  </Badge>
                )}
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {experience.projects.map((project, projectIndex) => (
                  <div
                    key={`${project.name}-${projectIndex}`}
                    className={`relative ${
                      projectIndex > 0
                        ? "pt-6 border-t border-dashed"
                        : ""
                    }`}
                  >
                    {/* Project Name */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-1.5 rounded-md bg-secondary border border-border mt-0.5">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold mb-2">{project.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.objective}
                        </p>
                      </div>
                    </div>

                    {/* Work Done */}
                    {project.workDone.length > 0 && (
                      <ul className="space-y-3 ml-10">
                        {project.workDone.map((item, itemIndex) => (
                          <li
                            key={`work-${itemIndex}`}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
