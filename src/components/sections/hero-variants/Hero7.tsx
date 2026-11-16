import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 7: Minimal with Side Accent
 */
export default function Hero7() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-6xl flex gap-8">
        <div className="w-16 bg-[var(--color-primary)] flex-shrink-0"></div>

        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-7xl md:text-8xl font-light mb-4">{personalInfo.name}</h1>
          <p className="text-2xl font-light mb-12">{personalInfo.title}</p>

          <div className="flex items-end gap-12">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-72 h-96 object-cover rounded-lg shadow-xl"
            />
            <p className="text-4xl font-light text-muted-foreground pb-4">{currentYear}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
