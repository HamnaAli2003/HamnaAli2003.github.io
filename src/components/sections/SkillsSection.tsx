import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * SkillsSection Component
 * Simple list of skills
 */
export default function SkillsSection() {
  const skillsList = personalInfo.skills.split(',').map(skill => skill.trim());

  return (
    <SplitSection title="Skills" id="skills" count={4}>
      <div className="text-center">
        <p className="text-body max-w-2xl mx-auto">
          {skillsList.join(' · ')}
        </p>
      </div>
    </SplitSection>
  );
}
