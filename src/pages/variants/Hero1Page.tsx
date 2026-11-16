import Layout from "@/components/Layout";
import FixedNavbar from "@/components/FixedNavbar";
import Hero1 from "@/components/sections/hero-variants/Hero1";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero1Page() {
  return (
    <Layout>
      <FixedNavbar />
      <div className="pt-[44px]">
        <Hero1 />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </Layout>
  );
}
