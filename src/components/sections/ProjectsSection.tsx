"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <span className="text-sm text-muted-foreground">
          Personal work
        </span>
      </div>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <Card
            key={project.name}
            className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${
              index === 0
                ? "border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                : ""
            }`}
          >
            {/* Featured Badge for first project */}
            {index === 0 && (
              <div className="px-5 pt-4">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured
                </Badge>
              </div>
            )}

            <div className="p-5 space-y-4">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {project.objective}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Work Done */}
              {project.workDone.length > 0 && (
                <ul className="space-y-2">
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

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs px-2.5 py-0.5 font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
