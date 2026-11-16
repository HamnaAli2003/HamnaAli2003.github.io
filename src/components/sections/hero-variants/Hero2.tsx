import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 2: Split Background
 */
export default function Hero2() {
  const currentYear = new Date().getFullYear();
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-background"></div>
        <div className="w-1/2 bg-[var(--color-primary)]"></div>
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h1 className="text-8xl font-light">{firstName}</h1>
            <h1 className="text-8xl font-light">{lastName}</h1>
          </div>

          <div className="flex flex-col items-start text-primary-foreground">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-64 h-80 object-cover rounded-lg shadow-2xl mb-8"
            />
            <p className="text-2xl font-light mb-2">{personalInfo.title}</p>
            <p className="text-lg opacity-80">{currentYear}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
