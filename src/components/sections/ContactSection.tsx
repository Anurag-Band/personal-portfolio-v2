"use client";

import { Check, Copy, Mail, Linkedin, Github, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactData } from "@/data/contact";
import { profileData } from "@/data/profile";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const linkedInLink = profileData.socialLinks.find(
    (link) => link.name === "LinkedIn"
  );
  const githubLink = profileData.socialLinks.find(
    (link) => link.name === "Github"
  );
  const meetingLink = profileData.socialLinks.find(
    (link) => link.name === "Meeting"
  );

  return (
    <section className="space-y-6 pb-12">
      <h2 className="text-2xl font-bold">Get In Touch</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Email Card */}
        <Card className="hover:shadow-md transition-all hover:border-primary/20">
          <CardContent className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{contactData.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(contactData.email)}
                className="h-9 w-9"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* LinkedIn Card */}
        {linkedInLink && (
          <Card className="hover:shadow-md transition-all hover:border-primary/20">
            <CardContent className="p-5">
              <Link
                href={linkedInLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 rounded-lg bg-[#0077B5]/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    Connect with me
                  </p>
                </div>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* GitHub Card */}
        {githubLink && (
          <Card className="hover:shadow-md transition-all hover:border-primary/20">
            <CardContent className="p-5">
              <Link
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    View my code
                  </p>
                </div>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Schedule Meeting Card */}
        {meetingLink && (
          <Card className="hover:shadow-md transition-all hover:border-primary/20">
            <CardContent className="p-5">
              <Link
                href={meetingLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Schedule</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    Book a meeting
                  </p>
                </div>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
