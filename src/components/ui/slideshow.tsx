/**
 * Full-Screen Slideshow Component
 *
 * A beautiful full-screen image slideshow with smooth fade transitions,
 * navigation controls, and a slide counter. Perfect for hero sections,
 * portfolio displays, or image galleries.
 *
 * @component Component (default export)
 *
 * @example
 * import Component from "@/components/ui/slideshow";
 * <Component />
 *
 * @example
 * // Customize slides by editing the slides array in the component:
 * const slides = [
 *   {
 *     img: "/your-image.jpg",
 *     text: ["YOUR TITLE", "SUBTITLE"]
 *   }
 * ];
 *
 * @features
 * - Full-screen responsive layout
 * - Smooth fade transitions (1s duration)
 * - Left/Right arrow navigation with hover effects
 * - Backdrop blur on navigation buttons
 * - Slide counter (01 / 05 format)
 * - Dark overlay for better text contrast
 * - Mobile-responsive text sizing
 * - Circular navigation (loops back to start/end)
 * - Accessibility labels on buttons
 *
 * @styling
 * - Pure Tailwind CSS (no external CSS files needed)
 * - Responsive breakpoints: mobile (default), md (768px), lg (1024px)
 * - Dark background with image overlays
 * - Centered text with uppercase styling
 *
 * @dependencies
 * - React hooks (useState)
 * - Tailwind CSS utility classes
 * - cn utility for conditional classes
 *
 * @accessibility
 * - ARIA labels on navigation buttons
 * - Keyboard-friendly controls
 * - Screen reader compatible
 */

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1653548410459-5dffc2cef115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0ODE4NjN8&ixlib=rb-4.1.0&q=80&w=1080", // Photo by Tran Mau Tri Tam ✪ on Unsplash
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },
  {
    img: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0ODE4NjN8&ixlib=rb-4.1.0&q=80&w=1080", // Photo by Fahim Muntashir on Unsplash
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    img: "https://images.unsplash.com/photo-1624154670578-42532d763bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0ODE4NjR8&ixlib=rb-4.1.0&q=80&w=1080", // Photo by Luis Cortes on Unsplash
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  },
  {
    img: "https://images.unsplash.com/photo-1705787288167-9b21d55bf9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0ODE4NjR8&ixlib=rb-4.1.0&q=80&w=1080", // Photo by Wilmer Montoya on Unsplash
    text: ["TRUTH IN", "EMPTINESS"],
  },
  {
    img: "https://images.unsplash.com/photo-1622050756792-5b1180bbb873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0ODE4NjR8&ixlib=rb-4.1.0&q=80&w=1080", // Photo by Fahim Muntashir on Unsplash
    text: ["SURRENDER TO", "THE VOID"],
  },
];

export default function Component() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Slide text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="flex flex-col gap-2 text-center">
              {slide.text.map((t, j) => (
                <span
                  key={j}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 text-white text-4xl md:text-5xl hover:scale-110 transition-transform duration-200 bg-black/20 hover:bg-black/40 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 text-white text-4xl md:text-5xl hover:scale-110 transition-transform duration-200 bg-black/20 hover:bg-black/40 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Counter */}
      <div className="absolute bottom-8 right-8 z-30 text-white text-lg md:text-xl font-light tracking-widest">
        0{current + 1} / 0{slides.length}
      </div>
    </div>
  );
}
