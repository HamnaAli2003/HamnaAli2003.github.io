import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FullScreenSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * FullScreenSection Component
 * Creates a full-screen centered section with generous spacing
 */
export default function FullScreenSection({ 
  children, 
  className,
  id 
}: FullScreenSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center px-8 py-24",
        className
      )}
    >
      <div className="w-full max-w-3xl">
        {children}
      </div>
    </section>
  );
}
