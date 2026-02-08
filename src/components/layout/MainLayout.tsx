import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Top Navigation - Full Width */}
      <TopNav />

      {/* Main Content with Max Width */}
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar - Hidden on mobile, fixed on desktop */}
          <aside className="hidden lg:block sticky top-16 self-start">
            <Sidebar />
          </aside>

          {/* Main Content Area */}
          <div className="flex flex-col">
            {/* Scrollable Content Area */}
            <main className="flex-1 overflow-x-hidden">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
