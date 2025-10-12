import { MainLayout } from "@/components/layout/MainLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-12 p-6 max-w-5xl animate-in fade-in duration-500">
        {/* Home/About Section */}
        <div id="home" className="scroll-mt-20">
          <AboutSection />
        </div>

        {/* Skills Section */}
        <div className="scroll-mt-20">
          <SkillsSection />
        </div>

        {/* Work Experience Section */}
        <div id="work" className="scroll-mt-20">
          <WorkSection />
        </div>

        {/* Projects Section */}
        <div id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
      </div>
    </MainLayout>
  );
}
