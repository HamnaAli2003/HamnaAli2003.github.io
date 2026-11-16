import { education } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function EducationSection() {
  return (
    <SplitSection title="Education" id="education" count={3}>
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-20">
          {education.map((edu) => (
            <div key={edu.id} className="relative">
              {/* Center dot - organic blob shape */}
              <div
                className="absolute left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] transform -translate-x-1/2 hidden md:block"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              ></div>

              {/* Mobile: Stacked layout */}
              <div className="md:hidden space-y-3 text-center">
                <p className="text-small text-[var(--color-primary)]">
                  {edu.startYear} - {edu.endYear}
                </p>
                <h3 className="text-large text-[var(--color-primary)]">
                  {edu.degree}
                </h3>
                <p className="text-body">{edu.institution}</p>
                {edu.details && (
                  <p className="text-body max-w-xl mx-auto">{edu.details}</p>
                )}
              </div>

              {/* Desktop: Split layout */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                {/* Left: Title, Degree, Institution */}
                <div className="text-right pr-8">
                  <p className="text-small mb-2 text-[var(--color-primary)]">
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <h3 className="text-large mb-1 text-[var(--color-primary)]">
                    {edu.degree}
                  </h3>
                  <p className="text-body">{edu.institution}</p>
                </div>

                {/* Right: Details */}
                <div className="pl-8">
                  {edu.details && (
                    <p className="text-body max-w-md">{edu.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}