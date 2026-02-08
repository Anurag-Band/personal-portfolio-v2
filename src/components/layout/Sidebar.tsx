"use client";

import { Calendar, FileText, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profileData } from "@/data/profile";

// Icon mapping for social links
const iconMap = {
  Github,
  Linkedin,
  Twitter,
  FileText,
  Calendar,
};

export function Sidebar() {
  // Filter to show only key links
  const displayLinks = profileData.socialLinks.filter((link) =>
    ["Github", "LinkedIn", "Twitter", "Resume", "Meeting"].includes(link.name),
  );

  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center p-8">
      <Card className="w-full max-w-sm p-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image */}
          <div className="relative">
            <Avatar className="h-32 w-32 border-2 border-border">
              <AvatarImage src={profileData.image} alt={profileData.name} />
              <AvatarFallback className="text-3xl font-bold bg-secondary">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name & Username */}
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold">{profileData.name}</h2>
            <p className="text-sm text-muted-foreground font-medium">{profileData.username}</p>
          </div>

          {/* Social Links */}
          <div className="flex w-full flex-col gap-2">
            {displayLinks.map((link) => {
              const iconKey = link.name === "LinkedIn" ? "Linkedin" : link.name;
              const Icon = iconMap[iconKey as keyof typeof iconMap];
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  className="w-full justify-between gap-3 h-12 group"
                  asChild
                >
                  <Link
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="flex items-center gap-3">
                      {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
                      <span>{link.name}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
