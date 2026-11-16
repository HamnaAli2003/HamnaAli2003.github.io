import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 3: Purple Frame
 */
export default function Hero3() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-5xl">
        <div className="border-8 border-[var(--color-primary)] p-16">
          <div className="border-t-[3rem] border-[var(--color-primary)] -mx-16 -mt-16 mb-12"></div>

          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-light mb-12">{personalInfo.name}</h1>

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

          <div className="border-b-[3rem] border-[var(--color-primary)] -mx-16 -mb-16 mt-12"></div>
        </div>
      </div>
    </section>
  );
}
