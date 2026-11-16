import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 10: Wide Banner
 */
export default function Hero10() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-7xl">
        <div className="bg-[var(--color-primary)] text-primary-foreground p-12 rounded-2xl shadow-2xl mb-12">
          <div className="flex items-center gap-12">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-64 h-80 object-cover rounded-lg shadow-xl border-4 border-background"
            />

            <div className="flex-1">
              <h1 className="text-7xl md:text-8xl font-light mb-4">{personalInfo.name}</h1>
              <p className="text-2xl font-light opacity-90">{personalInfo.title}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-light text-muted-foreground">{currentYear}</p>
        </div>
      </div>
    </section>
  );
}
