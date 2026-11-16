import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 4: Offset Photo + Name
 */
export default function Hero4() {
  const currentYear = new Date().getFullYear();
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-6xl">
        <div className="text-right mb-12">
          <p className="text-lg text-muted-foreground">{currentYear}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-end">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-80 h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-48 bg-[var(--color-primary)] -z-10"></div>
            <h1 className="text-7xl md:text-8xl font-light mb-2">{firstName}</h1>
            <h1 className="text-7xl md:text-8xl font-light mb-6">{lastName}</h1>
            <div className="bg-[var(--color-primary)] text-primary-foreground px-8 py-4 inline-block">
              <p className="text-xl font-light">{personalInfo.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
