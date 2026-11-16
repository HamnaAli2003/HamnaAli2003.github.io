import Layout from "@/components/Layout";
import FixedNavbar from "@/components/FixedNavbar";
import HeroShape10 from "@/components/sections/hero-variants/HeroShape10";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Shape10Page() {
  return (
    <Layout>
      <FixedNavbar />
      <div className="pt-[44px]">
        <HeroShape10 />
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
