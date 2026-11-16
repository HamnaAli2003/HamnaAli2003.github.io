import { experience } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { format } from "date-fns";

/**
 * WorkSection Component
 * Split timeline layout
 */
export default function WorkSection() {
  return (
    <SplitSection title="Experience" id="work" count={2}>
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-20">
          {experience.map((job) => {
            const startYear = format(new Date(job.startDate), "yyyy");
            const endYear = job.endDate ? format(new Date(job.endDate), "yyyy") : "Present";
            const dateLabel = job.duration ? `${format(new Date(job.startDate), "MMM yyyy")} - ${format(new Date(job.endDate!), "MMM yyyy")} · ${job.duration}` : `${startYear} - ${endYear}`;

            return (
              <div key={job.id} className="relative">
                {/* Center dot - organic blob shape */}
                <div
                  className="absolute left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] transform -translate-x-1/2 hidden md:block"
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                ></div>

                {/* Mobile: Stacked layout */}
                <div className="md:hidden space-y-3 text-center">
                  <p className="text-small text-[var(--color-primary)]">
                    {dateLabel}
                  </p>
                  <h3 className="text-large text-[var(--color-primary)]">
                    {job.role}
                  </h3>
                  <p className="text-body">{job.company}</p>
                  <p className="text-body max-w-xl mx-auto">
                    {job.description}
                  </p>
                </div>

                {/* Desktop: Split layout */}
                <div className="hidden md:grid grid-cols-2 gap-6">
                  {/* Left: Title, Role, Company */}
                  <div className="text-right pr-8">
                    <p className="text-small mb-2 text-[var(--color-primary)]">
                      {dateLabel}
                    </p>
                    <h3 className="text-large mb-1 text-[var(--color-primary)]">
                      {job.role}
                    </h3>
                    <p className="text-body">{job.company}</p>
                  </div>

                  {/* Right: Description */}
                  <div className="pl-8">
                    <p className="text-body max-w-md">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SplitSection>
  );
}
