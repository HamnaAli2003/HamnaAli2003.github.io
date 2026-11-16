import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll position and scrolled state
 * @param threshold - Pixel threshold to determine if page is scrolled (default: 50)
 * @returns Object containing scrollY position and isScrolled boolean
 */
export function useScrollPosition(threshold: number = 50) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollY, isScrolled };
}
