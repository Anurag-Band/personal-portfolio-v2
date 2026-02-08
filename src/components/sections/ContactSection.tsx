"use client";

import { Check, Copy, Mail, Linkedin, Github, Calendar, ArrowUpRight } from "lucide-react";
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
    <section className="space-y-8 pb-12">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="text-sm text-muted-foreground">
          Let's build something great together
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Email Card */}
        <Card className="card-hover">
          <CardContent className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold mt-0.5">{contactData.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(contactData.email)}
                className="h-10 w-10 rounded-lg"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* LinkedIn Card */}
        {linkedInLink && (
          <Card className="card-hover">
            <CardContent className="p-5">
              <Link
                href={linkedInLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">LinkedIn</p>
                    <p className="text-sm font-semibold mt-0.5 group-hover:opacity-70 transition-opacity">
                      Connect with me
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </CardContent>
          </Card>
        )}

        {/* GitHub Card */}
        {githubLink && (
          <Card className="card-hover">
            <CardContent className="p-5">
              <Link
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">GitHub</p>
                    <p className="text-sm font-semibold mt-0.5 group-hover:opacity-70 transition-opacity">
                      View my code
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Schedule Meeting Card */}
        {meetingLink && (
          <Card className="card-hover">
            <CardContent className="p-5">
              <Link
                href={meetingLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Schedule</p>
                    <p className="text-sm font-semibold mt-0.5 group-hover:opacity-70 transition-opacity">
                      Book a meeting
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
