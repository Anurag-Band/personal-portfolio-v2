"use client";

import { Calendar, FileText, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profileData } from "@/data/profile";

// Icon mapping for social links - only show Github, Twitter, Resume, Meeting
const iconMap = {
  Github,
  Twitter,
  FileText,
  Calendar,
};

export function Sidebar() {
  // Filter to show only Github, Twitter, Resume, Meeting
  const displayLinks = profileData.socialLinks.filter((link) =>
    ["Github", "Twitter", "Resume", "Meeting"].includes(link.name),
  );

  return (
    <div className="flex h-screen items-center justify-center p-8">
      <Card className="w-full max-w-sm p-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image with dotted border */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/20" />
            <Avatar className="h-32 w-32">
              <AvatarImage src={profileData.image} alt={profileData.name} />
              <AvatarFallback className="text-2xl font-semibold">
                {profileData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div className="text-center">
            <h2 className="text-xl font-semibold italic">{profileData.name}</h2>
          </div>

          {/* Social Links */}
          <div className="flex w-full flex-col gap-3">
            {displayLinks.map((link) => {
              const Icon = iconMap[link.name as keyof typeof iconMap];
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  className="w-full justify-start gap-3 h-12 text-base"
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
                    {Icon && <Icon className="h-5 w-5" />}
                    {link.name}
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
