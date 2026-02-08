"use client";

import { Calendar, FileText, Github, Linkedin, Twitter } from "lucide-react";
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
          {/* Profile Image with gradient ring */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-sm" />
            <Avatar className="h-32 w-32 border-2 border-background relative">
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
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold">{profileData.name}</h2>
            <p className="text-sm text-muted-foreground">{profileData.username}</p>
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
                  className="w-full justify-start gap-3 h-11"
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
                    {Icon && <Icon className="h-4 w-4" />}
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
