import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 8: Stacked with Band
 */
export default function Hero8() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-7xl md:text-8xl font-light mb-16">{personalInfo.name}</h1>

        <div className="relative inline-block mb-12">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-80 h-96 object-cover rounded-lg shadow-xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-24 bg-[var(--color-primary)] opacity-90"></div>
        </div>

        <p className="text-2xl font-light mb-2">{personalInfo.title}</p>
        <p className="text-lg text-muted-foreground">{currentYear}</p>
      </div>
    </section>
  );
}
