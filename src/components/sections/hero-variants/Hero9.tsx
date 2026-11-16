import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 9: Asymmetric Blocks
 */
export default function Hero9() {
  const currentYear = new Date().getFullYear();
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-4 h-32 bg-[var(--color-primary)]"></div>
          <div className="col-span-8">
            <h1 className="text-7xl md:text-8xl font-light">{firstName}</h1>
          </div>

          <div className="col-span-6 flex justify-center">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-72 h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="col-span-6"></div>

          <div className="col-span-5"></div>
          <div className="col-span-4">
            <h1 className="text-7xl md:text-8xl font-light">{lastName}</h1>
          </div>
          <div className="col-span-3 h-24 bg-[var(--color-primary)]"></div>

          <div className="col-span-2">
            <p className="text-lg">{currentYear}</p>
          </div>
          <div className="col-span-6">
            <p className="text-2xl font-light">{personalInfo.title}</p>
          </div>
          <div className="col-span-4 h-16 bg-[var(--color-primary)]"></div>
        </div>
      </div>
    </section>
  );
}
