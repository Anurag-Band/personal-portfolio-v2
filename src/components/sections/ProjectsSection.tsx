"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Notable Projects</h2>

      <div className="space-y-6">
        {projectsData.map((project) => (
          <Card
            key={project.name}
            className="overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Project Thumbnail */}
            <div className="relative h-52 w-full overflow-hidden bg-muted">
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>

            {/* Project Content */}
            <div className="p-5 space-y-3">
              {/* Project Name with Link */}
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">{project.name}</h3>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.objective}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 font-normal"
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
