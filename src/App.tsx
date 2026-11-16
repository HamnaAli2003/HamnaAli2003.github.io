import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import StyleGuide from "./pages/StyleGuide";
import NotFound from "./pages/NotFound";
import HeroVariants from "./pages/HeroVariants";
import Hero1Page from "./pages/variants/Hero1Page";
import Hero2Page from "./pages/variants/Hero2Page";
import Hero3Page from "./pages/variants/Hero3Page";
import Hero4Page from "./pages/variants/Hero4Page";
import Hero5Page from "./pages/variants/Hero5Page";
import Hero6Page from "./pages/variants/Hero6Page";
import Hero7Page from "./pages/variants/Hero7Page";
import Hero8Page from "./pages/variants/Hero8Page";
import Hero9Page from "./pages/variants/Hero9Page";
import Hero10Page from "./pages/variants/Hero10Page";
import Shape1Page from "./pages/shapes/Shape1Page";
import Shape2Page from "./pages/shapes/Shape2Page";
import Shape3Page from "./pages/shapes/Shape3Page";
import Shape4Page from "./pages/shapes/Shape4Page";
import Shape5Page from "./pages/shapes/Shape5Page";
import Shape6Page from "./pages/shapes/Shape6Page";
import Shape7Page from "./pages/shapes/Shape7Page";
import Shape8Page from "./pages/shapes/Shape8Page";
import Shape9Page from "./pages/shapes/Shape9Page";
import Shape10Page from "./pages/shapes/Shape10Page";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Hero1Page />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/variants" element={<HeroVariants />} />
              <Route path="/hero1" element={<Hero1Page />} />
              <Route path="/hero2" element={<Hero2Page />} />
              <Route path="/hero3" element={<Hero3Page />} />
              <Route path="/hero4" element={<Hero4Page />} />
              <Route path="/hero5" element={<Hero5Page />} />
              <Route path="/hero6" element={<Hero6Page />} />
              <Route path="/hero7" element={<Hero7Page />} />
              <Route path="/hero8" element={<Hero8Page />} />
              <Route path="/hero9" element={<Hero9Page />} />
              <Route path="/hero10" element={<Hero10Page />} />
              <Route path="/shape1" element={<Shape1Page />} />
              <Route path="/shape2" element={<Shape2Page />} />
              <Route path="/shape3" element={<Shape3Page />} />
              <Route path="/shape4" element={<Shape4Page />} />
              <Route path="/shape5" element={<Shape5Page />} />
              <Route path="/shape6" element={<Shape6Page />} />
              <Route path="/shape7" element={<Shape7Page />} />
              <Route path="/shape8" element={<Shape8Page />} />
              <Route path="/shape9" element={<Shape9Page />} />
              <Route path="/shape10" element={<Shape10Page />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
