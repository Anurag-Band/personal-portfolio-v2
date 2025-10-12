import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-24">
        {/* Sections will be added in Phase 4 */}
        <section id="home" className="min-h-[60vh] flex items-center">
          <div>
            <h1 className="text-4xl font-bold">Welcome</h1>
            <p className="text-muted-foreground mt-4">
              Layout components are ready! Sections coming next.
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
