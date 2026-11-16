import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
  count?: number;
}

/**
 * SplitSection Component
 * Centered section with title and blob counter above content
 */
export default function SplitSection({
  title,
  children,
  className,
  id,
  count = 1
}: SplitSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-8 md:px-16 lg:px-24 bg-background",
        className
      )}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="sticky top-[44px] bg-background z-20 text-center py-6 md:py-8">
          <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-[var(--color-primary)]"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              />
            ))}
          </div>
          <h2 className="text-section text-[var(--color-primary)]">{title}</h2>
        </div>
        <div className="py-6 md:py-8">
          {children}
        </div>
      </div>
    </section>
  );
}
