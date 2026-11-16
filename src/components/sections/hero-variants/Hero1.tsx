import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 1: Centered Hero with Purple Underline
 */
export default function Hero1() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:p-16 lg:p-24 py-12  bg-background">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[120px] mb-8 text-display leading-tight overflow-hidden">
          {personalInfo.name}
        </h1>

        <div className="flex justify-center mb-12">
          <div className="h-1 w-48 md:w-64 bg-[var(--color-primary)]"></div>
        </div>

        <div className="flex justify-center">
          <img
            id="hero-photo"
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-48 h-60 md:w-64 md:h-80 object-cover"
            style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          />
        </div>
      </div>
    </section>
  );
}
