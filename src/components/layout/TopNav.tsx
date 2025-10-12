"use client";

import { Briefcase, FolderOpen, Home, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";
import { Sidebar } from "./Sidebar";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-screen-lg items-center justify-between px-4 lg:px-8">
          {/* Left - Username with border and light background */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link
              href="/"
              className="text-sm font-medium hover:opacity-80 border rounded-md px-3 py-1.5 bg-muted/50"
            >
              {profileData.username}
            </Link>
          </div>

          {/* Right - Navigation Links + Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2 bg-muted/50"
                  >
                    <Link href={link.href}>
                      <Icon className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </Button>
                );
              })}
            </div>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {mobileMenuOpen && (
          <div className="border-t md:hidden">
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    className="justify-start gap-2"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={link.href}>
                      <Icon className="h-4 w-4" />
                      {link.name}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
          }}
          aria-label="Close menu"
        >
          <div
            className="fixed left-0 top-0 h-full w-[280px] bg-background"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <Sidebar />
          </div>
        </button>
      )}
    </>
  );
}
