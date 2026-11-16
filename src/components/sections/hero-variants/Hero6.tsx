import { personalInfo } from "@/data/portfolio-data";

/**
 * Layout 6: Card Style
 */
export default function Hero6() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24 min-h-screen">
      <div className="w-full max-w-2xl">
        <div className="border-4 border-[var(--color-primary)] rounded-2xl shadow-2xl overflow-hidden bg-background">
          <div className="bg-[var(--color-primary)] h-24"></div>

          <div className="p-12 text-center">
            <div className="flex justify-center -mt-32 mb-8">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-64 h-80 object-cover rounded-lg shadow-xl border-4 border-background"
              />
            </div>

            <h1 className="text-6xl md:text-7xl font-light mb-4">{personalInfo.name}</h1>
            <p className="text-2xl font-light mb-2">{personalInfo.title}</p>
            <p className="text-lg text-muted-foreground">{currentYear}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
