import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 5: Diagonal Divide
 */
export default function Hero5() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background"></div>
      <div
        className="absolute inset-0 bg-[var(--color-primary)]"
        style={{
          clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
        }}
      ></div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-light mb-8">{personalInfo.name}</h1>

          <div className="flex justify-start mb-8">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-72 h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <p className="text-2xl font-light mb-2">{personalInfo.title}</p>
          <p className="text-lg text-muted-foreground">{currentYear}</p>
        </div>
      </div>
    </section>
  );
}
