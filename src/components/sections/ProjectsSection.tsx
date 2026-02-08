"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="text-sm text-muted-foreground">
            Personal projects & open source
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <Card
            key={project.name}
            className="card-hover overflow-hidden"
          >
            <div className="p-6 space-y-5">
              {/* Featured Badge for first project */}
              {index === 0 && (
                <Badge variant="secondary" className="border border-border">
                  <Star className="h-3 w-3 mr-1.5 fill-current" />
                  Featured
                </Badge>
              )}

              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <h3 className={`font-bold ${index === 0 ? "text-xl" : "text-lg"}`}>
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.githubUrl && (
                    <Button 
                      variant={index === 0 ? "default" : "outline"} 
                      size="sm" 
                      className="gap-2"
                      asChild
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Work Done */}
              {project.workDone.length > 0 && (
                <ul className="space-y-2.5">
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

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs px-3 py-1 font-normal border border-border"
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
