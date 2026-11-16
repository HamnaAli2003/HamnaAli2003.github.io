import { personalInfo } from "@/data/portfolio-data";

/**
 * Shape 4: Diamond
 */
export default function HeroShape4() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen bg-background">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-light mb-8 leading-none">{personalInfo.name}</h1>

        <div className="flex justify-center mb-12">
          <div className="h-1 w-64 bg-[var(--color-primary)]"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="rotate-45 overflow-hidden w-56 h-56 shadow-xl">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover -rotate-45 scale-150"
            />
          </div>
        </div>

        <p className="text-2xl font-light mb-4">{personalInfo.title}</p>
        <p className="text-lg text-muted-foreground">{currentYear}</p>
      </div>
    </section>
  );
}
