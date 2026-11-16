import { personalInfo } from "@/data/portfolio-data";

/**
 * HeaderSection Component
 * Layout 1: Centered Hero with Purple Underline
 */
export default function HeaderSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-7xl md:text-8xl font-light mb-6">{personalInfo.name}</h1>

        <div className="flex justify-center mb-12">
          <div className="h-1 w-64 bg-[var(--color-primary)]"></div>
        </div>

        <div className="flex justify-center mb-8">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-64 h-80 object-cover rounded-lg shadow-xl"
          />
        </div>

        <p className="text-2xl font-light mb-4">{personalInfo.title}</p>
        <p className="text-lg text-muted-foreground">{currentYear}</p>
      </div>
    </section>
  );
}
