import Layout from "@/components/Layout";
import Hero6 from "@/components/sections/hero-variants/Hero6";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero6Page() {
  return (
    <Layout>
      <Hero6 />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
        <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
