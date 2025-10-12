import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-[300px_1fr]">
      {/* Left Sidebar - Hidden on mobile, fixed on desktop */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Top Navigation - Fixed */}
        <TopNav />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
