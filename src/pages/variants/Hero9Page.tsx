import Layout from "@/components/Layout";
import Hero9 from "@/components/sections/hero-variants/Hero9";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero9Page() {
  return (
    <Layout>
      <Hero9 />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
        <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
