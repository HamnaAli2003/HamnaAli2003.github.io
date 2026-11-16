import Layout from "@/components/Layout";
import Hero10 from "@/components/sections/hero-variants/Hero10";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero10Page() {
  return (
    <Layout>
      <Hero10 />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
        <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
