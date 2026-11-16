import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * AboutSection Component
 * Centered about section
 */
export default function AboutSection() {
  // Take only the first paragraph for minimal design
  const firstParagraph = personalInfo.bio.split('\n\n')[0];

  return (
    <SplitSection title="About" id="about" count={1}>
      <div className="text-center">
        <p className="text-body max-w-2xl mx-auto">
          {firstParagraph}
        </p>
      </div>
    </SplitSection>
  );
}
