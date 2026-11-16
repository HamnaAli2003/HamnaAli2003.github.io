import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function ProjectsSection() {
  return (
    <SplitSection title="Projects" id="projects" count={2}>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.filter((p) => ["proj-1", "proj-2", "proj-3"].includes(p.id)).map((p) => (
          <div key={p.id} className="space-y-3">
            <h3 className="text-large text-[var(--color-primary)]">{p.name}</h3>
            <p className="text-body">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <span key={t} className="text-small border border-border px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
