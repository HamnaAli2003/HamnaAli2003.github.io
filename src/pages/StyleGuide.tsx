import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * StyleGuide Component
 * Minimal design system documentation matching the clean reference design
 */
export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 timeline-meta hover:opacity-70 transition-opacity mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="page-title mb-3">Design System</h1>
          <p className="body-text text-muted-foreground max-w-2xl">
            Ultra-minimal design system using system UI fonts with a clean grayscale palette. No decorative elements, just content.
          </p>
        </div>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="section-heading">Typography</h2>
          
          <div className="space-y-6">
            <div>
              <div className="page-title mb-1">Page Title</div>
              <p className="timeline-meta mb-3">20px / 25px line-height / ui-sans-serif</p>
              <p className="text-muted-foreground body-text">Used for main headings only (name, page titles)</p>
            </div>

            <div>
              <div className="timeline-title mb-1">All Other Text</div>
              <p className="timeline-meta mb-3">17px / 22px line-height / ui-sans-serif</p>
              <p className="text-muted-foreground body-text">Used for everything else - titles, body text, dates, labels, all content</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="section-heading">Color Palette</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-background border border-border"></div>
              <div>
                <div className="timeline-title">Background</div>
                <div className="timeline-meta">White • oklch(100% 0 0)</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-foreground"></div>
              <div>
                <div className="timeline-title">Foreground</div>
                <div className="timeline-meta">Dark gray • oklch(21% 0 0)</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-muted"></div>
              <div>
                <div className="timeline-title">Muted</div>
                <div className="timeline-meta">Medium gray • oklch(56% 0 0)</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-border"></div>
              <div>
                <div className="timeline-title">Border</div>
                <div className="timeline-meta">Light gray • oklch(90% 0 0)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Pattern */}
        <section className="mb-12">
          <h2 className="section-heading">Layout Pattern</h2>
          
          <div>
            <h3 className="timeline-title mb-3">Two-Column Grid</h3>
            <p className="body-text text-muted-foreground mb-4">
              100px date column + flexible content column, 48px gap. No decorative timeline elements.
            </p>
            
            <div className="border border-border p-6 bg-muted/5">
              <div className="grid grid-cols-[100px_1fr] gap-12">
                <div className="timeline-date">2020 — Now</div>
                <div className="space-y-1">
                  <div className="timeline-title">Position Title</div>
                  <div className="timeline-subtitle">Company or Organization</div>
                  <div className="timeline-meta">Location</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-12">
          <h2 className="section-heading">Spacing Scale</h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="w-20 timeline-meta">4px</div>
              <div className="h-1 bg-foreground" style={{ width: '4px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 timeline-meta">8px</div>
              <div className="h-1 bg-foreground" style={{ width: '8px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 timeline-meta">12px</div>
              <div className="h-1 bg-foreground" style={{ width: '12px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 timeline-meta">16px</div>
              <div className="h-1 bg-foreground" style={{ width: '16px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 timeline-meta">24px</div>
              <div className="h-1 bg-foreground" style={{ width: '24px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 timeline-meta">32px</div>
              <div className="h-1 bg-foreground" style={{ width: '32px' }}></div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="section-heading">Design Principles</h2>
          
          <div className="space-y-3 body-text">
            <p><strong>Two Font Sizes:</strong> Just 20px/25px for page titles and 17px/22px for everything else. Maximum simplicity.</p>
            <p><strong>Ultra-Minimal:</strong> Zero decorative elements. No dots, lines, shadows, borders, or backgrounds.</p>
            <p><strong>Typography-Only:</strong> Content hierarchy established through font weight and color only.</p>
            <p><strong>Whitespace:</strong> Generous spacing creates breathing room and visual clarity.</p>
            <p><strong>Grayscale:</strong> Monochromatic palette for maximum professionalism and readability.</p>
            <p><strong>Scannable:</strong> Clean grid layout makes information easy to find and read quickly.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
