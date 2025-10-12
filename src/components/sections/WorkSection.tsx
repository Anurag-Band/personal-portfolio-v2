"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { workData } from "@/data/work";

export function WorkSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Work Experience</h2>

      <div className="space-y-8">
        {workData.map((experience, index) => (
          <div key={experience.company} className="relative">
            {/* Timeline Line - Only show if not the last item */}
            {index !== workData.length - 1 && (
              <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-border" />
            )}

            <div className="flex gap-6">
              {/* Timeline Dot & Logo */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted border-2 border-background shadow-sm">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-contain p-1.5"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <Card className="p-5 hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <Link
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors group"
                      >
                        <h3 className="text-lg font-bold">
                          {experience.company}
                        </h3>
                        <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">
                      {experience.from} - {experience.to}
                    </p>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    {experience.projects.map((project, projectIndex) => (
                      <div
                        key={`${project.name}-${projectIndex}`}
                        className="space-y-2"
                      >
                        {/* Project Name */}
                        <h4 className="text-base font-semibold text-primary">
                          {project.name}
                        </h4>

                        {/* Objective */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.objective}
                        </p>

                        {/* Work Done */}
                        {project.workDone.length > 0 && (
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {project.workDone.map((item) => (
                              <li key={item} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
