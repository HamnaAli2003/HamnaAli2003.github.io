import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function HeroVariants() {
  const variants = [
    { id: 1, name: "Centered Hero with Purple Underline", path: "/hero1" },
    { id: 2, name: "Split Background", path: "/hero2" },
    { id: 3, name: "Purple Frame", path: "/hero3" },
    { id: 4, name: "Offset Photo + Name", path: "/hero4" },
    { id: 5, name: "Diagonal Divide", path: "/hero5" },
    { id: 6, name: "Card Style", path: "/hero6" },
    { id: 7, name: "Minimal with Side Accent", path: "/hero7" },
    { id: 8, name: "Stacked with Band", path: "/hero8" },
    { id: 9, name: "Asymmetric Blocks", path: "/hero9" },
    { id: 10, name: "Wide Banner", path: "/hero10" },
  ];

  return (
    <Layout>
      <div className="min-h-screen px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-4">Hero Layout Variants</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore 10 different hero layouts using the brand color
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {variants.map((variant) => (
              <Link
                key={variant.id}
                to={variant.path}
                className="block p-8 border-2 border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-primary-foreground transition-all group"
              >
                <div className="text-4xl font-light mb-2">
                  {String(variant.id).padStart(2, '0')}
                </div>
                <div className="text-lg">{variant.name}</div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block px-8 py-3 border-2 border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-primary-foreground transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
