"use client";

import {
  Calendar,
  Code2,
  FileText,
  Github,
  Trophy,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

// Icon mapping for social links
const iconMap = {
  Github,
  Code2,
  Trophy,
  FileText,
  Twitter,
  Calendar,
};

export function Sidebar() {
  return (
    <div className="flex h-screen flex-col border-r bg-card p-6">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-border">
            <AvatarImage src={profileData.image} alt={profileData.name} />
            <AvatarFallback className="text-2xl">
              {profileData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <div className="text-center">
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
        </div>

        {/* Social Links */}
        <div className="flex w-full flex-col gap-2">
          {profileData.socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <Button
                key={link.name}
                variant="outline"
                className="w-full justify-start gap-2"
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
    </div>
  );
}
